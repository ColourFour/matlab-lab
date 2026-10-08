-- Initial classroom access controls. Requires standard Supabase schemas.
begin;
create schema if not exists classroom_private;
revoke all on schema classroom_private from public, anon, authenticated;
create table public.classrooms (
 id uuid primary key default gen_random_uuid(), name text not null check(length(name) between 1 and 120), created_at timestamptz not null default now()
);
create table public.memberships (
 classroom_id uuid not null references public.classrooms, user_id uuid not null references auth.users,
 display_name text not null check(length(display_name) between 1 and 100), role text not null check(role in ('student','teacher')),
 active boolean not null default true, primary key(classroom_id,user_id)
);
create index memberships_user_idx on public.memberships(user_id,classroom_id) where active;
create table classroom_private.class_codes (
 classroom_id uuid primary key references public.classrooms, code_hash text unique not null check(length(code_hash)=64)
);
create table classroom_private.identities (
 user_id uuid primary key references auth.users, auth_email text unique not null
);
create table classroom_private.revoked_sessions (user_id uuid primary key references auth.users, revoked_before timestamptz not null);
create table classroom_private.rate_limits (key text primary key, window_start timestamptz not null, attempts integer not null);
create table public.progress (
 classroom_id uuid not null, user_id uuid not null, lesson_id text not null default '',
 completed_count integer not null default 0 check(completed_count between 0 and 10000),
 version bigint not null default 0, updated_at timestamptz not null default now(),
 primary key(classroom_id,user_id), foreign key(classroom_id,user_id) references public.memberships
);
create table public.student_state (
 classroom_id uuid not null, user_id uuid not null, state jsonb not null default '{}' check(jsonb_typeof(state)='object' and octet_length(state::text)<=524288),
 primary key(classroom_id,user_id), foreign key(classroom_id,user_id) references public.memberships
);
create table public.engagement (
 classroom_id uuid not null, user_id uuid not null, active_seconds bigint not null default 0,
 last_seen_at timestamptz not null default now(), lesson_id text not null default '',
 primary key(classroom_id,user_id), foreign key(classroom_id,user_id) references public.memberships
);
create table classroom_private.activity_events (
 classroom_id uuid not null, user_id uuid not null, event_id uuid not null, created_at timestamptz not null default now(),
 primary key(classroom_id,user_id,event_id)
);
create table public.submissions (
 id uuid primary key default gen_random_uuid(), classroom_id uuid not null, user_id uuid not null,
 lesson_id text not null check(length(lesson_id) between 1 and 160), revision integer not null check(revision>0),
 object_path text unique not null, filename text not null check(length(filename) between 1 and 160),
 created_at timestamptz not null default now(), foreign key(classroom_id,user_id) references public.memberships,
 unique(classroom_id,user_id,lesson_id,revision)
);
create index submissions_class_idx on public.submissions(classroom_id,user_id,created_at desc);
create table public.comments (
 id uuid primary key default gen_random_uuid(), submission_id uuid not null references public.submissions,
 teacher_id uuid not null references auth.users, body text not null check(length(body) between 1 and 5000), created_at timestamptz not null default now()
);
create index comments_submission_idx on public.comments(submission_id);
-- Helpers intentionally bypass membership RLS to avoid recursion; only caller's live
-- membership is evaluated. No role claims or user-editable metadata are trusted.
create function classroom_private.is_member(c uuid, required_role text default null) returns boolean
language sql stable security definer set search_path='' as $$
 select auth.uid() is not null and exists(select 1 from public.memberships m where m.classroom_id=c and m.user_id=auth.uid() and m.active and (required_role is null or m.role=required_role))
 and exists(select 1 from auth.sessions s where s.id=(auth.jwt()->>'session_id')::uuid and s.user_id=auth.uid() and not exists(select 1 from classroom_private.revoked_sessions r where r.user_id=s.user_id and s.created_at<=r.revoked_before));
$$;
grant usage on schema classroom_private to authenticated;
grant execute on function classroom_private.is_member(uuid,text) to authenticated;
revoke execute on function classroom_private.is_member(uuid,text) from public,anon;
alter table public.classrooms enable row level security;
alter table public.memberships enable row level security;
alter table public.progress enable row level security;
alter table public.student_state enable row level security;
alter table public.engagement enable row level security;
alter table public.submissions enable row level security;
alter table public.comments enable row level security;
alter table classroom_private.class_codes enable row level security;
alter table classroom_private.identities enable row level security;
alter table classroom_private.revoked_sessions enable row level security;
alter table classroom_private.rate_limits enable row level security;
alter table classroom_private.activity_events enable row level security;
create policy classroom_read on public.classrooms for select to authenticated using(classroom_private.is_member(id));
create policy membership_read on public.memberships for select to authenticated using(classroom_private.is_member(classroom_id) and (user_id=auth.uid() or classroom_private.is_member(classroom_id,'teacher')));
create policy progress_read on public.progress for select to authenticated using(classroom_private.is_member(classroom_id) and (user_id=auth.uid() or classroom_private.is_member(classroom_id,'teacher')));
create policy state_read on public.student_state for select to authenticated using(user_id=auth.uid() and classroom_private.is_member(classroom_id,'student'));
create policy engagement_read on public.engagement for select to authenticated using(classroom_private.is_member(classroom_id) and (user_id=auth.uid() or classroom_private.is_member(classroom_id,'teacher')));
create policy submission_read on public.submissions for select to authenticated using(classroom_private.is_member(classroom_id) and (user_id=auth.uid() or classroom_private.is_member(classroom_id,'teacher')));
create policy comment_read on public.comments for select to authenticated using(exists(select 1 from public.submissions s where s.id=submission_id));
revoke all on public.classrooms, public.memberships, public.progress, public.student_state, public.engagement, public.submissions, public.comments from anon,authenticated;
grant select on public.classrooms, public.memberships, public.progress, public.student_state, public.engagement, public.submissions, public.comments to authenticated;
grant all on public.classrooms, public.memberships, public.progress, public.student_state, public.engagement, public.submissions, public.comments to service_role;
-- Privileged implementations stay in the non-exposed schema. Public RPCs below
-- are invoker-only wrappers with the same names/parameters and explicit grants.
create function classroom_private.classroom_rate_limit(p_key text,p_limit integer,p_window integer) returns boolean
language plpgsql security definer set search_path='' as $$
declare n integer; begin
 insert into classroom_private.rate_limits as r values(p_key,clock_timestamp(),1)
 on conflict(key) do update set attempts=case when r.window_start<clock_timestamp()-make_interval(secs=>p_window) then 1 else r.attempts+1 end,
 window_start=case when r.window_start<clock_timestamp()-make_interval(secs=>p_window) then clock_timestamp() else r.window_start end returning attempts into n;
 return n<=p_limit;
end $$;
create function classroom_private.classroom_resolve(p_hash text) returns jsonb language sql security definer set search_path='' as $$
 select jsonb_build_object('classroom',jsonb_build_object('id',c.id,'name',c.name),'students',coalesce((select jsonb_agg(jsonb_build_object('id',m.user_id,'display_name',m.display_name) order by m.display_name) from public.memberships m where m.classroom_id=c.id and m.active and m.role='student'),'[]'::jsonb)) from public.classrooms c join classroom_private.class_codes k on k.classroom_id=c.id where k.code_hash=p_hash;
$$;
create function classroom_private.classroom_identity(p_classroom uuid,p_user uuid) returns text language sql security definer set search_path='' as $$
 select i.auth_email from classroom_private.identities i join public.memberships m on m.user_id=i.user_id where m.classroom_id=p_classroom and m.user_id=p_user and m.active and m.role='student';
$$;
create function classroom_private.classroom_revoke_sessions(p_user uuid) returns void language sql security definer set search_path='' as $$
 insert into classroom_private.revoked_sessions(user_id,revoked_before) values(p_user,clock_timestamp()) on conflict(user_id) do update set revoked_before=excluded.revoked_before;
$$;
-- Progress and activity accept no user id. Caller identity always comes from Auth.
create function classroom_private.save_classroom_progress(p_classroom uuid,p_lesson text,p_state jsonb,p_completed integer,p_expected bigint) returns bigint
language plpgsql security definer set search_path='' as $$
declare v bigint; begin
 if not classroom_private.is_member(p_classroom,'student') then raise exception 'forbidden' using errcode='42501'; end if;
 if not classroom_private.classroom_rate_limit('progress:'||auth.uid()::text,120,60) then raise exception 'rate limited'; end if;
 if length(p_lesson)>160 or p_expected<0 then raise exception 'invalid'; end if;
 insert into public.progress(classroom_id,user_id) values(p_classroom,auth.uid()) on conflict do nothing;
 update public.progress set lesson_id=p_lesson,completed_count=p_completed,version=version+1,updated_at=clock_timestamp()
 where classroom_id=p_classroom and user_id=auth.uid() and version=p_expected returning version into v;
 if v is null then raise exception 'version conflict' using errcode='40001'; end if;
 insert into public.student_state(classroom_id,user_id,state) values(p_classroom,auth.uid(),p_state) on conflict(classroom_id,user_id) do update set state=excluded.state;
 return v;
end $$;
create function classroom_private.load_classroom_progress(p_classroom uuid) returns jsonb
language plpgsql stable security definer set search_path='' as $$
begin
 if not classroom_private.is_member(p_classroom,'student') then raise exception 'forbidden' using errcode='42501'; end if;
 return (select to_jsonb(p)||jsonb_build_object('state',coalesce(s.state,'{}'::jsonb)) from public.progress p left join public.student_state s using(classroom_id,user_id) where p.classroom_id=p_classroom and p.user_id=auth.uid());
end $$;
create function classroom_private.record_classroom_activity(p_classroom uuid,p_event uuid,p_seconds integer,p_lesson text) returns bigint
language plpgsql security definer set search_path='' as $$
declare prior timestamptz; total bigint; credited integer; begin
 if not classroom_private.is_member(p_classroom,'student') then raise exception 'forbidden' using errcode='42501'; end if;
 if p_seconds is null or p_seconds not between 0 and 30 or p_lesson is null or p_event is null or length(p_lesson)>160 then raise exception 'invalid'; end if;
 insert into public.engagement(classroom_id,user_id) values(p_classroom,auth.uid()) on conflict do nothing;
 select last_seen_at,active_seconds into prior,total from public.engagement where classroom_id=p_classroom and user_id=auth.uid() for update;
 if exists(select 1 from classroom_private.activity_events where classroom_id=p_classroom and user_id=auth.uid() and event_id=p_event) then return total; end if;
 if not classroom_private.classroom_rate_limit('activity:'||auth.uid()::text,12,60) then raise exception 'rate limited'; end if;
 insert into classroom_private.activity_events(classroom_id,user_id,event_id) values(p_classroom,auth.uid(),p_event) on conflict do nothing;
 if not found then return total; end if;
 credited:=least(p_seconds,30,greatest(0,floor(extract(epoch from clock_timestamp()-prior))::integer));
 update public.engagement set active_seconds=active_seconds+credited,last_seen_at=clock_timestamp(),lesson_id=p_lesson where classroom_id=p_classroom and user_id=auth.uid() returning active_seconds into total;
 return total;
end $$;
-- Only Edge service can append validated upload rows. No direct student writes.
create function classroom_private.append_classroom_submission(p_classroom uuid,p_user uuid,p_lesson text,p_path text,p_filename text) returns public.submissions
language plpgsql security definer set search_path='' as $$
declare result public.submissions; next_revision integer; begin
 perform 1 from public.memberships where classroom_id=p_classroom and user_id=p_user and active and role='student' for update;
 if not found then raise exception 'forbidden'; end if;
 select coalesce(max(revision),0)+1 into next_revision from public.submissions where classroom_id=p_classroom and user_id=p_user and lesson_id=p_lesson;
 insert into public.submissions(classroom_id,user_id,lesson_id,revision,object_path,filename) values(p_classroom,p_user,p_lesson,next_revision,p_path,p_filename) returning * into result;
 return result;
end $$;
-- No exposed function runs with owner privileges. RLS/ownership checks remain
-- inside the private implementations, and caller identity still comes from Auth.
create function public.classroom_rate_limit(p_key text,p_limit integer,p_window integer) returns boolean
language sql security invoker set search_path='' as $$ select classroom_private.classroom_rate_limit(p_key,p_limit,p_window); $$;
create function public.classroom_resolve(p_hash text) returns jsonb
language sql security invoker set search_path='' as $$ select classroom_private.classroom_resolve(p_hash); $$;
create function public.classroom_identity(p_classroom uuid,p_user uuid) returns text
language sql security invoker set search_path='' as $$ select classroom_private.classroom_identity(p_classroom,p_user); $$;
create function public.classroom_revoke_sessions(p_user uuid) returns void
language sql security invoker set search_path='' as $$ select classroom_private.classroom_revoke_sessions(p_user); $$;
create function public.save_classroom_progress(p_classroom uuid,p_lesson text,p_state jsonb,p_completed integer,p_expected bigint) returns bigint
language sql security invoker set search_path='' as $$ select classroom_private.save_classroom_progress(p_classroom,p_lesson,p_state,p_completed,p_expected); $$;
create function public.load_classroom_progress(p_classroom uuid) returns jsonb
language sql security invoker set search_path='' as $$ select classroom_private.load_classroom_progress(p_classroom); $$;
create function public.record_classroom_activity(p_classroom uuid,p_event uuid,p_seconds integer,p_lesson text) returns bigint
language sql security invoker set search_path='' as $$ select classroom_private.record_classroom_activity(p_classroom,p_event,p_seconds,p_lesson); $$;
create function public.append_classroom_submission(p_classroom uuid,p_user uuid,p_lesson text,p_path text,p_filename text) returns public.submissions
language sql security invoker set search_path='' as $$ select classroom_private.append_classroom_submission(p_classroom,p_user,p_lesson,p_path,p_filename); $$;
grant usage on schema classroom_private to service_role;
revoke execute on function public.classroom_rate_limit(text,integer,integer),classroom_private.classroom_rate_limit(text,integer,integer),public.classroom_resolve(text),classroom_private.classroom_resolve(text),public.classroom_identity(uuid,uuid),classroom_private.classroom_identity(uuid,uuid),public.classroom_revoke_sessions(uuid),classroom_private.classroom_revoke_sessions(uuid),public.append_classroom_submission(uuid,uuid,text,text,text),classroom_private.append_classroom_submission(uuid,uuid,text,text,text) from public,anon,authenticated;
grant execute on function public.classroom_rate_limit(text,integer,integer),classroom_private.classroom_rate_limit(text,integer,integer),public.classroom_resolve(text),classroom_private.classroom_resolve(text),public.classroom_identity(uuid,uuid),classroom_private.classroom_identity(uuid,uuid),public.classroom_revoke_sessions(uuid),classroom_private.classroom_revoke_sessions(uuid),public.append_classroom_submission(uuid,uuid,text,text,text),classroom_private.append_classroom_submission(uuid,uuid,text,text,text) to service_role;
revoke execute on function public.save_classroom_progress(uuid,text,jsonb,integer,bigint),classroom_private.save_classroom_progress(uuid,text,jsonb,integer,bigint),public.load_classroom_progress(uuid),classroom_private.load_classroom_progress(uuid),public.record_classroom_activity(uuid,uuid,integer,text),classroom_private.record_classroom_activity(uuid,uuid,integer,text) from public,anon;
grant execute on function public.save_classroom_progress(uuid,text,jsonb,integer,bigint),classroom_private.save_classroom_progress(uuid,text,jsonb,integer,bigint),public.load_classroom_progress(uuid),classroom_private.load_classroom_progress(uuid),public.record_classroom_activity(uuid,uuid,integer,text),classroom_private.record_classroom_activity(uuid,uuid,integer,text) to authenticated;
insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types) values('classroom-submissions','classroom-submissions',false,5242880,array['text/plain','application/pdf','image/png','image/jpeg','application/octet-stream']) on conflict(id) do nothing;
-- No client INSERT/UPDATE/DELETE policy: service validates uploads, immutable UUID paths.
-- Downloads use an authenticated Edge request, recheck live RLS, then 60-second URL.
-- Deliberately no client SELECT: otherwise clients could mint long-lived signed URLs.
commit;

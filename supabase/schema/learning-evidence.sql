-- A projection deliberately excludes private notebook drafts and unrelated state.
create table public.learning_snapshots (
 classroom_id uuid not null, user_id uuid not null, learning jsonb not null,
 version bigint not null, saved_at timestamptz not null,
 primary key(classroom_id,user_id), foreign key(classroom_id,user_id) references public.memberships
);
alter table public.learning_snapshots enable row level security;
create policy learning_read on public.learning_snapshots for select to authenticated using
 (classroom_private.is_member(classroom_id) and (user_id=(select auth.uid()) or classroom_private.is_member(classroom_id,'teacher')));
revoke all on public.learning_snapshots from public,anon,authenticated;
grant select on public.learning_snapshots to authenticated;
grant all on public.learning_snapshots to service_role;
create function classroom_private.learning_projection(s jsonb) returns jsonb
language plpgsql immutable set search_path='' as $$
declare lessons jsonb='{}'; completed jsonb='{}'; k text; v jsonb; a jsonb; passes jsonb; begin
 for k,v in select * from jsonb_each(case when jsonb_typeof(s#>'{guide,lessons}')='object' then s#>'{guide,lessons}' else '{}' end) loop
  select coalesce(jsonb_object_agg(key,left(value#>>'{}',250)),'{}') into a from jsonb_each(case when jsonb_typeof(v->'answers')='object' then v->'answers' else '{}' end) where jsonb_typeof(value)='string';
  select coalesce(jsonb_agg(value),'[]') into passes from jsonb_array_elements(case when jsonb_typeof(v->'solved')='array' then v->'solved' else '[]' end) where jsonb_typeof(value)='string';
  lessons=lessons||jsonb_build_object(left(k,160),jsonb_build_object('answers',a,'solved',passes,'cursorId',left(v->>'cursorId',160),'reachedId',left(v->>'reachedId',160)));
 end loop;
 for k,v in select * from jsonb_each(case when jsonb_typeof(s#>'{app,progress}')='object' then s#>'{app,progress}' else '{}' end) loop
  select coalesce(jsonb_agg(value),'[]') into passes from jsonb_array_elements(case when jsonb_typeof(v->'completed')='array' then v->'completed' else '[]' end) where jsonb_typeof(value)='string';
  completed=completed||jsonb_build_object(left(k,160),passes);
 end loop;
 return jsonb_build_object('active',left(s#>>'{guide,active}',160),'lessons',lessons,'completed',completed);
end $$;
revoke all on function classroom_private.learning_projection(jsonb) from public,anon,authenticated;
create function classroom_private.project_learning_save() returns trigger
language plpgsql security definer set search_path='' as $$
begin
 insert into public.learning_snapshots(classroom_id,user_id,learning,version,saved_at)
 select new.classroom_id,new.user_id,classroom_private.learning_projection(new.state),p.version,p.updated_at from public.progress p where p.classroom_id=new.classroom_id and p.user_id=new.user_id
 on conflict(classroom_id,user_id) do update set learning=excluded.learning,version=excluded.version,saved_at=excluded.saved_at;
 return new;
end $$;
revoke all on function classroom_private.project_learning_save() from public,anon,authenticated;
create trigger learning_saved after insert or update on public.student_state for each row execute function classroom_private.project_learning_save();
-- Existing cloud snapshots gain the same restricted projection; no historical events are invented.
insert into public.learning_snapshots select s.classroom_id,s.user_id,classroom_private.learning_projection(s.state),p.version,p.updated_at from public.student_state s join public.progress p using(classroom_id,user_id);

create table public.project6_submissions (
 submission_id uuid primary key references public.submissions,
 classroom_id uuid not null, user_id uuid not null, request_id uuid not null,
 progress_version bigint not null, rubric_version text not null check(rubric_version='project6-20-v1'),
 notes jsonb not null, learning jsonb not null, checksum text not null check(checksum ~ '^[a-f0-9]{64}$'),
 acknowledged_at timestamptz not null default now(),
 unique(classroom_id,user_id,request_id), foreign key(classroom_id,user_id) references public.memberships
);
alter table public.project6_submissions enable row level security;
create policy final_read on public.project6_submissions for select to authenticated using
 (classroom_private.is_member(classroom_id) and (user_id=(select auth.uid()) or classroom_private.is_member(classroom_id,'teacher')));
revoke all on public.project6_submissions from public,anon,authenticated;
grant select on public.project6_submissions to authenticated;
grant all on public.project6_submissions to service_role;
-- Service-only: the Edge function verifies the live student session and validates the upload.
create function classroom_private.finalize_classroom_project(p_classroom uuid,p_user uuid,p_path text,p_filename text,p_expected bigint,p_request uuid,p_checksum text) returns public.submissions
language plpgsql security definer set search_path='' as $$
declare result public.submissions; previous public.project6_submissions; snapshot jsonb; current_version bigint; begin
 perform 1 from public.memberships where classroom_id=p_classroom and user_id=p_user and active and role='student' for update;
 if not found then raise exception 'forbidden' using errcode='42501'; end if;
 select * into previous from public.project6_submissions where classroom_id=p_classroom and user_id=p_user and request_id=p_request;
 if found then
  select * into result from public.submissions where id=previous.submission_id;
  if previous.progress_version<>p_expected or previous.checksum<>p_checksum or result.filename<>p_filename then raise exception 'submission request changed' using errcode='PT409'; end if;
  return result;
 end if;
 if p_path not like p_classroom::text||'/'||p_user::text||'/%' then raise exception 'invalid path'; end if;
 select version into current_version from public.progress where classroom_id=p_classroom and user_id=p_user for update;
 if current_version is distinct from p_expected then raise exception 'version conflict' using errcode='PT409'; end if;
 select state into snapshot from public.student_state where classroom_id=p_classroom and user_id=p_user;
 if jsonb_typeof(snapshot#>'{notebook,notes}') is distinct from 'object' or not exists
 (select 1 from jsonb_each(snapshot#>'{notebook,notes}') stage cross join lateral jsonb_each(case when jsonb_typeof(stage.value)='object' then stage.value else '{}' end) note where jsonb_typeof(note.value)='string' and length(trim(note.value#>>'{}'))>0) then raise exception 'Add your Project 6 notes before submitting.' using errcode='PT400'; end if;
 result=classroom_private.append_classroom_submission(p_classroom,p_user,'investigation:final',p_path,p_filename);
 insert into public.project6_submissions(submission_id,classroom_id,user_id,request_id,progress_version,rubric_version,notes,learning,checksum)
 values(result.id,p_classroom,p_user,p_request,p_expected,'project6-20-v1',jsonb_build_object('version',1,'notes',snapshot#>'{notebook,notes}','conflicts',coalesce(snapshot#>'{notebook,conflicts}','{}')),classroom_private.learning_projection(snapshot),p_checksum);
 return result;
end $$;
create function public.finalize_classroom_project(p_classroom uuid,p_user uuid,p_path text,p_filename text,p_expected bigint,p_request uuid,p_checksum text) returns public.submissions
language sql security invoker set search_path='' as $$ select classroom_private.finalize_classroom_project(p_classroom,p_user,p_path,p_filename,p_expected,p_request,p_checksum); $$;
revoke all on function public.finalize_classroom_project(uuid,uuid,text,text,bigint,uuid,text),classroom_private.finalize_classroom_project(uuid,uuid,text,text,bigint,uuid,text) from public,anon,authenticated;
grant execute on function public.finalize_classroom_project(uuid,uuid,text,text,bigint,uuid,text),classroom_private.finalize_classroom_project(uuid,uuid,text,text,bigint,uuid,text) to service_role;
-- ZIPs are stored privately and downloaded only; the server never extracts or executes them.
update storage.buckets set allowed_mime_types=array_append(allowed_mime_types,'application/zip') where id='classroom-submissions' and not ('application/zip'=any(allowed_mime_types));

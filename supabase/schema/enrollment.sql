-- Apply after classroom.sql. Enrollment is class-scoped and Edge-service only.
begin;
alter table classroom_private.class_codes add column signup_enabled boolean not null default false;
alter table classroom_private.class_codes add column max_students integer not null default 200 check(max_students between 1 and 500);
create table classroom_private.student_logins (
 classroom_id uuid not null references public.classrooms,
 username text not null check(username ~ '^[a-z0-9_]{3,24}$'),
 user_id uuid unique not null references auth.users,
 primary key(classroom_id,username)
);
create table classroom_private.teacher_invites (
 code_hash text primary key check(length(code_hash)=64), classroom_id uuid not null references public.classrooms,
 expires_at timestamptz not null, used_by uuid references auth.users
);
alter table classroom_private.student_logins enable row level security;
alter table classroom_private.teacher_invites enable row level security;
revoke all on classroom_private.student_logins,classroom_private.teacher_invites from public,anon,authenticated;
create function classroom_private.classroom_signup_info(p_hash text) returns jsonb
language sql security definer set search_path='' as $$
 select jsonb_build_object('id',c.id,'name',c.name) from public.classrooms c join classroom_private.class_codes k on k.classroom_id=c.id where k.code_hash=p_hash and k.signup_enabled;
$$;
create function classroom_private.classroom_username(p_hash text,p_username text) returns text
language sql security definer set search_path='' as $$
 select i.auth_email from classroom_private.class_codes k join classroom_private.student_logins s using(classroom_id) join classroom_private.identities i using(user_id) join public.memberships m using(classroom_id,user_id) where k.code_hash=p_hash and s.username=p_username and m.active and m.role='student';
$$;
create function classroom_private.enroll_classroom_student(p_hash text,p_user uuid,p_email text,p_name text,p_username text) returns uuid
language plpgsql security definer set search_path='' as $$
declare c uuid; capacity integer; begin
 select classroom_id,max_students into c,capacity from classroom_private.class_codes where code_hash=p_hash and signup_enabled for update;
 if c is null then raise exception 'Registration is closed.'; end if;
 if (select count(*) from public.memberships where classroom_id=c and role='student')>=capacity then raise exception 'Class is full.'; end if;
 if p_name is null or length(p_name) not between 1 and 100 or p_username is null or p_username !~ '^[a-z0-9_]{3,24}$' then raise exception 'Invalid name.'; end if;
 -- Never updates or claims an existing account, even if names match.
 insert into classroom_private.student_logins values(c,p_username,p_user);
 insert into classroom_private.identities values(p_user,p_email);
 insert into public.memberships(classroom_id,user_id,display_name,role) values(c,p_user,p_name,'student');
 return c;
end $$;
create function classroom_private.classroom_teacher_invite(p_hash text) returns jsonb
language sql security definer set search_path='' as $$
 select jsonb_build_object('id',c.id,'name',c.name) from classroom_private.teacher_invites i join public.classrooms c on c.id=i.classroom_id where i.code_hash=p_hash and i.used_by is null and i.expires_at>clock_timestamp();
$$;
create function classroom_private.enroll_classroom_teacher(p_hash text,p_user uuid,p_email text,p_name text) returns uuid
language plpgsql security definer set search_path='' as $$
declare c uuid; begin
 select classroom_id into c from classroom_private.teacher_invites where code_hash=p_hash and used_by is null and expires_at>clock_timestamp() for update;
 if c is null then raise exception 'Teacher invitation unavailable.'; end if;
 insert into classroom_private.identities values(p_user,p_email);
 insert into public.memberships(classroom_id,user_id,display_name,role) values(c,p_user,p_name,'teacher');
 update classroom_private.teacher_invites set used_by=p_user where code_hash=p_hash;
 return c;
end $$;
create function classroom_private.configure_classroom_signup(p_classroom uuid,p_hash text,p_enabled boolean) returns void
language plpgsql security definer set search_path='' as $$
begin
 if not classroom_private.is_member(p_classroom,'teacher') then raise exception 'forbidden' using errcode='42501'; end if;
 if p_hash is not null and length(p_hash)<>64 then raise exception 'invalid'; end if;
 if p_hash is null then
  update classroom_private.class_codes set signup_enabled=p_enabled where classroom_id=p_classroom;
 else
  insert into classroom_private.class_codes(classroom_id,code_hash,signup_enabled) values(p_classroom,p_hash,p_enabled)
  on conflict(classroom_id) do update set code_hash=excluded.code_hash,signup_enabled=excluded.signup_enabled;
 end if;
end $$;
create function public.classroom_signup_info(p_hash text) returns jsonb language sql security invoker set search_path='' as $$ select classroom_private.classroom_signup_info(p_hash); $$;
create function public.classroom_username(p_hash text,p_username text) returns text language sql security invoker set search_path='' as $$ select classroom_private.classroom_username(p_hash,p_username); $$;
create function public.enroll_classroom_student(p_hash text,p_user uuid,p_email text,p_name text,p_username text) returns uuid language sql security invoker set search_path='' as $$ select classroom_private.enroll_classroom_student(p_hash,p_user,p_email,p_name,p_username); $$;
create function public.classroom_teacher_invite(p_hash text) returns jsonb language sql security invoker set search_path='' as $$ select classroom_private.classroom_teacher_invite(p_hash); $$;
create function public.enroll_classroom_teacher(p_hash text,p_user uuid,p_email text,p_name text) returns uuid language sql security invoker set search_path='' as $$ select classroom_private.enroll_classroom_teacher(p_hash,p_user,p_email,p_name); $$;
create function public.configure_classroom_signup(p_classroom uuid,p_hash text,p_enabled boolean) returns void language sql security invoker set search_path='' as $$ select classroom_private.configure_classroom_signup(p_classroom,p_hash,p_enabled); $$;
revoke execute on function public.classroom_signup_info(text),classroom_private.classroom_signup_info(text),public.classroom_username(text,text),classroom_private.classroom_username(text,text),public.enroll_classroom_student(text,uuid,text,text,text),classroom_private.enroll_classroom_student(text,uuid,text,text,text),public.classroom_teacher_invite(text),classroom_private.classroom_teacher_invite(text),public.enroll_classroom_teacher(text,uuid,text,text),classroom_private.enroll_classroom_teacher(text,uuid,text,text) from public,anon,authenticated;
grant execute on function public.classroom_signup_info(text),classroom_private.classroom_signup_info(text),public.classroom_username(text,text),classroom_private.classroom_username(text,text),public.enroll_classroom_student(text,uuid,text,text,text),classroom_private.enroll_classroom_student(text,uuid,text,text,text),public.classroom_teacher_invite(text),classroom_private.classroom_teacher_invite(text),public.enroll_classroom_teacher(text,uuid,text,text),classroom_private.enroll_classroom_teacher(text,uuid,text,text) to service_role;
revoke execute on function public.configure_classroom_signup(uuid,text,boolean),classroom_private.configure_classroom_signup(uuid,text,boolean) from public,anon;
grant execute on function public.configure_classroom_signup(uuid,text,boolean),classroom_private.configure_classroom_signup(uuid,text,boolean) to authenticated;
commit;

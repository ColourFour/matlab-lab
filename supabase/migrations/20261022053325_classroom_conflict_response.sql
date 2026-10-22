-- A version mismatch is an application conflict, not a transient serialization failure.
-- PT409 prevents PostgREST 14 from indefinitely retrying a stale save.
create or replace function classroom_private.save_classroom_progress(p_classroom uuid,p_lesson text,p_state jsonb,p_completed integer,p_expected bigint) returns bigint
language plpgsql security definer set search_path='' as $$
declare v bigint; begin
 if not classroom_private.is_member(p_classroom,'student') then raise exception 'forbidden' using errcode='42501'; end if;
 if not classroom_private.classroom_rate_limit('progress:'||auth.uid()::text,120,60) then raise exception 'rate limited'; end if;
 if length(p_lesson)>160 or p_expected<0 then raise exception 'invalid'; end if;
 insert into public.progress(classroom_id,user_id) values(p_classroom,auth.uid()) on conflict do nothing;
 update public.progress set lesson_id=p_lesson,completed_count=p_completed,version=version+1,updated_at=clock_timestamp()
 where classroom_id=p_classroom and user_id=auth.uid() and version=p_expected returning version into v;
 if v is null then raise exception 'version conflict' using errcode='PT409'; end if;
 insert into public.student_state(classroom_id,user_id,state) values(p_classroom,auth.uid(),p_state) on conflict(classroom_id,user_id) do update set state=excluded.state;
 return v;
end $$;

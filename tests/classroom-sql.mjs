import {fileURLToPath} from 'node:url';
process.chdir(fileURLToPath(new URL('../',import.meta.url)));
// Execute actual PostgreSQL semantics locally using PGlite with minimal Auth/Storage stubs.
// This is NOT a substitute for testing the deployed Supabase services.
import fs from 'node:fs';import assert from 'node:assert/strict';
const {PGlite}=await import(process.env.PGLITE_MODULE||'./runtime/node_modules/@electric-sql/pglite/dist/index.js');const db=new PGlite();
await db.exec(`create role anon;create role authenticated;create role service_role bypassrls;create schema auth;create schema storage;
create table auth.users(id uuid primary key);create table auth.sessions(id uuid primary key,user_id uuid references auth.users,created_at timestamptz default now());
create function auth.uid() returns uuid language sql stable as $$ select nullif(current_setting('request.jwt.claims',true),'')::jsonb->>'sub' $$;
` .replace("select nullif(current_setting('request.jwt.claims',true),'')::jsonb->>'sub'","select (nullif(current_setting('request.jwt.claims',true),'')::jsonb->>'sub')::uuid"));
await db.exec(`create function auth.jwt() returns jsonb language sql stable as $$ select nullif(current_setting('request.jwt.claims',true),'')::jsonb $$;
grant usage on schema auth to public;grant execute on all functions in schema auth to public;
create table storage.buckets(id text primary key,name text,public boolean,file_size_limit bigint,allowed_mime_types text[]);`);
try{await db.exec(fs.readFileSync('supabase/schema/classroom.sql','utf8'));}catch(e){console.error('SQL schema failed:',e.message);process.exit(1);}
const c1='10000000-0000-0000-0000-000000000001',c2='10000000-0000-0000-0000-000000000002';
const a='20000000-0000-0000-0000-000000000001',b='20000000-0000-0000-0000-000000000002',t='20000000-0000-0000-0000-000000000003',x='20000000-0000-0000-0000-000000000004';
const session=u=>u.replace('20000000','30000000');for(const u of [a,b,t,x])await db.exec(`insert into auth.users values('${u}');insert into auth.sessions(id,user_id) values('${session(u)}','${u}');`);
await db.exec(`insert into public.classrooms(id,name) values('${c1}','Class 1'),('${c2}','Class 2');insert into public.memberships values('${c1}','${a}','A','student',true),('${c1}','${b}','B','student',true),('${c1}','${t}','Teacher','teacher',true),('${c2}','${x}','Other class','student',true);`);
async function as(u){await db.exec('reset role');await db.query(`select set_config('request.jwt.claims',$1,false)`,[JSON.stringify({sub:u,session_id:session(u)})]);await db.exec('set role authenticated');}
async function count(table){return (await db.query('select count(*)::int n from public.'+table)).rows[0].n;}
await as(a);assert.equal(await count('memberships'),1);assert.equal(await count('classrooms'),1);
let saved=await db.query(`select public.save_classroom_progress($1,'bootcamp:first-command','{"notebook":{"private":true}}',1,0) v`,[c1]);assert.equal(Number(saved.rows[0].v),1);
await assert.rejects(db.query(`select public.save_classroom_progress($1,'overwrite','{}',0,0)`,[c1]));
await assert.rejects(db.query(`select public.save_classroom_progress($1,'intrude','{}',0,0)`,[c2]));
await assert.rejects(db.query(`update public.memberships set role='teacher'`));
const snapshot={app:{version:2,lang:'zh',progress:{bootcamp:{version:1,completed:['first-command']}}},guide:{version:2,active:'image-compression:compression-challenge',lessons:{'image-compression:compression-challenge':{cursorId:'11',reachedId:'draw-transfer',answers:{'transfer-v2':'1.7094e+3'},solved:['transfer-v2']}}},notebook:{version:1,notes:{'define-problem':{goal:'B'.repeat(6000)}},conflicts:{'define-problem':{goal:['A'.repeat(6000)]}}}};
await db.query(`select public.save_classroom_progress($1,$2,$3,1,1)`,[c1,snapshot.guide.active,JSON.stringify(snapshot)]);
const load=()=>db.query('select public.load_classroom_progress($1) v',[c1]);
assert.deepEqual((await load()).rows[0].v.state,snapshot,'current field snapshots and full conflict copies round-trip');
await assert.rejects(db.query(`select public.save_classroom_progress($1,'stale','{}',0,1)`,[c1]),e=>e.code==='40001');
const afterConflict=(await load()).rows[0].v;
assert.deepEqual(afterConflict.state,snapshot);assert.equal(afterConflict.completed_count,1);assert.equal(Number(afterConflict.version),2);
const event='50000000-0000-0000-0000-000000000001';
await db.query(`select public.record_classroom_activity($1,$2,15,'lesson')`,[c1,event]);
await db.exec('reset role');await db.query(`update public.engagement set last_seen_at=clock_timestamp()-interval '20 seconds' where user_id=$1`,[a]);await as(a);
const newEvent='50000000-0000-0000-0000-000000000002';
const credit=()=>db.query(`select public.record_classroom_activity($1,$2,15,'lesson') v`,[c1,newEvent]);
assert.equal(Number((await credit()).rows[0].v),15);assert.equal(Number((await credit()).rows[0].v),15,'duplicate activity events never double credit');
await as(b);assert.equal(await count('progress'),0);assert.equal(await count('student_state'),0);assert.equal(await count('memberships'),1);
await as(t);assert.equal(await count('progress'),1);assert.equal(await count('student_state'),0);assert.equal(await count('memberships'),3);assert.equal(await count('classrooms'),1);
await assert.rejects(db.query(`select public.save_classroom_progress($1,'teacher','{}',0,0)`,[c1]));
await db.exec('reset role');await db.exec(`insert into public.submissions(id,classroom_id,user_id,lesson_id,revision,object_path,filename) values('40000000-0000-0000-0000-000000000001','${c1}','${a}','lesson',1,'private/path','answer.m');insert into public.comments(submission_id,teacher_id,body) values('40000000-0000-0000-0000-000000000001','${t}','Feedback');`);
await as(b);assert.equal(await count('submissions'),0);assert.equal(await count('comments'),0);
await as(a);assert.equal(await count('submissions'),1);assert.equal(await count('comments'),1);await assert.rejects(db.query(`delete from public.submissions`));
await db.exec('reset role');await db.query('select public.classroom_revoke_sessions($1)',[a]);await as(a);assert.equal(await count('progress'),0);assert.equal(await count('submissions'),0);assert.equal(await count('comments'),0);
await db.exec('reset role;set role anon');await assert.rejects(db.query('select * from public.memberships'));await assert.rejects(db.query(`select public.classroom_resolve('anything')`));
await db.close();console.log('PASS: SQL executed on local PostgreSQL WASM; student isolation, teacher scoped summaries/private drafts, cross-class denial, role escalation denial, optimistic conflict, immutable rows, comment scope, revoked-session denial, anonymous denial. Supabase integration still unverified.');

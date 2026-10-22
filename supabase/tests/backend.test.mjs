import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const env={}, handlers=[];
globalThis.Deno={env:{get:k=>env[k]||''},serve:handler=>handlers.push(handler)};
const {boundedBody,uuid,str,serve,api,classCode}=await import('../functions/_shared/backend.ts');
test('Friendly student codes normalize case while long existing codes retain their identity',()=>{
 assert.equal(classCode(' PBL-1022 '),'pbl-1022');assert.equal(classCode('CaseSensitiveOldCode_A123'),'CaseSensitiveOldCode_A123');
 for(const code of ['pbl','pbl-22','pbl 1022','<pbl-1022>','pbl-1022&role=teacher'])assert.throws(()=>classCode(code));
});
test('Modern server keys stay in apikey; only a user session JWT goes in Authorization',async()=>{
 env.SUPABASE_SECRET_KEYS=JSON.stringify({default:'sb_secret_server_fixture'});env.SUPABASE_PUBLISHABLE_KEYS=JSON.stringify({default:'sb_publishable_fixture'});
 try{const {headers}=await import('../functions/_shared/backend.ts?modern-key-test');
  assert.equal(headers().apikey,'sb_publishable_fixture');assert.equal(headers().Authorization,undefined);
  assert.equal(headers(undefined,true).apikey,'sb_secret_server_fixture');assert.equal(headers(undefined,true).Authorization,undefined);
  assert.equal(headers('user-session-jwt').Authorization,'Bearer user-session-jwt');
 }finally{delete env.SUPABASE_SECRET_KEYS;delete env.SUPABASE_PUBLISHABLE_KEYS;}
});
test('HTTP save conflicts stop at 409 and authentication failures retain their status',async()=>{
 const original=globalThis.fetch;
 try{for(const [status,code]of [[409,'PT409'],[401,'invalid_token'],[403,'42501']]){
  globalThis.fetch=async()=>new Response(JSON.stringify({code}),{status});
  await assert.rejects(api('/test'),error=>error.status===status);
 }}finally{globalThis.fetch=original;}
});
test('Undeployed account functions require an explicit server activation gate',async()=>{
 env.CLASSROOM_ALLOWED_ORIGINS='https://classroom.example.test';let calls=0;
 serve(async()=>{calls++;return {ok:true};});const handler=handlers.at(-1);
 const req=()=>new Request('https://backend.example.test',{method:'POST',headers:{Origin:env.CLASSROOM_ALLOWED_ORIGINS},body:'{}'});
 assert.equal((await handler(req())).status,503);assert.equal(calls,0);
 env.CLASSROOM_ACCOUNTS_ENABLED='false';assert.equal((await handler(req())).status,503);assert.equal(calls,0);
 env.CLASSROOM_ACCOUNTS_ENABLED='true';assert.equal((await handler(req())).status,200);assert.equal(calls,1);
 assert.equal((await handler(new Request('https://backend.example.test',{method:'POST',headers:{Origin:'https://other.example.test'}}))).status,403);assert.equal(calls,1);
 delete env.CLASSROOM_ACCOUNTS_ENABLED;
});
test('bounded streaming body rejects without trusting Content-Length',async()=>{
 const r=new Request('https://example.test',{method:'POST',body:new ReadableStream({start(c){c.enqueue(new Uint8Array(5));c.enqueue(new Uint8Array(6));c.close();}}),duplex:'half'});
 await assert.rejects(()=>boundedBody(r,10),e=>e.status===413);
});
test('bounded reader preserves in-limit body',async()=>assert.equal(new TextDecoder().decode(await boundedBody(new Request('https://example.test',{method:'POST',body:'ok'}),10)),'ok'));
test('IDs cannot inject REST filter parameters',()=>{assert.throws(()=>uuid('abc&select=*'));assert.equal(uuid('10000000-0000-0000-0000-000000000001'),'10000000-0000-0000-0000-000000000001');assert.throws(()=>str('',12));});
const sql=fs.readFileSync(new URL('../schema/classroom.sql',import.meta.url),'utf8');
test('all application tables explicitly enable RLS',()=>{for(const table of ['classrooms','memberships','progress','student_state','engagement','submissions','comments']) assert.ok(sql.includes(`alter table public.${table} enable row level security`));});
test('no direct storage read or write policy, no direct client writes',()=>{assert.doesNotMatch(sql,/create policy .* on storage\.objects/);assert.match(sql,/revoke all on public\.classrooms[\s\S]*from anon,authenticated/);assert.doesNotMatch(sql,/grant (insert|update|delete)/i);});
test('session revocation and versioned atomic snapshots return non-retrying conflict codes',()=>{assert.match(sql,/auth\.sessions s where s\.id=/);assert.match(sql,/version=p_expected/);assert.match(sql,/errcode='PT409'/);assert.doesNotMatch(sql,/errcode='40001'/);assert.match(sql,/left join public\.student_state/);});
test('activity RPC caps time, throttles events, locks and deduplicates',()=>{assert.match(sql,/p_seconds not between 0 and 30/);assert.match(sql,/activity:'\|\|auth.uid\(\)::text,12,60/);assert.match(sql,/for update/);assert.match(sql,/greatest\(0,floor\(extract\(epoch/);});

import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const env={}, handlers=[];
globalThis.Deno={env:{get:k=>env[k]||''},serve:handler=>handlers.push(handler)};
const {boundedBody,uuid,str,serve}=await import('../functions/_shared/backend.ts');
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
test('session revocation and versioned atomic snapshot guards exist',()=>{assert.match(sql,/auth\.sessions s where s\.id=/);assert.match(sql,/version=p_expected/);assert.match(sql,/errcode='40001'/);assert.match(sql,/left join public\.student_state/);});
test('activity RPC caps time, throttles events, locks and deduplicates',()=>{assert.match(sql,/p_seconds not between 0 and 30/);assert.match(sql,/activity:'\|\|auth.uid\(\)::text,12,60/);assert.match(sql,/for update/);assert.match(sql,/greatest\(0,floor\(extract\(epoch/);});

import {test} from 'node:test';import assert from 'node:assert/strict';
const env={SUPABASE_URL:'https://classroom-test.supabase.co',SUPABASE_SERVICE_ROLE_KEY:'server-test',SUPABASE_ANON_KEY:'public-test',CLASSROOM_ACCOUNTS_ENABLED:'true',CLASSROOM_ALLOWED_ORIGINS:'https://colourfour.github.io'};
let handler,role='teacher',calls=[];globalThis.Deno={env:{get:k=>env[k]},serve:f=>handler=f};
await import('../functions/classroom-data/index.ts');
const classroom='10000000-0000-0000-0000-000000000001',user='20000000-0000-0000-0000-000000000001';
globalThis.fetch=async(url,init={})=>{const body=init.body?JSON.parse(init.body):null;calls.push({url,body});let out=null;if(url.endsWith('/user'))out={id:user};else if(url.includes('/memberships?'))out=[{role}];else if(url.endsWith('/classroom_rate_limit'))out=true;return Response.json(out);};
const req=body=>new Request(env.SUPABASE_URL+'/functions/v1/classroom-data',{method:'POST',headers:{Origin:env.CLASSROOM_ALLOWED_ORIGINS,Authorization:'Bearer fixture-session','Content-Type':'application/json'},body:JSON.stringify({action:'registration-code',classroomId:classroom,...body})});
function reset(){calls=[];role='teacher';}
test('An assigned teacher can set the requested readable code using the normal authenticated controls',async()=>{
 reset();const r=await handler(req({code:' PBL-1022 '}));assert.equal(r.status,200);assert.deepEqual(await r.json(),{code:'pbl-1022'});const config=calls.find(c=>c.url.endsWith('/configure_classroom_signup'));assert.equal(config.body.p_classroom,classroom);assert.equal(config.body.p_enabled,true);assert.match(config.body.p_hash,/^[a-f0-9]{64}$/);
});
test('Student membership cannot change registration or the class code',async()=>{reset();role='student';assert.equal((await handler(req({code:'pbl-1022'}))).status,403);assert(!calls.some(c=>c.url.endsWith('/configure_classroom_signup')));});
test('Invalid custom codes fail before changing the saved code; legacy random generation still works',async()=>{
 for(const code of ['', 'short','pbl 1022']){reset();assert.equal((await handler(req({code}))).status,400);assert(!calls.some(c=>c.url.endsWith('/configure_classroom_signup')));}
 reset();const r=await handler(req({}));assert.equal(r.status,200);assert.match((await r.json()).code,/^[a-f0-9]{32}$/);
});
test('Closing signup preserves the code for existing student logins',async()=>{reset();assert.equal((await handler(req({action:'close-registration'}))).status,200);const config=calls.find(c=>c.url.endsWith('/configure_classroom_signup'));assert.equal(config.body.p_hash,null);assert.equal(config.body.p_enabled,false);});

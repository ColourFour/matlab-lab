// Independent VM/static security regression checks. These do NOT prove live RLS.
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const source=fs.readFileSync(require('node:path').join(__dirname,'..','assets/classroom.js'),'utf8');
function boot(config={}) {
 const local=new Map(), calls=[];
 const c={LAB_CLASSROOM_CONFIG:config,localStorage:{getItem:k=>local.get(k)||null,setItem:(k,v)=>local.set(k,v)},Date,setTimeout,clearTimeout,URL,CustomEvent:class{},dispatchEvent(){},fetch:async(...args)=>{calls.push(args);return {ok:true,json:async()=>({})}}};
 c.globalThis=c;
 // Expose closure operations exclusively in the VM test, never in production.
 vm.runInNewContext(source.replace('root.LabClassroom=api;',`api.test={signout,request,seed(){identity={role:'student'};token='test';expires=Date.now()+10000;values={app:{private:'student-a'}};api.submissions=[{filename:'private.m'}];api.memberships=[{display_name:'Student A'}];}};root.LabClassroom=api;`),c);
 return {api:c.LabClassroom,local,calls};
}
test('No configuration fails closed before any network request',async()=>{const {api,calls}=boot();await assert.rejects(api.test.request('/test'),/not configured/);assert.equal(calls.length,0);});
test('Only approved HTTPS Supabase host and publishable-key configuration enables accounts',()=>{for(const url of ['http://test.supabase.co','https://test.supabase.co.evil.test','javascript:alert(1)','https://evil.test'])assert.equal(boot({enabled:true,securityReviewed:true,url,publishableKey:'sb_publishable_test'}).api.configured,false);assert.equal(boot({enabled:true,securityReviewed:true,url:'https://test.supabase.co',publishableKey:'sb_secret_test'}).api.configured,false);});
test('Account state never falls back to anonymous work and is erased on logout',async()=>{const {api,local}=boot();local.set('matlab-lab:v2','{"anonymous":true}');api.test.seed();assert.equal(JSON.parse(api.getItem('matlab-lab:v2')).private,'student-a');assert.equal(api.getItem('matlab-lab:guided:v1'),null);api.setItem('matlab-lab:guided:v1','{"private":"guide-a"}');assert.equal(local.has('matlab-lab:guided:v1'),false);await api.test.signout();assert.equal(api.signedIn(),false);assert.equal(JSON.parse(api.getItem('matlab-lab:v2')).anonymous,true);assert.equal((api.submissions||[]).length,0,'private submission metadata must be cleared');assert.equal((api.memberships||[]).length,0,'membership metadata must be cleared');});
test('SQL grants clients read-only tables; live RLS remains unverified',()=>{const sql=fs.readFileSync(require('node:path').join(__dirname,'..','supabase/schema/classroom.sql'),'utf8');for(const table of ['classrooms','memberships','progress','student_state','engagement','submissions','comments'])assert.match(sql,new RegExp('alter table public\\.'+table+' enable row level security'));assert.doesNotMatch(sql,/grant\s+(?:all|insert|update|delete)[^;]*to\s+(?:anon|authenticated)/i);assert.doesNotMatch(sql,/user_metadata|raw_user_meta_data/);assert.match(sql,/exists\(select 1 from auth.sessions/);assert.match(sql,/from public,anon,authenticated/);});
test('Students cannot bypass short-lived Edge download signing with Storage policy',()=>{const sql=fs.readFileSync(require('node:path').join(__dirname,'..','supabase/schema/classroom.sql'),'utf8');assert.doesNotMatch(sql,/create policy[^;]*on storage\.objects[^;]*for select to authenticated/i);});

test('Private drafts remain student-owned even when teacher can read progress summaries',()=>{const sql=fs.readFileSync(require('node:path').join(__dirname,'..','supabase/schema/classroom.sql'),'utf8');assert.match(sql,/create policy state_read[^;]*user_id=auth\.uid\(\)[^;]*is_member\(classroom_id,'student'\)/);assert.match(sql,/classroom_private\.is_member\(classroom_id,'teacher'\)/);});

test('Heartbeat rejects NULL inputs and enforces database-side unique-event throttle',()=>{const sql=fs.readFileSync(require('node:path').join(__dirname,'..','supabase/schema/classroom.sql'),'utf8');assert.match(sql,/p_seconds is null/);assert.match(sql,/p_event is null/);assert.match(sql,/classroom_rate_limit\('activity:'\|\|auth\.uid\(\)::text,12,60\)/);});

test('Exposed RPCs use invoker rights; privileged implementations stay private with explicit grants',()=>{
 const sql=fs.readFileSync(require('node:path').join(__dirname,'..','supabase/schema/classroom.sql'),'utf8');
 for(const declaration of sql.matchAll(/create function public\.[\s\S]*?as \$\$/g)){
  assert.match(declaration[0],/security invoker/);assert.doesNotMatch(declaration[0],/security definer/);
 }
 for(const name of ['classroom_resolve','classroom_identity','classroom_revoke_sessions','save_classroom_progress','load_classroom_progress','record_classroom_activity','append_classroom_submission'])assert.match(sql,new RegExp('create function classroom_private\\.'+name));
});

import {test} from 'node:test';import assert from 'node:assert/strict';
const env={SUPABASE_URL:'https://classroom-test.supabase.co',SUPABASE_SERVICE_ROLE_KEY:'server-only-test',SUPABASE_ANON_KEY:'public-test',CLASSROOM_ACCOUNTS_ENABLED:'true',CLASSROOM_ALLOWED_ORIGINS:'https://colourfour.github.io',CLASSROOM_TRUSTED_IP_HEADER:'x-tested-client-ip',CLASSROOM_RATE_PEPPER:'test-pepper'};
let handler,closed=false,failEnrollment=false,teacherInvite=false,calls=[];
globalThis.Deno={env:{get:k=>env[k]},serve:f=>handler=f};
await import('../functions/classroom-auth/index.ts');
const uid='20000000-0000-0000-0000-000000000099';
globalThis.fetch=async(url,init={})=>{
 const body=init.body?JSON.parse(init.body):{};calls.push({url,init,body});let out=null;
 if(url.endsWith('/classroom_rate_limit'))out=true;
 if(url.endsWith('/classroom_signup_info'))out=closed?null:{id:'class-a',name:'Test class'};
 if(url.endsWith('/classroom_teacher_invite'))out=teacherInvite?{id:'class-a'}:null;
 if(url.endsWith('/classroom_username'))out=body.p_username==='taken'?'existing@test.invalid':null;
 if(url.endsWith('/admin/users'))out={id:uid};
 if(url.includes('/enroll_classroom_')){if(failEnrollment)return Response.json({error:'duplicate'},{status:400});out='class-a';}
 if(url.endsWith('/token?grant_type=password'))out={access_token:'session-test',refresh_token:'must-not-return',expires_in:3600,user:{id:uid,email:'private@test.invalid'}};
 return Response.json(out);
};
const req=body=>new Request(env.SUPABASE_URL+'/functions/v1/classroom-auth',{method:'POST',headers:{Origin:env.CLASSROOM_ALLOWED_ORIGINS,'x-tested-client-ip':'test-ip','Content-Type':'application/json'},body:JSON.stringify({action:'register',code:'abcdefghijklmnopqrstuvwx',name:'Student',username:'alice_1',password:'a-long-test-password',...body})});
function reset(){calls=[];closed=false;failEnrollment=false;teacherInvite=false;}
test('Self-registration is a new student, even with injected role/ID metadata',async()=>{
 reset();const r=await handler(req({role:'teacher',userId:'victim',user_metadata:{role:'teacher'}}));assert.equal(r.status,200);
 const out=await r.json();assert.deepEqual(Object.keys(out),['session']);assert.equal(out.session.access_token,'session-test');assert.equal(out.session.refresh_token,undefined);assert.equal(out.session.user.email,undefined);
 const creation=calls.find(c=>c.url.endsWith('/admin/users'));assert.match(creation.body.email,/^student\.[0-9a-f-]+@accounts\.matlab-lab\.invalid$/);assert.equal(creation.body.user_metadata,undefined);
 const enrollment=calls.find(c=>c.url.endsWith('/enroll_classroom_student'));assert.equal(enrollment.body.p_user,uid);assert.equal(enrollment.body.p_username,'alice_1');assert.equal(enrollment.body.role,undefined);
});
test('Closed signup, short password and duplicate username never create Auth users',async()=>{
 for(const b of [{username:'taken'},{password:'short'},{username:'a&role=teacher'}]){reset();assert.equal((await handler(req(b))).status,400);assert(!calls.some(c=>c.url.endsWith('/admin/users')));}
 reset();closed=true;assert.equal((await handler(req({}))).status,403);assert(!calls.some(c=>c.url.endsWith('/admin/users')));
});
test('Losing an enrollment race deletes only the newly created Auth user',async()=>{
 reset();failEnrollment=true;assert.equal((await handler(req({}))).status,400);assert(calls.some(c=>c.url.endsWith('/admin/users/'+uid)&&c.init.method==='DELETE'));assert(!calls.some(c=>c.url.includes('/token?')));
});
test('Teacher registration requires a separate valid single-use invitation',async()=>{
 reset();assert.equal((await handler(req({action:'teacher-register',email:'teacher@example.test'}))).status,403);assert(!calls.some(c=>c.url.endsWith('/admin/users')));
 reset();teacherInvite=true;assert.equal((await handler(req({action:'teacher-register',email:'teacher@example.test'}))).status,200);assert(calls.some(c=>c.url.endsWith('/enroll_classroom_teacher')));
});
test('Missing tested client-IP header fails closed before any Auth calls',async()=>{
 reset();const r=req({});r.headers.delete('x-tested-client-ip');assert.equal((await handler(r)).status,503);assert(!calls.some(c=>c.url.includes('/auth/v1/')));
});

import fs from 'node:fs';
import test from 'node:test';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
process.chdir(fileURLToPath(new URL('../',import.meta.url)));
const {Window}=await import(process.env.HAPPY_DOM_MODULE||'./runtime/node_modules/happy-dom/lib/index.js');
const code='abcdefghijklmnopqrstuvwx',link='https://colourfour.github.io/matlab-lab/?teacher=1#teacher-setup='+code;
const tick=()=>new Promise(r=>setTimeout(r,20));
function page(t,{url='https://colourfour.github.io/matlab-lab/?teacher=1',respond}={}){
 const w=new Window({url});t.after(()=>w.happyDOM.close());const requests=[];
 w.document.body.innerHTML='<div id="app"></div>';
 w.HTMLDialogElement.prototype.showModal=function(){this.open=true;};w.HTMLElement.prototype.scrollIntoView=function(){};
 w.LAB_CLASSROOM_CONFIG={enabled:true,securityReviewed:true,url:'https://classroom-test.supabase.co',publishableKey:'sb_publishable_fixture'};
 w.fetch=async(url,init)=>{
  const body=init.body?JSON.parse(init.body):null;requests.push({path:new URL(url).pathname,body,init});
  const custom=await respond?.(url,init,body);if(custom)return custom;
  let data=[];if(url.includes('/classroom-auth'))data={session:{access_token:'test-session',expires_in:900}};
  else if(url.endsWith('/user'))data={id:'teacher-test'};
  else if(url.includes('/memberships'))data=[{classroom_id:'class-test',user_id:'teacher-test',display_name:'Test teacher',role:'teacher'}];
  else if(url.includes('/classrooms'))data=[{id:'class-test',name:'Test classroom'}];
  return {ok:true,status:200,json:async()=>data};
 };
 w.eval(fs.readFileSync('assets/classroom.js','utf8'));w.document.dispatchEvent(new w.Event('DOMContentLoaded'));
 const el=s=>{const e=w.document.querySelector(s);assert(e,s);return e;};
 return {w,requests,el,async click(s){el(s).click();await tick();},fill(name,value){el('#classroom-dialog input[name="'+name+'"]').value=value;},notice:()=>el('#classroom-notice').textContent};
}
function details(p){p.fill('email','teacher@example.test');p.fill('name','Test teacher');p.fill('password','test-only-long-password');p.fill('confirm','test-only-long-password');}
test('Public teacher entry offers setup, accepts the private link, and creates a teacher through the correct endpoint',async t=>{
 const p=page(t);assert(p.el('#teacher-login'));await p.click('[data-act=teacher-setup-entry]');p.fill('invitation',link);details(p);
 await p.click('#teacher-register button');assert.match(p.el('h2').textContent,/Teacher dashboard/);
 const registration=p.requests.find(r=>r.body?.action==='teacher-register');assert.equal(registration.body.code,code);assert.equal(registration.body.email,'teacher@example.test');assert(!p.requests.some(r=>r.path.endsWith('/signup')));
 assert.equal(p.w.localStorage.length,0);assert.equal(p.w.sessionStorage.length,0);
});
test('A private link works directly and switching to sign-in and back keeps its in-memory invitation',async t=>{
 const p=page(t,{url:link});assert(p.el('#teacher-register'));assert.equal(p.w.location.hash,'#/');assert.equal(p.w.document.querySelector('[name=invitation]'),null);
 await p.click('[data-act=teacher-entry]');await p.click('[data-act=teacher-setup-entry]');details(p);await p.click('#teacher-register button');assert.equal(p.requests[0].body.code,code);
});
test('After refresh, teacher setup remains discoverable and requires a fresh private invitation',async t=>{
 const p=page(t);await p.click('[data-act=teacher-setup-entry]');assert(p.el('[name=invitation]'));assert.match(p.w.document.body.textContent,/After a refresh/);
 details(p);await p.click('#teacher-register button');assert.equal(p.requests.length,0);assert.match(p.notice(),/Complete this field/);
});
test('Empty fields, invalid email, short passwords, mismatches and unrelated links have visible errors without network requests',async t=>{
 const p=page(t);await p.click('[data-act=teacher-setup-entry]');p.fill('invitation',link);details(p);
 for(const [name,value,pattern]of [['email','bad-email',/valid email/],['name','  ',/Complete/],['password','short',/12 characters/],['confirm','a-different-password',/do not match/],['invitation','https://other.example/#teacher-setup='+code,/private MATLAB Lab/]]){
  p.fill('invitation',link);details(p);p.fill(name,value);await p.click('#teacher-register button');assert.equal(p.requests.length,0);assert.match(p.notice(),pattern);assert.equal(p.w.document.activeElement.name,name);assert.equal(p.el('[name='+name+']').getAttribute('aria-invalid'),'true');assert.equal(p.el('#teacher-register button').disabled,false);
 }
});
test('Failed sign-in explains the first-time setup path and retains the entered email',async t=>{
 const p=page(t,{respond:async url=>url.includes('/token')?{ok:false,status:400,json:async()=>({error:'invalid_grant',error_description:'Invalid login credentials'})}:null});
 p.fill('email','teacher@example.test');p.fill('password','test-only-password');await p.click('#teacher-login button');assert.match(p.notice(),/First time.*Set up teacher account/);assert.equal(p.el('[name=email]').value,'teacher@example.test');assert(p.el('[data-act=teacher-setup-entry]'));
});
test('Connection failure never blindly retries registration, clears input or leaves the button disabled',async t=>{
 const p=page(t,{url:link,respond:async()=>{throw new TypeError('Failed to fetch');}});details(p);await p.click('#teacher-register button');assert.match(p.notice(),/Could not confirm account creation/);assert.equal(p.requests.length,1);assert.equal(p.el('[name=email]').value,'teacher@example.test');assert.equal(p.el('#teacher-register button').disabled,false);assert.equal(p.el('#teacher-register').hasAttribute('aria-busy'),false);
});
test('A pending request prevents duplicate creation and visibly marks the button busy',async t=>{
 let complete;const p=page(t,{url:link,respond:()=>new Promise(resolve=>{complete=resolve;})});details(p);await p.click('#teacher-register button');assert.equal(p.el('#teacher-register button').disabled,true);assert.equal(p.el('#teacher-register').getAttribute('aria-busy'),'true');assert.match(p.notice(),/Creating/);await p.click('#teacher-register button');assert.equal(p.requests.length,1);complete({ok:true,status:200,json:async()=>({accountCreated:true,session:null})});await tick();assert(p.el('#teacher-login'));
});
test('A stalled request aborts after the timeout and restores the submit button',async t=>{
 let abort;const p=page(t,{url:link,respond:async(url,init)=>new Promise((resolve,reject)=>init.signal.addEventListener('abort',()=>reject(new Error('Aborted'))))});
 const original=p.w.setTimeout.bind(p.w);p.w.setTimeout=(fn,ms,...args)=>{if(ms===30000){abort=fn;return original(()=>{},30000);}return original(fn,ms,...args);};details(p);await p.click('#teacher-register button');abort();await tick();assert.equal(p.el('#teacher-register button').disabled,false);assert.match(p.notice(),/Could not confirm account creation/);assert.equal(p.requests.length,1);
});
test('Successful enrollment with failed automatic login sends the teacher to sign-in without reusing the invitation',async t=>{
 const p=page(t,{url:link,respond:async()=>({ok:true,status:200,json:async()=>({accountCreated:true,session:null})})});details(p);await p.click('#teacher-register button');assert(p.el('#teacher-login'));assert.match(p.notice(),/account was created/);assert.equal(p.el('[name=email]').value,'teacher@example.test');assert.equal(p.el('[name=password]').value,'');assert.equal(p.requests.length,1);
});
test('Failure while loading the new account also offers sign-in rather than another registration',async t=>{
 const p=page(t,{url:link,respond:async url=>url.endsWith('/user')?{ok:false,status:503,json:async()=>({error:'Unavailable'})}:null});details(p);await p.click('#teacher-register button');assert(p.el('#teacher-login'));assert.match(p.notice(),/account was created, but sign-in did not finish/);assert.equal(p.requests.filter(r=>r.body?.action==='teacher-register').length,1);
});
test('An invitation conflict is not misreported as a student progress conflict',async t=>{
 const p=page(t,{url:link,respond:async()=>({ok:false,status:409,json:async()=>({error:'Teacher invitation already used.'})})});details(p);await p.click('#teacher-register button');assert.match(p.notice(),/invitation already used/);assert.doesNotMatch(p.notice(),/Work changed/);
});

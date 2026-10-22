import fs from 'node:fs';import test from 'node:test';import assert from 'node:assert/strict';import {fileURLToPath} from 'node:url';
process.chdir(fileURLToPath(new URL('../',import.meta.url)));
const {Window}=await import(process.env.HAPPY_DOM_MODULE||'./runtime/node_modules/happy-dom/lib/index.js');
const cid='48b3bf53-55ff-41b8-b39c-82c1bfdd199d',tick=()=>new Promise(r=>setTimeout(r,20));
function page(t){
 const w=new Window({url:'https://colourfour.github.io/matlab-lab/'});t.after(()=>w.happyDOM.close());const requests=[];let remote=null,rev=0,delaySave=false,failSave=false,pendingSave,uid='student-a';
 w.document.body.innerHTML='<a class="skip-link" href="#main"></a><div id="app"></div>';
 w.LAB_CLASSROOM_CONFIG={enabled:true,securityReviewed:true,url:'https://test.supabase.co',publishableKey:'sb_publishable_fixture',classroom:{id:cid,name:'MATLAB Lab Classroom',code:'pbl-1022'}};
 w.HTMLDialogElement.prototype.showModal=function(){this.open=true;};w.HTMLDialogElement.prototype.close=function(){this.open=false;this.dispatchEvent(new w.Event('close'));};w.HTMLElement.prototype.scrollIntoView=function(){};w.HTMLMediaElement.prototype.play=()=>Promise.resolve();w.HTMLMediaElement.prototype.pause=()=>{};w.scrollTo=()=>{};w.confirm=()=>true;
 w.fetch=async(url,init={})=>{let b;try{b=JSON.parse(init.body);}catch{}const path=new URL(url).pathname;requests.push({path,b});let out=[];
  if(path.endsWith('/classroom-auth')){uid='student-a';out={session:{access_token:'test-token',expires_in:900}};}
  else if(path.endsWith('/token')){uid='teacher-a';out={access_token:'test-token',expires_in:900};}
  else if(path.endsWith('/user'))out={id:uid};
  else if(path.endsWith('/memberships'))out=[{classroom_id:cid,user_id:uid,display_name:uid==='teacher-a'?'Staff':'Alice',role:uid==='teacher-a'?'teacher':'student',active:true}];
  else if(path.endsWith('/classrooms'))out=[{id:cid,name:'MATLAB Lab Classroom'}];
  else if(path.endsWith('/classroom-data')){
   if(b.action==='load-progress')out={progress:remote?{state:structuredClone(remote),version:rev}:null};
   if(b.action==='progress'){if(failSave)return {ok:false,status:503,json:async()=>({error:'Save unavailable'})};remote=structuredClone(b.state);out={version:++rev};if(delaySave)await new Promise(resolve=>{pendingSave=resolve;});}
   if(b.action==='registration-code')out={code:b.code};
  }
  return {ok:true,status:200,json:async()=>out};
 };
 for(const file of [...fs.readFileSync('index.html','utf8').matchAll(/<script defer src="([^"]+)"/g)].map(m=>m[1].split('?')[0]).filter(p=>!p.includes('classroom-config')))w.eval(fs.readFileSync(file,'utf8'));
 w.document.dispatchEvent(new w.Event('DOMContentLoaded'));w.document.querySelector('.intro-dialog[open] [data-intro-close]')?.click();
 const el=s=>{const e=w.document.querySelector(s);assert(e,s);return e;};
 return {w,el,requests,remote:()=>remote,async click(s){el(s).click();await tick();},fill(name,value){el('#classroom-dialog [name='+name+']').value=value;},async route(hash){w.location.hash=hash;w.dispatchEvent(new w.Event('hashchange'));await tick();},fail(){failSave=true;w.confirm=()=>false;},delay(){delaySave=true;},release(){delaySave=false;pendingSave();}};
}
async function login(p){await p.click('[data-classroom-mode=student]');p.fill('username','alice_1');p.fill('password','test-only-password');await p.click('#username-login button');}
test('Homepage exposes sign-in and account creation next to the language switch in English and Chinese',async t=>{
 const p=page(t);assert(p.el('.header-actions .account-controls + .language-switch'));assert(p.el('[data-classroom-mode=student]'));assert(p.el('[data-classroom-mode=signup]'));
 await p.click('[data-lang=zh]');assert.match(p.el('[data-classroom-mode=signup]').textContent,/创建账户/);await p.click('[data-classroom-mode=signup]');assert(p.el('#student-register'));assert.equal(p.el('#student-register [name=code]').value,'pbl-1022');assert.equal(p.el('#student-register [name=code]').type,'hidden');assert.match(p.el('.classroom-context').textContent,/pbl-1022/);assert.equal(p.w.document.querySelector('#class-code-form'),null);
});
test('Header signup enrolls with the prefilled class code and replaces entry controls with account, save status and sign-out',async t=>{
 const p=page(t);await p.click('[data-classroom-mode=signup]');p.fill('name','Alice');p.fill('username','alice_1');p.fill('password','test-only-password');p.fill('confirm','test-only-password');await p.click('#student-register button');
 assert.equal(p.requests.find(r=>r.b?.action==='register').b.code,'pbl-1022');assert.match(p.el('.account-identity').textContent,/Alice/);assert(p.el('[data-classroom-signout]'));assert.equal(p.w.document.querySelector('[data-classroom-mode=signup]'),null);await new Promise(r=>setTimeout(r,1250));assert.match(p.el('[data-account-save]').textContent,/Saved/);assert.match(p.el('#classroom-dialog [data-act=close]').textContent,/Continue learning/);
});
test('Header logout saves the latest lesson step before ending the session and returning to device work',async t=>{
 const p=page(t);const before=JSON.stringify(Object.fromEntries(Object.keys(p.w.localStorage).map(k=>[k,p.w.localStorage.getItem(k)])));await login(p);await p.click('#classroom-dialog [data-act=close]');await p.route('#/bootcamp/first-command');await p.click('[data-action=next-step]');assert.match(p.el('[data-account-save]').textContent,/Saving/);
 await p.click('[data-classroom-signout]');assert.equal(p.w.LabClassroom.signedIn(),false);assert.equal(p.remote().guide.lessons['bootcamp:first-command'].cursorId,'1');const save=p.requests.findIndex(r=>r.b?.action==='progress'),logout=p.requests.findIndex(r=>r.path.endsWith('/logout'));assert(save>=0&&logout>save);assert(p.el('[data-classroom-mode=student]'));assert.equal(JSON.stringify(Object.fromEntries(Object.keys(p.w.localStorage).map(k=>[k,p.w.localStorage.getItem(k)]))),before);
});
test('Header logout waits for a save already in flight and does not discard the account before it finishes',async t=>{
 const p=page(t);await login(p);await p.click('#classroom-dialog [data-act=close]');p.delay();await p.route('#/bootcamp/first-command');await p.click('[data-action=next-step]');await new Promise(r=>setTimeout(r,1250));await p.click('[data-classroom-signout]');assert.equal(p.w.LabClassroom.signedIn(),true);assert(!p.requests.some(r=>r.path.endsWith('/logout')));p.release();await tick();assert.equal(p.w.LabClassroom.signedIn(),false);
});
test('A later header sign-in restores the saved lesson position without changing device progress',async t=>{
 const p=page(t);await login(p);await p.click('#classroom-dialog [data-act=close]');await p.route('#/bootcamp/first-command');await p.click('[data-action=next-step]');await p.click('[data-classroom-signout]');await login(p);assert.equal(JSON.parse(p.w.LabClassroom.getItem('matlab-lab:guided:v1')).lessons['bootcamp:first-command'].cursorId,'1');
});
test('Teacher registration controls keep the configured class code instead of generating a different code',async t=>{
 const p=page(t);p.w.LabClassroom.open('teacher');p.fill('email','staff@example.test');p.fill('password','test-only-password');await p.click('#teacher-login button');assert.match(p.el('#classroom-dialog').textContent,/pbl-1022/);await p.click('[data-act=registration-code]');assert.equal(p.requests.find(r=>r.b?.action==='registration-code').b.code,'pbl-1022');
});

test('A failed save is visible in the header and cancelling sign-out preserves the unsaved account work',async t=>{
 const p=page(t);await login(p);await p.click('#classroom-dialog [data-act=close]');p.fail();await p.route('#/bootcamp/first-command');await p.click('[data-action=next-step]');await new Promise(r=>setTimeout(r,1250));assert.match(p.el('[data-account-save]').textContent,/Not saved/);await p.click('[data-classroom-signout]');assert.equal(p.w.LabClassroom.signedIn(),true);assert.equal(JSON.parse(p.w.LabClassroom.getItem('matlab-lab:guided:v1')).lessons['bootcamp:first-command'].cursorId,'1');assert(!p.requests.some(r=>r.path.endsWith('/logout')));
});

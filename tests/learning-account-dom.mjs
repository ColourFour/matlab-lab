import fs from 'node:fs';import assert from 'node:assert/strict';import test from 'node:test';
import {Window} from './runtime/node_modules/happy-dom/lib/index.js';
const scripts=[...fs.readFileSync('index.html','utf8').matchAll(/<script defer src="([^"]+)"/g)].map(m=>m[1].split('?')[0]).filter(f=>!f.includes('classroom-config'));
const tick=()=>new Promise(r=>setTimeout(r,25)),copy=x=>JSON.parse(JSON.stringify(x));
function setup(server){
 const w=new Window({url:'https://classroom.example.test/'});w.document.body.innerHTML='<a class="skip-link"></a><div id="app"></div>';w.LAB_CLASSROOM_CONFIG={enabled:true,securityReviewed:true,url:'https://classroom-test.supabase.co',publishableKey:'sb_publishable_fixture',classroom:{id:'class-a',name:'Class',code:'pbl-1022'}};
 w.HTMLDialogElement.prototype.showModal=function(){this.open=true;};w.HTMLDialogElement.prototype.close=function(){this.open=false;this.dispatchEvent(new w.Event('close'));};w.HTMLElement.prototype.scrollIntoView=function(){};w.scrollTo=()=>{};w.confirm=()=>true;w.URL.createObjectURL=()=> 'blob:backup';w.URL.revokeObjectURL=()=>{};
 w.fetch=async(url,opts={})=>{const path=new URL(url).pathname;let b={};try{b=JSON.parse(opts.body||'{}');}catch{}let data=[],status=200;
 if(path.endsWith('/classroom-auth'))data={session:{access_token:'student-session',expires_in:3600}};
 else if(path.endsWith('/user'))data={id:'student-a'};
 else if(path.endsWith('/memberships')){data=[{classroom_id:'class-a',user_id:'student-a',display_name:'Student',role:server.role||'student',active:true}];if(server.role==='teacher'&&!url.includes('user_id=eq.'))data.push({classroom_id:'class-a',user_id:'pupil',display_name:'Pupil <script>',role:'student',active:true});}
 else if(path.endsWith('/learning_snapshots'))data=server.learning||[];
 else if(path.endsWith('/submissions'))data=server.submissions||[];
 else if(path.endsWith('/project6_submissions'))data=server.finals||[];
 else if(path.endsWith('/classrooms'))data=[{id:'class-a',name:'Class'}];
 else if(path.endsWith('/classroom-data')){
  if(b.action==='load-progress')data={progress:server.version?{state:copy(server.state),version:server.version}:null};
  if(b.action==='progress'){if(b.expectedVersion!==server.version){status=409;data={error:'Version conflict'};}else{server.state=copy(b.state);data={version:++server.version};}}
  if(opts.body instanceof w.FormData){server.uploads.push(opts.body);if(server.failOnce){server.failOnce=false;status=503;data={error:'Temporary upload failure'};}else data={submission:{revision:1}};}
 }
 return {ok:status===200,status,json:async()=>data};};
 for(const file of scripts)w.eval(fs.readFileSync(file,'utf8'));w.document.dispatchEvent(new w.Event('DOMContentLoaded'));w.document.querySelector('[data-intro-close]')?.click();
 const el=s=>{const e=w.document.querySelector(s);assert(e,s);return e;},click=async s=>{el(s).click();await tick();},submit=async s=>{el(s).dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));await tick();};
 return {w,el,click,submit,async login(){await click('[data-classroom-open]');el('#username-login [name=username]').value='student_a';el('#username-login [name=password]').value='fixture-password';await submit('#username-login');},async save(){await click('[data-act=save-now]');}};
}
test('Two devices load the same answers, passes, completed lessons and private notes; stale saves do not overwrite',async()=>{
 const server={version:0,state:{},uploads:[]},a=setup(server),b=setup(server);
 try{
  await a.login();const state=copy(a.w.LabClassroom.currentSnapshot()),key='bootcamp:first-command';state.app.progress.bootcamp.completed=['first-command'];state.guide.lessons[key].answers['transfer-v2']='423';state.guide.lessons[key].solved=['transfer-v2'];state.notebook.notes['define-problem'].decision='Saved private Project 6 notes';
  a.w.LabClassroom.updateSnapshot(state);await a.save();assert.equal(server.version,1);
  await b.login();const restored=JSON.parse(b.w.LabClassroom.getItem('matlab-lab:guided:v1'));assert.equal(restored.lessons[key].answers['transfer-v2'],'423');assert(restored.lessons[key].solved.includes('transfer-v2'));assert.equal(JSON.parse(b.w.LabClassroom.getItem('matlab-lab:capstone:v1')).notes['define-problem'].decision,'Saved private Project 6 notes');assert.deepEqual(JSON.parse(b.w.LabClassroom.getItem('matlab-lab:v2')).progress.bootcamp.completed,['first-command']);
  const next=copy(b.w.LabClassroom.currentSnapshot());next.guide.lessons[key].answers['transfer-v2']='newer device answer';b.w.LabClassroom.updateSnapshot(next);await b.save();assert.equal(server.version,2);
  const stale=copy(a.w.LabClassroom.currentSnapshot());stale.guide.lessons[key].answers['transfer-v2']='stale answer';a.w.LabClassroom.updateSnapshot(stale);await a.save();assert.match(a.w.LabClassroom.statusText(),/conflict/);assert.equal(server.state.guide.lessons[key].answers['transfer-v2'],'newer device answer');assert(a.w.LabAccountRecovery.list(a.w.LabClassroom.memberships[0]).length);
  await b.click('[data-act=refresh]');assert.equal(JSON.parse(b.w.LabClassroom.getItem('matlab-lab:guided:v1')).lessons[key].answers['transfer-v2'],'newer device answer');
 }finally{await a.w.happyDOM.close();await b.w.happyDOM.close();}
});
test('Final submission displays assessment, requires consent and notes, saves before upload and retains request ID on error',async()=>{
 const server={version:0,state:{},uploads:[]},a=setup(server);
 try{await a.login();assert.match(a.el('#final-project').textContent,/20 marks/);assert.equal(a.el('#final-project li strong').textContent.includes('Problem and criteria'),true);
  const file=new a.w.File(['% Test project\nx=1;'],'main.m',{type:'text/plain'}),form=a.el('#final-project-form');Object.defineProperty(form.elements.file,'files',{value:[file],configurable:true});
  // Happy DOM FormData(file) is set directly by this test hook, like a browser-selected file.
  const Native=a.w.FormData;a.w.FormData=class extends Native{constructor(f){super(f);if(f?.id==='final-project-form')this.set('file',file);}};
  await a.submit('#final-project-form');assert.equal(server.uploads.length,0);assert.match(a.el('#classroom-notice').textContent,/Read the assessment/);
  form.elements.assessment.checked=true;await a.submit('#final-project-form');assert.equal(server.uploads.length,0);assert.match(a.el('#classroom-notice').textContent,/Add your Project 6 notes/);
  const state=copy(a.w.LabClassroom.currentSnapshot());const sid='define-problem',pid=Object.keys(state.notebook.notes[sid])[0];state.notebook.notes[sid][pid]='Project notes for assessment';a.w.LabClassroom.updateSnapshot(state);server.failOnce=true;await a.submit('#final-project-form');assert.equal(server.uploads.length,1);const intent=server.uploads[0].get('requestId');await a.submit('#final-project-form');assert.equal(server.uploads.length,2);assert.equal(server.uploads[1].get('requestId'),intent);assert.equal(server.uploads[0].get('expectedVersion'),String(server.version));assert.equal(server.uploads[0].get('assessment'),'yes');assert.equal(server.uploads[0].get('rubricVersion'),'project6-20-v1');assert.match(a.el('#classroom-notice').textContent,/Project 6 submitted/);
 }finally{await a.w.happyDOM.close();}
});

test('Teacher dashboard shows saved responses and accepted results, and renders submitted notes as text',async()=>{
 const server={role:'teacher',version:0,state:{},uploads:[],learning:[{user_id:'pupil',version:4,learning:{active:'bootcamp:first-command',completed:{bootcamp:['first-command']},lessons:{'bootcamp:first-command':{answers:{'transfer-v2':'423'},solved:['transfer-v2'],cursorId:'10'}}}}],submissions:[{id:'receipt',user_id:'pupil',lesson_id:'investigation:final',filename:'final.zip',revision:1,created_at:'2026-10-22'}],finals:[{submission_id:'receipt',progress_version:3,rubric_version:'project6-20-v1',notes:{version:1,notes:{'define-problem':{decision:'<script>Submitted notes</script>'}}},learning:{completed:{investigation:['define-problem']}}}]},a=setup(server);
 try{await a.login();const html=a.el('#classroom-work');assert.match(html.textContent,/Accepted result/);assert.match(html.textContent,/423/);assert.match(html.textContent,/Passed/);assert.match(html.textContent,/Submitted notes/);assert.equal(html.querySelectorAll('script').length,0);assert.match(html.textContent,/Not an attempt log/);assert.equal(a.w.document.querySelector('#final-project-form'),null);}
 finally{await a.w.happyDOM.close();}
});

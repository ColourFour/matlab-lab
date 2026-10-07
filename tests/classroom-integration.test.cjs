const {test}=require('node:test'),assert=require('node:assert/strict');
const {client}=require('./app-harness.cjs');
const config={enabled:true,securityReviewed:true,url:'https://test.supabase.co',publishableKey:'sb_publishable_fixture'};
const plain=x=>JSON.parse(JSON.stringify(x));
function fixture(shared=new Map(),search='',fetch=async()=>({ok:true,json:async()=>({version:1})})){
 const a=client(shared,'#/',search,{context:{LAB_CLASSROOM_CONFIG:config,fetch},transform(file,source){
  if(file!=='assets/classroom.js')return source;
  // Closure access is test-only. The shipped client has no seed/debug hooks.
  return source.replace('root.LabClassroom=api;',`api.test={flush,signout,request,peek:()=>({values,dirty,conflict,version}),seed(snapshot={},role='student',name='A',rev=0){generation++;identity={role,display_name:name,classroom_id:'class-'+name};token='token-'+name;expires=Date.now()+3600000;values=JSON.parse(JSON.stringify(snapshot));fields=new Map();version=rev;dirty=false;conflict=false;saving=false;changed();}};root.LabClassroom=api;`);
 }});return {...a,account:a.ctx.LabClassroom.test};
}
function finish(a,key){for(const step of a.ctx.LAB_GUIDES[key].slice(0,-1)){if(step.question){a.submit(Array.isArray(step.question.answer)?step.question.answer.join(' '):String(step.question.answer));assert.match(a.app.innerHTML,/step-feedback is-correct/);}a.click('next-step');}}
test('Activation requires both explicit gates; keys alone never enable accounts',()=>{
 for(const gates of [{},{enabled:true},{securityReviewed:true},{enabled:'true',securityReviewed:true}]){
  const a=client(new Map(),'#/','',{context:{LAB_CLASSROOM_CONFIG:{...config,enabled:false,securityReviewed:false,...gates}}});assert.equal(a.ctx.LabClassroom.configured,false);
 }
 assert.equal(fixture().ctx.LabClassroom.configured,true);
});
test('Explicit device import reads current fields, stable step IDs and complete note conflicts without writing',()=>{
 const shared=new Map(),a=fixture(shared);a.goto('#/bootcamp/first-command');finish(a,'bootcamp:first-command');a.goto('#/investigation/define-problem');
 const lesson=a.ctx.LAB_COURSES.investigation.lessons[0],id=lesson.prompts[0].id;
 a.notes({[id]:'A'.repeat(6000)});const b=fixture(shared);b.goto('#/investigation/define-problem');
 a.notes({[id]:'B'.repeat(6000)});b.notes({[id]:'C'.repeat(6000)});
 const before=JSON.stringify([...shared]),snapshot=plain(b.ctx.LabClassroom.deviceSnapshot());
 assert.deepEqual(snapshot.app.progress.bootcamp.completed,['first-command']);
 assert.equal(snapshot.guide.lessons['bootcamp:first-command'].cursorId,b.ctx.LAB_GUIDES['bootcamp:first-command'].at(-1).id);
 assert.equal(snapshot.notebook.notes[lesson.id][id],'C'.repeat(6000));
 assert.ok(snapshot.notebook.conflicts[lesson.id][id].includes('B'.repeat(6000)));
 assert.equal(JSON.stringify([...shared]),before);
});
test('Account work uses memory fields; device events, reset and signout cannot mix two students',async()=>{
 const shared=new Map(),a=fixture(shared);a.goto('#/bootcamp/first-command');finish(a,'bootcamp:first-command');
 const before=JSON.stringify([...shared]);a.account.seed();a.goto('#/bootcamp/first-command');a.click('next-step');a.language('en');
 a.sync();assert.match(a.app.innerHTML,/data-step="1"/);assert.equal(JSON.stringify([...shared]),before);
 const account=plain(a.account.peek().values);assert.equal(account.guide.lessons['bootcamp:first-command'].cursorId,'1');assert.deepEqual(account.app.progress.bootcamp.completed,[]);
 a.account.seed({},'student','B');assert.equal(a.account.peek().values.guide.active,'');assert.doesNotMatch(a.app.innerHTML,/student-a/);
 await a.account.signout();assert.equal(a.ctx.LabClassroom.signedIn(),false);assert.deepEqual(plain(a.ctx.LabClassroom.deviceSnapshot().app.progress.bootcamp.completed),['first-command']);
});
test('Cloud round-trip preserves completed lessons, current numeric checks and stable inserted step IDs',async()=>{
 let saved;const a=fixture(new Map(),'',async(url,options)=>{if(url.includes('classroom-data'))saved=JSON.parse(options.body);return {ok:true,json:async()=>({version:8})};});
 a.account.seed({},'student','A',7);a.goto('#/bootcamp/first-command');finish(a,'bootcamp:first-command');await a.account.flush();
 assert.equal(saved.expectedVersion,7);assert.equal(saved.completedCount,1);assert.ok(saved.state.guide.lessons['bootcamp:first-command'].solved.includes('transfer-v2'));
 a.account.seed(saved.state,'student','A',8);a.goto('#/bootcamp/variables');assert.match(a.app.innerHTML,/data-lesson="variables"/);
 // An October 3 numeric cursor migrates to its original stable ID even after newer figure steps were inserted.
 const old={version:2,lessons:{'image-compression:compression-challenge':{cursor:11,reached:11,answers:{'transfer-v2':'1709.375'},solved:['transfer-v2']}}};
 a.account.seed({guide:old});assert.equal(a.account.peek().values.guide.lessons['image-compression:compression-challenge'].cursorId,'11');
 const q=a.ctx.LAB_GUIDES['bootcamp:vectors'].find(s=>s.question).question;assert.ok(a.ctx.LabCore.validate(q,'scores =\n５５，９３，１２９'));
 assert.equal(a.ctx.LabCore.validate(q,'55,,93,129'),false);
});
test('Reset in an account syncs the cleared progress while keeping notes, language and anonymous work',async()=>{
 const a=fixture();const before=JSON.stringify([...a.shared]);a.account.seed();a.goto('#/bootcamp/first-command');finish(a,'bootcamp:first-command');a.goto('#/investigation/define-problem');
 const l=a.ctx.LAB_COURSES.investigation.lessons[0];a.notes({[l.prompts[0].id]:'Keep my draft'});a.language('en');a.click('confirm-reset');
 const v=plain(a.account.peek().values);assert.deepEqual(v.app.progress.bootcamp.completed,[]);assert.equal(v.app.lang,'en');assert.equal(v.notebook.notes[l.id][l.prompts[0].id],'Keep my draft');assert.equal(JSON.stringify([...a.shared]),before);
});
test('Preview and teacher practice do not sync progress or mutate anonymous records',async()=>{
 const requests=[],a=fixture(new Map(),'?review=1',async(...args)=>{requests.push(args);return {ok:true,json:async()=>({})};});
 const before=JSON.stringify([...a.shared]);a.account.seed({},'student');a.goto('#/bootcamp/first-command');a.click('next-step');a.language('en');await a.account.flush();assert.equal(requests.length,0);assert.equal(JSON.stringify([...a.shared]),before);
 const t=fixture(new Map(),'',async(...args)=>{requests.push(args);return {ok:true,json:async()=>({})};});t.account.seed({},'teacher');t.goto('#/bootcamp/first-command');t.click('next-step');await t.account.flush();assert.equal(requests.length,0);
});
test('Conflict keeps the local draft and never retries over the newer remote version',async()=>{
 let count=0;const a=fixture(new Map(),'',async()=>{count++;return {ok:false,status:409,json:async()=>({})};});a.account.seed();a.goto('#/bootcamp/first-command');a.click('next-step');
 await a.account.flush();const before=plain(a.account.peek());assert.equal(before.conflict,true);assert.equal(before.dirty,true);assert.equal(before.values.guide.lessons['bootcamp:first-command'].cursorId,'1');
 await a.account.flush();assert.equal(count,1);assert.deepEqual(plain(a.account.peek().values),before.values);
});
test('A stale account request cannot expire or conflict a newly signed-in student',async()=>{
 for(const status of [401,409]){let release;const a=fixture(new Map(),'',()=>new Promise(r=>{release=r;}));a.account.seed({},'student','A');const pending=a.account.request('/late').catch(()=>{});
  a.account.seed({},'student','B');release({ok:false,status,json:async()=>({})});await pending;assert.equal(a.ctx.LabClassroom.label(),'B');assert.equal(a.account.peek().conflict,false);
 }
});

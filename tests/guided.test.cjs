const {test}=require('node:test');const assert=require('node:assert/strict');const fs=require('fs'),path=require('path'),vm=require('vm');
const root=path.join(__dirname,'..'),ctx={};ctx.window=ctx;ctx.globalThis=ctx;vm.createContext(ctx);
for(const [,src] of fs.readFileSync(path.join(root,'index.html'),'utf8').matchAll(/<script defer src="([^"]+)"/g)){const file=src.split('?')[0];if(file!=='assets/app.js')vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),ctx);}
const {LAB_GUIDES:g,LAB_COURSES:c,LabGuide:G,LabCore:C}=ctx;
const expected=(q,answers)=>String(q.dependsOn?q.answersByValue[answers[q.dependsOn]]:q.answers?.[0]??(Array.isArray(q.answer)?q.answer.join(' '):q.answer));
test('All 48 guided lessons have short bilingual steps and retain every original checkpoint',()=>{
 assert.equal(Object.keys(g).length,48);
 for(const course of Object.values(c)){if(course.kind==='capstone')continue;for(const l of course.lessons){const steps=g[course.id+':'+l.id];assert.ok(steps.length>3);assert.ok(steps.at(-1).done);for(const q of l.questions)assert.ok(steps.some(s=>s.question?.id===q.id),l.id+':'+q.id);
 for(const s of steps){assert.ok(s.title.en&&s.title.zh&&s.text.en&&s.text.zh);assert.ok(s.text.en.split(/\s+/).length<=35,l.id);assert.ok(s.text.zh.length<=110,l.id);assert.ok((s.code||'').split('\n').length<=8,l.id);assert.ok(!s.code?.includes('___'));}
 }}
});
test('Code steps never split a matrix or a loop; every run has a complete block',()=>{
 for(const [key,steps] of Object.entries(g))for(const s of steps){if(!s.code)continue;let loops=0,brackets=0;for(const line of s.code.split('\n')){if(/^\s*(for|while|if)\b/.test(line))loops++;if(/^\s*end\s*$/.test(line))loops--;assert.ok(loops>=0,key);brackets+=(line.match(/\[/g)||[]).length-(line.match(/\]/g)||[]).length;}assert.equal(loops,0,key);assert.equal(brackets,0,key);}
});
test('Every new guided question accepts its result and completion requires all checks',()=>{
 for(const [key,steps] of Object.entries(g)){const st=G.entry(G.blank(),key);assert.equal(G.complete(steps,st,C),false);for(const s of steps){const q=s.question;if(!q)continue;assert.equal(G.check(steps,st,q.id,'',C),false,key);assert.equal(G.check(steps,st,q.id,expected(q,st.answers),C),true,key+':'+q.id);}assert.equal(G.complete(steps,st,C),true,key);}
});
test('The first win checks 4 before asking for a change, and includes two controllable graphs',()=>{
 const steps=g['bootcamp:first-command'];const checks=steps.filter(s=>s.question);assert.equal(checks[0].question.answer,4);assert.equal(checks[1].question.answer,7);assert.ok(checks[0].hint.en.includes('2 + 2'));assert.ok(steps.some(s=>s.code?.includes('[0 3 4 3 0]')));assert.ok(steps.some(s=>s.code?.includes('[0 3 8 3 0]')));
});
test('Resume keeps a valid answer and step, but cannot skip an unanswered checkpoint',()=>{
 const key='bootcamp:first-command',steps=g[key],st=G.entry(G.blank(),key);st.cursor=4;st.reached=4;G.check(steps,st,'first-four','4',C);
 const raw={version:1,active:key,lessons:{[key]:st}};const restored=G.clean(JSON.parse(JSON.stringify(raw)),g,C);assert.equal(restored.lessons[key].cursor,4);assert.equal(restored.lessons[key].answers['first-four'],'4');
 raw.lessons[key].cursor=999;raw.lessons[key].reached=999;raw.lessons[key].solved=['first-four','result','graph-change'];const clamped=G.clean(raw,g,C);assert.equal(clamped.lessons[key].cursor,6);assert.equal(clamped.lessons[key].solved.length,1);
});
test('Changing an upstream choice invalidates its dependent numeric answer',()=>{
 const steps=g['projectile-motion:target-challenge'],st=G.entry(G.blank(),'x');for(const s of steps){if(s.question)G.check(steps,st,s.question.id,expected(s.question,st.answers),C);}assert.equal(G.complete(steps,st,C),true);
 G.check(steps,st,'angle','60',C);assert.equal(st.solved.includes('height'),false);assert.equal(G.complete(steps,st,C),false);assert.equal(G.check(steps,st,'height','15.29',C),true);assert.equal(G.complete(steps,st,C),true);
});
test('Unknown and malformed local guide records are bounded and ignored',()=>{
 const out=G.clean({version:1,active:'invalid',lessons:{invalid:{},'bootcamp:first-command':{cursor:-5,reached:4,answers:{'first-four':'x'.repeat(900)},solved:['first-four','bogus']}}},g,C);assert.equal(out.active,'');assert.equal(out.lessons.invalid,undefined);assert.equal(out.lessons['bootcamp:first-command'].cursor,0);assert.equal(out.lessons['bootcamp:first-command'].answers['first-four'].length,250);assert.equal(out.lessons['bootcamp:first-command'].solved.length,0);
});
test('Editing a checked answer removes its success state until it is checked again',()=>{
 const steps=g['bootcamp:first-command'],st=G.entry(G.blank(),'x');G.check(steps,st,'first-four','4',C);assert.ok(st.solved.includes('first-four'));
 G.edit(steps,st,'first-four','999',C);assert.equal(st.solved.includes('first-four'),false);
 G.edit(steps,st,'first-four','4',C);assert.equal(st.solved.includes('first-four'),false);G.check(steps,st,'first-four','4',C);assert.ok(st.solved.includes('first-four'));
});

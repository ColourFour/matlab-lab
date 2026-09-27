const {test}=require('node:test');const assert=require('node:assert/strict');const fs=require('fs'),path=require('path'),vm=require('vm');
const root=path.join(__dirname,'..'),ctx={};ctx.window=ctx;ctx.globalThis=ctx;vm.createContext(ctx);
for(const [,src] of fs.readFileSync(path.join(root,'index.html'),'utf8').matchAll(/<script defer src="([^"]+)"/g)){const file=src.split('?')[0];if(file!=='assets/app.js')vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),ctx);}
const {LAB_GUIDES:g,LAB_COURSES:c,LabGuide:G,LabCore:C}=ctx;
const expected=(q,answers)=>String(q.dependsOn?q.answersByValue[answers[q.dependsOn]]:q.answers?.[0]??(Array.isArray(q.answer)?q.answer.join(' '):q.answer));
test('All 48 guided lessons have short bilingual steps and one fresh result checkpoint',()=>{
 assert.equal(Object.keys(g).length,48);
 for(const course of Object.values(c)){if(course.kind==='capstone')continue;for(const l of course.lessons){const steps=g[course.id+':'+l.id];assert.ok(steps.length>3);assert.ok(steps.at(-1).done);assert.equal(steps.filter(s=>s.question).length,1);const challenge=steps.find(s=>s.question);assert.ok(challenge.transfer&&challenge.code);assert.ok(!challenge.output&&!challenge.plot);assert.notEqual(challenge.question.type,'choice');
 for(const s of steps){assert.ok(s.title.en&&s.title.zh&&s.text.en&&s.text.zh);assert.ok(s.text.en.split(/\s+/).length<=35,l.id);assert.ok(s.text.zh.length<=110,l.id);assert.ok((s.code||'').split('\n').length<=8,l.id);assert.ok(!s.code?.includes('___'));}
 }}
});
test('Code steps never split a matrix or a loop; every run has a complete block',()=>{
 for(const [key,steps] of Object.entries(g))for(const s of steps){if(!s.code)continue;let loops=0,brackets=0;for(const line of s.code.split('\n')){if(/^\s*(for|while|if)\b/.test(line))loops++;if(/^\s*end\s*$/.test(line))loops--;assert.ok(loops>=0,key);brackets+=(line.match(/\[/g)||[]).length-(line.match(/\]/g)||[]).length;}assert.equal(loops,0,key);assert.equal(brackets,0,key);}
});
test('Every new guided question accepts its result and completion requires all checks',()=>{
 for(const [key,steps] of Object.entries(g)){const st=G.entry(G.blank(),key);assert.equal(G.complete(steps,st,C),false);for(const s of steps){const q=s.question;if(!q)continue;assert.equal(G.check(steps,st,q.id,'',C),false,key);assert.equal(G.check(steps,st,q.id,expected(q,st.answers),C),true,key+':'+q.id);}assert.equal(G.complete(steps,st,C),true,key);}
});
test('The first earned win uses a new calculation; worked graphs remain available',()=>{
 const steps=g['bootcamp:first-command'],check=steps.find(s=>s.question);assert.equal(check.code,'137 + 286');assert.equal(check.question.answer,423);assert.ok(!check.hint.en.includes('423'));assert.ok(steps.some(s=>s.code?.includes('[0 3 4 3 0]')));assert.ok(steps.some(s=>s.code?.includes('[0 3 8 3 0]')));
});
test('New checkpoints discard old in-lesson cursors without touching course completions',()=>{
 const old={version:1,active:'bootcamp:first-command',lessons:{'bootcamp:first-command':{cursor:8,reached:8,solved:['first-four'],answers:{'first-four':'4'}}}};
 assert.equal(Object.keys(G.clean(old,g,C).lessons).length,0);
 const completed=c.bootcamp.lessons.map(l=>l.id),out=C.cleanAppState({version:2,lang:'en',progress:{bootcamp:{version:1,completed}}},c);
 assert.equal(out.progress.bootcamp.completed.length,8);assert.equal(out.lang,'en');
});
test('Resume retains valid new results and prevents jumping over an unanswered check',()=>{
 const key='bootcamp:first-command',steps=g[key],book=G.blank(),st=G.entry(book,key);const gate=steps.findIndex(s=>s.question);book.active=key;st.cursor=gate;st.reached=gate;
 G.check(steps,st,'transfer-v2','423',C);const restored=G.clean(JSON.parse(JSON.stringify(book)),g,C);assert.equal(restored.lessons[key].cursor,gate);assert.equal(restored.lessons[key].answers['transfer-v2'],'423');
 st.answers['transfer-v2']='4';st.cursor=999;st.reached=999;const clamped=G.clean(book,g,C);assert.equal(clamped.lessons[key].cursor,gate);assert.equal(clamped.lessons[key].solved.length,0);
});
test('Unknown and malformed local guide records are bounded and ignored',()=>{
 const out=G.clean({version:2,active:'invalid',lessons:{invalid:{},'bootcamp:first-command':{cursor:-5,reached:4,answers:{'transfer-v2':'x'.repeat(900)},solved:['transfer-v2','bogus']}}},g,C);assert.equal(out.active,'');assert.equal(out.lessons.invalid,undefined);assert.equal(out.lessons['bootcamp:first-command'].cursor,0);assert.equal(out.lessons['bootcamp:first-command'].answers['transfer-v2'].length,250);assert.equal(out.lessons['bootcamp:first-command'].solved.length,0);
});
test('Editing a correct answer requires checking it again, even after restoring the right value',()=>{
 const steps=g['bootcamp:first-command'],st=G.entry(G.blank(),'x');G.check(steps,st,'transfer-v2','423',C);assert.ok(st.solved.includes('transfer-v2'));
 G.edit(steps,st,'transfer-v2','999',C);assert.equal(st.solved.includes('transfer-v2'),false);
 G.edit(steps,st,'transfer-v2','423',C);assert.equal(st.solved.includes('transfer-v2'),false);G.check(steps,st,'transfer-v2','423',C);assert.ok(st.solved.includes('transfer-v2'));
});
test('Independent projectile and SIR calculations match new transfer answers',()=>{
 const answer=k=>g[k].find(s=>s.question).question.answer,close=(a,b)=>assert.ok(Math.abs(a-b)<1e-7,`${a} vs ${b}`),rad=x=>x*Math.PI/180;
 close(answer('projectile-motion:speed-components'),27*Math.cos(rad(38)));
 close(answer('projectile-motion:flight-time'),2*24*Math.sin(rad(52))/9.81);
 close(answer('projectile-motion:trajectory-values'),23*Math.sin(rad(41))*.8-.5*9.81*.8**2);
 close(answer('projectile-motion:flight-plot'),400/9.81*.75);
 close(answer('projectile-motion:flight-measures'),(20*Math.sin(rad(45)))**2/(2*9.81)*.25);
 answer('projectile-motion:angle-investigation').forEach((v,i)=>close(v,529*Math.sin(rad(2*[25,40,55][i]))/9.81));
 close(answer('projectile-motion:target-challenge'),529*Math.sin(rad(74))/9.81);
 function sim(beta,dt){let s=990,i=10,r=0,I=[i],R=[r];for(let k=1;k<=60/dt;k++){const n=dt*beta*s*i/1000,d=dt*.1*i;[s,i,r]=[s-n,i+n-d,r+d];I.push(i);R.push(r);}return{I,R};}
 const base=sim(.3,.1),fine=sim(.3,.05),slow=sim(.15,.1);
 close(answer('epidemics:time-loop'),base.I[100]);close(answer('epidemics:plot-groups'),base.R[200]);close(answer('epidemics:compare-rates'),Math.max(...base.I)-Math.max(...slow.I));close(answer('epidemics:time-step-challenge'),fine.I[200]);
});
test('Independent block averages, scaling and finite fractal counts match new checks',()=>{
 const answer=k=>g[k].find(s=>s.question).question.answer,A=ctx.LAB_VISUALS['image-original'].data;
 const mean=(r,c)=>[A[r][c],A[r+1][c],A[r][c+1],A[r+1][c+1]].reduce((a,b)=>a+b)/4;
 assert.equal(answer('image-compression:one-block'),mean(2,2));assert.deepEqual(Array.from(answer('image-compression:all-blocks')),[mean(2,2),mean(4,4)]);
 for(const [size,key] of [[2,'measure-error'],[4,'compression-challenge']]){let error=0;for(let r=0;r<8;r++)for(let c=0;c<8;c++){let sum=0;for(let y=0;y<size;y++)for(let x=0;x<size;x++)sum+=A[Math.floor(r/size)*size+y][Math.floor(c/size)*size+x];error+=((A[r][c]-sum/size**2)/2)**2;}assert.equal(answer('image-compression:'+key),error/64);}
 assert.equal(answer('fractals:repeat-loop'),4096);assert.equal(answer('fractals:carpet-plot'),6561);assert.equal(answer('fractals:fractal-challenge'),625);
});

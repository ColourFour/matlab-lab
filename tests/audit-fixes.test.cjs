const {test}=require('node:test'),assert=require('node:assert/strict');
const {client}=require('./app-harness.cjs');
const Storage=require('../assets/storage.js');
const C=require('../assets/core.js');
const fixture=client(new Map(),'#/','?review=1'),G=fixture.ctx.LAB_GUIDES;
const question=k=>G[k].find(s=>s.question).question;
function finish(a,key){const ss=G[key];for(let i=0;i<ss.length-1;i++){if(ss[i].question){const q=ss[i].question;a.submit(Array.isArray(q.answer)?q.answer.join(' '):String(q.answer));assert.match(a.app.innerHTML,/step-feedback is-correct/);}a.click('next-step');}}
function fresh(storage,hash='#/'){return client(storage,hash);}
test('A stale tab changing language cannot erase a completed lesson or solved result',()=>{
 const shared=new Map(),a=client(shared),b=client(shared);finish(a,'bootcamp:first-command');b.language('en');const c=fresh(shared,'#/bootcamp/variables');assert.match(c.app.innerHTML,/data-lesson="variables"/);a.goto('#/bootcamp/first-command');assert.match(a.app.innerHTML,/Lesson complete|本课完成/);a.sync();assert.match(a.app.innerHTML,/Lesson complete|本课完成/);
});
test('Notes in different sections and different fields survive stale saves',()=>{
 const shared=new Map(),a=client(shared,'#/investigation/define-problem'),b=client(shared,'#/investigation/design-alternatives');const ca=a.ctx.LAB_COURSES.investigation,la=ca.lessons[0],lb=ca.lessons.find(l=>l.id==='design-alternatives');
 const fields=l=>Object.fromEntries(l.prompts.map(p=>[p.id,'Evidence '+l.id]));a.notes(fields(la));b.notes(fields(lb));const c=fresh(shared,'#/investigation/define-problem');assert.match(c.app.innerHTML,/Evidence define-problem/);c.goto('#/investigation/design-alternatives');assert.match(c.app.innerHTML,/Evidence design-alternatives/);
 const x=client(shared,'#/investigation/define-problem'),y=client(shared,'#/investigation/define-problem');x.notes({...fields(la),[la.prompts[0].id]:'Changed first'});y.notes({...fields(la),[la.prompts[1].id]:'Changed second'});const z=fresh(shared,'#/investigation/define-problem');assert.match(z.app.innerHTML,/Changed first/);assert.match(z.app.innerHTML,/Changed second/);
});
test('Concurrent edits to the same note preserve both versions and show a warning',()=>{
 const shared=new Map(),a=client(shared,'#/investigation/define-problem'),b=client(shared,'#/investigation/define-problem'),l=a.ctx.LAB_COURSES.investigation.lessons[0];a.notes({[l.prompts[0].id]:'Version A'});b.notes({[l.prompts[0].id]:'Version B'});assert.match(b.status.textContent,/Both versions|两个版本/);const c=fresh(shared,'#/investigation/define-problem');assert.match(c.app.innerHTML,/Version A/);assert.match(c.app.innerHTML,/Version B/);
});
test('Reset propagates to stale tabs without resurrecting progress; notes and language survive',()=>{
 const shared=new Map(),a=client(shared),b=client(shared);finish(a,'bootcamp:first-command');a.goto('#/investigation/define-problem');const l=a.ctx.LAB_COURSES.investigation.lessons[0];a.notes({[l.prompts[0].id]:'Kept through reset'});a.language('en');a.click('confirm-reset');b.language('en');b.click('next-step');const c=fresh(shared,'#/bootcamp/variables');assert.doesNotMatch(c.app.innerHTML,/data-lesson="variables"/);c.goto('#/investigation/define-problem');assert.match(c.app.innerHTML,/Kept through reset/);assert.equal(c.ctx.document.documentElement.lang,'en');
});
test('Self-review removals are respected by stale tabs, and preview never writes',()=>{
 const shared=new Map(),a=client(shared,'#/investigation/define-problem'),l=a.ctx.LAB_COURSES.investigation.lessons[0];a.notes(Object.fromEntries(l.prompts.map(p=>[p.id,'Evidence'])));a.click('review-section');const b=client(shared,'#/investigation/define-problem');a.click('review-section');b.language('en');assert.match(fresh(shared,'#/investigation/define-problem').app.innerHTML,/Record my self-review/);const before=JSON.stringify([...shared]);const r=client(shared,'#/investigation/define-problem','?review=1');r.notes(Object.fromEntries(l.prompts.map(p=>[p.id,'Preview'])));r.language('zh');assert.equal(JSON.stringify([...shared]),before);
});
test('Storage events refresh the displayed course and do not overwrite another section',()=>{
 const shared=new Map(),a=client(shared),b=client(shared);finish(a,'bootcamp:first-command');b.sync();b.goto('#/bootcamp/variables');assert.match(b.app.innerHTML,/data-lesson="variables"/);
});
test('Legacy saved work migrates once; reset defaults cannot reimport old completions',()=>{
 const saved={version:2,lang:'en',progress:{bootcamp:{version:1,completed:['first-command']}}};const shared=new Map([['matlab-lab:v2',JSON.stringify(saved)]]);const a=client(shared,'#/bootcamp/variables');assert.match(a.app.innerHTML,/data-lesson="variables"/);a.click('confirm-reset');assert.doesNotMatch(fresh(shared,'#/bootcamp/variables').app.innerHTML,/data-lesson="variables"/);
});
test('Unavailable storage still leaves usable temporary lessons and a visible warning',()=>{
 const broken={get(){return null;},set(){throw Error('Quota');}};const a=client(broken);assert.match(a.app.innerHTML,/cannot be saved|无法保存进度/);a.click('next-step');assert.match(a.app.innerHTML,/data-step="1"/);
});
test('Documented MATLAB rounding is accepted without widening integer or arbitrary decimal answers',()=>{
 assert.ok(C.validate(question('image-compression:compression-challenge'),'1.7094e+3'));assert.ok(C.validate(question('epidemics:one-update'),'9.7208e+2 2.6675e+1 1.2500e+0'));assert.ok(C.validate(question('epidemics:one-update'),'ans =\n1.0e+03 *\n0.9721 0.0267 0.0013'));
 for(const raw of ['1709','1.7095e+3','1.7e3'])assert.equal(C.validate(question('image-compression:compression-challenge'),raw),false,raw);
 assert.equal(C.validate(question('fractals:fractal-challenge'),'624'),false);
});
test('Safe IME forms and MATLAB headers are accepted; code and malformed lists never run',()=>{
 const q=question('bootcamp:vectors');for(const raw of ['55，93，129','５５ ９３ １２９','scores =\n[55 93 129]'])assert.ok(C.validate(q,raw),raw);
 for(const raw of ['scores = 37+18 93 129','x = y = 55 93 129','55,,93,129','NaN 93 129','55 93 129 junk','55;93;129','1e999'])assert.equal(C.validate(q,raw),false,raw);
 assert.equal(C.assess(q,'').reason,'blank');assert.equal(C.assess(q,'2+3').reason,'format');assert.equal(C.assess(q,'55 93').reason,'count');assert.equal(C.assess(q,'55 93 128').reason,'value');
 assert.equal(C.parseNumber('ans = −２.５'),-2.5);
});
test('The actual form displays a distinct format, count, and wrong-value message',()=>{
 const a=client(new Map(),'#/bootcamp/vectors','?review=1');a.language('en');const steps=G['bootcamp:vectors'];a.click('jump-step',{index:steps.findIndex(s=>s.question)});
 a.submit('55,,93,129');assert.match(a.app.innerHTML,/Paste numbers only/);a.submit('55 93');assert.match(a.app.innerHTML,/Enter 3 values/);a.submit('55 93 128');assert.match(a.app.innerHTML,/The values differ/);a.submit('scores =\n５５，９３，１２９');assert.match(a.app.innerHTML,/step-feedback is-correct/);
});
test('Saved Editor lessons include the fresh checkpoint and keep stable cursor IDs',()=>{
 for(const[key,ss]of Object.entries(G)){if(!ss.some(s=>s.filename))continue;for(const s of ss.filter(s=>s.code))assert.equal(s.append,true,key);const gate=ss.find(s=>s.question);assert.ok(ss.filter(s=>s.code).map(s=>s.code).join('\n').includes(gate.code));}
 const key='image-compression:compression-challenge',steps=G[key],old={version:2,lessons:{[key]:{cursor:11,reached:11,answers:{'transfer-v2':'1709.375'},solved:['transfer-v2']}}};const st=fixture.ctx.LabGuide.clean(old,G,C).lessons[key];assert.equal(steps[st.cursor].id,'11');
});
test('Final image/SIR evidence includes drawing, matched reference visuals, checks, and PNG saving',()=>{
 for(const k of ['image-compression:compression-challenge','epidemics:time-step-challenge']){const ss=G[k];assert.ok(ss.some(s=>/\b(imagesc|plot)\(/.test(s.code||'')),k);assert.ok(ss.some(s=>s.phase==='compare'&&s.plot),k);assert.ok(ss.some(s=>/saveas\(/.test(s.code||'')),k);for(const s of ss.filter(s=>s.plot))for(const lang of ['en','zh'])assert.match(fixture.ctx.LabDiagrams.plot(s.plot,lang),/<svg/);}
 const img=G['image-compression:compression-challenge'].filter(s=>s.code).map(s=>s.code).join('\n');assert.match(img,/reconstructed2 = kron/);assert.equal((img.match(/saveas\(/g)||[]).length,3);
 const sir=G['epidemics:time-step-challenge'].filter(s=>s.code).map(s=>s.code).join('\n');assert.match(sir,/max\(abs\(Sc\+Ic\+Rc-N\)\)/);assert.match(sir,/max\(abs\(S\+I\+R-N\)\)/);
});
test('Final explanations and diagrams describe the newly checked fractal and target models',()=>{
 assert.match(G['fractals:carpet-plot'].at(-1).text.en,/81 rows/);assert.match(G['fractals:repeat-loop'].at(-1).text.en,/four levels/);assert.match(G['fractals:fractal-challenge'].at(-1).text.en,/by 5/);assert.match(fixture.ctx.LabDiagrams.diagram('five-growth','en'),/625/);assert.match(G['projectile-motion:target-challenge'].at(-1).text.en,/51–53/);
});
test('All 48 lessons run through the actual app form/navigation and unlock the next course',()=>{
 const a=client(new Map());for(const c of Object.values(a.ctx.LAB_COURSES)){if(c.kind==='capstone')continue;for(const l of c.lessons){a.goto('#/'+c.id+'/'+l.id);assert.match(a.app.innerHTML,new RegExp('data-lesson="'+l.id+'"'));finish(a,c.id+':'+l.id);assert.match(a.app.innerHTML,/Lesson complete|本课完成/);}}
 const b=client(a.shared,'#/epidemics/complete');assert.match(b.app.innerHTML,/Project complete|项目完成/);
});

test('Conflicting full-length notes survive sanitation and export without truncating either version',()=>{const shared=new Map(),a=client(shared,'#/investigation/define-problem'),b=client(shared,'#/investigation/define-problem'),l=a.ctx.LAB_COURSES.investigation.lessons[0];const x='A'.repeat(6000),y='B'.repeat(6000);a.notes({[l.prompts[0].id]:x});b.notes({[l.prompts[0].id]:y});const c=fresh(shared,'#/investigation/define-problem');assert.ok(c.app.innerHTML.includes(x));assert.ok(c.app.innerHTML.includes(y));});
test('Reached progress merges forward even when a stale tab advances from an earlier step',()=>{
 const map=new Map(),disk={getItem:k=>map.get(k)??null,setItem:(k,v)=>map.set(k,v)},seed={lessons:{x:{reached:0,reachedId:'0'}}},merge=(path,v,other)=>path.at(-1)==='reached'?Math.max(v,other||0):Number(v)>Number(other||0)?v:other;
 const a=Storage.channel(disk,'guides',seed,{merge}),b=Storage.channel(disk,'guides',seed,{merge});a.save({lessons:{x:{reached:8,reachedId:'8'}}});b.save({lessons:{x:{reached:1,reachedId:'1'}}});assert.deepEqual(a.sync().lessons.x,{reached:8,reachedId:'8'});
});
test('Fine SIR and five-cell visuals match independent numerical rules',()=>{
 const V=fixture.ctx.LAB_VISUALS,curve=V['sir-fine'],[S,I,R]=curve.series.map(s=>s.y);assert.equal(curve.x.length,1201);
 for(let k=1;k<S.length;k++){const newCases=.05*.3*S[k-1]*I[k-1]/1000,rec=.05*.1*I[k-1];assert.ok(Math.abs(S[k]-(S[k-1]-newCases))<1e-9);assert.ok(Math.abs(I[k]-(I[k-1]+newCases-rec))<1e-9);assert.ok(Math.abs(R[k]-(R[k-1]+rec))<1e-9);assert.ok(Math.abs(S[k]+I[k]+R[k]-1000)<1e-8);}
 for(const n of [2,3,4]){const data=V['five-level-'+n].data;assert.equal(data.length,3**n);let count=0;for(let r=0;r<data.length;r++)for(let c=0;c<data.length;c++){let x=r,y=c,keep=true;for(let k=0;k<n;k++){if(!((x%3===y%3&&x%3!==1)||(x%3===1&&y%3===1)||(x%3===0&&y%3===2)||(x%3===2&&y%3===0)))keep=false;x=Math.floor(x/3);y=Math.floor(y/3);}assert.equal(data[r][c],keep?0:255);if(keep)count++;}assert.equal(count,5**n);}
});

test('Different guided lessons do not bounce resume updates between tabs',()=>{let writes=0;const shared=new Map();shared.set=function(k,v){writes++;return Map.prototype.set.call(this,k,v);};const a=client(shared);finish(a,'bootcamp:first-command');const b=client(shared,'#/bootcamp/variables');a.sync();b.sync();const before=writes;for(let n=0;n<8;n++){a.sync();b.sync();}assert.equal(writes,before);});

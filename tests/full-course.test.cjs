const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');const path=require('node:path');const vm=require('node:vm');
const root=path.join(__dirname,'..');
const context={};context.window=context;context.globalThis=context;vm.createContext(context);
const scripts=[...fs.readFileSync(path.join(root,'index.html'),'utf8').matchAll(/<script defer src="([^"]+)"/g)].map(x=>x[1]);
for(const s of scripts.filter(s=>s!=='assets/app.js'))vm.runInContext(fs.readFileSync(path.join(root,s),'utf8'),context,{filename:s});
const courses=context.LAB_COURSES,core=context.LabCore;
const close=(a,b,t=1e-8)=>assert.ok(Math.abs(a-b)<t,`${a} ≈ ${b}`);
test('Seven complete bilingual courses have 56 distinct lessons and real downloads',()=>{
 assert.equal(Object.keys(courses).length,7);const ids=new Set();
 for(const c of Object.values(courses)){
  assert.equal(c.lessons.length,8);assert.ok(fs.existsSync(path.join(root,c.reference)));
  if(c.requires)assert.equal(courses[c.requires].number,c.number-1);
  for(const l of c.lessons){
   assert.ok(!ids.has(l.id),l.id);ids.add(l.id);
   for(const k of ['title','short','goal','see','understand','compare','note','hint','success'])assert.ok(l[k]?.en&&l[k]?.zh,`${c.id}/${l.id}/${k}`);
   assert.ok(l.steps.length>=2&&l.steps.every(s=>s.en&&s.zh));
   assert.ok(l.code&&(l.output||l.outputPlot));
   if(l.download)assert.ok(fs.existsSync(path.join(root,l.download)),l.download);
   for(const q of l.questions){assert.ok(q.label.en&&q.label.zh);if(q.options)assert.ok(q.options.every(o=>o.label.en&&o.label.zh));}
  }
 }
 assert.equal(ids.size,56);
});
test('Every checkpoint accepts its intended answer and rejects empty and wrong values',()=>{
 for(const c of Object.values(courses))for(const l of c.lessons){const answers={};
  for(const q of l.questions){const a=q.dependsOn?q.answersByValue[answers[q.dependsOn]]:q.answers?.[0]??q.answer;
   answers[q.id]=Array.isArray(a)?a.join(' '):String(a);
   assert.ok(core.validate(q,answers[q.id],answers),`${c.id}/${l.id}/${q.id}`);
   assert.equal(core.validate(q,'',answers),false);
   assert.equal(core.validate(q,q.type==='choice'?'__wrong__':'99999999',answers),false);
  }
 }
});
test('All diagrams and expected figures render real SVGs in both languages',()=>{
 for(const c of Object.values(courses))for(const lang of ['en','zh']){
  for(const l of c.lessons){
   for(const [method,name] of [['diagram',l.diagram],['plot',l.outputPlot]].filter(x=>x[1])){
    const out=context.LabDiagrams[method](name,lang);assert.match(out,/<svg/);assert.match(out,/<desc>/);assert.ok(!out.includes('NaN')&&!out.includes('undefined'),name);
   }
  }
 }
});
test('Carpet level three matches independent base-three coordinate rule',()=>{
 const a=context.LAB_VISUALS['carpet-three'].data;let kept=0;
 for(let r=0;r<27;r++)for(let c=0;c<27;c++){
  let x=r,y=c,hole=false;for(let k=0;k<3;k++){if(x%3===1&&y%3===1)hole=true;x=Math.floor(x/3);y=Math.floor(y/3);}
  assert.equal(a[r][c],hole?255:0);if(!hole)kept++;
 }
 assert.equal(kept,512);
});
test('Image block averages and independent squared-error totals agree with checkpoints',()=>{
 const a=context.LAB_VISUALS['image-original'].data;
 for(const [b,name,expected] of [[2,'image-two',4250],[4,'image-four',6837.5]]){
  const out=context.LAB_VISUALS[name].data;let error=0;
  for(let r=0;r<8;r++)for(let c=0;c<8;c++){
   let sum=0;for(let rr=Math.floor(r/b)*b;rr<Math.floor(r/b)*b+b;rr++)for(let cc=Math.floor(c/b)*b;cc<Math.floor(c/b)*b+b;cc++)sum+=a[rr][cc];
   close(out[r][c],sum/(b*b));error+=(a[r][c]-out[r][c])**2;
  }
  close(error/64,expected);
 }
 assert.equal(courses['image-compression'].lessons[6].questions[0].answer,4250);
 assert.equal(courses['image-compression'].lessons[7].questions[1].answer,6837.5);
});
function simulate(beta,dt){let S=990,I=10,R=0,peak=I,day=0;for(let k=1;k<=Math.round(60/dt);k++){
 const a=dt*beta*S*I/1000,b=dt*.1*I;S-=a;I+=a-b;R+=b;
 close(S+I+R,1000,1e-8);assert.ok(Math.min(S,I,R)>=0);
 if(I>peak){peak=I;day=k*dt;}
 }return{peak,day};}
test('SIR reference samples conserve population and satisfy each simultaneous Euler update',()=>{
 const v=context.LAB_VISUALS['sir-curves'],[S,I,R]=v.series.map(s=>s.y);assert.equal(S.length,601);
 for(let k=0;k<S.length;k++){
  close(S[k]+I[k]+R[k],1000,1e-8);
  if(k){const infections=.1*.3*S[k-1]*I[k-1]/1000,recoveries=.1*.1*I[k-1];close(S[k],S[k-1]-infections);close(I[k],I[k-1]+infections-recoveries);close(R[k],R[k-1]+recoveries);}
 }
 const c=courses.epidemics;close(c.lessons[4].questions[0].answer,simulate(.3,.1).peak);
 close(c.lessons[4].questions[1].answer,simulate(.3,.1).day);
 close(c.lessons[6].questions[0].answer[0],simulate(.15,.1).peak);
 close(c.lessons[7].questions[0].answer,simulate(.3,.05).peak);
 const fine=simulate(.3,.025).peak;assert.ok(Math.abs(simulate(.3,.05).peak-fine)<Math.abs(simulate(.3,.1).peak-fine));
});
test('Worked investigation follows the square law and distinguishes percentage from factor',()=>{
 const v=context.LAB_VISUALS['investigation-sweep'];v.x.forEach((x,i)=>close(v.series[0].y[i],x*x/9.81));
 close(v.series[0].y[2]/v.series[0].y[0],4);close((21**2/20**2-1)*100,10.25);
});
test('Existing two-course progress survives expansion without auto-completing new courses',()=>{
 const old={version:2,lang:'zh',progress:{bootcamp:{version:1,completed:courses.bootcamp.lessons.map(l=>l.id)},'projectile-motion':{version:1,completed:courses['projectile-motion'].lessons.map(l=>l.id)}}};
 const state=core.cleanAppState(old,courses);assert.equal(state.lang,'zh');assert.equal(state.progress.bootcamp.completed.length,8);assert.equal(state.progress['projectile-motion'].completed.length,8);
 for(const id of ['probability','fractals','image-compression','epidemics','investigation'])assert.equal(state.progress[id].completed.length,0);
});
test('MATLAB editor and download names use valid identifiers',()=>{
 for(const c of Object.values(courses))for(const l of c.lessons)if(l.editor)assert.match(l.editor,/^[A-Za-z][A-Za-z0-9_]*\.m$/);
 for(const file of fs.readdirSync(path.join(root,'downloads')).filter(x=>x.endsWith('.m')))assert.match(file,/^[A-Za-z][A-Za-z0-9_]*\.m$/);
});

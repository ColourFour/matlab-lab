const {test}=require('node:test');
const assert=require('node:assert/strict');
const core=require('../assets/core.js');
const {trajectory}=require('../assets/physics.js');
const bootcamp=require('../content/bootcamp.js');
const projectile=require('../content/projectile-motion.js');
const courses={bootcamp,'projectile-motion':projectile};

test('The 45-degree trajectory matches analytic flight values and the sample at the peak',()=>{
  const m=trajectory(20,45),near=(a,b)=>assert.ok(Math.abs(a-b)<1e-10);
  near(m.vx,Math.sqrt(200));near(m.vy,Math.sqrt(200));near(m.time,2*Math.sqrt(200)/9.81);
  near(m.range,400/9.81);near(m.maxHeight,100/9.81);
  assert.equal(m.points.length,101);near(m.points[0].x,0);near(m.points[0].y,0);
  near(m.points[100].x,m.range);near(m.points[100].y,0);near(m.points[50].y,m.maxHeight);
  for(let i=1;i<m.points.length;i++)assert.ok(m.points[i].x>m.points[i-1].x);
});
test('Both target solutions land in the zone and have distinct, correct peak heights',()=>{
  const low=trajectory(20,30),high=trajectory(20,60);
  assert.ok(low.range>34&&low.range<36);assert.ok(high.range>34&&high.range<36);
  assert.ok(Math.abs(low.range-high.range)<1e-10);
  assert.ok(Math.abs(low.maxHeight-50/9.81)<1e-10);
  assert.ok(Math.abs(high.maxHeight-150/9.81)<1e-10);
  assert.ok(trajectory(20,45).range>36);
});
test('All Project 1 checkpoints accept matching solutions and reject blank input',()=>{
  for(const l of projectile.lessons){
    const answers={};
    for(const q of l.questions){
      const expected=q.dependsOn?q.answersByValue[answers[q.dependsOn]]:q.answers?.[0]??q.answer;
      answers[q.id]=Array.isArray(expected)?expected.join(' '):String(expected);
      assert.ok(core.validate(q,answers[q.id],answers),`${l.id}:${q.id}`);
      assert.equal(core.validate(q,'',answers),false);
    }
  }
});
test('Final submission checks the chosen angle against the height, not just either allowed number',()=>{
  const q=projectile.lessons[7].questions.find(q=>q.id==='height');
  assert.ok(core.validate(q,'5.10',{angle:'30'}));assert.ok(core.validate(q,'15.29',{angle:'60'}));
  assert.equal(core.validate(q,'15.29',{angle:'30'}),false);
  assert.equal(core.validate(q,'5.10',{angle:'60'}),false);
  assert.equal(core.validate(q,'0',{}),false);
});
test('Classroom rounding is accepted without admitting incorrect estimates',()=>{
  const q=projectile.lessons[1].questions[0];
  assert.ok(core.validate(q,'14.14'));assert.ok(core.validate(q,'14.1421'));
  assert.equal(core.validate(q,'14.2'),false);assert.equal(core.validate(q,'14.14 m/s'),false);
  const r=projectile.lessons[6].questions[0];
  assert.ok(core.validate(r,'[35.31 40.77 35.31]'));assert.equal(core.validate(r,'[35.31 35.31 40.77]'),false);
});
test('Legacy Boot Camp progress migrates without completing Project 1',()=>{
  const legacy={version:1,lang:'zh',completed:bootcamp.lessons.map(l=>l.id)};
  const state=core.cleanAppState(null,courses,legacy);
  assert.equal(state.lang,'zh');assert.equal(state.progress.bootcamp.completed.length,8);
  assert.equal(state.progress['projectile-motion'].completed.length,0);
});
test('Two course histories persist independently and malformed later completions cannot skip lessons',()=>{
  const state=core.cleanAppState({version:2,lang:'en',progress:{bootcamp:{version:1,completed:['first-command']},'projectile-motion':{version:1,completed:['target-challenge']}}},courses);
  assert.deepEqual(state.progress.bootcamp.completed,['first-command']);
  assert.deepEqual(state.progress['projectile-motion'].completed,[]);
  assert.equal(core.cleanAppState(state,courses).progress.bootcamp.completed.length,1);
});
test('All sixteen lesson IDs are distinct and both translations cover each new lesson',()=>{
  const ids=[...bootcamp.lessons,...projectile.lessons].map(l=>l.id);
  assert.equal(new Set(ids).size,16);
  for(const l of projectile.lessons){
    for(const key of ['title','short','goal','see','understand','compare','note','hint','success'])assert.ok(l[key].en&&l[key].zh,`${l.id}:${key}`);
    for(const step of l.steps)assert.ok(step.en&&step.zh);
    assert.ok(l.editor&&l.code&&l.diagram&&(l.output||l.outputPlot));
  }
});

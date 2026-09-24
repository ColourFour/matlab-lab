// Run with Node 18+: node --test tests/core.test.cjs
const {test}=require('node:test');
const assert=require('node:assert/strict');
const {parseNumber,parseVector,validate,cleanState}=require('../assets/core.js');
const {lessons}=require('../content/bootcamp.js');

test('Numeric entries accept decimals and scientific notation, never expressions',()=>{
  for(const [raw,want] of [[' 7 ',7],['7.0',7],['7e0',7],['-2.5',-2.5],['.5',.5]]) assert.equal(parseNumber(raw),want);
  for(const raw of ['', ' ', '7junk', 'NaN','Infinity','1e999','2+5','ans = 7','[7]','0x7']) assert.equal(parseNumber(raw),null,raw);
});
test('Vector entries accept spaces, commas or optional brackets; reject missing and extra values',()=>{
  for(const raw of ['0 2 4 6 8','[0 2 4 6 8]','0,2,4,6,8',' [0, 2, 4, 6, 8] ']) assert.deepEqual(parseVector(raw),[0,2,4,6,8]);
  for(const raw of ['', '[', '[1 2','1 2]', '[1;2]','1,,2',',1 2','1 2,','[1 NaN]','0:2:8']) assert.equal(parseVector(raw),null,raw);
  const q=lessons[3].questions[0];
  assert.equal(validate(q,'0 2 4 6'),false);
  assert.equal(validate(q,'0 2 4 6 8 10'),false);
  assert.equal(validate(q,'8 6 4 2 0'),false);
});
test('All checkpoints accept correct results and reject empty, malformed and incorrect submissions',()=>{
  for(const l of lessons) for(const q of l.questions){
    const correct=Array.isArray(q.answer)?q.answer.join(' '):String(q.answer);
    assert.equal(validate(q,correct),true,`${l.id}:${q.id}`);
    assert.equal(validate(q,''),false);
    assert.equal(validate(q,'<script>alert(1)</script>'),false);
    assert.equal(validate(q,'999'),false);
  }
});
test('State sanitation blocks out-of-order unlocks and safely handles corrupt data',()=>{
  assert.equal(cleanState(null,lessons).lang,'en');
  assert.deepEqual(cleanState({version:1,completed:['mini-challenge']},lessons).completed,[]);
  const result=cleanState({version:1,lang:'zh',completed:['first-command','variables','mini-challenge'],lastLesson:'mini-challenge'},lessons);
  assert.deepEqual(result.completed,['first-command','variables']);
  assert.equal(result.lang,'zh');
  assert.equal(result.lastLesson,'vectors');
  assert.equal(cleanState({version:999,lang:'zh',completed:lessons.map(l=>l.id)},lessons).completed.length,0);
  assert.equal(cleanState({version:1,completed:lessons.map(l=>l.id)},lessons).completed.length,8);
});
test('Both languages cover every instructional text and checkpoint',()=>{
  const ids=new Set();
  for(const l of lessons){
    assert.ok(!ids.has(l.id));ids.add(l.id);
    for(const key of ['title','short','goal','see','understand','compare','note','hint','success']){
      assert.ok(l[key].en?.length,`${l.id} ${key} en`);assert.ok(l[key].zh?.length,`${l.id} ${key} zh`);
    }
    for(const s of l.steps)assert.ok(s.en&&s.zh);
    for(const q of l.questions){assert.ok(q.label.en&&q.label.zh);if(q.options) for(const o of q.options)assert.ok(o.label.en&&o.label.zh);}
    assert.ok(l.code&&l.diagram&&(l.output||l.outputPlot));
  }
});
test('Final model checkpoints agree with independent numeric calculation',()=>{
  const times=[0,1,2,3,4],heights=times.map(t=>4*t-t*t);
  assert.deepEqual(heights,lessons[7].questions[0].answer);
  assert.equal(times[heights.indexOf(Math.max(...heights))],lessons[7].questions[1].answer);
});

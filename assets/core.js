(function (root) {
  'use strict';
  const numeric = /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i;
  function normalize(raw) {
    return String(raw ?? '').normalize('NFKC').replace(/[−–]/g,'-').replace(/，/g,',').trim()
      .replace(/^[A-Za-z]\w*\s*=\s*/, '');
  }
  function tokens(raw) {
    let value=normalize(raw), scale=1, scaled=false;
    const factor=value.match(/^([+-]?(?:\d+(?:\.\d*)?|\.\d+)e[+-]?\d+)\s*\*\s*/i);
    if(factor){scale=Number(factor[1]);value=value.slice(factor[0].length).trim();scaled=true;}
    if(value.startsWith('[')&&value.endsWith(']'))value=value.slice(1,-1).trim();
    if(!value||/[\[\];=]/.test(value)||/^,|,$|,\s*,/.test(value)||!Number.isFinite(scale))return null;
    const parts=value.split(/[\s,]+/);
    if(!parts.every(p=>numeric.test(p)&&Number.isFinite(Number(p)*scale)))return null;
    return parts.map(p=>({value:Number(p)*scale,token:p,scale,scaled}));
  }
  function parseNumber(raw) {const xs=tokens(raw);return xs?.length===1?xs[0].value:null;}
  function parseVector(raw) {const xs=tokens(raw);return xs?xs.map(x=>x.value):null;}
  function matches(x,expected,q) {
    if(!x||!Number.isFinite(expected))return false;
    if(Math.abs(x.value-expected)<=(q.tolerance??1e-8))return true;
    if(!q.matlabDisplay)return false;
    // Only documented four-decimal MATLAB mantissas get a rounding allowance.
    const scientific=x.token.match(/^[+-]?\d\.(\d{4})e([+-]?\d+)$/i);
    const unit=scientific?10**(Number(scientific[2])-4)*Math.abs(x.scale):x.scaled&&/^[+-]?\d+\.\d{4}$/.test(x.token)?Math.abs(x.scale)*1e-4:0;
    return unit>0&&Math.abs(x.value-expected)<=unit/2+Number.EPSILON*Math.max(1,Math.abs(expected))*4;
  }
  function assess(question,raw,answers={}) {
    const expected=question.dependsOn?question.answersByValue[answers[question.dependsOn]]:question.answer;
    if(!String(raw??'').trim())return {ok:false,reason:'blank'};
    if(question.type==='number'||question.type==='vector'){
      const xs=tokens(raw);if(!xs)return {ok:false,reason:'format'};
      const wanted=question.type==='number'?[expected]:expected;
      if(!Array.isArray(wanted)||xs.length!==wanted.length)return {ok:false,reason:'count',count:wanted?.length??1};
      const ok=xs.every((x,i)=>matches(x,wanted[i],question));return {ok,reason:ok?'correct':'value'};
    }
    const ok=(question.answers||[expected]).includes(String(raw??''));return {ok,reason:ok?'correct':'value'};
  }
  function validate(question,raw,answers={}) {return assess(question,raw,answers).ok;}
  function cleanState(raw, lessons) {
    const candidate = raw && raw.version === 1 ? raw : {};
    const supplied = Array.isArray(candidate.completed) ? candidate.completed : [];
    const completed = [];
    const open=lessons.every(l=>l.open===true);
    // Guided lessons require a prefix; independent self-reviews may be recorded in any order.
    for (const lesson of lessons) { if (!supplied.includes(lesson.id)) {if(open)continue;break;} completed.push(lesson.id); }
    const index = lessons.findIndex(l => l.id === candidate.lastLesson);
    return { version: 1, lang: candidate.lang === 'zh' ? 'zh' : 'en', completed,
      lastLesson: index >= 0 && (open || index <= completed.length) ? candidate.lastLesson : lessons[Math.min(completed.length, lessons.length-1)].id };
  }
  function cleanAppState(raw,courses,legacy=null) {
    const candidate=raw?.version===2?raw:{};
    const progress={};
    for(const [id,course] of Object.entries(courses)) progress[id]=cleanState(candidate.progress?.[id] || (id==='bootcamp'?legacy:null),course.lessons);
    const lang=candidate.lang ?? legacy?.lang;
    return {version:2,lang:lang==='zh'?'zh':'en',progress};
  }
  const api = { normalize, parseNumber, parseVector, assess, validate, cleanState, cleanAppState };
  root.LabCore = api;
  if (typeof module !== 'undefined') module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);

(function (root) {
  'use strict';
  const numeric = /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i;
  function parseNumber(raw) {
    const value = String(raw ?? '').trim();
    return numeric.test(value) && Number.isFinite(Number(value)) ? Number(value) : null;
  }
  function parseVector(raw) {
    let value = String(raw ?? '').trim();
    if (value.startsWith('[') && value.endsWith(']')) value = value.slice(1,-1).trim();
    if (!value || /[\[\];]/.test(value) || /^,|,$|,\s*,/.test(value)) return null;
    const parts = value.split(/[\s,]+/).map(parseNumber);
    return parts.every(x => x !== null) ? parts : null;
  }
  const near = (a,b,tolerance=1e-8) => a !== null && Number.isFinite(b) && Math.abs(a-b) <= tolerance;
  function validate(question, raw, answers={}) {
    const expected = question.dependsOn ? question.answersByValue[answers[question.dependsOn]] : question.answer;
    const tolerance = question.tolerance ?? 1e-8;
    if (question.type === 'number') return near(parseNumber(raw), expected, tolerance);
    if (question.type === 'vector') {
      const actual = parseVector(raw);
      return actual !== null && actual.length === expected.length && actual.every((v,i) => near(v,expected[i],tolerance));
    }
    return (question.answers || [expected]).includes(String(raw ?? ''));
  }
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
  const api = { parseNumber, parseVector, validate, cleanState, cleanAppState };
  root.LabCore = api;
  if (typeof module !== 'undefined') module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);

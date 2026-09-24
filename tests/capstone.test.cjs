const {test}=require('node:test');const assert=require('node:assert/strict');const fs=require('node:fs');const vm=require('node:vm');
const core=require('../assets/core.js'),cap=require('../assets/capstone.js');
const ctx={};ctx.window=ctx;vm.createContext(ctx);vm.runInContext(fs.readFileSync(require.resolve('../content/investigation.js'),'utf8'),ctx);const course=ctx.LAB_EXTENSIONS.investigation;
test('Independent project has no prerequisite or answer-key gates',()=>{
 assert.equal(course.kind,'capstone');assert.ok(!course.requires&&course.openNavigation);assert.equal(course.lessons.length,8);
 for(const l of course.lessons){assert.ok(l.open);assert.equal(l.questions,undefined);assert.equal(l.code,undefined);for(const p of l.prompts)assert.ok(p.label.en&&p.label.zh);}
 assert.equal(course.requirements.length,5);assert.equal(course.rubric.length,5);
 assert.match(course.requirements[1].en,/at least two alternatives/);assert.match(course.requirements[2].en,/unseen/);
});
test('Independent self-review persists out of order; guided course locks still require a prefix',()=>{
 const last=course.lessons[7].id;
 const raw={version:1,completed:[last,last,'not-a-section'],lastLesson:last};
 const state=core.cleanState(raw,course.lessons);assert.deepEqual([...state.completed],[last]);assert.equal(state.lastLesson,last);
 const guided=[{id:'a'},{id:'b'},{id:'c'}];assert.deepEqual(core.cleanState({version:1,completed:['c']},guided).completed,[]);
});
test('Previous Project 6 quiz completions cannot masquerade as new self-reviews',()=>{
 const old={version:1,completed:['research-question','make-prediction','fair-test-plan','collect-evidence','graph-evidence','test-prediction','sensitivity-limits','independent-study']};
 assert.equal(core.cleanState(old,course.lessons).completed.length,0);
});
test('Notebook accepts only defined fields and bounded text; review asks for presence, not a fake quality score',()=>{
 const stage=course.lessons[0],field=stage.prompts[0].id,other=stage.prompts[1].id;
 const raw={notes:{[stage.id]:{[field]:'x'.repeat(7000),[other]:123,unexpected:'ignored'},unknown:{text:'ignored'}}};
 const book=cap.cleanNotebook(raw,course);assert.equal(book.notes[stage.id][field].length,6000);assert.equal(book.notes[stage.id][other],'');assert.equal(book.notes.unknown,undefined);
 assert.equal(cap.ready(book.notes[stage.id],stage),false);book.notes[stage.id][other]='  ';assert.equal(cap.ready(book.notes[stage.id],stage),false);
 book.notes[stage.id][other]='See baseline.m';assert.equal(cap.ready(book.notes[stage.id],stage),true);
});
test('Notebook export preserves student text, bilingual prompts and out-of-order self-review status',()=>{
 const book=cap.cleanNotebook(null,course),last=course.lessons[7];book.notes[last.id][last.prompts[0].id]='main.m — 我的模型\nResults: no feasible improvement.';
 const out=cap.exportNotes(course,book,[last.id]);assert.match(out,/我的模型/);assert.match(out,/no feasible improvement/);assert.match(out,/Self-review recorded/);assert.match(out,/Self-review not recorded/);
 assert.equal((out.match(/^## /gm)||[]).length,8);
});
test('Student notes are escaped before they enter the page',()=>{
 const book=cap.cleanNotebook(null,course),l=course.lessons[0];book.notes[l.id][l.prompts[0].id]='</textarea><script>alert(1)</script>';
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const v={fmt:x=>esc(x.en),tr:(en,zh)=>en,esc,icon:()=>'',completed:[],review:false};const html=cap.stage(course,l,0,v,book);
 assert.ok(!html.includes('<script>'));assert.ok(html.includes('&lt;/textarea&gt;&lt;script&gt;'));
});

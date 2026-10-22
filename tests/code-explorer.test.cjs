const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const ctx={};ctx.window=ctx;vm.createContext(ctx);for(const path of ['content/guided.js','content/code-help.js','assets/code-explorer.js'])vm.runInContext(fs.readFileSync(require('node:path').join(__dirname,'..',path),'utf8'),ctx);
const E=ctx.LabCodeExplorer,G=ctx.LAB_GUIDES;
const tokens=(code,key)=>E.analyze(code,{lessonKey:key}),at=(code,key,text)=>tokens(code,key).find(t=>t.text===text);
test('All 214 course examples keep every source character and explain all non-whitespace tokens in both languages',()=>{
 let count=0;for(const[key,steps]of Object.entries(G))for(const s of steps)if(s.code){count++;const out=E.analyze(s.code,{lessonKey:key,stepId:s.id});assert.equal(out.map(t=>t.text).join(''),s.code,key);for(const t of out.filter(t=>t.type!=='space')){assert(t.explanation?.body.en&&t.explanation.body.zh,key+':'+t.text);assert(!t.explanation.body.en.startsWith('A piece of MATLAB'),key+': missing specific help for '+t.text);assert(!t.explanation.body.en.startsWith('A value stored under this name'),key+': missing variable context for '+t.text);}}
 assert.equal(count,214);
});
test('Variable meanings come from the current project, not just the spelling',()=>{
 assert.match(at('I(101)','epidemics:sir-history','I').explanation.body.en,/infected/);assert.match(at('t','epidemics:sir-history','t').explanation.body.en,/days/);assert.match(at('t','projectile-motion:flight-time','t').explanation.body.en,/seconds/);assert.match(at('A','image-compression:pixels','A').explanation.body.en,/original image/);assert.match(at('A','fractals:repeat','A').explanation.body.en,/fractal/);
});
test('Known arrays use indexing, functions use arguments and quoted label words stay text',()=>{
 const a=tokens("A(3,4); title('Time (s)');",'image-compression:pixels');assert.match(a.find(t=>t.text==='(').explanation.body.en,/array positions/);assert.match(a.find(t=>t.text===',').explanation.body.en,/row comes first/);assert.equal(a.filter(t=>t.text.includes('Time')).length,1);assert.equal(a.find(t=>t.text.includes('Time')).type,'string');assert.match(a.find(t=>t.text==='title').explanation.body.en,/title/);
});
test('Semicolons and end are explained according to their role',()=>{
 const a=tokens('A = [1 2; 3 4];','image-compression:pixels').filter(t=>t.text===';');assert.match(a[0].explanation.body.en,/new row/);assert.match(a[1].explanation.body.en,/without printing/);
 const b=tokens('for k=1:3\n I(k)=I(end);\nend','epidemics:loop').filter(t=>t.text==='end');assert.match(b[0].explanation.body.en,/last available position/);assert.match(b[1].explanation.body.en,/Closes the current loop/);
});
test('Colon flattening, range limits and multi-output syntax keep their different meanings',()=>{
 assert.match(at('mean(difference(:).^2)','image-compression:error',':').explanation.body.en,/one column vector/);assert.doesNotMatch(at('mean(difference(:).^2)','image-compression:error',':').explanation.body.en,/block\(:\)/);
 assert.match(at('t=1.5:0.7:5','bootcamp:ranges',':').explanation.body.en,/only if a step lands/);assert.match(at('[peak,where]=max(I)','epidemics:peak','[').explanation.body.en,/output names/);
});
test('Dotted arithmetic, dimensions and seeded randomness explain the purpose of the syntax',()=>{
 assert.match(at('x.^2','bootcamp:operations','.^').explanation.body.en,/each entry separately/);assert.match(at('3*x','bootcamp:operations','*').explanation.body.en,/scales/);assert.match(at('rand(1,5)','probability:random','5').explanation.body.en,/size input/i);assert.match(at("rng(7,'twister')",'probability:random','7').explanation.body.en,/seed/);assert.match(at('linspace(0,flightTime,101)','projectile-motion:flight-time','101').explanation.body.en,/number.*points/);
});
test('Tokenizer keeps comments, escaped strings, decimals, scientific notation and transpose distinct',()=>{
 const src="A = [1e-10 .5]; % plot(x) is a comment\nB = A'; title('Student''s graph'); x=3.*A;";const out=E.tokenize(src);assert.equal(out.map(t=>t.text).join(''),src);assert(out.some(t=>t.type==='comment'&&t.text.includes('plot(x)')));assert(out.some(t=>t.type==='string'&&t.text==="'Student''s graph'"));assert(out.some(t=>t.type==='symbol'&&t.text==="'"));assert(out.some(t=>t.type==='number'&&t.text==='1e-10'));assert(out.some(t=>t.type==='number'&&t.text==='.5'));assert(out.some(t=>t.text==='.*'));assert(!out.some(t=>t.type==='word'&&t.text==='plot'));
});
test('Explanations never calculate or read checkpoint answers',()=>{
 const text=tokens('137 + 286','bootcamp:first-command').map(t=>JSON.stringify(t.explanation||{})).join('');assert(!text.includes('423'));
 const dangerous={id:'private',code:'x=1',get question(){throw Error('Read an answer');},get output(){throw Error('Read an expected result');}};ctx.LAB_GUIDES.test=[dangerous,{id:'now',code:'x+2'}];assert.doesNotThrow(()=>E.analyze('x+2',{lessonKey:'test',stepId:'now'}));
});
test('Rendering escapes source and metadata and keeps one keyboard entry point',()=>{
 const html=E.render("title('<img src=x onerror=alert(1)>')",{lessonKey:'x" onmouseover="bad',stepId:'<script>'});assert(!html.includes('<img'));assert(!html.includes('<script>'));assert(html.includes('&lt;img'));assert.equal((html.match(/tabindex="0"/g)||[]).length,1);assert(!/\beval\s*\(|new Function\s*\(/.test(fs.readFileSync(require('node:path').join(__dirname,'../assets/code-explorer.js'),'utf8')));
});

import fs from 'node:fs';import test from 'node:test';import assert from 'node:assert/strict';import {fileURLToPath} from 'node:url';
process.chdir(fileURLToPath(new URL('../',import.meta.url)));
const {Window}=await import(process.env.HAPPY_DOM_MODULE||'./runtime/node_modules/happy-dom/lib/index.js');
const scripts=[...fs.readFileSync('index.html','utf8').matchAll(/<script defer src="([^"]+)"/g)].map(m=>m[1].split('?')[0]).filter(s=>!s.includes('classroom-config'));
const tick=ms=>new Promise(r=>setTimeout(r,ms||10));
function page(t,{review=true}={}){
 const w=new Window({url:'http://localhost/'+(review?'?review=1':'')+'#/bootcamp/first-command'});t.after(()=>w.happyDOM.close());w.document.body.innerHTML='<a class="skip-link" href="#main"></a><div id="app"></div>';w.LAB_CLASSROOM_CONFIG={enabled:false};w.localStorage.setItem('matlab-lab:intro:v1','seen');w.HTMLElement.prototype.scrollIntoView=function(){};w.scrollTo=()=>{};w.HTMLDialogElement.prototype.showModal=function(){this.open=true;};w.HTMLDialogElement.prototype.close=function(){this.open=false;};w.HTMLMediaElement.prototype.play=()=>Promise.resolve();w.HTMLMediaElement.prototype.pause=()=>{};const copies=[];w.navigator.clipboard.writeText=async text=>copies.push(text);
 for(const file of scripts)w.eval(fs.readFileSync(file,'utf8'));w.document.dispatchEvent(new w.Event('DOMContentLoaded'));
 const el=s=>{const e=w.document.querySelector(s);assert(e,s);return e;};
 return {w,el,copies,tip:()=>el('#lab-code-tooltip'),token(text){const el=Array.from(w.document.querySelectorAll('.code-explorer [data-code-token]')).find(e=>e.textContent===text);assert(el,text);return el;},async show(key,predicate){w.location.hash='#/'+key.replace(':','/');w.dispatchEvent(new w.Event('hashchange'));const i=w.LAB_GUIDES[key].findIndex(predicate);assert(i>=0);el('[data-action=jump-step][data-index="'+i+'"]').click();await tick();},over(el){el.dispatchEvent(new w.MouseEvent('pointerover',{bubbles:true}));},key(el,key){el.dispatchEvent(new w.KeyboardEvent('keydown',{key,bubbles:true,cancelable:true}));},async click(s){el(s).click();await tick();}};
}
test('Hover shows the current variable meaning, an accessible description and a highlighted token',async t=>{
 const p=page(t);await p.show('projectile-motion:speed-components',s=>s.code?.includes('vx ='));const vx=p.token('vx');p.over(vx);assert.equal(p.tip().hidden,false);assert.match(p.tip().textContent,/horizontal launch velocity/);assert.match(p.tip().textContent,/stored under this name/);assert.equal(vx.getAttribute('aria-describedby'),p.tip().id);assert(vx.classList.contains('code-selected'));
});
test('The tooltip stays open while the pointer moves into it, and Escape dismisses it',async t=>{
 const p=page(t);await p.show('bootcamp:operations',s=>s.code?.includes('.^'));const dot=p.token('.^');p.over(dot);dot.dispatchEvent(new p.w.MouseEvent('pointerout',{bubbles:true,relatedTarget:p.tip()}));p.tip().dispatchEvent(new p.w.MouseEvent('pointerenter'));await tick(220);assert.equal(p.tip().hidden,false);p.key(dot,'Escape');assert(p.tip().hidden);assert.equal(dot.hasAttribute('aria-describedby'),false);
});
test('Hovering another token replaces the explanation after a pinned click',async t=>{
 const p=page(t);await p.show('bootcamp:operations',s=>s.code?.includes('.^'));p.token('x').click();p.over(p.token('.^'));assert.match(p.tip().textContent,/each entry separately/);assert.equal(p.w.document.querySelectorAll('.code-selected').length,1);
});
test('Keyboard arrows use a single tab stop and expose descriptions; Enter and Escape work',async t=>{
 const p=page(t);await p.show('bootcamp:variables',s=>s.code?.includes('speed = 20'));const all=Array.from(p.w.document.querySelectorAll('.code-explorer [data-code-token]'));all[0].focus();assert.equal(p.tip().hidden,false);p.key(all[0],'ArrowRight');assert.equal(p.w.document.activeElement,all[1]);assert.equal(all.filter(e=>e.tabIndex===0).length,1);assert.match(p.tip().textContent,/Calculate the right side/);p.key(all[1],'End');assert.equal(p.w.document.activeElement,all.at(-1));p.key(all.at(-1),'Home');assert.equal(p.w.document.activeElement,all[0]);p.key(all[0],'Enter');assert.equal(p.tip().hidden,false);p.key(all[0],'Escape');assert(p.tip().hidden);
});
test('Touch-style clicks toggle a persistent explanation and an outside click closes it',async t=>{
 const p=page(t);await p.show('bootcamp:first-command',s=>s.question);const plus=p.token('+');plus.click();assert.equal(p.tip().hidden,false);await tick(220);assert.equal(p.tip().hidden,false);plus.click();assert(p.tip().hidden);plus.click();p.w.document.body.click();assert(p.tip().hidden);assert(!p.tip().textContent.includes('423'));
});
test('Language changes dismiss stale tooltips and show the same code with Chinese explanations',async t=>{
 const p=page(t);await p.show('projectile-motion:speed-components',s=>s.code?.includes('vx ='));const source=p.el('.code-explorer code').textContent;p.over(p.token('sind'));await p.click('[data-lang=zh]');assert(p.tip().hidden);assert.equal(p.el('.code-explorer code').textContent,source);p.over(p.token('sind'));assert.match(p.tip().textContent,/以度为单位/);assert.match(p.tip().textContent,/函数/);
});
test('Every rendered code block copies exactly, and the Copy control ignores explanation text',async t=>{
 const p=page(t),container=p.w.document.createElement('div');for(const[key,steps]of Object.entries(p.w.LAB_GUIDES))for(const s of steps)if(s.code){container.innerHTML=p.w.LabCodeExplorer.render(s.code,{lessonKey:key,stepId:s.id});assert.equal(container.querySelector('code').textContent,s.code,key);}
 await p.show(Object.keys(p.w.LAB_GUIDES).find(k=>k.startsWith('epidemics:')&&p.w.LAB_GUIDES[k].some(s=>s.code?.includes('for k'))),s=>s.code?.includes('for k'));p.over(p.token('new'));const original=p.el('.code-explorer code').textContent;await p.click('[data-action=copy-step]');assert.equal(p.copies.at(-1),original);assert(!p.copies.at(-1).includes('New infections'));
});
test('HTML-looking text remains literal code and cannot create elements or event handlers',t=>{
 const p=page(t),src="title('<img src=x onerror=alert(1)>'); % <script>bad()</script>";const node=p.w.document.createElement('div');node.innerHTML=p.w.LabCodeExplorer.render(src,{lessonKey:'x" bad="1',stepId:'<script>'});assert.equal(node.querySelectorAll('img,script').length,0);assert.equal(node.querySelector('code').textContent,src);assert.equal(node.querySelector('[bad]'),null);
});
test('Lesson navigation removes a stale explanation without changing lesson content',async t=>{
 const p=page(t);await p.show('bootcamp:variables',s=>s.code?.includes('speed = 20'));p.over(p.token('speed'));await p.click('[data-action=next-step]');assert(p.tip().hidden);assert.equal(p.w.document.querySelector('[aria-describedby="lab-code-tooltip"]'),null);
});
test('Exploring code does not mark a checkpoint, move a step or write student progress',async t=>{
 const p=page(t,{review:false});for(let i=0;i<12&&!p.w.document.querySelector('[data-code-token]');i++)await p.click('[data-action=next-step]');const before=JSON.stringify(Object.fromEntries(Object.keys(p.w.localStorage).map(k=>[k,p.w.localStorage.getItem(k)]))),step=p.el('.step-card').dataset.step;const first=p.el('[data-code-token]');p.over(first);first.focus();p.key(first,'ArrowRight');p.key(p.w.document.activeElement,'Escape');assert.equal(p.el('.step-card').dataset.step,step);assert.equal(JSON.stringify(Object.fromEntries(Object.keys(p.w.localStorage).map(k=>[k,p.w.localStorage.getItem(k)]))),before);
});

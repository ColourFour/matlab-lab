import {fileURLToPath} from 'node:url';
import fs from 'node:fs';
import test from 'node:test';
import assert from 'node:assert/strict';
process.chdir(fileURLToPath(new URL('../',import.meta.url)));
const {Window}=await import(process.env.HAPPY_DOM_MODULE||'./runtime/node_modules/happy-dom/lib/index.js');
const files=[...fs.readFileSync('index.html','utf8').matchAll(/<script defer src="([^"]+)"/g)].map(m=>m[1].split('?')[0]);
const tick=()=>new Promise(resolve=>setTimeout(resolve,10));
function page(t,{url='http://localhost/',seen=false,reducedMotion=false,blockedPlayback=false,blockedStorage=false}={}){
 const w=new Window({url});t.after(()=>w.happyDOM.close());
 w.document.body.innerHTML='<a class="skip-link" href="#main"></a><div id="app"></div>';
 const media={plays:0,pauses:0,tracks:[{language:'en',mode:'disabled'},{language:'zh',mode:'disabled'}]};
 w.HTMLDialogElement.prototype.showModal=function(){this.open=true;this.querySelector('[autofocus]')?.focus();};
 w.HTMLDialogElement.prototype.close=function(){this.open=false;this.dispatchEvent(new w.Event('close'));};
 w.HTMLMediaElement.prototype.play=function(){media.plays++;return blockedPlayback?Promise.reject(new Error('Browser blocked playback')):Promise.resolve();};
 w.HTMLMediaElement.prototype.pause=function(){media.pauses++;};
 Object.defineProperty(w.HTMLMediaElement.prototype,'textTracks',{configurable:true,get:()=>media.tracks});
 w.matchMedia=()=>({matches:reducedMotion});w.HTMLElement.prototype.scrollIntoView=function(){};w.scrollTo=()=>{};
 if(seen)w.localStorage.setItem('matlab-lab:intro:v1','seen');
 if(blockedStorage)Object.defineProperty(w,'localStorage',{value:{getItem(){throw new Error('Storage blocked');},setItem(){throw new Error('Storage blocked');}}});
 for(const file of files)w.eval(fs.readFileSync(file,'utf8'));
 w.document.dispatchEvent(new w.Event('DOMContentLoaded'));
 return {w,media,dialog:w.document.querySelector('.intro-dialog'),video:w.document.querySelector('.intro-dialog video')};
}
test('A fresh student begins with one English video, silent playback and an immediate learning button',async t=>{
 const {w,media,dialog,video}=page(t);
 assert(dialog.open);assert.equal(w.document.documentElement.lang,'en');assert.equal(media.plays,1);assert.equal(video.muted,true);
 assert.equal(media.tracks[0].mode,'showing');assert.equal(media.tracks[1].mode,'disabled');
 assert.equal(dialog.querySelector('[data-intro-close]').disabled,false);
 assert.equal(w.document.activeElement,dialog.querySelector('[data-intro-close]'));
 w.document.dispatchEvent(new w.Event('DOMContentLoaded'));await tick();
 assert.equal(w.document.querySelectorAll('.intro-dialog').length,1);assert.equal(media.plays,1);
});
test('Continuing pauses and remembers the introduction without changing saved lesson data',t=>{
 const {w,media,dialog}=page(t);
 const before=Object.fromEntries(Object.keys(w.localStorage).map(key=>[key,w.localStorage.getItem(key)]));
 dialog.querySelector('[data-intro-close]').click();assert.equal(dialog.open,false);assert.equal(media.pauses,1);
 assert.equal(w.localStorage.getItem('matlab-lab:intro:v1'),'seen');
 for(const[key,value]of Object.entries(before))assert.equal(w.localStorage.getItem(key),value);
 assert.ok(w.document.activeElement===w.document.querySelector('.start-button'),'Focus returns to the learning action');
});
test('Returning students skip the welcome, but replay resets and opens the same player',t=>{
 const {w,media,dialog,video}=page(t,{seen:true});assert.equal(dialog.open,false);assert.equal(media.plays,0);
 const replay=w.document.querySelector('[data-intro-open]');replay.focus();video.currentTime=18;replay.click();
 assert(dialog.open);assert.equal(video.currentTime,0);assert.equal(media.plays,1);
 replay.click();assert.equal(media.plays,1,'Repeated clicks do not restart an open player');
 dialog.close();assert.equal(media.pauses,1);assert.equal(w.document.activeElement,replay);
});
test('Welcome language controls save the normal language preference and update captions without restarting',async t=>{
 const {w,media,dialog,video}=page(t);video.currentTime=12;
 dialog.querySelector('[data-intro-lang=zh]').click();await tick();
 assert.equal(w.document.documentElement.lang,'zh-Hans');assert.equal(media.tracks[1].mode,'showing');assert.equal(media.tracks[0].mode,'disabled');
 assert.equal(dialog.querySelector('[data-intro-lang=zh]').getAttribute('aria-pressed'),'true');
 assert.equal(video.currentTime,12);assert.equal(media.plays,1);
 assert.equal(w.LabClassroom.deviceSnapshot().app.lang,'zh');
 assert.equal(dialog.querySelector('#intro-title [lang=en]').getAttribute('aria-hidden'),'true');
 dialog.querySelector('[data-intro-lang=en]').click();await tick();assert.equal(w.document.documentElement.lang,'en');
});
test('Teacher, signup, login, review and direct lesson links are not covered by the welcome dialog',async t=>{
 for(const suffix of ['?teacher=1','?signup=1','?classroom=1','?review=1#/map','#/bootcamp/first-command']){
  const {w,dialog,media}=page(t,{url:'http://localhost/'+suffix});
  assert.equal(dialog.open,false,suffix);assert.equal(media.plays,0,suffix);
  if(suffix.startsWith('?')&&!suffix.includes('review'))assert(w.document.querySelector('#classroom-dialog').open,suffix);
  await w.happyDOM.close();
 }
});
test('Reduced motion and browser playback restrictions leave a usable welcome and Continue action',async t=>{
 const reduced=page(t,{reducedMotion:true});assert(reduced.dialog.open);assert.equal(reduced.media.plays,0);
 reduced.dialog.querySelector('[data-intro-close]').click();assert.equal(reduced.dialog.open,false);
 const blocked=page(t,{blockedPlayback:true});await tick();assert(blocked.dialog.open);assert.equal(blocked.media.plays,1);
 blocked.dialog.querySelector('[data-intro-close]').click();assert.equal(blocked.dialog.open,false);
});
test('Blocked browser storage does not prevent watching, closing or replaying the video',t=>{
 const {w,dialog}=page(t,{blockedStorage:true});assert(dialog.open);
 assert.doesNotThrow(()=>dialog.querySelector('[data-intro-close]').click());assert.equal(dialog.open,false);
 assert.doesNotThrow(()=>w.document.querySelector('[data-intro-open]').click());assert(dialog.open);
});

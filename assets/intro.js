(function(root){
 'use strict';
 const SEEN_KEY='matlab-lab:intro:v1';
 let dialog,video,returnFocus;
 const language=()=>document.documentElement.lang.startsWith('zh')?'zh':'en';
 const text=(en,zh)=>`<span class="translated"><span lang="en">${en}</span><span lang="zh-Hans">${zh}</span></span>`;
 function updateLanguage(){
  const lang=language();
  for(const span of dialog.querySelectorAll('.translated>span')){
   const hidden=span.lang!==(lang==='zh'?'zh-Hans':'en');
   span.classList.toggle('translation-ghost',hidden);
   if(hidden)span.setAttribute('aria-hidden','true');else span.removeAttribute('aria-hidden');
  }
  for(const button of dialog.querySelectorAll('[data-intro-lang]')){
   const chosen=button.dataset.introLang===lang;
   button.setAttribute('aria-pressed',String(chosen));button.classList.toggle('chosen',chosen);
  }
  for(const track of video.textTracks)track.mode=track.language===lang?'showing':'disabled';
 }
 function open(){
  if(!dialog||dialog.open)return;
  returnFocus=document.activeElement;
  video.currentTime=0;video.muted=true;updateLanguage();dialog.showModal();
  // Silent playback can begin immediately; native Play remains available if blocked.
  if(!root.matchMedia?.('(prefers-reduced-motion: reduce)').matches){
   try{const playing=video.play();playing?.catch(()=>{});}catch(_){}
  }
 }
 root.LabIntro={open,ready:false};
 function firstVisit(afterAccount=false){
  const params=new URLSearchParams(root.location.search);
  if(['teacher','review'].some(key=>params.get(key)==='1'))return false;
  if(!afterAccount&&['signup','classroom'].some(key=>params.get(key)==='1'))return false;
  if(root.LabClassroom?.signedIn()&&!root.LabClassroom?.isStudent())return false;
  if(!['','#','#/','#/bootcamp'].includes(root.location.hash))return false;
  if(document.querySelector('dialog[open]'))return false;
  try{return root.localStorage.getItem(SEEN_KEY)!=='seen';}catch(_){return true;}
 }
 function init(){
  dialog=document.createElement('dialog');dialog.className='intro-dialog';
  dialog.setAttribute('aria-labelledby','intro-title');
  dialog.innerHTML=`<div class="intro-heading"><h2 id="intro-title">${text('Welcome to MATLAB Lab','欢迎来到 MATLAB 实验课堂')}</h2><div class="language-switch" role="group" aria-label="Language / 语言"><button data-intro-lang="en">EN</button><button data-intro-lang="zh">中文</button></div></div>
   <p>${text('Watch for 30 seconds. Then start learning.','观看 30 秒视频，然后开始学习。')}</p>
   <video controls playsinline preload="metadata" muted poster="assets/intro/poster.jpg"><source src="assets/intro/matlab-intro.mp4" type="video/mp4"><track kind="captions" src="assets/intro/intro-en.vtt" srclang="en" label="English"><track kind="captions" src="assets/intro/intro-zh.vtt" srclang="zh" label="中文">Your browser cannot play this video. / 浏览器无法播放此视频。</video>
   <button class="button primary" data-intro-close autofocus>${text('Start learning','开始学习')}</button>
   <details class="intro-help"><summary>${text('Video help','视频帮助')}</summary><p>${text('Press Play if the video is paused. Use the controls for sound and captions.','如果视频暂停，请点击播放。使用控件调整声音和字幕。')}</p><p>${text('A 30-second visual introduction. Original illustrations, not recordings of MATLAB.','30 秒视觉简介。原创示意动画，并非 MATLAB 录屏。')}</p><a href="assets/intro/transcript.md" download>${text('Read the transcript','阅读文字稿')}</a></details>`;
  document.body.append(dialog);video=dialog.querySelector('video');root.LabIntro.ready=true;
  dialog.querySelector('[data-intro-close]').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('close',()=>{
   video.pause();
   try{root.localStorage.setItem(SEEN_KEY,'seen');}catch(_){}
   const hiddenDialog=returnFocus?.closest?.('dialog');
   const target=returnFocus?.isConnected&&returnFocus!==document.body&&(!hiddenDialog||hiddenDialog.open)?returnFocus:document.querySelector('.start-button')||document.querySelector('.help-button');
   target?.focus({preventScroll:true});
  });
  dialog.addEventListener('click',event=>{
   const button=event.target.closest('[data-intro-lang]');if(!button)return;
   document.querySelector(`.topbar [data-lang="${button.dataset.introLang}"]`)?.click();
   updateLanguage();button.focus({preventScroll:true});
  });
  document.addEventListener('click',event=>{if(event.target.closest('[data-intro-open]'))open();});
  document.addEventListener('close',event=>{if(event.target.id==='classroom-dialog'&&firstVisit(true))open();},true);
  video.addEventListener('loadedmetadata',updateLanguage);
  new root.MutationObserver(updateLanguage).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  updateLanguage();if(firstVisit())open();
 }
 if(root.document?.addEventListener)document.addEventListener('DOMContentLoaded',init,{once:true});
})(typeof window==='undefined'?globalThis:window);

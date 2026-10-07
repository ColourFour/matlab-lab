(function(){
 'use strict';
 const courses=LAB_COURSES,guides=LAB_GUIDES,app=document.getElementById('app'),KEY='matlab-lab:v2',GUIDE_KEY='matlab-lab:guided:v1',NOTEBOOK_KEY='matlab-lab:capstone:v1';
 const review=new URLSearchParams(location.search).get('review')==='1';
 let storageOK=true,guideOK=true;
 const diskStorage=window.LabClassroom||localStorage;
 const read=k=>{try{return JSON.parse(diskStorage.getItem(k));}catch(_){return null;}};
 const saved=read(KEY),legacy=read('matlab-lab:bootcamp:v1');
 let store=LabCore.cleanAppState(saved,courses,legacy);if(!saved&&!legacy)store.lang='zh';
 let book=LabGuide.clean(read(GUIDE_KEY),guides,LabCore),notebook=LabCapstone.cleanNotebook(read(NOTEBOOK_KEY),courses.investigation);
 // Canonical field shapes make every tab compare edits against the same baseline.
 const progressFields=s=>Object.fromEntries(Object.entries(s.progress).map(([id,p])=>[id,{lastLesson:p.lastLesson,completed:Object.fromEntries(courses[id].lessons.map(l=>[l.id,p.completed.includes(l.id)]))}]));
 const restoreProgress=v=>LabCore.cleanAppState({version:2,lang:store.lang,progress:Object.fromEntries(Object.entries(v).map(([id,p])=>[id,{version:1,lastLesson:p.lastLesson,completed:courses[id].lessons.filter(l=>p.completed?.[l.id]===true).map(l=>l.id)}]))},courses);
 const fullBook=b=>{for(const [k,steps]of Object.entries(guides)){const st=LabGuide.entry(b,k);for(const s of steps)if(s.question&&st.answers[s.question.id]===undefined)st.answers[s.question.id]='';st.cursorId=steps[st.cursor]?.id;st.reachedId=steps[st.reached]?.id;}return b;};
 let progressDisk,guideDisk,noteDisk,langDisk,notebookConflict=false;
 function initialiseDisks(){try{
  progressDisk=LabStorage.channel(diskStorage,'progress',progressFields(store),{resettable:true,defaults:progressFields(LabCore.cleanAppState(null,courses)),readonly:review});
  guideDisk=LabStorage.channel(diskStorage,'guides',fullBook(book),{resettable:true,defaults:fullBook(LabGuide.blank()),readonly:review,merge:(path,v,other)=>{if(path.at(-1)==='reached')return Math.max(v,Number(other)||0);if(path.at(-1)==='reachedId'){const steps=guides[path[1]];return steps&&steps.findIndex(s=>s.id===other)>steps.findIndex(s=>s.id===v)?other:v;}return v;}});
  noteDisk=LabStorage.channel(diskStorage,'notes',notebook,{notes:true,readonly:review});
  langDisk=LabStorage.channel(diskStorage,'language',{lang:store.lang},{readonly:review});
  store=restoreProgress(progressDisk.sync());store.lang=langDisk.sync().lang==='en'?'en':'zh';book=LabGuide.clean(guideDisk.sync(),guides,LabCore);notebook=LabCapstone.cleanNotebook(noteDisk.sync(),courses.investigation);
 storageOK=true;guideOK=true;}catch(_){storageOK=false;guideOK=false;}}
 initialiseDisks();
 function syncAccount(){if(!review)window.LabClassroom?.updateSnapshot({app:store,guide:fullBook(JSON.parse(JSON.stringify(book))),notebook});}
 let course=courses.bootcamp,state=store.progress.bootcamp,current=null,feedback={},problems={},modalReturnFocus=null,notice='';
 const tr=(en,zh)=>store.lang==='zh'?zh:en;
 const t=v=>typeof v==='object'?v[store.lang]:v;
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const plain=s=>esc(s).replace(/`([^`]+)`/g,'<code>$1</code>');
 const fmt=s=>typeof s!=='object'?plain(s):`<span class="translated">${['en','zh'].map(lang=>`<span lang="${lang==='zh'?'zh-Hans':'en'}" ${lang===store.lang?'':'class="translation-ghost" aria-hidden="true"'}>${plain(s[lang])}</span>`).join('')}</span>`;
 const F=(en,zh)=>fmt({en,zh});
  const icons = {
    arrow: '<path d="M4 12h16m-6-6 6 6-6 6"/>', back: '<path d="M20 12H4m6-6-6 6 6 6"/>',
    lock: '<rect x="6" y="10" width="12" height="11" rx="2"/><path d="M8 10V6a4 4 0 0 1 8 0v4"/>',
    check: '<path d="m5 12 4 4L19 6"/>', home: '<path d="m3 10 9-7 9 7v11H3V10Zm6 11v-8h6v8"/>',
    terminal: '<path d="m5 7 5 5-5 5m8 0h6"/>', box: '<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16m-10 4h4"/>',
    cells: '<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M9 6v12m6-12V6"/>',
    steps: '<path d="M3 19h6v-6h6V7h6M3 4v15h18"/>', target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 1v4m0 14v4M1 12h4m14 0h4"/>',
    multiply: '<path d="m6 6 12 12M6 18 18 6"/>', plot: '<path d="M3 3v18h18M6 17l4-5 5 2 5-9"/>',
    flag: '<path d="M5 22V3m0 0c5-5 9 5 15 0v10c-6 5-10-5-15 0"/>', help: '<circle cx="12" cy="12" r="9"/><path d="M9 8a3 3 0 0 1 6 1c0 2-3 2-3 5m0 3v.1"/>',
    copy: '<rect x="8" y="8" width="12" height="13" rx="2"/><path d="M15 8V3H3v13h5"/>', down: '<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>', close: '<path d="m6 6 12 12M6 18 18 6"/>', book: '<path d="M12 5C8 2 4 3 2 4v16c3-2 7-1 10 1 3-2 7-3 10-1V4c-2-1-6-2-10 1Zm0 0v16"/>'
  };

 const icon=(name)=>`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]||icons.terminal}</svg>`;
 const key=()=>course.id+':'+course.lessons[current.index].id;
 const unlocked=c=>review||!c.requires||store.progress[c.requires].completed.length===courses[c.requires].lessons.length;
 const overview=c=>c.id==='bootcamp'?'#/':'#/'+c.id;
 const link=(c,i)=>'#/'+c.id+'/'+c.lessons[i].id;
 function persist(){if(review)return;try{const lang=langDisk.save({lang:store.lang}).value.lang;store=restoreProgress(progressDisk.save(progressFields(store)).value);store.lang=lang==='en'?'en':'zh';if(course)state=store.progress[course.id];storageOK=true;syncAccount();}catch(_){storageOK=false;}}
 function saveGuide(){if(review)return;try{book=LabGuide.clean(guideDisk.save(fullBook(book)).value,guides,LabCore);guideOK=true;syncAccount();}catch(_){guideOK=false;}}
 function select(id){course=courses[id];state=store.progress[id];}
 function route(){
  const hash=location.hash||'#/';notice='';
  if(hash==='#/map')return {page:'map'};
  if(hash==='#/'||hash==='#'){select('bootcamp');return {page:'home'};}
  const match=hash.match(/^#\/([a-z-]+)(?:\/([a-z-]+))?$/);
  if(match&&courses[match[1]]){
   select(match[1]);if(!match[2])return {page:'home'};
   if(match[2]==='complete'&&state.completed.length===course.lessons.length)return {page:'complete'};
   const index=course.lessons.findIndex(l=>l.id===match[2]);
   if(index>=0&&unlocked(course)&&(course.openNavigation||review||index<=state.completed.length))return {page:'lesson',index};
   notice=tr('Open the available lesson below.','请打开下方可学习的课程。');history.replaceState(null,'',overview(course));return {page:'home'};
  }
  select('bootcamp');history.replaceState(null,'','#/');return {page:'home'};
 }
 function header(){return `<header class="topbar"><a class="brand" href="#/" aria-label="MATLAB Lab home / 首页"><span class="brand-mark">${icon('plot')}</span><span>MATLAB<span class="brand-light"> LAB</span></span></a><div class="header-actions"><button class="text-button classroom-open" data-classroom-open>${window.LabClassroom?.signedIn()?`<span class="classroom-name">${esc(window.LabClassroom.label())}</span>`:F('Classroom','班级')}</button><a class="map-link" href="#/map">${F('Course map','课程目录')}</a><div class="language-switch" role="group" aria-label="Language / 语言"><button data-lang="en" aria-pressed="${store.lang==='en'}" class="${store.lang==='en'?'chosen':''}">EN</button><button data-lang="zh" aria-pressed="${store.lang==='zh'}" class="${store.lang==='zh'?'chosen':''}">中文</button></div><button class="help-button" data-action="help" aria-label="Help / 帮助">${icon('help')}</button></div></header>`;}
 function capStage(l,i){return LabCapstone.stage(course,l,i,capView(),notebook).replace(/<section id="(see|understand|compare)" class="([^"]*)"><h2>([\s\S]*?)<\/h2>([\s\S]*?)<\/section>/g,'<details id="$1" class="$2 cap-disclosure"><summary>$3</summary>$4</details>');}
 function capOverview(){return LabCapstone.home(course,capView()).replace(/<section class="cap-panel"><h2>([\s\S]*?)<\/h2>([\s\S]*?)<\/section>/g,'<details class="cap-panel cap-disclosure"><summary>$1</summary>$2</details>');}
 function capView(){return {fmt,tr,icon,esc,completed:state.completed,review};}
 function resume(){
  if(book.active){const [cid,lid]=book.active.split(':');const c=courses[cid],i=c?.lessons.findIndex(l=>l.id===lid);if(c&&i>=0&&unlocked(c)&&i<=store.progress[cid].completed.length&&!store.progress[cid].completed.includes(lid))return {c,i};}
  for(const c of Object.values(courses)){if(c.kind==='capstone')continue;const n=store.progress[c.id].completed.length;if(unlocked(c)&&n<c.lessons.length)return {c,i:n};}
  return {c:courses.investigation,i:0};
 }
 function home(){
  if(course.kind==='capstone')return capOverview();
  const first=course.id==='bootcamp',target=first?resume():{c:course,i:Math.min(state.completed.length,course.lessons.length-1)},fresh=first&&!Object.values(store.progress).some(x=>x.completed.length)&&!book.active;
  const available=unlocked(course),done=state.completed.length===course.lessons.length;
  return `<section class="student-home"><p class="eyebrow">${F('MATLAB · guided practice','MATLAB · 跟着做')}</p><h1>${fresh?F('Run your first MATLAB command','运行你的第一条 MATLAB 命令'):first?F('Continue where you stopped','从上次停下的地方继续'):fmt(course.title)}</h1><p class="home-instruction">${fresh?F('Open MATLAB. Follow one instruction at a time.','打开 MATLAB，每次跟着做一步。'):first?fmt(target.c.lessons[target.i].title):fmt(course.description)}</p>${fresh?`<div class="first-preview" aria-label="2 plus 2 returns 4 / 2 加 2 得到 4"><div><span>MATLAB</span><pre>&gt;&gt; 2 + 2</pre></div><div><span>${F('Result','结果')}</span><pre>4</pre></div></div>`:`<div class="home-preview">${LabDiagrams.plot(first?target.c.previewPlot:course.previewPlot,store.lang)}</div>`}<a class="button lime start-button" href="${!available?overview(courses[course.requires]):done&&!first?'#/'+course.id+'/complete':link(target.c,target.i)}">${!available?F('Open the previous project','打开前一个项目'):fresh?F('Start','开始'):F('Continue','继续')} ${icon('arrow')}</a>${!available?`<p>${F('Complete the previous project to open these lessons.','完成前一个项目后，即可学习这些课程。')}</p>`:''}<p class="guide-small">${F('Use MATLAB on your Windows or Mac computer.','使用 Windows 或 Mac 电脑上的 MATLAB。')}</p>${first?`<button class="text-button intro-link" data-intro-open>${F('Watch the 30-second introduction','观看 30 秒简介')}</button>`:''}</section>`;
 }
 function map(){return `<div class="page-heading"><h1>${F('Course map','课程目录')}</h1><p>${F('Return to the current lesson, or choose a project.','返回当前课程，或选择项目。')}</p></div><a class="button primary" href="${link(resume().c,resume().i)}">${F('Continue learning','继续学习')} ${icon('arrow')}</a><div class="course-map">${Object.values(courses).map(c=>{const n=store.progress[c.id].completed.length,open=unlocked(c);return `<details class="map-project" ${c.id===course.id?'open':''}><summary><span class="map-number">${c.number}</span><span>${fmt(c.title)}</span><small>${c.kind==='capstone'?F('Open assignment','开放任务'):n?`${n} / ${c.lessons.length}`:open?F('Available','可开始'):F('Later','稍后学习')}</small></summary><p>${fmt(c.description)}</p><a class="text-button" href="${overview(c)}">${F('Project overview','项目简介')} ${icon('arrow')}</a><ol>${c.lessons.map((l,i)=>{const ready=c.openNavigation||review||(open&&i<=n);return `<li>${ready?`<a href="${link(c,i)}">${fmt(l.short)} ${store.progress[c.id].completed.includes(l.id)?icon('check'):icon('arrow')}</a>`:`<span>${fmt(l.short)}</span>`}</li>`;}).join('')}</ol></details>`;}).join('')}</div><p class="guide-small">${window.LabClassroom?.signedIn()?F('Project 6 is always open. Check your account save status before leaving.','项目 6 始终开放。离开前请检查账户保存状态。'):F('Project 6 is always open. Progress and notes stay on this device.','项目 6 始终开放。进度和笔记保存在此设备。')}</p><a class="text-button" href="?review=1#/map">${F('Teacher preview','教师预览')}</a>`;}
 function codeBlock(code){return `<pre class="code-block" tabindex="0"><code>${esc(code)}</code></pre>`;}
 function codePanel(s){const src=s.code;if(!src)return '';const content=`<div class="guide-code"><div class="editor-bar"><span>${s.append?'Editor':tr('Command Window','Command Window · 命令窗口')}</span><button class="copy-button" data-action="copy-step">${icon('copy')} ${F('Copy','复制')}</button></div>${codeBlock(src)}</div><p class="run-instruction">${s.append?F('Add below the earlier code. Click Save, then Run.','加在前面的代码下方。点击 Save，再点击 Run。'):F('Type or paste in Command Window. Press Enter after each line.','在命令窗口输入或粘贴。每行输入后按 Enter。')}</p>`;return s.revealCode?`<details class="code-reveal"><summary>${F('Show the code if needed','需要时显示代码')}</summary>${content}</details>`:content;}
 function resultPanel(s){const plot=s.plot==='first-tall'?LabGuide.firstPlot(true,fmt):s.plot==='arc'&&course.id==='bootcamp'&&current.index===0?LabGuide.firstPlot(false,fmt):s.plot?LabDiagrams.plot(s.plot,store.lang):'';return s.output||plot?`<div class="guide-result"><span class="result-label">${F('Look for this in MATLAB','在 MATLAB 中查看这个结果')}</span>${plot}${s.output?`<pre>${esc(s.output)}</pre>`:''}</div>`:'';}
 function question(q,st){const value=st.answers[q.id]||'',valid=st.solved.includes(q.id);if(q.type==='choice')return `<fieldset><legend>${fmt(q.label)}</legend><div class="choices">${q.options.map(o=>`<label class="choice"><input type="radio" name="answer" value="${esc(o.value)}" ${value===o.value?'checked':''}><span>${fmt(o.label)}</span></label>`).join('')}</div></fieldset>`;return `<label for="step-answer">${fmt(q.label)}</label><input id="step-answer" name="answer" type="text" ${q.type==='number'?'inputmode="decimal"':''} autocomplete="off" spellcheck="false" value="${esc(value)}" placeholder="${esc(t(q.placeholder||{en:'Your result',zh:'你的结果'}))}" ${feedback[key()]===false?'aria-invalid="true" aria-describedby="step-feedback"':''}><p class="guide-small">${q.type==='vector'?F('Enter the values with spaces between them.','输入数值，用空格分隔。'):F('Enter the number you saw in MATLAB.','输入你在 MATLAB 看到的数字。')}</p>`;}
 function answerFeedback(s,l){const issue=problems[key()];if(issue?.reason==='blank')return F('Enter the result from MATLAB first.','请先输入 MATLAB 的结果。');if(issue?.reason==='format')return F('Paste numbers only, with spaces or commas. A MATLAB name such as ans = is also accepted. Do not enter a formula.','请粘贴数值，用空格或逗号分隔。也可保留 ans = 等 MATLAB 名称。请勿输入计算式。');if(issue?.reason==='count')return fmt({en:`Enter ${issue.count} value${issue.count===1?'':'s'}. Read only the last output.`,zh:`请输入 ${issue.count} 个数值，只读最后一项输出。`});return F('The values differ.','数值不同。')+' '+fmt(s.hint||l.hint);}
 function lesson(){
  const l=course.lessons[current.index];if(course.kind==='capstone')return capStage(l,current.index);
  const steps=guides[key()],st=LabGuide.entry(book,key()),s=steps[st.cursor],prev=steps[st.cursor-1];
  const solved=s.question&&st.solved.includes(s.question.id)&&LabCore.validate(s.question,st.answers[s.question.id],st.answers),ok=feedback[key()];
  const phase={see:['See','观察'],understand:['Understand','理解'],do:['Do','动手'],compare:['Compare','对比'],check:['Check','检查'],continue:['Continue','继续']}[s.phase];
  const finished=state.completed.includes(l.id);
  return `<div class="guide-context"><a href="${overview(course)}">${fmt(course.short)}</a><span>${fmt(l.short)}</span><span class="step-count">${F('Step','第')} ${st.cursor+1} / ${steps.length}</span></div>${prev?.win?`<p class="last-win">${icon('check')} ${fmt(prev.win)}</p>`:''}<article class="step-card" data-step="${st.cursor}" data-lesson="${l.id}"><p class="eyebrow">${F(...phase)}</p><h1 tabindex="-1" id="step-title">${fmt(s.title)}</h1><p class="step-instruction">${fmt(s.text)}</p>${s.setup?`<details class="setup-choice"><summary>${F('How do I open MATLAB?','怎样打开 MATLAB？')}</summary><p>${F('Windows: open Start, type MATLAB, then open the MATLAB app. Mac: open Applications and double-click MATLAB.','Windows：打开开始菜单，输入 MATLAB，再打开应用。Mac：打开 Applications（应用程序），双击 MATLAB。')}</p><p>${F('If MATLAB is missing or asks for a license, ask your teacher. Keep this guide open.','如果找不到 MATLAB 或提示需要许可，请联系老师。保持本指南打开。')}</p></details>`:''}${s.visual?LabGuide.visual(s.visual,fmt):''}${s.filename?`<div class="filename"><code>${esc(s.filename)}</code></div><p class="guide-small">${F('If Run asks to change folders, choose Change Folder.','如果 Run 提示更换文件夹，请选择 Change Folder。')}</p>`:''}${s.diagram?`<div class="guide-diagram">${LabDiagrams.diagram(s.diagram,store.lang)}</div>`:''}${codePanel(s)}${s.observe?`<p class="observe-result">${icon("target")} ${fmt(s.observe)}</p>`:""}${resultPanel(s)}${s.assignment?`<ul class="assignment-list">${assignmentParts(s.assignment).map(x=>`<li>${fmt(x)}</li>`).join('')}</ul>`:''}${s.question?`<form id="guided-check" data-question="${s.question.id}" novalidate>${question(s.question,st)}<div id="step-feedback" tabindex="-1" class="step-feedback ${solved?'is-correct':ok===false?'is-retry':''}" role="status">${solved?`${icon('check')} ${fmt(s.win)}`:ok===false?`${answerFeedback(s,l)}`:''}</div>${solved?`<button type="button" class="button primary" data-action="next-step">${F('Continue','继续')} ${icon('arrow')}</button>`:`<button type="submit" class="button primary">${F('Check this result','检查这个结果')} ${icon('check')}</button>`}</form>`:s.done?`<div class="lesson-win">${icon('check')}<strong>${fmt(s.win)}</strong></div><a class="button primary" href="${current.index===course.lessons.length-1?'#/'+course.id+'/complete':link(course,current.index+1)}">${current.index===course.lessons.length-1?F('Finish project','完成项目'):F('Next lesson','下一课')} ${icon('arrow')}</a>`:`<button class="button primary" data-action="next-step">${fmt(s.ack||{en:'Continue',zh:'继续'})} ${icon('arrow')}</button>`}${s.code||s.phase==='compare'?`<p class="guide-small confirmation-note">${F('Your confirmation. This page cannot see MATLAB.','由你确认。本页无法读取 MATLAB。')}</p>`:''}</article><div class="step-tools"><button class="text-button" data-action="previous-step" ${st.cursor===0?'disabled':''}>${icon('back')} ${F('Back','上一步')}</button>${LabGuide.recovery(fmt)}</div><details class="lesson-reference"><summary>${F('Review steps and explanation','查看步骤与解释')}</summary><ol class="step-outline">${steps.map((x,i)=>`<li><button class="text-button" data-action="jump-step" data-index="${i}" ${i>st.reached&&!review&&!finished?'disabled':''}>${i+1}. ${fmt(x.title)}</button></li>`).join('')}</ol><p>${fmt(l.understand)}</p><p>${fmt(l.note)}</p>${l.editor?`<button class="text-button" data-action="download-lesson">${icon('down')} ${F('Save the lesson code','保存本课代码')}</button>`:''}</details>`;
 }
 function assignmentParts(v){const en=v.en.replace(/^Final task: /,'').split(/(?<=[.!?])\s+/).filter(Boolean),zh=v.zh.split(/(?<=[。！？])/).filter(Boolean);return Array.from({length:Math.max(en.length,zh.length)},(_,i)=>({en:en[i]||'',zh:zh[i]||''}));}
 function completion(){if(course.kind==='capstone')return capOverview();const next=Object.values(courses).find(c=>c.number===course.number+1);return `<section class="student-home"><span class="completion-check">${icon('check')}</span><h1>${F('Project complete','项目完成')}</h1><p>${fmt(course.title)}</p><div class="home-preview">${LabDiagrams.plot(course.previewPlot,store.lang)}</div><p>${F('Keep your script and graph. Show one result you can explain.','保留脚本和图像。展示一个你能解释的结果。')}</p><a class="button primary" href="${next?overview(next):'#/map'}">${next?F('Open the next project','打开下一个项目'):F('Course map','课程目录')} ${icon('arrow')}</a><details class="completion-files"><summary>${F('Reference files','参考文件')}</summary><a href="${course.reference}" download>${F('Download reference code','下载参考代码')}</a></details></section>`;}
 function render(focus=false,external=false){
  releaseExport();LabCelebrate.clear();
  current=route();document.documentElement.lang=store.lang==='zh'?'zh-Hans':'en';document.body.classList.add('student-mode');
  if(current.page==='lesson'&&course.kind!=='capstone'){
   const st=LabGuide.entry(book,key()),steps=guides[key()];if(!external){book.active=key();state.lastLesson=course.lessons[current.index].id;}
   if(steps[st.cursor].done&&!review&&!state.completed.includes(course.lessons[current.index].id)&&LabGuide.complete(steps,st,LabCore)){state.completed.push(course.lessons[current.index].id);}
   persist();saveGuide();
  }
  app.innerHTML=header()+`<main id="main" class="student-main ${course.kind==='capstone'&&current.page!=='map'?'cap-main':''}" tabindex="-1">${review?`<div class="review-banner notice">${F('Teacher preview · student progress is unchanged','教师预览 · 不改变学生进度')}<a href="${esc(location.pathname+location.hash)}">${F('Student view','学生模式')}</a></div>`:''}${!storageOK||!guideOK?`<p class="notice" role="status">${F('Progress cannot be saved. Keep this page open.','无法保存进度，请保持本页打开。')}</p>`:''}${notice?`<p class="notice">${esc(notice)}</p>`:''}${current.page==='map'?map():current.page==='lesson'?lesson():current.page==='complete'?completion():home()}</main><div id="modal-root"></div><div id="toast" class="toast" role="status"></div>`;
  document.title=(current.page==='lesson'?t(course.lessons[current.index].title):current.page==='map'?tr('Course map','课程目录'):t(course.title))+' · MATLAB Lab';
  if(focus){window.scrollTo(0,0);document.getElementById('step-title')?.focus({preventScroll:true});}
 }
 function capture(){
  const form=document.getElementById('guided-check');if(form&&current.page==='lesson'){const st=LabGuide.entry(book,key()),value=new FormData(form).get('answer');if(value!==null)LabGuide.edit(guides[key()],st,form.dataset.question,value,LabCore);saveGuide();}
  const notes=document.getElementById('capstone-notes');if(notes){notebook.notes[notes.dataset.stage]=Object.fromEntries(new FormData(notes));notebook=LabCapstone.cleanNotebook(notebook,courses.investigation);saveNotebook();}
 }
 function saveNotebook(){const el=document.getElementById('notebook-status');if(review){if(el)el.textContent=tr('Preview notes are temporary. Export a copy to keep them.','预览笔记为临时记录，请导出保留。');return;}try{const result=noteDisk.save(notebook);notebook=LabCapstone.cleanNotebook(result.value,courses.investigation);notebookConflict=notebookConflict||result.conflict;syncAccount();const form=document.getElementById('capstone-notes');if(form)for(const[id,value]of Object.entries(notebook.notes[form.dataset.stage])){const field=form.elements?.namedItem(id);if(field&&field.value!==value)field.value=value;}const conflicts=document.getElementById('notebook-conflicts');if(conflicts&&form)conflicts.innerHTML=LabCapstone.conflicts(notebook,form.dataset.stage,{fmt,esc});if(el)el.textContent=notebookConflict?tr('Two tabs edited this note. Both versions are kept below and included in your export.','两个标签页修改了同一笔记，下方保留了两个版本，导出时也会包含它们。'):window.LabClassroom?.signedIn()?tr('Notes kept in this tab; check the account save status. Not submitted.','笔记保存在本标签页，请查看账户保存状态。未提交。'):tr('Notes saved on this device. Not submitted.','笔记已保存在此设备，未提交。');}catch(_){if(el)el.textContent=tr('Cannot save notes. Export before closing.','无法保存笔记，关闭前请导出。');}}
 function toast(text){const el=document.getElementById('toast');el.textContent=text;el.classList.add('visible');setTimeout(()=>el.classList.remove('visible'),4200);}
 let exportURL=null;
 function releaseExport(){if(exportURL){URL.revokeObjectURL(exportURL);exportURL=null;}}
 function modal(title,content){releaseExport();modalReturnFocus=document.activeElement;document.getElementById('modal-root').innerHTML=`<dialog id="lab-dialog" aria-labelledby="dialog-title"><div class="dialog-heading"><h2 id="dialog-title">${title}</h2><button class="help-button" data-action="close-dialog" aria-label="Close / 关闭">${icon('close')}</button></div>${content}</dialog>`;const d=document.getElementById('lab-dialog');d.addEventListener('close',()=>{if(d===document.getElementById('lab-dialog')){releaseExport();modalReturnFocus?.focus();}});d.showModal();}
 function help(){modal(F('Help','帮助'),`<button class="text-button" data-action="replay-intro">${F('Replay the introduction','重播简介')}</button>${LabGuide.recovery(fmt)}<details class="guide-help"><summary>${F('Arrange the windows','摆放窗口')}</summary>${LabGuide.visual('windows',fmt)}</details><details class="guide-help"><summary>${F('Save and run a script','保存并运行脚本')}</summary>${LabGuide.visual('editor',fmt)}<p>${F('Choose New Script. Add code in Editor. Save the .m file in the current folder, then click Run.','选择 New Script。在 Editor 添加代码。把 .m 文件保存在当前文件夹，再点击 Run。')}</p></details><details class="guide-help"><summary>${F('Progress on this computer','这台电脑上的进度')}</summary><p>${window.LabClassroom?.signedIn()?F('Account progress syncs online. Teachers see progress, activity estimates and submitted files. Draft notes stay private. Export unsaved notes before leaving.','账户进度在线同步。老师可查看进度、活跃时间估计和提交文件；草稿笔记仅供本人查看。离开前请导出未保存笔记。'):F('Progress stays in this browser. It is not sent to your teacher. Export Project 6 notes before changing devices.','进度保存在此浏览器，不会发送给老师。更换设备前请导出项目 6 笔记。')}</p><button class="text-button" data-action="reset">${F('Reset progress','重置进度')}</button></details>`);}
 async function copy(src,button){try{await navigator.clipboard.writeText(src);toast(button.dataset.action==='copy-export'?tr('Text copied. Paste it into a file to keep a copy.','文字已复制。请粘贴到文件中保存副本。'):tr('Copied. Windows: Ctrl+V in MATLAB. Mac: Command+V.','已复制。在 MATLAB 粘贴：Windows 按 Ctrl+V；Mac 按 Command+V。'));}catch(_){const pre=button.closest('.guide-code')?.querySelector('code');if(pre){const range=document.createRange();range.selectNodeContents(pre);const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);}else document.getElementById('export-notes')?.select();toast(tr('Select the code. Windows: Ctrl+C. Mac: Command+C.','选中代码。Windows 按 Ctrl+C；Mac 按 Command+C。'));}}
 function exportText(text,name){const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));modal(F('Save a copy','保存副本'),`<p>${F('Copy the text, or download the file.','复制文字，或下载文件。')}</p><div class="cap-field"><label for="export-notes">${F('File contents','文件内容')}</label><textarea id="export-notes" readonly rows="10">${esc(text)}</textarea></div><div class="dialog-actions"><button class="button primary" data-action="copy-export">${F('Copy','复制')}</button><a class="button secondary" href="${url}" download="${name}">${F('Download','下载')}</a></div>`);exportURL=url;setTimeout(()=>{URL.revokeObjectURL(url);if(exportURL===url)exportURL=null;},300000);}
 app.addEventListener('input',e=>{const form=e.target.closest('#guided-check');const wasSolved=form&&LabGuide.entry(book,key()).solved.includes(form.dataset.question);const position=e.target.selectionStart;const selector=e.target.type==='radio'?`#guided-check input[value="${e.target.value}"]`:'#step-answer';if(e.target.closest('#guided-check,#capstone-notes'))capture();if(wasSolved){delete feedback[key()];render();const field=document.querySelector(selector);field?.focus({preventScroll:true});if(field&&position!==null&&field.type!=='radio')field.setSelectionRange(position,position);}});
 app.addEventListener('change',e=>{if(e.target.closest('#guided-check,#capstone-notes'))capture();});
 app.addEventListener('click',async e=>{
  const lang=e.target.closest('[data-lang]');if(lang){capture();store.lang=lang.dataset.lang;persist();const y=scrollY;render();window.scrollTo(0,y);document.querySelector(`[data-lang="${store.lang}"]`).focus({preventScroll:true});return;}
  const scroll=e.target.closest('[data-scroll]');if(scroll){e.preventDefault();const target=document.getElementById(scroll.dataset.scroll);if(target?.tagName==='DETAILS')target.open=true;target?.scrollIntoView({block:'start'});return;}
  const b=e.target.closest('[data-action]');if(!b)return;
  const action=b.dataset.action;
  if(['next-step','previous-step','jump-step'].includes(action)){
   capture();const st=LabGuide.entry(book,key()),steps=guides[key()],s=steps[st.cursor];
   if(action==='next-step'&&s.question&&(!st.solved.includes(s.question.id)||!LabCore.validate(s.question,st.answers[s.question.id],st.answers)))return;
   const i=action==='next-step'?st.cursor+1:action==='previous-step'?st.cursor-1:Number(b.dataset.index);
   if(i<0||i>=steps.length||(action==='jump-step'&&i>st.reached&&!review&&!state.completed.includes(course.lessons[current.index].id)))return;
   st.cursor=i;st.reached=Math.max(st.reached,i);delete feedback[key()];saveGuide();render(true);return;
  }
  switch(action){
   case 'copy-export':await copy(document.getElementById('export-notes').value,b);break;
   case 'copy-step':await copy(guides[key()][LabGuide.entry(book,key()).cursor].code,b);break;
   case 'help':help();break;
   case 'replay-intro':document.getElementById('lab-dialog').close();window.LabIntro?.open();break;
   case 'close-dialog':document.getElementById('lab-dialog').close();break;
   case 'reset':document.getElementById('lab-dialog').close();modal(F('Reset learning progress?','重置学习进度？'),`<p>${F('Lesson progress and self-review marks will be cleared. Project 6 notes, language and MATLAB files are kept.','清除课程进度和自查标记。保留项目 6 笔记、语言和 MATLAB 文件。')}</p><div class="dialog-actions"><button class="button secondary" data-action="close-dialog">${F('Keep progress','保留进度')}</button><button class="button primary" data-action="confirm-reset">${F('Reset progress','重置进度')}</button></div>`);break;
   case 'confirm-reset':{try{LabStorage.reset(diskStorage);store=restoreProgress(progressDisk.sync());book=LabGuide.clean(guideDisk.sync(),guides,LabCore);feedback={};problems={};history.replaceState(null,'','#/');persist();saveGuide();render(true);}catch(_){toast(tr('Cannot reset saved progress. Keep this page open.','无法重置已保存进度，请保持本页打开。'));}break;}
   case 'download-lesson':{const l=course.lessons[current.index];exportText(guides[key()].filter(s=>s.code).map(s=>'% '+s.title.en+' / '+s.title.zh+'\n'+s.code).join('\n\n'),`p${course.number}_${l.id.replaceAll('-','_')}.m`);break;}
   case 'save-notebook':capture();saveNotebook();break;
   case 'export-notebook':capture();exportText(LabCapstone.exportNotes(courses.investigation,notebook,store.progress.investigation.completed),'independent_project_notes.md');break;
   case 'review-section':{if(review)return;capture();const l=course.lessons[current.index];if(state.completed.includes(l.id))state.completed=state.completed.filter(id=>id!==l.id);else if(LabCapstone.ready(notebook.notes[l.id],l))state.completed.push(l.id);else{document.getElementById('notebook-status').textContent=tr('Add notes for both prompts first.','请先填写两个提示的笔记。');return;}persist();render();break;}
  }
 });
 app.addEventListener('submit',e=>{if(e.target.id!=='guided-check')return;e.preventDefault();capture();const st=LabGuide.entry(book,key()),qid=e.target.dataset.question,alreadySolved=st.solved.includes(qid);problems[key()]=LabCore.assess(guides[key()].find(s=>s.question?.id===qid).question,st.answers[qid]||'',st.answers);feedback[key()]=LabGuide.check(guides[key()],st,qid,st.answers[qid]||'',LabCore);saveGuide();render();document.getElementById('step-feedback')?.focus({preventScroll:true});document.getElementById('step-feedback')?.scrollIntoView({block:'nearest'});if(feedback[key()]&&!alreadySolved)LabCelebrate.play(document.getElementById('step-feedback'));});
 window.addEventListener('storage',e=>{if(review||window.LabClassroom?.signedIn()||!e.key?.startsWith(LabStorage.PREFIX))return;const field=document.activeElement,id=field?.id,start=field?.selectionStart,end=field?.selectionEnd,y=scrollY;capture();try{const lang=langDisk.sync().lang;store=restoreProgress(progressDisk.sync());store.lang=lang==='en'?'en':'zh';book=LabGuide.clean(guideDisk.sync(),guides,LabCore);notebook=LabCapstone.cleanNotebook(noteDisk.sync(),courses.investigation);feedback={};problems={};render(false,true);const target=id&&document.getElementById(id);target?.focus({preventScroll:true});if(target?.setSelectionRange&&start!==null)target.setSelectionRange(start,end);window.scrollTo(0,y);if(notebookConflict)saveNotebook();}catch(_){storageOK=false;}});

 // Explicit import reads the current changed-field format, without writing or
 // falling back from an account to another pupil's device work.
 if(window.LabClassroom)window.LabClassroom.deviceSnapshot=()=>{
  const nativeRead=k=>{try{return JSON.parse(localStorage.getItem(k));}catch(_){return null;}};
  const old=nativeRead(KEY),legacy=nativeRead('matlab-lab:bootcamp:v1');
  let a=LabCore.cleanAppState(old,courses,legacy);if(!old&&!legacy)a.lang='zh';
  const p=LabStorage.channel(localStorage,'progress',progressFields(a),{resettable:true,defaults:progressFields(LabCore.cleanAppState(null,courses)),readonly:true});
  const g=LabStorage.channel(localStorage,'guides',fullBook(LabGuide.clean(nativeRead(GUIDE_KEY),guides,LabCore)),{resettable:true,defaults:fullBook(LabGuide.blank()),readonly:true});
  const n=LabStorage.channel(localStorage,'notes',LabCapstone.cleanNotebook(nativeRead(NOTEBOOK_KEY),courses.investigation),{notes:true,readonly:true});
  const l=LabStorage.channel(localStorage,'language',{lang:a.lang},{readonly:true});
  a=restoreProgress(p.sync());a.lang=l.sync().lang==='en'?'en':'zh';
  return {app:a,guide:fullBook(LabGuide.clean(g.sync(),guides,LabCore)),notebook:LabCapstone.cleanNotebook(n.sync(),courses.investigation)};
 };
 window.addEventListener('lab-account-change',()=>{
  releaseExport();document.getElementById('lab-dialog')?.close();
  const saved=read(KEY),legacy=read('matlab-lab:bootcamp:v1');
  store=LabCore.cleanAppState(saved,courses,legacy);if(!saved&&!legacy)store.lang='zh';
  book=LabGuide.clean(read(GUIDE_KEY),guides,LabCore);notebook=LabCapstone.cleanNotebook(read(NOTEBOOK_KEY),courses.investigation);
  notebookConflict=false;feedback={};problems={};initialiseDisks();
  history.replaceState(null,'','#/');persist();render(true);
 });
 window.addEventListener('hashchange',()=>{capture();render(true);});
 document.querySelector('.skip-link').addEventListener('click',e=>{e.preventDefault();document.getElementById('main').focus();});
 persist();render();
})();

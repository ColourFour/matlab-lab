(function () {
  'use strict';
  const courses=LAB_COURSES, KEY='matlab-lab:v2', LEGACY_KEY='matlab-lab:bootcamp:v1', app=document.getElementById('app');
  let saved=null,legacy=null,storageOK=true;
  try {saved=JSON.parse(localStorage.getItem(KEY));legacy=JSON.parse(localStorage.getItem(LEGACY_KEY));} catch(_) {}
  let store=LabCore.cleanAppState(saved,courses,legacy),course=courses.bootcamp,lessons=course.lessons;
  let state={...store.progress.bootcamp,lang:store.lang},drafts={},results={},hints=new Set(),notice='';
  const keyFor=l=>course.id+':'+l.id;
  const unlocked=c=>!c.requires || store.progress[c.requires].completed.length===courses[c.requires].lessons.length;
  function selectCourse(id){
    if(course.id===id)return;
    store.progress[course.id]=LabCore.cleanState(state,lessons);
    course=courses[id];lessons=course.lessons;
    state={...store.progress[id],lang:store.lang};
  }
  const t = value => typeof value === 'object' ? value[state.lang] : value;
  const tr = (en,zh) => state.lang === 'zh' ? zh : en;
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const plain = s => esc(s).replace(/`([^`]+)`/g,'<code>$1</code>');
  const fmt = s => typeof s !== 'object' ? plain(s) : `<span class="translated">${['en','zh'].map(lang=>`<span lang="${lang==='zh'?'zh-Hans':'en'}" ${lang===state.lang?'':'class="translation-ghost" aria-hidden="true"'}>${plain(s[lang])}</span>`).join('')}</span>`;
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
  const icon = (name,cls='') => `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.terminal}</svg>`;
  function persist() {
    store.lang=state.lang;
    store.progress[course.id]=LabCore.cleanState(state,lessons);
    try {localStorage.setItem(KEY,JSON.stringify(store));storageOK=true;}catch(_){storageOK=false;}
  }
  persist();
  function route() {
    const hash=location.hash || '#/';
    if(hash==='#/' || hash==='#'){selectCourse('bootcamp');return {page:'home'};}
    const normalized=hash==='#/complete'?'#/bootcamp/complete':hash;
    const match=normalized.match(/^#\/([a-z-]+)(?:\/([a-z-]+))?$/);
    if(match && courses[match[1]]){
      selectCourse(match[1]);
      if(!match[2])return {page:'home'};
      if(unlocked(course)){
        if(match[2]==='complete' && state.completed.length===lessons.length)return {page:'complete'};
        const index=lessons.findIndex(l=>l.id===match[2]);
        if(index>=0 && index<=state.completed.length)return {page:'lesson',index};
      }
      notice=unlocked(course)?tr('Complete the earlier missions to unlock this lesson.','请先完成前面的任务，解锁本课。'):tr('Finish Project 0 to unlock Project 1. You can preview its eight missions below.','完成项目 0 后即可解锁项目 1。你可以先查看下方的八个任务。');
      history.replaceState(null,'','#/'+course.id);return {page:'home'};
    }
    selectCourse('bootcamp');notice=tr('That page is unavailable. Choose a project below.','该页面不可用。请在下方选择一个项目。');
    history.replaceState(null,'','#/');return {page:'home'};
  }
  function linkTo(i){return '#/'+course.id+'/'+lessons[i].id;}
  function overviewLink(c=course){return c.id==='bootcamp'?'#/':'#/'+c.id;}
  function completedLink(c=course){return '#/'+c.id+'/complete';}
  function lessonStatus(i){return !unlocked(course)?'locked':i<state.completed.length?'done':i===state.completed.length?'next':'locked';}
  function navItem(l,i,current) {
    const status=lessonStatus(i), active=current.page==='lesson'&&current.index===i;
    const label=status==='done'?tr('Completed','已完成'):status==='locked'?tr('Complete the previous mission to unlock','完成上一任务后解锁'):tr('Ready to start','可以开始');
    const inner=`<span class="nav-number ${status}">${status==='done'?icon('check'):status==='locked'?icon('lock'):String(i+1).padStart(2,'0')}</span><span>${fmt(l.short)}</span>${active?'<span class="active-dot"></span>':''}`;
    return status==='locked'?`<li><button class="lesson-nav locked" disabled aria-label="${esc(t(l.short)+' — '+label)}" title="${esc(label)}">${inner}</button></li>`:`<li><a class="lesson-nav ${active?'selected':''}" href="${linkTo(i)}" ${active?'aria-current="page"':''} title="${esc(label)}">${inner}</a></li>`;
  }
  function shell(current) {
    const n=state.completed.length, pct=Math.round(n/lessons.length*100);
    document.documentElement.lang=state.lang==='zh'?'zh-Hans':'en';
    return `<header class="topbar"><a class="brand" href="#/" aria-label="MATLAB Lab ${tr('home','首页')}"><span class="brand-mark">${icon('plot')}</span><span>MATLAB<span class="brand-light"> LAB</span></span></a><span class="top-tag">${tr('A LITTLE CODE. A LOT OF POSSIBILITY.','从一行代码开始，探索无限可能。')}</span><div class="header-actions"><div class="language-switch" role="group" aria-label="Language / 语言"><button data-lang="en" class="${state.lang==='en'?'chosen':''}" aria-pressed="${state.lang==='en'}" lang="en">EN</button><button data-lang="zh" class="${state.lang==='zh'?'chosen':''}" aria-pressed="${state.lang==='zh'}" lang="zh-Hans">中文</button></div><button class="help-button" data-action="help" aria-label="${tr('Setup and help','准备与帮助')}">${icon('help')}</button></div></header>
    <aside class="sidebar"><a href="#/" class="all-projects ${current.page==='home'?'current':''}">${icon('home')} ${tr('Project hub','项目首页')}</a><nav class="course-switch" aria-label="${tr('Choose a project','选择项目')}">${Object.values(courses).map(c=>`<a href="${overviewLink(c)}" class="${course.id===c.id?'selected':''}" ${course.id===c.id?'aria-current="true"':''}>${tr('Project','项目')} ${c.number} ${!unlocked(c)?icon('lock'):''}</a>`).join('')}</nav><div class="sidebar-course"><span class="eyebrow">${tr('PROJECT','项目')} ${course.number}</span><strong>${esc(t(course.title))}</strong><div class="progress-caption"><span>${tr('Your progress','你的进度')}</span><b>${pct}%</b></div><progress value="${n}" max="${lessons.length}" aria-label="${esc(t(course.title))} ${tr('progress','进度')}">${pct}%</progress></div><nav aria-label="${esc(t(course.title))} ${tr('missions','任务')}"><ol class="lesson-list">${lessons.map((l,i)=>navItem(l,i,current)).join('')}</ol></nav><div class="sidebar-bottom"><div class="save-status">${icon(storageOK?'check':'help')}<span>${storageOK?tr('Saved on this browser','已保存在此浏览器'):tr('Progress cannot be saved','无法保存进度')}</span></div><p>${storageOK?tr('Small steps count. Pick up where you left off.','每一小步都算数。随时回来继续。'):tr('You can continue, but progress will be lost when you close or reload this page.','你可以继续学习，但关闭或刷新页面后，进度会丢失。')}</p><button class="text-button" data-action="help">${tr('Setup & help','准备与帮助')} ${icon('arrow')}</button></div></aside>
    <div class="main-wrap"><main id="main" tabindex="-1">${!storageOK?`<p class="notice" role="status">${tr("Your browser cannot save progress. Keep this page open while you work.","此浏览器无法保存进度。学习时请保持本页面打开。")}</p>`:""}${notice?`<p class="notice" role="status">${esc(notice)}</p>`:''}${current.page==='home'?home():current.page==='complete'?complete():lesson(current.index)}</main><footer class="site-footer"><span>MATLAB LAB · ${tr('LEARN BY MAKING','动手学习')}</span><span>${tr('EN / 中文 · Same ideas. Same code.','EN / 中文 · 相同知识，相同代码。')}</span></footer></div><div id="modal-root"></div><div id="toast" class="toast" role="status"></div>`;
  }
  function home() {
    const n=state.completed.length, next=Math.min(n,lessons.length-1), done=n===lessons.length, available=unlocked(course);
    return `<div class="page-heading home-heading"><div><p class="eyebrow">${course.id==='bootcamp'?tr('YOUR LEARNING PATH','你的学习路线'):tr('PROJECT 1 · APPLY YOUR SKILLS','项目 1 · 学以致用')}</p><h1>${course.id==='bootcamp'?tr('Big ideas. Start small.','大想法，从小处开始。'):esc(t(course.title))}</h1><p class="lede">${course.id==='bootcamp'?tr('Learn MATLAB by making things, one small mission at a time.','每次完成一个小任务，在动手实践中学会 MATLAB。'):tr('Use your MATLAB skills to predict where a ball will land.','用 MATLAB 技能预测小球的落地点。')}</p></div><span class="track-label">${icon('terminal')} ${tr('BEGINNER TRACK','零基础路线')}</span></div>
    <section class="featured-course" aria-labelledby="bootcamp-title"><div class="course-copy"><div class="course-meta"><span class="pill">${done?tr('COMPLETED','已完成'):available?tr('READY TO START','可以开始'):tr('AFTER PROJECT 0','完成项目 0 后开始')}</span><span>${tr('PROJECT','项目')} ${course.number}</span></div><h2 id="bootcamp-title">${esc(t(course.headline)).replace(/\n/g,'<br>')}</h2><p>${esc(t(course.description)).replace(/\n/g,'<br>')}</p><div class="course-facts"><span>${icon('book')} ${lessons.length} ${tr('small missions','个小任务')}</span><span>${icon('clock')} ${tr('About','约')} ${course.duration} ${tr('minutes','分钟')}</span></div><a class="button lime" href="${!available?'#/':done?completedLink():linkTo(next)}">${!available?tr('Finish Boot Camp first','先完成入门训练营'):done?tr('View your achievement','查看学习成果'):n?tr('Continue project','继续项目'):tr('Start project','开始项目')} ${icon('arrow')}</a></div><div class="course-visual"><div class="visual-window-bar"><span></span><span></span><span></span><b>${course.fileName}</b></div><div class="hero-plot">${LabDiagrams.plot(course.previewPlot,state.lang)}</div><div class="visual-code"><span>&gt;&gt;</span> ${esc(course.previewCode)}</div><span class="visual-caption">${tr('YOU’LL MAKE THIS ↑','你将画出这张图 ↑')}</span></div></section>
    <section class="mission-section" aria-labelledby="missions-title"><div class="section-heading"><h2 id="missions-title">${course.id==='bootcamp'?tr('Eight steps to “I made that.”','八步，做出你的第一个作品。'):tr('Your flight plan','你的飞行计划')}</h2><span>${n} / ${lessons.length} ${tr('complete','已完成')}</span></div><div class="mission-grid">${lessons.map((l,i)=>{const status=lessonStatus(i);const body=`<div class="mission-top"><span class="mission-index">${String(i+1).padStart(2,'0')}</span>${icon(status==='locked'?'lock':status==='done'?'check':l.icon)}</div><h3>${fmt(l.short)}</h3><span class="mission-status">${status==='locked'?tr('Locked','未解锁'):status==='done'?tr('Complete · review','已完成 · 复习'):tr('Ready when you are','准备好就开始')}<span>${l.minutes} ${tr('min','分钟')}</span></span>`;return status==='locked'?`<div class="mission-tile locked">${body}</div>`:`<a href="${linkTo(i)}" class="mission-tile ${status}">${body}</a>`;}).join('')}</div></section>
    <div class="setup-strip">${icon('help')}<p><strong>${tr('You write the code in MATLAB.','代码在 MATLAB 中运行。')}</strong> ${tr('Keep this guide beside MATLAB. Checkpoints check the results you enter here.','把本指南放在 MATLAB 旁边。检查点会核对你在网页中输入的结果。')}</p><button data-action="help" class="text-button">${tr('Get set up','开始准备')} ${icon('arrow')}</button></div>
    ${course.id==='bootcamp'?projectOneCard():''}
    <section class="future-section" aria-labelledby="future-title"><div class="section-heading"><h2 id="future-title">${tr('Next, put your skills to work.','接下来，用技能探索。')}</h2><span>${tr('COMING LATER','后续课程')}</span></div><p class="section-intro">${tr('Projects 2–6 are still being built. They will stay locked until their lessons are ready.','项目 2–6 仍在开发中，课程完成前将保持锁定。')}</p><div class="future-grid">${LAB_PROJECTS.filter(p=>!p.available).map(p=>`<article class="future-card"><span class="future-icon">${icon(p.icon)}</span><div><span class="eyebrow">${tr('PROJECT','项目')} ${p.number}</span><h3>${esc(t(p.title))}</h3><p>${esc(t(p.summary))}</p></div><span class="future-lock" aria-label="${tr('Not available yet','暂未开放')}">${icon('lock')}</span></article>`).join('')}</div></section>`;
  }
  function projectOneCard(){
    const c=courses['projectile-motion'],available=unlocked(c),n=store.progress[c.id].completed.length;
    return `<section class="project-one-card"><div><p class="eyebrow">${tr('PROJECT 1 · NOW AVAILABLE','项目 1 · 已上线')}</p><h2>${esc(t(c.title))}</h2><p>${tr('Build a real flight model, compare launch angles, and land in a 34–36 m target zone.','建立飞行模型，比较发射角度，让小球落入 34–36 米目标区。')}</p><span class="project-access">${available?`${n} / ${c.lessons.length} ${tr('complete','已完成')}`:tr('Unlocks when you finish Boot Camp','完成入门训练营后解锁')}</span></div><a class="button primary" href="#/projectile-motion">${available?tr('Open Project 1','打开项目 1'):tr('Preview Project 1','预览项目 1')} ${icon('arrow')}</a></section>`;
  }
  function codeBlock(code) { return `<pre class="code-block" tabindex="0" aria-label="${tr('MATLAB code','MATLAB 代码')}"><code>${code.split('\n').map((line,i)=>`<span class="code-line"><span class="line-number" aria-hidden="true">${i+1}</span><span class="${line.startsWith('%')?'code-comment':''}">${esc(line)||' '}</span></span>`).join('')}</code></pre>`; }
  function question(q,l) {
    const value=drafts[keyFor(l)]?.[q.id]||'', feedback=results[keyFor(l)], bad=feedback&&!feedback.fields[q.id], good=feedback&&feedback.fields[q.id];
    const label=`${fmt(q.label)}${good?` <span class="field-success">${icon('check')} ${tr('Correct','正确')}</span>`:''}`;
    if(q.type==='choice')return `<fieldset class="question choice-question ${bad?'invalid':''}"><legend>${label}</legend><div class="choices">${q.options.map(o=>`<label class="choice"><input type="radio" name="${q.id}" value="${o.value}" ${value===o.value?'checked':''} ${bad?'aria-describedby="feedback-'+l.id+'"':''}><span>${fmt(o.label)}</span></label>`).join('')}</div></fieldset>`;
    return `<div class="question"><label for="answer-${q.id}">${label}</label><input id="answer-${q.id}" name="${q.id}" type="text" ${q.type==='number'?'inputmode="decimal"':''} autocomplete="off" spellcheck="false" value="${esc(value)}" placeholder="${esc(t(q.placeholder))}" ${bad?'aria-invalid="true" aria-describedby="feedback-'+l.id+'"':''}><span class="input-note">${q.type==='vector'?tr('Use spaces or commas. Brackets are optional. Enter values, not code.','用空格或逗号分隔，方括号可选。请输入数值，不是代码。'):tr('Enter a number, not a MATLAB expression.','请输入数字，不是 MATLAB 算式。')}</span></div>`;
  }
  function lesson(i) {
    const l=lessons[i],passed=state.completed.includes(l.id),res=results[keyFor(l)];
    const stageNames=[tr('See','观察'),tr('Understand','理解'),tr('Do','动手'),tr('Compare','对比'),tr('Check','检查'),tr('Continue','继续')],anchors=['see','understand','do','compare','check','continue'];
    return `<div class="breadcrumb"><a href="#/">${tr('Projects','项目')}</a><span>/</span><span>${esc(t(course.short))}</span><span>/</span><b>${String(i+1).padStart(2,'0')}</b><span class="lesson-time">${icon('clock')} ${l.minutes} ${tr('min','分钟')}</span></div><div class="page-heading lesson-heading"><p class="eyebrow">${tr('MISSION','任务')} ${String(i+1).padStart(2,'0')} <span> / ${String(lessons.length).padStart(2,'0')}</span>${passed?`<span class="completed-label">${icon('check')} ${tr('COMPLETE','已完成')}</span>`:''}</p><h1>${fmt(l.title)}</h1><p class="lede">${fmt(l.goal)}</p></div><nav class="stage-rail" aria-label="${tr('Lesson sections','课程环节')}">${stageNames.map((n,j)=>`<a href="#${anchors[j]}" data-scroll="${anchors[j]}"><span>${j+1}</span>${n}</a>`).join('')}</nav>
    <section class="concept-panel"><div class="see-panel" id="see"><div class="step-heading"><span class="step-number">1</span><h2>${stageNames[0]}</h2><span class="small-label">${tr('THE IDEA','概念')}</span></div><p class="diagram-caption">${fmt(l.see)}</p><div class="diagram-box">${LabDiagrams.diagram(l.diagram,state.lang)}</div></div><div class="understand-panel" id="understand"><div class="step-heading"><span class="step-number">2</span><h2>${stageNames[1]}</h2></div><span class="vocab">${esc(l.term)}</span><p>${fmt(l.understand)}</p></div></section>
    <div class="practice-grid"><section class="practice-panel" id="do"><div class="step-heading"><span class="step-number">3</span><h2>${stageNames[2]}</h2><span class="small-label">${tr('IN MATLAB','在 MATLAB 中')}</span></div><ol class="instructions">${l.steps.map(s=>`<li>${fmt(s)}</li>`).join('')}</ol><div class="editor"><div class="editor-bar"><span>${l.editor || tr('Command Window','Command Window · 命令窗口')}</span><button class="copy-button" data-action="copy" data-lesson="${i}">${icon('copy')} ${tr('Copy','复制')}</button></div>${codeBlock(l.code)}</div>${l.download?`<a href="${l.download}" download class="text-button download-link">${icon('down')} ${tr('Download starter script','下载起始脚本')}</a>`:''}</section>
    <section class="practice-panel compare-panel" id="compare"><div class="step-heading"><span class="step-number">4</span><h2>${stageNames[3]}</h2><span class="small-label">${tr('EXPECTED RESULT','预期结果')}</span></div><p class="compare-copy">${fmt(l.compare)}</p><div class="expected-output ${l.outputPlot?'plot-output':''}"><div class="output-label">${l.outputPlot?tr('FIGURE · REFERENCE','图形 · 参考'):tr('COMMAND WINDOW · OUTPUT','命令窗口 · 输出')}</div>${l.outputPlot?LabDiagrams.plot(l.outputPlot,state.lang):`<pre tabindex="0">${esc(l.output)}</pre>`}</div><div class="try-note">${icon('terminal')}<p>${fmt(l.note)}</p></div></section></div>
    <section class="checkpoint" id="check"><div class="checkpoint-intro"><div class="step-heading"><span class="step-number">5</span><h2>${stageNames[4]}</h2>${passed?`<span class="passed-pill">${icon('check')} ${tr('Passed','已通过')}</span>`:''}</div><p>${tr('Your turn. Run it, then check your result.','轮到你了。运行代码，然后检查结果。')}</p></div><form id="checkpoint-form" data-lesson="${i}" novalidate>${l.questions.map(q=>question(q,l)).join('')}<div class="check-actions"><button class="button primary" type="submit">${tr('Check my answer','检查答案')} ${icon('check')}</button><button class="text-button" type="button" data-action="hint" aria-expanded="${hints.has(keyFor(l))}" aria-controls="hint-text">${tr('Need a hint?','需要提示？')}</button></div><div id="hint-text" class="hint" ${hints.has(keyFor(l))?'':'hidden'}>${fmt(l.hint)}</div><div id="feedback-${l.id}" class="feedback ${res?(res.ok?'success':'retry'):''}" role="status" tabindex="-1">${res?(res.ok?`${icon('check')}<span>${fmt(l.success)}</span>`:`${icon('help')}<span>${tr('Not quite yet. Recheck the marked answers and try again. You can use a hint.','还差一点。请检查标出的答案，再试一次。你也可以查看提示。')}</span>`):''}</div><p class="checkpoint-disclosure">${tr('This checks the values you enter. Your MATLAB code runs in MATLAB.','这里核对你输入的数值。MATLAB 代码需在 MATLAB 中运行。')}</p></form></section>
    <div class="continue-bar" id="continue"><a class="text-button" href="${i===0?overviewLink():linkTo(i-1)}">${icon('back')} ${i===0?tr('Project hub','项目首页'):tr('Previous mission','上一任务')}</a><div><span class="unlock-note">${passed?(i===lessons.length-1?tr('All missions complete.','全部任务已完成。'):tr('Next mission unlocked.','下一任务已解锁。')):tr('Pass the checkpoint to continue.','通过检查点后即可继续。')}</span>${passed?`<a class="button primary" href="${i===lessons.length-1?completedLink():linkTo(i+1)}">${i===lessons.length-1?tr('Finish project','完成项目'):tr('Continue','继续')} ${icon('arrow')}</a>`:`<button class="button primary" disabled>${tr('Continue','继续')} ${icon('lock')}</button>`}</div></div>`;
  }
  function complete() {
    const isBootcamp=course.id==='bootcamp';
    return `<div class="completion"><span class="achievement-icon">${icon('flag')}</span><p class="eyebrow">${tr('PROJECT','项目')} ${course.number} · ${tr('COMPLETE','已完成')}</p><h1>${esc(t(course.completeTitle))}</h1><p class="lede">${esc(t(course.completeText)).replace(/\n/g,'<br>')}</p><div class="achievement-plot">${LabDiagrams.plot(isBootcamp?'arc':'target-paths',state.lang)}</div><div class="achievement-skills">${course.skills.map(s=>`<span>${icon('check')}${esc(t(s))}</span>`).join('')}</div><p class="completion-note">${isBootcamp?tr('Project 1 is unlocked. Use your new skills to build a projectile model and hit a target.','项目 1 已解锁。运用新技能建立抛体模型，并命中目标。'):tr('Keep your script and explain why 30° and 60° have the same range but different heights. Project 2 is still in development.','保存脚本，解释为什么 30° 和 60° 的射程相同，但最大高度不同。项目 2 仍在开发中。')}</p><div class="completion-actions"><a class="button primary" href="${isBootcamp?'#/projectile-motion':'#/'}">${isBootcamp?tr('Start Project 1','开始项目 1'):tr('Back to project hub','返回项目首页')} ${icon('arrow')}</a><a class="button secondary" href="${course.reference}" download>${icon('down')} ${tr('Keep the reference code','保存参考代码')}</a></div><a href="${linkTo(0)}" class="text-button">${tr('Review the missions','复习任务')}</a></div>`;
  }
  function capture() {
    const form=document.getElementById('checkpoint-form');
    if(form) drafts[keyFor(lessons[Number(form.dataset.lesson)])]=Object.fromEntries(new FormData(form));
  }
  function render(options={}) {
    const current=route();
    if(current.page==='lesson'){state.lastLesson=lessons[current.index].id;persist();}
    app.innerHTML=shell(current);notice='';
    document.title=(current.page==='lesson'?t(lessons[current.index].title):current.page==='complete'?t(course.title)+' · '+tr('Complete','已完成'):tr('Project hub','项目首页'))+' · MATLAB Lab';
    if(options.focus) { document.getElementById('main').focus({preventScroll:true}); window.scrollTo(0,0); }
  }
  function toast(message) { const box=document.getElementById('toast');box.textContent=message;box.classList.add('visible');setTimeout(()=>box.classList.remove('visible'),4200); }
  let modalReturnFocus=null;
  function showModal(type) {
    modalReturnFocus=document.activeElement?.closest("dialog") ? document.querySelector("header [data-action=help]") : document.activeElement;
    const reset=type==='reset',root=document.getElementById('modal-root');
    root.innerHTML=`<dialog id="lab-dialog" aria-labelledby="dialog-title"><div class="dialog-heading"><h2 id="dialog-title">${reset?tr('Start fresh?','重新开始？'):tr('Ready your workspace','准备学习环境')}</h2><button class="help-button" data-action="close-dialog" aria-label="${tr('Close','关闭')}">${icon('close')}</button></div>${reset?`<p>${tr('This resets progress in both projects and locks Project 1 again. Your language choice and MATLAB files stay the same.','这将重置两个项目的进度，并再次锁定项目 1。语言选择和 MATLAB 文件不受影响。')}</p><div class="dialog-actions"><button class="button secondary" data-action="close-dialog" autofocus>${tr('Keep my progress','保留进度')}</button><button class="button danger" data-action="confirm-reset">${tr('Reset progress','重置进度')}</button></div>`:`<p>${tr('Use two windows: this guide on one side, MATLAB on the other. No coding experience is needed.','打开两个窗口：一边是本指南，一边是 MATLAB。无需编程经验。')}</p><ol class="setup-steps"><li><strong>${tr('Get MATLAB access','准备 MATLAB')}</strong><p>${tr('Use your school’s desktop installation, or open MATLAB Online and sign in with your MathWorks account. Access depends on your account or school license. Ask your teacher if you cannot open it.','使用学校安装的桌面版，或打开 MATLAB Online 并登录 MathWorks 账户。访问权限取决于你的账户或学校许可。无法打开时，请联系老师。')}</p><a class="text-button" href="https://matlab.mathworks.com/" target="_blank" rel="noopener noreferrer">${tr('Open MATLAB Online ↗','打开 MATLAB Online ↗')}</a></li><li><strong>${tr('Find the Command Window','找到命令窗口')}</strong><p>${tr('Look for Command Window and the >> prompt. In Boot Camp missions 1–7, type there and press Enter after each line. Do not type the prompt. Boot Camp mission 8 and Project 1 use the Editor.','找到 Command Window 和 >> 提示符。入门训练营任务 1–7 在这里输入代码，每行输入后按 Enter。不要输入提示符。训练营任务 8 和项目 1 使用编辑器。')}</p></li><li><strong>${tr('Try, compare, then check','尝试、对比，再检查')}</strong><p>${tr('Each mission includes all the code it needs. Match numbers and graph shapes; spacing and colors may differ. Mistakes are part of learning. Hints are always available.','每个任务都包含所需代码。请对比数值和图形形状；间距和颜色可能不同。出错是学习的一部分，你随时可以查看提示。')}</p></li></ol><div class="help-storage"><strong>${tr('Your progress stays here','进度保存在这里')}</strong><p>${tr('Progress and language are saved in this browser on this device. They are not sent to a teacher or synced across devices. Private browsing or clearing browser data may remove them.','进度和语言选择保存在此设备的此浏览器中，不会发送给老师，也不会跨设备同步。无痕浏览或清除浏览器数据可能导致记录丢失。')}</p><button class="text-button reset-link" data-action="reset">${tr('Reset all project progress','重置全部项目进度')}</button></div><div class="dialog-actions"><button class="button primary" data-action="close-dialog">${tr('I’m ready','准备好了')} ${icon('arrow')}</button></div>`}</dialog>`;
    const dialog=root.querySelector('dialog');dialog.addEventListener('close',()=>modalReturnFocus?.focus());dialog.showModal();
  }
  app.addEventListener('input',e=>{if(e.target.closest('#checkpoint-form'))capture();});
  app.addEventListener('change',e=>{if(e.target.closest('#checkpoint-form'))capture();});
  app.addEventListener('click',async e=>{
    const lang=e.target.closest('[data-lang]');
    if(lang){capture();state.lang=lang.dataset.lang;persist();const y=window.scrollY;render();document.querySelector(`[data-lang="${state.lang}"]`).focus({preventScroll:true});window.scrollTo(0,y);return;}
    const scroll=e.target.closest('[data-scroll]');
    if(scroll){e.preventDefault();const target=document.getElementById(scroll.dataset.scroll);target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});target.setAttribute('tabindex','-1');target.focus({preventScroll:true});return;}
    const button=e.target.closest('[data-action]');if(!button)return;
    switch(button.dataset.action){
      case 'help':showModal('help');break;
      case 'close-dialog':document.getElementById('lab-dialog').close();break;
      case 'reset':document.getElementById('lab-dialog').close();showModal('reset');break;
      case 'confirm-reset':{const lang=state.lang;store=LabCore.cleanAppState(null,courses);store.lang=lang;course=courses.bootcamp;lessons=course.lessons;state={...store.progress.bootcamp,lang};drafts={};results={};hints.clear();persist();history.replaceState(null,'','#/');render({focus:true});toast(tr('Progress reset. Your first mission is ready.','进度已重置。可以开始第一个任务了。'));break;}
      case 'hint':{const l=lessons[route().index];capture();hints.has(keyFor(l))?hints.delete(keyFor(l)):hints.add(keyFor(l));const hint=document.getElementById('hint-text');hint.hidden=!hints.has(keyFor(l));button.setAttribute('aria-expanded',String(!hint.hidden));break;}
      case 'copy':{const l=lessons[Number(button.dataset.lesson)];try{await navigator.clipboard.writeText(l.code);toast(tr('Code copied. Paste it into MATLAB.','代码已复制。请粘贴到 MATLAB 中。'));}catch(_){const code=button.closest('.editor').querySelector('.code-block');const range=document.createRange();range.selectNodeContents(code);const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);toast(tr('Copy is unavailable here. Select the code text and use your device’s Copy command.','此处无法自动复制。请选择代码文本，使用设备的复制功能。'));}break;}
    }
  });
  app.addEventListener('submit',e=>{
    if(e.target.id!=='checkpoint-form')return;
    e.preventDefault();capture();const i=Number(e.target.dataset.lesson),l=lessons[i];
    const fields=Object.fromEntries(l.questions.map(q=>[q.id,LabCore.validate(q,drafts[keyFor(l)]?.[q.id],drafts[keyFor(l)])]));
    const ok=Object.values(fields).every(Boolean);results[keyFor(l)]={fields,ok};
    if(ok&&!state.completed.includes(l.id)){state.completed.push(l.id);persist();}
    const y=window.scrollY;render();window.scrollTo(0,y);document.getElementById('feedback-'+l.id).focus({preventScroll:true});
  });
  window.addEventListener('hashchange',()=>{capture();render({focus:true});});
  window.addEventListener('storage',e=>{if(e.key!==KEY)return;try{store=LabCore.cleanAppState(JSON.parse(e.newValue),courses);}catch(_){store=LabCore.cleanAppState(null,courses);}state={...store.progress[course.id],lang:store.lang};render();});
  document.querySelector('.skip-link').addEventListener('click', e => {
    e.preventDefault();
    document.getElementById('main').focus({preventScroll: true});
    document.getElementById('main').scrollIntoView({block: 'start'});
  });
  render();
})();

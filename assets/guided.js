/* Guided-step state and rendering. All student entries are data, never executed. */
(function(root){
 'use strict';
 function blank(){return {version:1,active:'',lessons:{}};}
 function clean(raw,guides,core){
  const out=blank();if(raw?.version!==1)return out;
  for(const [key,steps] of Object.entries(guides)){
   const old=raw.lessons?.[key];if(!old)continue;
   const answers={},solved=[];
   for(const s of steps){if(!s.question)continue;const q=s.question;answers[q.id]=typeof old.answers?.[q.id]==='string'?old.answers[q.id].slice(0,250):'';if(Array.isArray(old.solved)&&old.solved.includes(q.id)&&core.validate(q,answers[q.id],answers))solved.push(q.id);}
   const gate=steps.findIndex(s=>s.question&&!solved.includes(s.question.id));
   const limit=gate<0?steps.length-1:gate;
   const reached=Math.max(0,Math.min(Number.isInteger(old.reached)?old.reached:0,limit));
   out.lessons[key]={cursor:Math.max(0,Math.min(Number.isInteger(old.cursor)?old.cursor:0,reached)),reached,answers,solved};
  }
  if(typeof raw.active==='string'&&guides[raw.active])out.active=raw.active;
  return out;
 }
 function entry(book,key){return book.lessons[key]||(book.lessons[key]={cursor:0,reached:0,answers:{},solved:[]});}
 function complete(steps,state,core){return steps.filter(s=>s.question).every(s=>state.solved.includes(s.question.id)&&core.validate(s.question,state.answers[s.question.id],state.answers));}
 function edit(steps,state,qid,raw,core){
  const value=String(raw).slice(0,250);if(state.answers[qid]===value)return false;
  state.answers[qid]=value;state.solved=state.solved.filter(id=>{const q=steps.find(s=>s.question?.id===id)?.question;return id!==qid&&q&&core.validate(q,state.answers[id],state.answers);});return true;
 }
 function check(steps,state,qid,raw,core){
  const q=steps.find(s=>s.question?.id===qid)?.question;if(!q)return false;
  state.answers[qid]=String(raw).slice(0,250);
  state.solved=state.solved.filter(id=>{const x=steps.find(s=>s.question?.id===id)?.question;return x&&core.validate(x,state.answers[id],state.answers);});
  const ok=core.validate(q,state.answers[qid],state.answers);if(ok&&!state.solved.includes(qid))state.solved.push(qid);return ok;
 }
 function visual(kind,fmt){
  if(kind==='windows')return `<div class="setup-visual window-pair" role="img" aria-label="Guide beside MATLAB / 指南与 MATLAB 并排"><div><b>MATLAB LAB</b><p>${fmt({en:'Read the instruction here',zh:'在这里看步骤'})}</p><div class="mock-line"></div><div class="mock-line short"></div></div><div><b>MATLAB</b><p>Command Window</p><pre>&gt;&gt; <span class="cursor">│</span></pre><small>${fmt({en:'Type here',zh:'在这里输入'})}</small></div></div><p class="guide-small">${fmt({en:'Drag each window by its top bar. Drag an edge to resize. If needed, ask your teacher to help arrange them once.',zh:'拖动顶部标题栏移动窗口，拖动边缘调整大小。需要时请老师帮你摆放一次。'})}</p>`;
  if(kind==='editor')return `<div class="setup-visual"><div class="mock-toolbar"><b>MATLAB</b><span class="mock-highlight">New Script</span><span>Save</span><span>▶ Run</span></div><div class="mock-editor"><b>Editor</b><pre>1  <span class="cursor">│</span></pre></div></div>`;
  return `<div class="setup-visual"><div class="mock-toolbar"><b>MATLAB</b><span>Home</span><span>New Script</span></div><div class="mock-body"><div class="mock-workspace">Workspace</div><div class="mock-command"><b>Command Window</b><pre>&gt;&gt; <span class="cursor">│</span></pre><span class="point-here">↑ ${fmt({en:'Click here, after >>',zh:'点击这里：>> 的右侧'})}</span></div></div></div><p class="guide-small">${fmt({en:'Layout guide. Panel positions can differ in your MATLAB version.',zh:'界面示意图。你的 MATLAB 版本中，面板位置可能不同。'})}</p>`;
 }
 function firstPlot(tall,fmt){const ys=tall?[0,3,8,3,0]:[0,3,4,3,0];const y=v=>180-v*18;return `<svg class="guide-plot" viewBox="0 0 430 230" role="img" aria-label="${tall?'Five points with a peak of 8 / 五个点，峰值为 8':'Five points with a peak of 4 / 五个点，峰值为 4'}"><path d="M50 20V180H390" fill="none" stroke="#738d91"/>${[0,4,8].map(v=>`<path d="M50 ${y(v)}H390" stroke="#e0e8e8"/><text x="35" y="${y(v)+5}" text-anchor="end">${v}</text>`).join('')}<polyline points="${ys.map((v,i)=>`${60+i*80},${y(v)}`).join(' ')}" fill="none" stroke="#246d63" stroke-width="3"/>${ys.map((v,i)=>`<circle cx="${60+i*80}" cy="${y(v)}" r="5" fill="#d5f69b" stroke="#246d63"/><text x="${60+i*80}" y="205" text-anchor="middle">${i}</text>`).join('')}</svg>`;}
 function recovery(fmt){return `<details class="guide-help"><summary>${fmt({en:'Something went wrong',zh:'遇到问题了'})}</summary><div class="recovery-options"><details><summary>${fmt({en:'Nothing happened',zh:'没有反应'})}</summary><p>${fmt({en:'In Command Window, click after >> and press Enter. In Editor, save and click Run. A line ending with ; may run without printing anything.',zh:'在命令窗口点击 >> 后按 Enter。在编辑器中先保存，再点击 Run。以 ; 结尾的代码可能运行了但不显示结果。'})}</p></details><details><summary>${fmt({en:'Red error text appeared',zh:'出现红色报错'})}</summary><p>${fmt({en:'Check the first red error. Recopy this step with English punctuation. Run earlier steps in this lesson again if a variable is missing.',zh:'查看第一条红色报错。使用英文标点重新复制本步。如果提示变量不存在，重新运行本课前面的步骤。'})}</p></details><details><summary>${fmt({en:'I cannot find the right panel',zh:'找不到对应面板'})}</summary><p>${fmt({en:'Look for Command Window, Editor or Figures. Their positions can differ. Ask your teacher to point to the panel on your computer.',zh:'查找 Command Window、Editor 或 Figures。位置可能不同。请老师在你的电脑上指出对应面板。'})}</p></details><details><summary>${fmt({en:'My result is different',zh:'我的结果不同'})}</summary><p>${fmt({en:'Rerun the lesson from its first code step. Check the changed numbers and dots in .* or .^. Match values or shapes, not colors or spacing.',zh:'从本课第一段代码重新运行。检查改动的数字及 .*、.^ 中的点。对比数值或形状，不必匹配颜色或间距。'})}</p></details><details><summary>${fmt({en:'Copy or paste does not work',zh:'无法复制或粘贴'})}</summary><p>${fmt({en:'Select the code text. Windows: Ctrl+C, then Ctrl+V in MATLAB. Mac: Command+C, then Command+V. You can also type short lines.',zh:'选中代码。Windows：Ctrl+C，再到 MATLAB 按 Ctrl+V。Mac：Command+C，再按 Command+V。短代码也可直接输入。'})}</p></details></div></details>`;}
 const api={blank,clean,entry,complete,edit,check,visual,firstPlot,recovery};root.LabGuide=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);

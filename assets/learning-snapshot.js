/* Portable coursework only. Never import credentials, execute code or replace a save. */
(function(root){
 'use strict';
 const object=v=>v&&typeof v==='object'&&!Array.isArray(v);
 function clean(raw){
  if(!object(raw)||!object(raw.app)||raw.app.version!==2||!object(raw.guide)||raw.guide.version!==2||!object(raw.notebook))throw Error('Choose a MATLAB Lab snapshot JSON file. / 请选择 MATLAB Lab 快照 JSON 文件。');
  const app=root.LabCore.cleanAppState(raw.app,root.LAB_COURSES),guide=root.LabGuide.clean(raw.guide,root.LAB_GUIDES,root.LabCore),notebook=root.LabCapstone.cleanNotebook(raw.notebook,root.LAB_COURSES.investigation);
  for(const [key,st]of Object.entries(guide.lessons)){const steps=root.LAB_GUIDES[key];st.cursorId=steps[st.cursor].id;st.reachedId=steps[st.reached].id;}
  return {app,guide,notebook};
 }
 function pack(state){return {format:'matlab-lab-snapshot',version:1,exportedAt:new Date().toISOString(),source:root.location?.origin||'',state:clean(state)};}
 function parse(text){if(typeof text!=='string'||text.length>2000000)throw Error('Snapshot is too large (maximum 2 MB). / 快照过大，最大 2 MB。');const raw=JSON.parse(text);return clean(raw.format==='matlab-lab-snapshot'&&raw.version===1?raw.state:raw);}
 function merge(current,incoming){
  const a=clean(current),b=clean(incoming),out=clean(a);let answerConflicts=0,noteConflicts=0;
  for(const [cid,p]of Object.entries(out.app.progress))p.completed=[...new Set([...p.completed,...b.app.progress[cid].completed])];
  for(const [key,other]of Object.entries(b.guide.lessons)){
   const st=out.guide.lessons[key]||(out.guide.lessons[key]=other);if(st===other)continue;
   for(const [qid,value]of Object.entries(other.answers)){
    if(!st.answers[qid]?.trim()){st.answers[qid]=value;if(other.solved.includes(qid)&&!st.solved.includes(qid))st.solved.push(qid);}
    else if(value.trim()&&st.answers[qid]!==value)answerConflicts++;
    else if(other.solved.includes(qid)&&!st.solved.includes(qid))st.solved.push(qid);
   }
   if(other.reached>st.reached){st.reached=other.reached;st.reachedId=other.reachedId;}
  }
  if(!out.guide.active)out.guide.active=b.guide.active;
  for(const [sid,notes]of Object.entries(b.notebook.notes))for(const [pid,value]of Object.entries(notes)){
   const old=out.notebook.notes[sid][pid],copies=out.notebook.conflicts[sid][pid];
   for(const copy of b.notebook.conflicts[sid][pid])if(copy!==old&&!copies.includes(copy))copies.push(copy);
   if(!old.trim())out.notebook.notes[sid][pid]=value;
   else if(value.trim()&&old!==value&&!copies.includes(value)){copies.push(value);noteConflicts++;}
  }
  // Revalidate checkpoint passes and stable cursors with the current lessons.
  return {state:clean(out),answerConflicts,noteConflicts};
 }
 const api={clean,pack,parse,merge};root.LabSnapshot=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window==='undefined'?globalThis:window);

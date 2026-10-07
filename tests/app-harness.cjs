// Component tests, not a browser: minimal DOM/storage stand-ins for the actual app scripts.
const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const root=path.join(__dirname,'..');
const scripts=[...fs.readFileSync(path.join(root,'index.html'),'utf8').matchAll(/<script defer src="([^"]+)"/g)].map(x=>x[1].split('?')[0]);
const unescape=s=>s.replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
function client(shared=new Map(),hash='#/bootcamp/first-command',search='',options={}){
 const events={},winEvents={},app={innerHTML:'',addEventListener(k,fn){events[k]=fn;}},status={textContent:''},skip={addEventListener(){}};let overrides=null;
 const loc={hash,search,pathname:'/matlab-lab/'};
 const doc={documentElement:{lang:''},body:{classList:{add(){}},appendChild(){}},querySelector:s=>s==='.skip-link'?skip:s.startsWith('[data-lang=')?{focus(){}}:null,getElementById(id){
  if(id==='app')return app;if(id==='step-title'||id==='step-feedback')return {focus(){},scrollIntoView(){}};if(id==='notebook-status')return status;
  if(id==='guided-check'){const m=app.innerHTML.match(/<form id="guided-check" data-question="([^"]+)"/);const value=app.innerHTML.match(/id="step-answer"[^>]*value="([^"]*)"/);return m?{dataset:{question:m[1]},fields:overrides||{answer:unescape(value?.[1]||'')}}:null;}
  if(id==='capstone-notes'){const m=app.innerHTML.match(/<form id="capstone-notes" data-stage="([^"]+)"/);if(!m)return null;const fields=overrides||Object.fromEntries([...app.innerHTML.matchAll(/<textarea[^>]*name="([^"]+)"[^>]*>([\s\S]*?)<\/textarea>/g)].map(x=>[x[1],unescape(x[2])]));return {dataset:{stage:m[1]},fields};}
  return null;
 }};
 const ctx={matchMedia:()=>({matches:true,addEventListener(){}}),location:loc,history:{replaceState(a,b,url){loc.hash=url.slice(url.indexOf('#'));}},scrollY:0,localStorage:{getItem:k=>shared.get(k)??null,setItem:(k,v)=>shared.set(k,v)},setTimeout:()=>1,clearTimeout(){},URL,URLSearchParams,Blob,navigator:{clipboard:{writeText:async()=>{}}},FormData:class{constructor(f){this.fields=f.fields;}get(k){return this.fields[k]??null;}*[Symbol.iterator](){yield*Object.entries(this.fields);}},document:doc,addEventListener(k,fn){winEvents[k]=fn;},scrollTo(){}};
 ctx.CustomEvent=class{constructor(type){this.type=type;}};ctx.dispatchEvent=e=>winEvents[e.type]?.(e);Object.assign(ctx,options.context||{});ctx.window=ctx;ctx.globalThis=ctx;vm.createContext(ctx);for(const s of scripts){if(s==='assets/classroom-config.js'&&options.context?.LAB_CLASSROOM_CONFIG)continue;const source=fs.readFileSync(path.join(root,s),'utf8');vm.runInContext(options.transform?options.transform(s,source):source,ctx,{filename:s});}
 function click(action,extras={}){return events.click({target:{closest(sel){return sel==='[data-action]'?{dataset:{action,...extras}}:null;}}});}
 function language(lang){return events.click({target:{closest(sel){return sel==='[data-lang]'?{dataset:{lang},focus(){}}:null;}}});}
 function submit(value){overrides={answer:value};events.submit({target:{id:'guided-check',dataset:{question:'transfer-v2'}},preventDefault(){}});overrides=null;}
 function notes(fields){app.innerHTML=app.innerHTML.replace(/(<textarea[^>]*name="([^"]+)"[^>]*>)[\s\S]*?(<\/textarea>)/g,(all,open,id,close)=>open+(fields[id]??'')+close);overrides=fields;events.input({target:{closest(sel){return sel==='#guided-check,#capstone-notes'?{}:null;},selectionStart:null}});overrides=null;}
 function goto(hash){loc.hash=hash;winEvents.hashchange();}
 function sync(){winEvents.storage({key:ctx.LabStorage.PREFIX+'changed'});}
 return {ctx,app,click,submit,notes,language,winEvents,shared,status,goto,sync};
}
module.exports={client};

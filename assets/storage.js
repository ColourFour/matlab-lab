/* Save only changed fields. Separate keys prevent stale tabs replacing unrelated work. */
(function(root){
 'use strict';
 const PREFIX='matlab-lab:fields:v1:',EPOCH=PREFIX+'reset';
 const clone=v=>JSON.parse(JSON.stringify(v));
 function flatten(v,path=[],out={}){if(v&&typeof v==='object'&&!Array.isArray(v)){for(const[k,x]of Object.entries(v))flatten(x,[...path,k],out);}else out[JSON.stringify(path)]=v;return out;}
 function put(out,path,value){let p=out;for(const k of path.slice(0,-1))p=p[k]||(p[k]={});p[path.at(-1)]=value;}
 function channel(storage,name,seed,{resettable=false,defaults=seed,notes=false,readonly=false,merge=null}={}){
  const get=k=>{try{return JSON.parse(storage.getItem(k));}catch(_){return null;}};
  let epoch=resettable?(get(EPOCH)||'initial'):'fixed',base=flatten(resettable&&epoch!=='initial'?defaults:seed),known=new Set(Object.keys(base));
  const key=p=>PREFIX+name+':'+epoch+':'+p;
  // The one-time seed is used only where no field has ever been saved.
  if(!readonly&&get(PREFIX+name+':migrated')!==true){for(const[p,v]of Object.entries(base))if(storage.getItem(key(p))===null)storage.setItem(key(p),JSON.stringify(v));storage.setItem(PREFIX+name+':migrated','true');}
  function read(){const next=resettable?(get(EPOCH)||'initial'):'fixed';if(next!==epoch){epoch=next;base=flatten(defaults);known=new Set(Object.keys(base));}const out={};for(const p of known){const raw=storage.getItem(key(p));let v=base[p];if(raw!==null){try{v=JSON.parse(raw);}catch(_){}}if(v!==undefined)put(out,JSON.parse(p),v);}return out;}
  base=flatten(read());
  function save(value){const beforeEpoch=epoch,latest=read();if(epoch!==beforeEpoch){base=flatten(latest);return {value:latest,reset:true,conflict:false};}const remote=flatten(latest),local=flatten(value);let conflict=false;
   for(const[p,v]of Object.entries(local)){known.add(p);if(JSON.stringify(v)===JSON.stringify(base[p]))continue;let next=v;
    const path=JSON.parse(p);
    if(merge)next=merge(path,v,remote[p]);
    if(notes&&path[0]==='notes'&&typeof v==='string'&&typeof remote[p]==='string'&&remote[p]!==base[p]&&remote[p]!==v){
     // Keep a full separate copy: joining long notes could exceed the input limit.
     const backupPath=JSON.stringify(['conflicts',...path.slice(1)]),previous=get(key(backupPath));
     const copies=Array.isArray(previous)?previous:[];
     if(!copies.includes(remote[p]))copies.push(remote[p]);
     storage.setItem(key(backupPath),JSON.stringify(copies));known.add(backupPath);remote[backupPath]=copies;conflict=true;
    }
    storage.setItem(key(p),JSON.stringify(next));remote[p]=next;
   }
   const merged={};for(const[p,v]of Object.entries(remote))if(v!==undefined)put(merged,JSON.parse(p),v);base=flatten(merged);return {value:merged,conflict,reset:false};
  }
  function sync(){const value=read();base=flatten(value);return value;}
  return {save,sync};
 }
 function reset(storage){storage.setItem(EPOCH,JSON.stringify(Date.now().toString(36)+'-'+Math.random().toString(36).slice(2)));}
 const api={channel,reset,PREFIX};root.LabStorage=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);

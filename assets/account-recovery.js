(function(root){
 'use strict';
 // This tab's recovery copies contain coursework only, never credentials. They
 // are separate from the anonymous localStorage records and require the same
 // verified account/class before the classroom interface offers recovery.
 const PREFIX='matlab-lab:account-recovery:v1:';
 const owner=member=>member?.role==='student'&&typeof member.user_id==='string'&&typeof member.classroom_id==='string'?PREFIX+encodeURIComponent(member.user_id)+':'+encodeURIComponent(member.classroom_id)+':':null;
 const storage=()=>root.sessionStorage;
 const api={
  save(member,version,state){
   const prefix=owner(member);if(!prefix||!Number.isSafeInteger(version)||version<0)return false;
   try{const record=JSON.stringify({version,savedAt:new Date().toISOString(),state:{app:state.app,guide:state.guide,notebook:state.notebook}});
    if(record.length>600000)return false;
    storage().setItem(prefix+version,record);return true;
   }catch(_){return false;}
  },
  list(member){
   const prefix=owner(member);if(!prefix)return [];
   try{const disk=storage(),copies=[];for(let i=0;i<disk.length;i++){
    const key=disk.key(i);if(!key?.startsWith(prefix))continue;
    try{const record=JSON.parse(disk.getItem(key));
     if(Number.isSafeInteger(record.version)&&record.version>=0&&key===prefix+record.version&&record.state&&typeof record.state==='object'&&!Array.isArray(record.state))copies.push(record);
    }catch(_){}
   }return copies.sort((a,b)=>b.version-a.version);}catch(_){return [];}
  },
  remove(member,version){const prefix=owner(member);if(prefix)try{storage().removeItem(prefix+version);}catch(_){}},
  clear(member){for(const record of api.list(member))api.remove(member,record.version);}
 };
 root.LabAccountRecovery=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window==='undefined'?globalThis:window);

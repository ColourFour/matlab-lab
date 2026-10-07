import {boundedBody,api,digest,Failure,limit,rpc,serve,str,uuid} from '../_shared/backend.ts';
serve(async req=>{
 // Deployment gate: trusted gateway must overwrite this header, never append client values.
 const ipHeader=Deno.env.get('CLASSROOM_TRUSTED_IP_HEADER');
 const ip=ipHeader?req.headers.get(ipHeader):null;
 if(!ip) throw new Failure(503,'Classroom sign-in is not configured.');
 const pepper=Deno.env.get('CLASSROOM_RATE_PEPPER'); if(!pepper) throw new Failure(503,'Classroom sign-in is not configured.');
 await limit('ip:'+await digest(pepper+ip),50);
 if(Number(req.headers.get('content-length')||0)>8192) throw new Failure(413,'Request too large.');
 const raw=new TextDecoder().decode(await boundedBody(req,8192));
 const body=JSON.parse(raw); if(!['roster','login'].includes(body.action)) throw new Failure(400,'Invalid request.');
 const code=str(body.code,128).trim();
 if(!/^[A-Za-z0-9_-]{22,128}$/.test(code)) throw new Failure(401,'Classroom or credentials unavailable.');
 const hash=await digest(code); await limit('code:'+hash,120);
 const resolved=await rpc('classroom_resolve',{p_hash:hash},undefined,true);
 if(!resolved) throw new Failure(401,'Classroom or credentials unavailable.');
 if(body.action==='roster') return resolved;
 const id=uuid(body.studentId); await limit('login:'+hash+':'+id,8);
 const email=await rpc('classroom_identity',{p_classroom:resolved.classroom.id,p_user:id},undefined,true);
 const password=str(body.password,128);
 if(!email) throw new Failure(401,'Classroom or credentials unavailable.');
 let data; try { data=await api('/auth/v1/token?grant_type=password',{method:'POST',body:JSON.stringify({email,password})}); }
 catch { throw new Failure(401,'Classroom or credentials unavailable.'); }
 // Synthetic auth email stays server-side, never return Auth's full user object.
 return {session:{access_token:data.access_token,expires_at:data.expires_at,expires_in:data.expires_in,token_type:'bearer',user:{id:data.user.id}}};
});

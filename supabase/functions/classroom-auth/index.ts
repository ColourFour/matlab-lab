import {boundedBody,api,digest,Failure,limit,rpc,serve,str,uuid} from '../_shared/backend.ts';
serve(async req=>{
 await limit('auth:global',300,60);
 // Deployment gate: trusted gateway must overwrite this header, never append client values.
 const ipHeader=Deno.env.get('CLASSROOM_TRUSTED_IP_HEADER');
 const ip=ipHeader?req.headers.get(ipHeader):null;
 if(!ip) throw new Failure(503,'Classroom sign-in is not configured.');
 const pepper=Deno.env.get('CLASSROOM_RATE_PEPPER'); if(!pepper) throw new Failure(503,'Classroom sign-in is not configured.');
 await limit('ip:'+await digest(pepper+ip),50);
 if(Number(req.headers.get('content-length')||0)>8192) throw new Failure(413,'Request too large.');
 const raw=new TextDecoder().decode(await boundedBody(req,8192));
 const body=JSON.parse(raw); if(!['roster','login','username-login','register','teacher-register'].includes(body.action)) throw new Failure(400,'Invalid request.');
 const code=str(body.code,128).trim();
 if(!/^[A-Za-z0-9_-]{22,128}$/.test(code)) throw new Failure(401,'Classroom or credentials unavailable.');
 const hash=await digest(code); await limit('code:'+hash,120);
 if(body.action==='register'||body.action==='teacher-register') {
  const teacher=body.action==='teacher-register';
  const target=await rpc(teacher?'classroom_teacher_invite':'classroom_signup_info',{p_hash:hash},undefined,true);
  if(!target)throw new Failure(403,teacher?'Teacher invitation expired or already used. / 教师邀请已过期或已使用。':'Registration is closed or the class code is wrong. / 注册已关闭或班级码有误。');
  const name=str(body.name,100).trim();if(!name||/[\x00-\x1f]/.test(name))throw new Failure(400,'Enter your name. / 请输入姓名。');
  const password=str(body.password,128);if(password.length<12)throw new Failure(400,'Use at least 12 characters. / 密码至少 12 个字符。');
  const username=teacher?'':str(body.username,24).trim().toLowerCase();
  if(!teacher&&!/^[a-z0-9_]{3,24}$/.test(username))throw new Failure(400,'Username: 3–24 letters, numbers or underscores. / 用户名：3–24 个字母、数字或下划线。');
  if(!teacher&&await rpc('classroom_username',{p_hash:hash,p_username:username},undefined,true))throw new Failure(400,'Username already used. Choose another. / 用户名已使用，请更换。');
  await limit('register:'+hash,40,3600);
  const email=teacher?str(body.email,254).trim().toLowerCase():`student.${crypto.randomUUID()}@accounts.matlab-lab.invalid`;
  if(teacher&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))throw new Failure(400,'Enter your email. / 请输入邮箱。');
  const created=await api('/auth/v1/admin/users',{method:'POST',body:JSON.stringify({email,password,email_confirm:true})},undefined,true);
  const userId=uuid(created.id);
  try {
   await rpc(teacher?'enroll_classroom_teacher':'enroll_classroom_student',{p_hash:hash,p_user:userId,p_email:email,p_name:name,...(!teacher?{p_username:username}:{})},undefined,true);
  }catch(e){
   // Competing signup/code rotation cannot claim an existing student or leave a
   // newly created Auth user usable without its authorized membership.
   try{await api('/auth/v1/admin/users/'+userId,{method:'DELETE'},undefined,true);}catch(_){}
   throw e;
  }
  const data=await api('/auth/v1/token?grant_type=password',{method:'POST',body:JSON.stringify({email,password})});
  return session(data);
 }
 if(body.action==='username-login') {
  const username=str(body.username,24).trim().toLowerCase();if(!/^[a-z0-9_]{3,24}$/.test(username))throw new Failure(401,'Classroom or credentials unavailable. / 班级或登录信息有误。');
  await limit('login:'+hash+':'+username,8);
  const email=await rpc('classroom_username',{p_hash:hash,p_username:username},undefined,true);
  if(!email)throw new Failure(401,'Classroom or credentials unavailable. / 班级或登录信息有误。');
  let data;try{data=await api('/auth/v1/token?grant_type=password',{method:'POST',body:JSON.stringify({email,password:str(body.password,128)})});}catch{throw new Failure(401,'Classroom or credentials unavailable. / 班级或登录信息有误。');}
  return session(data);
 }
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
 return session(data);
});
function session(data:any){return {session:{access_token:data.access_token,expires_at:data.expires_at,expires_in:data.expires_in,token_type:'bearer',user:{id:data.user.id}}};}

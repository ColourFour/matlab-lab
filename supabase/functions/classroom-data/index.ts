import {boundedBody,api,caller,digest,Failure,headers,limit,membership,rpc,serve,str,url,uuid} from '../_shared/backend.ts';
serve(async req=>{
 const {token,user}=await caller(req);
 await limit('data:'+user.id,180,60);
 if(req.headers.get('Content-Type')?.startsWith('multipart/form-data')) {
  // Bounded streaming read protects memory even with chunked/missing Content-Length.
  const max=5*1024*1024+16384; const reader=req.body!.getReader(); const parts:Uint8Array[]=[];let size=0;
  while(true){const {done,value}=await reader.read();if(done)break;size+=value.length;if(size>max){await reader.cancel();throw new Failure(413,'Maximum file size is 5 MB.');}parts.push(value);}
  const form=await new Response(new Blob(parts),{headers:{'Content-Type':req.headers.get('Content-Type')!}}).formData();
  if(form.get('action')!=='upload')throw new Failure(400,'Invalid upload.');
  const classroom=uuid(form.get('classroomId')),lesson=str(form.get('lessonId'));
  await membership(token,user.id,classroom,'student');await limit('upload:'+user.id,20,3600);
  const file=form.get('file'); if(!(file instanceof File)||file.size<1||file.size>5242880)throw new Failure(400,'File must be 1 byte to 5 MB.');
  const filename=str(file.name,160); if(/[\\/\x00-\x1f]/.test(filename))throw new Failure(400,'Invalid filename.');
  const ext=filename.split('.').pop()?.toLowerCase();const bytes=new Uint8Array(await file.arrayBuffer());
  let mime='';
  if(ext==='pdf'&&new TextDecoder().decode(bytes.slice(0,5))==='%PDF-')mime='application/pdf';
  if(ext==='png'&&[137,80,78,71,13,10,26,10].every((b,i)=>bytes[i]===b))mime='image/png';
  if(['jpg','jpeg'].includes(ext||'')&&bytes[0]===255&&bytes[1]===216&&bytes[2]===255)mime='image/jpeg';
  if(['m','txt','csv','json'].includes(ext||'')) {
   try {const txt=new TextDecoder('utf-8',{fatal:true}).decode(bytes);if(txt.includes('\0'))throw Error();if(ext==='json')JSON.parse(txt);mime='text/plain';} catch {throw new Failure(400,'Text files must contain valid UTF-8 text.');}
  }
  if(!mime)throw new Failure(400,'Allowed files: .m, .txt, .csv, .json, .pdf, .png, .jpg.');
  const accepted= mime==='text/plain'?['','text/plain','text/csv','application/json','application/octet-stream','text/x-matlab']:['',mime,'application/octet-stream'];
  if(!accepted.includes(file.type))throw new Failure(400,'File type does not match its extension.');
  const path=`${classroom}/${user.id}/${crypto.randomUUID()}.${ext}`;
  const upload=await fetch(url+'/storage/v1/object/classroom-submissions/'+path,{method:'POST',headers:{...headers(undefined,true),'Content-Type':mime,'x-upsert':'false'},body:bytes});
  if(!upload.ok)throw new Failure(503,'Upload failed. Try again.');
  try {const submission=await rpc('append_classroom_submission',{p_classroom:classroom,p_user:user.id,p_lesson:lesson,p_path:path,p_filename:filename},undefined,true);return {submission};}
  catch(e){await api('/storage/v1/object/classroom-submissions',{method:'DELETE',body:JSON.stringify({prefixes:[path]})},undefined,true);throw e;}
 }
 const raw=new TextDecoder().decode(await boundedBody(req,600000));const b=JSON.parse(raw);
 if(b.action==='registration-code'||b.action==='close-registration') {
  const classroom=uuid(b.classroomId);await membership(token,user.id,classroom,'teacher');await limit('invite:'+user.id,10,3600);
  const code=b.action==='registration-code'?crypto.randomUUID().replaceAll('-','') : null;
  await rpc('configure_classroom_signup',{p_classroom:classroom,p_hash:code?await digest(code):null,p_enabled:!!code},token);
  return code?{code}:{ok:true};
 }
 if(b.action==='progress'||b.action==='heartbeat'||b.action==='load-progress') {
  const classroom=uuid(b.classroomId);await membership(token,user.id,classroom,'student');
  if(b.action==='load-progress') {
   return {progress:await rpc('load_classroom_progress',{p_classroom:classroom},token)};
  }
  const lesson=typeof b.lessonId==='string'?b.lessonId:'';if(lesson.length>160)throw new Failure(400,'Invalid lesson.');
  if(b.action==='heartbeat')return {active_seconds:await rpc('record_classroom_activity',{p_classroom:classroom,p_event:uuid(b.eventId),p_seconds:b.seconds,p_lesson:lesson},token)};
  if(!Number.isSafeInteger(b.expectedVersion)||b.expectedVersion<0||!Number.isInteger(b.completedCount)||!b.state||typeof b.state!=='object'||Array.isArray(b.state))throw new Failure(400,'Invalid progress.');
  return {version:await rpc('save_classroom_progress',{p_classroom:classroom,p_lesson:lesson,p_state:b.state,p_completed:b.completedCount,p_expected:b.expectedVersion},token)};
 }
 if(b.action==='comment'||b.action==='download') {
  const id=uuid(b.submissionId);const rows=await api(`/rest/v1/submissions?id=eq.${id}&select=*`,{},token);
  if(!rows.length)throw new Failure(404,'Submission unavailable.');const s=rows[0];
  if(b.action==='comment') {await membership(token,user.id,s.classroom_id,'teacher');const result=await api('/rest/v1/comments',{method:'POST',headers:{Prefer:'return=representation'},body:JSON.stringify({submission_id:id,teacher_id:user.id,body:str(b.body,5000)})},undefined,true);return {comment:result[0]};}
  const signed=await api('/storage/v1/object/sign/classroom-submissions/'+s.object_path,{method:'POST',body:JSON.stringify({expiresIn:60})},undefined,true);
  const downloadUrl=new URL(url+'/storage/v1'+signed.signedURL);downloadUrl.searchParams.set('download',s.filename);return {url:downloadUrl.toString()};
 }
 if(b.action==='reset-password') {
  const classroom=uuid(b.classroomId),student=uuid(b.studentId);await membership(token,user.id,classroom,'teacher');await limit('reset:'+user.id,10,3600);
  const email=await rpc('classroom_identity',{p_classroom:classroom,p_user:student},undefined,true);if(!email)throw new Failure(404,'Student unavailable.');
  const password=str(b.password,128);if(password.length<12)throw new Failure(400,'Use at least 12 characters.');
  await rpc('classroom_revoke_sessions',{p_user:student},undefined,true);
  await api('/auth/v1/admin/users/'+student,{method:'PUT',body:JSON.stringify({password})},undefined,true);
  await rpc('classroom_revoke_sessions',{p_user:student},undefined,true);
  return {ok:true};
 }
 throw new Failure(400,'Invalid action.');
});

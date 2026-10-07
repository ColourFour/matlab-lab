// No SDK, third-party runtime dependency, or client-side service credentials.
export class Failure extends Error { status: number; constructor(status: number, message: string) { super(message); this.status = status; } }
export const url = Deno.env.get('SUPABASE_URL')!;
const secret = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const publicKey = Deno.env.get('SUPABASE_ANON_KEY')!;
export function headers(token?: string, service = false) {
  return { apikey: service ? secret : publicKey, Authorization: `Bearer ${service ? secret : token || publicKey}`, 'Content-Type': 'application/json' };
}
export async function api(path: string, init: RequestInit = {}, token?: string, service = false) {
  const r = await fetch(url + path, { ...init, headers: { ...headers(token, service), ...init.headers } });
  const body = await r.text(); let data; try { data = body ? JSON.parse(body) : null; } catch { data = null; }
  if (!r.ok) throw new Failure(data?.code === '40001' ? 409 : r.status >= 500 ? 503 : 400, data?.code === '40001' ? 'Progress changed on another device. Reload before saving.' : 'Request could not be completed.');
  return data;
}
export const rpc = (name: string, body: unknown, token?: string, service = false) => api('/rest/v1/rpc/' + name, { method: 'POST', body: JSON.stringify(body) }, token, service);
export function str(value: unknown, max = 160): string { if (typeof value !== 'string' || !value.length || value.length > max) throw new Failure(400,'Invalid request.'); return value; }
export function uuid(value: unknown) { const v = str(value,36); if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(v)) throw new Failure(400,'Invalid request.'); return v; }
export async function digest(s: string) { return [...new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)))].map(b=>b.toString(16).padStart(2,'0')).join(''); }
export async function limit(key: string, count: number, seconds=600) { if (!await rpc('classroom_rate_limit',{p_key:key,p_limit:count,p_window:seconds},undefined,true)) throw new Failure(429,'Too many requests. Try again later.'); }
export async function caller(req: Request) {
  const token = req.headers.get('Authorization')?.replace(/^Bearer /i,''); if (!token) throw new Failure(401,'Sign in required.');
  const user = await api('/auth/v1/user',{},token); if (!user?.id || user.is_anonymous) throw new Failure(401,'Sign in required.'); return {token,user};
}
export async function membership(token:string, uid:string, classroomId:string, role?:string) {
 const rows=await api(`/rest/v1/memberships?classroom_id=eq.${uuid(classroomId)}&user_id=eq.${uuid(uid)}&active=eq.true&select=role`,{},token);
 if (!rows?.length || (role && rows[0].role!==role)) throw new Failure(403,'Access unavailable.'); return rows[0];
}
export function serve(handler:(r:Request)=>Promise<unknown>) {
 Deno.serve(async req=>{
  const allowed=(Deno.env.get('CLASSROOM_ALLOWED_ORIGINS')||'').split(',').map(s=>s.trim()).filter(Boolean);
  const origin=req.headers.get('Origin'); const cors:Record<string,string>={'Vary':'Origin','Cache-Control':'no-store','Content-Type':'application/json'};
  if (origin && allowed.includes(origin)) Object.assign(cors,{'Access-Control-Allow-Origin':origin,'Access-Control-Allow-Headers':'authorization,apikey,content-type,x-client-info','Access-Control-Allow-Methods':'POST,OPTIONS'});
  if (!origin || !allowed.includes(origin)) return new Response(JSON.stringify({error:'Origin unavailable.'}),{status:403,headers:cors});
  if(req.method==='OPTIONS') return new Response(null,{status:204,headers:cors});
  if(req.method!=='POST') return new Response(null,{status:405,headers:cors});
  if(Deno.env.get('CLASSROOM_ACCOUNTS_ENABLED')!=='true') return new Response(JSON.stringify({error:'Classroom accounts are not enabled.'}),{status:503,headers:cors});
  try { return new Response(JSON.stringify(await handler(req)),{headers:cors}); }
  catch(e) { return new Response(JSON.stringify({error:e instanceof Failure?e.message:'Request could not be completed.'}),{status:e instanceof Failure?e.status:500,headers:cors}); }
 });
}

export async function boundedBody(req: Request, max: number): Promise<Uint8Array> {
 const reader=req.body?.getReader(); if(!reader) return new Uint8Array();
 const chunks:Uint8Array[]=[]; let size=0;
 while(true){const {done,value}=await reader.read();if(done)break;size+=value.length;if(size>max){await reader.cancel();throw new Failure(413,'Request too large.');}chunks.push(value);}
 const result=new Uint8Array(size);let offset=0;for(const chunk of chunks){result.set(chunk,offset);offset+=chunk.length;}return result;
}

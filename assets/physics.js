/* Ideal projectile: flat ground, no drag, uniform gravity, launch at (0,0). */
(function(root){
  function trajectory(speed,angle,gravity=9.81,count=101){
    if(!(speed>0&&gravity>0&&angle>0&&angle<90&&Number.isInteger(count)&&count>=2))throw new RangeError('Invalid launch inputs');
    const rad=angle*Math.PI/180,vx=speed*Math.cos(rad),vy=speed*Math.sin(rad),time=2*vy/gravity;
    const points=Array.from({length:count},(_,i)=>{const t=time*i/(count-1);return {t,x:vx*t,y:vy*t-0.5*gravity*t*t};});
    return {vx,vy,time,range:vx*time,maxHeight:vy*vy/(2*gravity),points};
  }
  root.ProjectileModel={trajectory};
  if(typeof module!=='undefined')module.exports=root.ProjectileModel;
})(typeof window!=='undefined'?window:globalThis);

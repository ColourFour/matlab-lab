(function(root){
  const original=root.LabDiagrams,base=ProjectileModel.trajectory(20,45);
  const tr=(en,zh,lang)=>lang==='zh'?zh:en;
  const safe=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const text=(x,y,value,cls='svg-label',anchor='middle')=>`<text x="${x}" y="${y}" class="${cls}" text-anchor="${anchor}">${safe(value)}</text>`;
  const svg=(body,label,desc,box='0 0 600 230')=>`<svg class="teaching-svg" role="img" aria-label="${safe(label)}" viewBox="${box}" xmlns="http://www.w3.org/2000/svg"><title>${safe(label)}</title><desc>${safe(desc)}</desc>${body}</svg>`;
  function arrow(x1,y1,x2,y2,color='#26796e',dashed=false){const angle=Math.atan2(y2-y1,x2-x1),size=8;return `<path d="M${x1} ${y1}L${x2} ${y2}" fill="none" stroke="${color}" stroke-width="2.5" ${dashed?'stroke-dasharray="6 5"':''}/><path d="M${x2-size*Math.cos(angle-.5)} ${y2-size*Math.sin(angle-.5)}L${x2} ${y2}L${x2-size*Math.cos(angle+.5)} ${y2-size*Math.sin(angle+.5)}" fill="none" stroke="${color}" stroke-width="2.5"/>`;}
  function miniPath(angle=45){const m=ProjectileModel.trajectory(20,angle);return `<polyline points="${m.points.map(p=>`${70+p.x*9.81},${174-p.y*9.81}`).join(' ')}" fill="none" stroke="#26796e" stroke-width="3"/>`;}
  function diagram(kind,lang){
    const T=(en,zh)=>tr(en,zh,lang);
    if(kind==='launch-setup'||kind==='speed-components'){
      let b=`<path d="M95 180H520M95 180V22" class="svg-axis"/>${text(545,186,'x','svg-code')}${text(82,24,'y','svg-code')}${text(87,204,'0')}${arrow(95,180,235,40)}${text(225,26,'20 m/s','svg-code')}<path d="M147 180A52 52 0 0 0 132 143" fill="none" stroke="#9c7b3a" stroke-width="2"/>${text(169,163,'45°')}`;
      if(kind==='launch-setup')b+=`${arrow(440,64,440,141,'#aa692b')}${text(440,41,'gravity = 9.81')}${text(300,224,T('Launch and landing: y = 0','发射与落地：y = 0'))}`;
      else b+=`${arrow(95,180,235,180,'#317dad')}${arrow(235,180,235,40,'#aa692b')}<path d="M220 180v-15h15" fill="none" stroke="#90a7aa"/>${text(166,208,'vx = 14.14')}${text(345,117,'vy = 14.14')}${text(461,205,'m/s')}`;
      return svg(b,T('Launch velocity and directions','发射速度与方向'),T('A speed of 20 m/s at 45 degrees has horizontal and vertical components of about 14.14 m/s. Gravity acts down.','20 m/s 的速度与水平线成 45 度，水平和竖直分量均约 14.14 m/s。重力向下。'));
    }
    if(kind==='flight-time'){
      let b=`${text(300,29,'t = linspace(0, flightTime, 101)','svg-label')}<path d="M70 111H530" stroke="#abc4c0" stroke-width="3"/>`;
      [0,50,100].forEach((n,i)=>{const x=70+230*i;b+=`<circle cx="${x}" cy="111" r="7" fill="#26796e"/>${text(x,85,['t(1)','t(51)','t(end)'][i])}${text(x,153,[0,base.time/2,base.time][i].toFixed(2)+' s')}`;});
      b+=`${text(185,192,T('going up','上升'))}${text(415,192,T('coming down','下降'))}${text(300,226,T('101 values · 100 equal gaps','101 个数值 · 100 个等间距间隔'))}`;
      return svg(b,T('Timeline to landing','直到落地的时间序列'),T('Times 0, 1.44 and 2.88 seconds correspond to launch, peak and landing.','0、1.44 和 2.88 秒分别对应发射、最高点和落地。'));
    }
    if(kind==='trajectory-values'){
      let b='';const labels=['t (s)','x (m)','y (m)'];
      labels.forEach((label,j)=>b+=text(50,56+j*61,label));
      [0,50,100].forEach((index,i)=>{const p=base.points[index],x=125+i*148;[p.t,p.x,p.y].forEach((v,j)=>{b+=`<rect x="${x}" y="${26+j*61}" width="115" height="47" rx="7" fill="${i===1?'#d9f3b9':'#fff'}" stroke="#bdd2cd"/>${text(x+57.5,57+j*61,(Math.abs(v)<1e-9?0:v).toFixed(2),'svg-value')}`;});});
      b+=text(300,224,T('The middle column is the peak.','中间一列对应最高点。'));
      return svg(b,T('Time and matching coordinates','时刻及其对应坐标'),T('At 0 seconds: x=0,y=0. At 1.44 seconds: x=20.39,y=10.19. At 2.88 seconds: x=40.77,y=0.','0 秒：x=0，y=0。1.44 秒：x=20.39，y=10.19。2.88 秒：x=40.77，y=0。'));
    }
    if(kind==='flight-plot'||kind==='flight-measures'){
      let b=`<path d="M70 174H525M70 174V34" class="svg-axis"/>${miniPath()}${text(550,180,'x (m)')}${text(48,24,'y (m)')}`;
      if(kind==='flight-measures')b+=`<path d="M270 74H414M400 74V174" stroke="#aa692b" stroke-width="1.5" stroke-dasharray="4 4"/>${text(459,118,'10.19 m')}${text(270,213,'40.77 m')}${arrow(70,191,470,191)}`;
      else b+=`<circle cx="270" cy="74" r="5" fill="#26796e"/>${text(270,52,'(20.39, 10.19)')}${text(460,215,'(40.77, 0)')}`;
      return svg(b,T('Projectile trajectory measurements','抛体轨迹的测量量'),T('The peak is 10.19 m at x=20.39 m. The range is 40.77 m.','在 x=20.39 米处达到最高点 10.19 米，射程为 40.77 米。'));
    }
    if(kind==='angle-investigation'){
      let b=text(300,25,T('speed = 20 m/s · gravity = 9.81 m/s²','speed = 20 m/s · gravity = 9.81 m/s²'));
      [30,45,60].forEach((angle,i)=>{const x=60+i*185,m=ProjectileModel.trajectory(20,angle);b+=`<rect x="${x}" y="51" width="160" height="130" rx="11" fill="${angle===45?'#d9f3b9':'#fff'}" stroke="#bbd1cb"/>${text(x+80,91,angle+'°','svg-code')}${text(x+80,133,m.range.toFixed(2)+' m','svg-value')}${text(x+80,162,T('range','射程'))}`;});
      return svg(b,T('Compare three angles','比较三个角度'),T('30 and 60 degrees give 35.31 m. 45 degrees gives 40.77 m.','30 度和 60 度的射程为 35.31 米，45 度的射程为 40.77 米。'));
    }
    if(kind==='target-challenge'){
      return svg(`<path d="M65 159H540" class="svg-axis"/><rect x="391" y="88" width="20" height="71" fill="#d9f3b9" stroke="#648344"/><path d="M65 159Q234 50 411 159" fill="none" stroke="#26796e" stroke-width="2.5" stroke-dasharray="5 5"/>${text(300,35,T('Target zone: 34–36 m','目标区：34–36 米'),'svg-code')}${text(65,190,'0')}${text(391,190,'34','svg-label','end')}${text(411,190,'36','svg-label','start')}${text(245,218,T('Choose an angle. Test your prediction.','选择角度，检验预测。'))}`,T('A target zone on the ground','地面上的目标区'),T('A conceptual target zone from 34 to 36 metres from launch.','概念示意图：目标区位于距发射点 34 到 36 米处。'));
    }
    return original.diagram(kind,lang);
  }
  function plot(kind,lang){
    if(!['projectile-45','target-paths','angle-ranges'].includes(kind))return original.plot(kind,lang);
    if(kind==='angle-ranges'){
      let b=`<rect width="600" height="340" rx="8" fill="white"/>${text(300,28,'Same speed, different angles','svg-plot-title')}`;
      [30,35,40,45,50,55,60].forEach(a=>{const x=80+(a-30)/30*450;b+=`<path d="M${x} 58V274" stroke="#e0e6e6"/>${text(x,299,a)}`;});
      [30,35,40,45].forEach(r=>{const y=274-(r-30)/15*216;b+=`<path d="M80 ${y}H530" stroke="#e0e6e6"/>${text(65,y+5,r,'svg-label','end')}`;});
      const points=[30,45,60].map(a=>[80+(a-30)/30*450,274-(ProjectileModel.trajectory(20,a).range-30)/15*216]);
      b+=`<path d="M80 58V274H530" class="svg-axis"/><polyline points="${points.map(p=>p.join(',')).join(' ')}" fill="none" stroke="#26796e" stroke-width="3"/>`;
      points.forEach(([x,y])=>b+=`<circle cx="${x}" cy="${y}" r="5" fill="white" stroke="#26796e" stroke-width="2"/>`);
      b+=`${text(300,332,'Angle (degrees)')}<text transform="translate(25 168) rotate(-90)" text-anchor="middle" class="svg-label">Range (m)</text>`;
      return svg(b,'Same speed, different angles',tr('Ranges: 30° = 35.31 m; 45° = 40.77 m; 60° = 35.31 m.','射程：30° 为 35.31 米，45° 为 40.77 米，60° 为 35.31 米。',lang),'0 0 600 340');
    }
    const target=kind==='target-paths';let b=`<rect width="600" height="340" rx="8" fill="white"/>${text(300,27,target?'Target launch':'Projectile motion','svg-plot-title')}`;
    for(let x=0;x<=40;x+=10)b+=`<path d="M${80+x*10} 74V274" stroke="#e0e6e6"/>${text(80+x*10,299,x)}`;
    for(let y=0;y<=20;y+=5)b+=`<path d="M80 ${274-y*10}H530" stroke="#e0e6e6"/>${text(64,279-y*10,y,'svg-label','end')}`;
    if(target)b+=`<rect x="420" y="74" width="20" height="200" fill="#d9f3b966"/><rect x="420" y="268" width="20" height="6" fill="#7a9c3f"/>${text(428,65,'34–36 m')}`;
    b+=`<path d="M80 74V274H530" class="svg-axis"/>`;
    (target?[30,60]:[45]).forEach(angle=>{const m=ProjectileModel.trajectory(20,angle);b+=`<polyline points="${m.points.map(p=>`${80+p.x*10},${274-p.y*10}`).join(' ')}" fill="none" stroke="${angle===60?'#b27835':'#26796e'}" stroke-width="3" ${angle===60?'stroke-dasharray="6 4"':''}/>`;});
    if(target)b+=`<path d="M104 52h24" stroke="#26796e" stroke-width="3"/>${text(151,57,'30°')}<path d="M188 52h24" stroke="#b27835" stroke-width="3" stroke-dasharray="6 4"/>${text(240,57,'60°')}`;
    b+=`${text(300,332,'Distance (m)')}<text transform="translate(25 168) rotate(-90)" text-anchor="middle" class="svg-label">Height (m)</text>`;
    return svg(b,target?'Target launch':'Projectile motion',target?tr('Both 30° and 60° trajectories land at 35.31 m inside the 34–36 m zone. Heights are 5.10 m and 15.29 m.','30° 和 60° 轨迹均落在 35.31 米处，位于 34–36 米目标区内。最大高度分别为 5.10 米和 15.29 米。',lang):tr('A 45° launch at 20 m/s reaches a height of 10.19 m and lands 40.77 m away. Axes use equal distance scales.','以 20 m/s、45° 发射，最高为 10.19 米，落地距离为 40.77 米。两轴使用相同的距离比例。',lang),'0 0 600 340');
  }
  root.LabDiagrams={diagram,plot};
})(window);

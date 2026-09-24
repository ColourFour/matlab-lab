/* Teaching diagrams use shared geometry in EN and 中文. */
(function (root) {
  const text = (en,zh,lang) => lang === 'zh' ? zh : en;
  const safe = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
  function svg(body, label, desc, viewBox='0 0 600 210') {
    return `<svg class="teaching-svg" role="img" aria-label="${safe(label)}" viewBox="${viewBox}" xmlns="http://www.w3.org/2000/svg"><title>${safe(label)}</title><desc>${safe(desc)}</desc>${body}</svg>`;
  }
  function cell(x,y,value,active=false,width=72) {
    return `<rect x="${x}" y="${y}" width="${width}" height="56" rx="9" fill="${active?'#d9f3b9':'#fff'}" stroke="${active?'#50722e':'#bdcfd0'}" stroke-width="1.5"/><text x="${x+width/2}" y="${y+35}" text-anchor="middle" class="svg-value">${value}</text>`;
  }
  function arrow(x,y,vertical=false) {
    return vertical ? `<path d="M${x} ${y}v24m-5-5 5 5 5-5" class="svg-arrow"/>` : `<path d="M${x} ${y}h32m-6-6 6 6-6 6" class="svg-arrow"/>`;
  }
  function diagram(kind,lang) {
    const tr=(en,zh)=>text(en,zh,lang);
    if (kind === 'command') return svg(`<text x="77" y="43" class="svg-label">${tr('COMMAND / INPUT','命令 / 输入')}</text><rect x="45" y="65" width="206" height="80" rx="12" fill="#17373d"/><text x="148" y="114" text-anchor="middle" fill="#d8f7bd" class="svg-code">2 + 2</text>${arrow(280,105)}<rect x="347" y="65" width="206" height="80" rx="12" fill="#fff" stroke="#bbcecf"/><text x="450" y="113" text-anchor="middle" class="svg-code">4</text><text x="375" y="43" class="svg-label">${tr('RESULT / OUTPUT','结果 / 输出')}</text><text x="300" y="188" text-anchor="middle" class="svg-label">${tr('Type → press Enter → read the result','输入 → 按 Enter → 读取结果')}</text>`,tr('A command becomes an answer','命令变成结果'),tr('2 plus 2 produces the answer 4.','2 加 2 得到结果 4。'));
    if (kind === 'variable') return svg(`<text x="96" y="44" class="svg-label">${tr('NAME','名称')}</text><text x="252" y="44" class="svg-label">${tr('STORE','存入')}</text><text x="430" y="44" class="svg-label">${tr('VALUE','数值')}</text><rect x="52" y="63" width="180" height="78" rx="12" fill="#fff" stroke="#bdcfd0"/><text x="142" y="110" text-anchor="middle" class="svg-code">speed</text><path d="M345 104H258m6-6-6 6 6 6" class="svg-arrow"/><text x="302" y="88" text-anchor="middle" class="svg-label">=</text><rect x="377" y="63" width="170" height="78" rx="12" fill="#d9f3b9" stroke="#79965a"/><text x="462" y="111" text-anchor="middle" class="svg-code">20</text><text x="300" y="185" text-anchor="middle" class="svg-label">speed = 20;</text>`,tr('Store 20 in speed','把 20 存入 speed'),tr('The value 20 on the right is stored in the variable speed on the left.','右侧的数值 20 被存入左侧的变量 speed。'));
    if (kind === 'vector' || kind === 'index') {
      const values=kind==='vector'?[6,8,5,9]:[10,20,30,40];
      let body=`<text x="300" y="30" text-anchor="middle" class="svg-label">${kind==='vector'?'scores = [6 8 5 9]':'values(3)'}</text>`;
      values.forEach((v,i)=>{const x=120+i*96;body+=cell(x,76,v,kind==='index'&&i===2)+`<text x="${x+36}" y="61" text-anchor="middle" class="svg-label">${i+1}</text>`;});
      body+=`<text x="72" y="61" text-anchor="middle" class="svg-label">${tr('index','索引')}</text><text x="300" y="176" text-anchor="middle" class="svg-label">${kind==='vector'?tr('4 values · order is preserved','4 个数值 · 顺序不变'):tr('Position 3 → value 30','位置 3 → 数值 30')}</text>`;
      return svg(body,tr('Vector values and positions','向量的数值和位置'),kind==='vector'?tr('scores contains 6, 8, 5, 9 at positions 1, 2, 3, 4.','scores 的第 1、2、3、4 项分别为 6、8、5、9。'):tr('The third entry of values is highlighted: 30.','values 的第三项被突出显示：30。'));
    }
    if (kind === 'range') {
      let body=`<text x="300" y="31" text-anchor="middle" class="svg-code">t = <tspan fill="#26796e">0</tspan>:<tspan fill="#94612b">1</tspan>:<tspan fill="#26796e">4</tspan></text><path d="M80 123H520" stroke="#a9bfc0" stroke-width="2"/>`;
      for(let i=0;i<5;i++){const x=90+105*i;body+=`<circle cx="${x}" cy="123" r="7" fill="#26796e"/><text x="${x}" y="161" text-anchor="middle" class="svg-value">${i}</text>`;if(i<4)body+=`<path d="M${x+15} 101q37-43 74 0" fill="none" stroke="#a5b9b9"/><text x="${x+52}" y="84" text-anchor="middle" class="svg-label">+1</text>`;}
      body+=`<text x="90" y="194" text-anchor="middle" class="svg-label">${tr('start','起点')}</text><text x="510" y="194" text-anchor="middle" class="svg-label">${tr('stop','终点')}</text>`;
      return svg(body,tr('A timeline from 0 to 4','从 0 到 4 的时间序列'),tr('Five values 0, 1, 2, 3, 4, with a step of 1 between neighbors.','五个数值 0、1、2、3、4，相邻数值的步长为 1。'));
    }
    if (kind === 'operation' || kind === 'pairs') {
      const n=kind==='pairs'?5:4, start=kind==='pairs'?104:136, step=kind==='pairs'?88:96, width=kind==='pairs'?64:72;
      let body=`<text x="57" y="53" class="svg-code">x</text><text x="57" y="167" class="svg-code">y</text>`;
      for(let i=0;i<n;i++){const v=kind==='pairs'?i:i+1,x=start+step*i;body+=cell(x,18,v,false,width)+arrow(x+width/2,84,true)+cell(x,132,v*v,true,width);if(kind==='operation')body+=`<text x="${x+width/2+13}" y="105" class="svg-label">²</text>`;}
      return svg(body,tr('Match each input to its output','把每个输入与输出对应'),kind==='pairs'?tr('The pairs are (0,0), (1,1), (2,4), (3,9), (4,16).','数值对为 (0,0)、(1,1)、(2,4)、(3,9)、(4,16)。'):tr('Squaring 1, 2, 3, 4 gives 1, 4, 9, 16 respectively.','1、2、3、4 分别平方后，得到 1、4、9、16。'));
    }
    return svg(`<text x="300" y="37" text-anchor="middle" class="svg-code">h = 4*t - t.^2</text><path d="M80 160H525M80 160V64" class="svg-axis"/><path d="M100 154Q300-31 500 154" fill="none" stroke="#26796e" stroke-width="3" stroke-dasharray="6 5"/><text x="300" y="199" text-anchor="middle" class="svg-label">${tr('Build it. Plot it. Check it.','建立模型 · 绘图 · 检查')}</text><text x="38" y="95" class="svg-code">h</text><text x="541" y="166" class="svg-code">t</text>`,tr('An arc model','弧线模型'),tr('A conceptual sketch: height starts at zero, rises, then returns to zero as time increases.','概念示意图：随着时间增加，高度从零开始，上升后再回到零。'));
  }
  function plot(kind,lang) {
    const arc=kind==='arc', ys=arc?[0,3,4,3,0]:[0,1,4,9,16],max=arc?4:16;
    const title=arc?'My first arc':'My first plot';
    let body=`<rect x="0" y="0" width="600" height="340" rx="8" fill="#fff"/><text x="320" y="29" text-anchor="middle" class="svg-plot-title">${title}</text>`;
    for(let i=0;i<5;i++){const x=80+i*114,y=274-i*54;body+=`<path d="M80 ${y}H536M${x} 58V274" stroke="#e0e6e6"/><text x="${x}" y="300" text-anchor="middle" class="svg-label">${i}</text><text x="63" y="${y+5}" text-anchor="end" class="svg-label">${i*max/4}</text>`;}
    body+=`<path d="M80 58V274H536" class="svg-axis"/><text x="308" y="331" text-anchor="middle" class="svg-label">${arc?'Time (s)':'x'}</text><text transform="translate(24 167) rotate(-90)" text-anchor="middle" class="svg-label">${arc?'Height (m)':'y'}</text>`;
    const coords=ys.map((v,i)=>[80+i*114,274-v/max*216]);
    body+=`<polyline points="${coords.map(p=>p.join(',')).join(' ')}" fill="none" stroke="#247d9a" stroke-width="3"/>`;
    coords.forEach(([x,y])=>{body+=`<circle cx="${x}" cy="${y}" r="5" fill="white" stroke="#247d9a" stroke-width="2.5"/>`;});
    return svg(body,title, text(arc?'Five points (0,0), (1,3), (2,4), (3,3), (4,0), connected by straight lines.':'Five points (0,0), (1,1), (2,4), (3,9), (4,16), connected by straight lines.',arc?'五个点 (0,0)、(1,3)、(2,4)、(3,3)、(4,0)，由直线段连接。':'五个点 (0,0)、(1,1)、(2,4)、(3,9)、(4,16)，由直线段连接。',lang),'0 0 600 340');
  }
  root.LabDiagrams={diagram,plot};
})(window);

/* Data-driven teaching visuals. Numeric geometry is shared by both languages. */
(function(root){
  'use strict';
  const original=root.LabDiagrams;
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const text=(x,y,s,extra='')=>`<text x="${x}" y="${y}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" fill="#23474c" ${extra}>${esc(s)}</text>`;
  const colors=['#26796e','#b16a27','#5275a5'];
  function draw(name,lang){
    const v=root.LAB_VISUALS[name];if(!v)return null;
    const t=x=>typeof x==='object'?x[lang]:x;
    let body=text(300,23,t(v.title),'font-weight="650"');
    let desc=t(v.title);
    if(v.kind==='cells'){
      const n=v.values.length,w=540/n;
      v.values.forEach((value,j)=>{const x=30+j*w;body+=`<rect x="${x+5}" y="69" width="${w-10}" height="121" rx="10" fill="${j===n-1?'#e7f2d8':'#f5f8f7'}" stroke="#bfd2cc"/>${text(x+w/2,105,v.labels[j])}${text(x+w/2,151,value,'font-size="19" font-weight="700"')}`;});
      body+=text(300,239,t(v.caption));desc+='; '+v.labels.map((s,j)=>s+': '+v.values[j]).join('; ')+'; '+t(v.caption);
    }else if(v.kind==='grid'){
      const rows=v.data.length,cols=v.data[0].length,size=220,cell=size/Math.max(rows,cols),x0=(600-cols*cell)/2,y0=45;
      body+='<g shape-rendering="crispEdges">';
      v.data.forEach((row,r)=>row.forEach((value,c)=>{const gray=Math.max(0,Math.min(255,value));body+=`<rect x="${x0+c*cell}" y="${y0+r*cell}" width="${cell}" height="${cell}" fill="rgb(${gray},${gray},${gray})"/>`;}));body+='</g>';
      body+=`<rect x="${x0}" y="${y0}" width="${cols*cell}" height="${rows*cell}" fill="none" stroke="#78938d"/>`;
      if(rows<=8){for(let r=0;r<rows;r++)body+=text(x0-16,y0+(r+.5)*cell+5,r+1);for(let c=0;c<cols;c++)body+=text(x0+(c+.5)*cell,y0+rows*cell+20,c+1);}
      else body+=text(300,286,`${rows} × ${cols}`);
      desc+=`; ${rows} rows, ${cols} columns. `+(lang==='zh'?'第一行位于顶部，深色表示较低的显示值。':'First row at the top; darker shades show lower display values.');
    }else if(v.kind==='plot'){
      const xlo=Math.min(0,...v.x),xhi=Math.max(...v.x),ylo=Math.min(0,...v.series.flatMap(s=>s.y)),yhi=Math.max(1,...v.series.flatMap(s=>s.y));
      const X=x=>66+(x-xlo)/(xhi-xlo||1)*496,Y=y=>227-(y-ylo)/(yhi-ylo||1)*178;
      for(let j=0;j<=4;j++){
        const y=ylo+(yhi-ylo)*j/4;body+=`<path d="M66 ${Y(y)}H562" stroke="#e0e9e6"/>${text(44,Y(y)+4,Number(y.toFixed(1)),'font-size="11"')}`;
        const x=xlo+(xhi-xlo)*j/4;body+=text(X(x),246,Number(x.toFixed(1)),'font-size="11"');
      }
      body+='<path d="M66 43V227H562" fill="none" stroke="#8a9f9e"/>';
      v.series.forEach((s,j)=>{body+=`<polyline points="${s.y.map((y,k)=>`${X(v.x[k]).toFixed(2)},${Y(y).toFixed(2)}`).join(' ')}" fill="none" stroke="${colors[j%3]}" stroke-width="2.5" ${j===1?'stroke-dasharray="7 3"':j===2?'stroke-dasharray="2 3"':''}/>`;
        if(v.x.length<20)s.y.forEach((y,k)=>body+=`<circle cx="${X(v.x[k])}" cy="${Y(y)}" r="4" fill="${colors[j%3]}"/>`);
        const left=300-(v.series.length*90)/2+j*90;body+=`<path d="M${left} 286h20" stroke="${colors[j%3]}" stroke-width="3" ${j===1?'stroke-dasharray="7 3"':j===2?'stroke-dasharray="2 3"':''}/>${text(left+43,290,s.name,'font-size="12"')}`;
      });
      body+=text(310,265,t(v.xlabel),'font-size="12"')+`<text transform="translate(15 140) rotate(-90)" text-anchor="middle" font-size="12" fill="#23474c">${esc(t(v.ylabel))}</text>`;
      desc+='; '+t(v.xlabel)+' → '+t(v.ylabel)+'. '+v.series.map(s=>s.name+': min '+Math.min(...s.y).toFixed(2)+', max '+Math.max(...s.y).toFixed(2)).join('; ');
    }
    return `<svg class="teaching-svg" viewBox="0 0 600 310" role="img" aria-label="${esc(t(v.title))}" xmlns="http://www.w3.org/2000/svg"><title>${esc(t(v.title))}</title><desc>${esc(desc)}</desc>${body}</svg>`;
  }
  root.LabDiagrams={...original,diagram:(name,lang)=>draw(name,lang)||original.diagram(name,lang),plot:(name,lang)=>draw(name,lang)||original.plot(name,lang)};
})(typeof window!=='undefined'?window:globalThis);

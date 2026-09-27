/* CSS-only motion; no sound, network requests, or changes to lesson layout. */
(function(root){
 'use strict';
 const variants=['confetti','fireworks','stars','bubbles','ribbons','sparkles','petals','comets','rings','diamonds','sprinkles','pinwheels','rockets','fountains','hearts','pixels'];
 function createPicker(random=Math.random){let bag=[],last='';return ()=>{if(!bag.length){bag=variants.slice();for(let i=bag.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[bag[i],bag[j]]=[bag[j],bag[i]];}if(bag.at(-1)===last)[bag[0],bag[bag.length-1]]=[bag.at(-1),bag[0]];}return last=bag.pop();};}
 const pick=createPicker();let timer=null,layer=null;
 function clear(){if(timer!==null)root.clearTimeout(timer);timer=null;layer?.remove();layer=null;}
 function play(anchor){
  clear();const doc=root.document;if(!doc||root.matchMedia?.('(prefers-reduced-motion: reduce)').matches)return null;
  const kind=pick(),rect=anchor?.getBoundingClientRect();
  const x=Math.max(60,Math.min(root.innerWidth-60,rect?rect.left+rect.width/2:root.innerWidth/2));
  const y=Math.max(80,Math.min(root.innerHeight-100,rect?rect.top+rect.height/2:root.innerHeight*.6));
  layer=doc.createElement('div');layer.className='celebration celebration--'+kind;layer.dataset.celebration=kind;layer.setAttribute('aria-hidden','true');layer.style.setProperty('--origin-x',x+'px');layer.style.setProperty('--origin-y',y+'px');
  const colors=['#ea547d','#f1ad27','#18a999','#7d67df','#358ff0','#f57839'];
  for(let i=0;i<36;i++){
   const p=doc.createElement('i'),angle=2*Math.PI*i/36,distance=90+Math.random()*160;
   p.className='celebration-particle';
   const vars={'--dx':Math.cos(angle)*distance+'px','--dy':Math.sin(angle)*distance+'px','--fall':160+Math.random()*180+'px','--spin':Math.random()*900-450+'deg','--delay':Math.random()*.22+'s','--color':colors[i%colors.length],'--size':6+Math.random()*8+'px','--lane':(i/35*100)+'vw'};
   for(const [k,v] of Object.entries(vars))p.style.setProperty(k,v);
   layer.appendChild(p);
  }
  doc.body.appendChild(layer);timer=root.setTimeout(clear,2400);return kind;
 }
 // Honor changes made to the OS motion preference while a celebration is running.
 if(root.matchMedia)root.matchMedia('(prefers-reduced-motion: reduce)').addEventListener?.('change',e=>{if(e.matches)clear();});
 root.LabCelebrate={variants,createPicker,play,clear};
})(typeof window!=='undefined'?window:globalThis);

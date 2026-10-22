/* Static explanations of lesson code. This never executes or rewrites MATLAB. */
(function(root){
 'use strict';
 const L=(en,zh)=>({en,zh}),help=root.LAB_CODE_HELP||{functions:{},variables:{},why:{}};
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 function tokenize(source){
  const out=[];let i=0,last=null;
  while(i<source.length){const start=i,ch=source[i];let type='symbol',text;
   if(/\s/.test(ch)){text=source.slice(i).match(/^\s+/)[0];type='space';}
   else if(ch==='%'){const block=source.startsWith('%{',i)&&/(?:^|\n)[ \t]*$/.test(source.slice(0,i));const end=block?source.indexOf('%}',i+2):-1;text=end>=0?source.slice(i,end+2):source.slice(i).match(/^[^\n]*/)[0];type='comment';}
   else if(ch==='"'||ch==="'"&&!(last&&last.end===i&&(last.type==='word'||last.type==='number'||[')',']','}'].includes(last.text)))){
    const quote=ch;i++;while(i<source.length){if(source[i]===quote){i++;if(source[i]===quote){i++;continue;}break;}i++;}text=source.slice(start,i);type='string';
   }else if(/[A-Za-z]/.test(ch)){text=source.slice(i).match(/^[A-Za-z]\w*/)[0];type='word';}
   else if(/\d/.test(ch)||ch==='.'&&/\d/.test(source[i+1]||'')){text=source.slice(i).match(/^(?:\d+(?:\.\d*)?|\.\d+)(?:[eEdD][+-]?\d+)?/)[0];if(text.endsWith('.')&&/[*\/\\^']/.test(source[i+text.length]||''))text=text.slice(0,-1);type='number';}
   else text=['...','.^','.*','./','.\\',".'",'>=','<=','==','~=','&&','||'].find(s=>source.startsWith(s,i))||ch;
   i=start+text.length;const token={text,type,start,end:i};out.push(token);if(type!=='space'&&type!=='comment')last=token;
  }return out;
 }
 function contextCode(options){
  if(typeof options.previousCode==='string')return options.previousCode;
  const steps=root.LAB_GUIDES?.[options.lessonKey]||[],at=steps.findIndex(s=>s.id===options.stepId);
  return at<0?'':steps.slice(0,at).map(s=>s.code||'').join('\n');
 }
 function analyze(source,options={}){
  const tokens=tokenize(source),course=(options.lessonKey||'').split(':')[0],meanings=help.variables[course]||{},known=new Set(Object.keys(meanings));
  const history=tokenize(contextCode(options)+'\n'+source).filter(t=>!['space','comment','string'].includes(t.type));
  for(let i=0;i<history.length;i++)if(history[i].type==='word'&&(history[i+1]?.text==='='||history[i-1]?.text==='for'))known.add(history[i].text);
  const significant=tokens.map((t,i)=>({...t,index:i})).filter(t=>t.type!=='space'&&t.type!=='comment');
  const frames=[];
  for(let j=0;j<significant.length;j++){
   const t=tokens[significant[j].index],prev=significant[j-1],next=significant[j+1],frame=frames.at(-1);
   t.kind=t.type==='word'?(known.has(t.text)?'variable':help.functions[t.text]?'function':'keyword'):t.type==='symbol'?'operator':t.type;
   t.frame=frame?{...frame}:null;t.inMatrix=frames.some(f=>f.kind==='matrix');t.inIndex=frames.some(f=>f.kind==='index');
   t.prev=prev?.text;t.next=next?.text;
   if(t.text==='('){const owner=prev?.type==='word'?prev.text:null,kind=owner?(known.has(owner)?'index':'call'):'group';t.frame={kind,owner,arg:0};frames.push({...t.frame,close:')'});}
   else if(t.text==='['){let depth=1,k=j+1;for(;k<significant.length&&depth;k++){if(significant[k].text==='[')depth++;if(significant[k].text===']')depth--;}const kind=significant[k]?.text==='='?'outputs':'matrix';t.frame={kind};frames.push({kind,close:']'});}
   else if(t.text===')'||t.text===']'||t.text==='}'){if(frame?.close===t.text)frames.pop();}
   else if(t.text===','&&frame)frame.arg=(frame.arg||0)+1;
   if(t.text==='end'&&t.inIndex)t.kind='index';
   t.explanation=explain(t,{course,meanings});
  }
  for(const t of tokens)if(t.type==='comment'){t.kind='comment';t.explanation={title:L('Comment / 注释','注释 / comment'),body:L('A note for the reader. MATLAB ignores this text when running the code.','给读者看的说明。MATLAB 运行代码时会忽略这些文字。')};}
  return tokens;
 }
 function explain(t,{course,meanings}){
  const title=kind=>L(t.text+' · '+kind.en,t.text+' · '+kind.zh),result=(kind,body,why)=>({title:title(kind),body,why});
  if(t.kind==='variable'){
   const meaning=meanings[t.text]||L('A value stored under this name. Assignment writes a value; other uses read it.','保存在这个名称下的数值。赋值时写入数值，其他位置使用时读取数值。');
   const why=t.next==='('?L('The following parentheses select entries from this stored array. MATLAB positions start at 1.','后面的括号从这个数组中选取数据。MATLAB 的位置从 1 开始。'):t.next==='='?L('Here the expression on the right is stored under this name.','这里把右边算式的结果保存到这个名称下。'):undefined;
   return result(L('variable / 变量','变量 / variable'),meaning,why);
  }
  if(t.kind==='function')return result(L('function / 函数','函数 / function'),help.functions[t.text],help.why[course]?.[t.text]);
  if(t.type==='number'){
   let body=L('An input number for this expression. Run the complete expression in MATLAB to calculate its result.','这个算式使用的输入数值。在 MATLAB 中运行完整算式，才能得到结果。');
   if(t.frame?.kind==='index')body=L('A number used to choose an array position. MATLAB counts positions from 1; a position is not the stored value.','用于选择数组位置的数。MATLAB 的位置从 1 开始；位置编号不是其中保存的数值。');
   else if(['rand','zeros','ones'].includes(t.frame?.owner))body=L('A size input: it specifies how many rows or columns to create. It is not a value to put in the array.','尺寸输入，用于指定创建多少行或多少列，不是要放入数组的数值。');
   else if(t.frame?.owner==='linspace'&&t.frame.arg===2)body=L('The number of evenly spaced points to create, including the starting and ending points.','要生成的等间隔点的数量，包含起点和终点。');
   else if(t.frame?.owner==='rng')body=L('The random seed. Reusing this seed and the same generator restarts the same random sequence.','随机种子。重复使用相同的种子和生成器，会重新得到同一随机序列。');
   else if(['^','.^'].includes(t.prev))body=L('The exponent: the power applied to the value on the left. A power of 2 means square that value.','指数，指定左边的值取几次方。指数为 2 表示对这个值平方。');
   else if(/[eEdD]/.test(t.text))body=L('Scientific notation. The exponent after e tells you the power of ten multiplying the number before it.','科学计数法。e 后面的指数表示前面的数要乘以 10 的几次方。');
   else if(t.inMatrix)body=L('A number in an array entry. If the entry contains arithmetic, MATLAB calculates it before storing the array.','数组某一项中使用的数值。如果这一项包含运算，MATLAB 会先计算，再保存数组。');
   return result(L('number / 数值','数值 / number'),body);
  }
  if(t.type==='string'){
   let body=L('Text inside quotes. MATLAB treats this as text, rather than as a variable or calculation.','引号内的文字。MATLAB 把它当作文本，不会当作变量或算式。');
   if(t.text==="'-o'"||t.text==='"-o"')body=L('A plot style: - joins points with lines and o adds a circle at each point. These marks help you see the sampled values.','绘图样式：- 用线连接各点，o 在各点画圆圈，方便看清采样值。');
   else if(/\.png['"]$/.test(t.text))body=L('The image filename used when saving the figure. A different name keeps separate results from overwriting each other.','保存图像时使用的文件名。使用不同名称，可以避免不同结果互相覆盖。');
   else if(t.frame?.owner==='rng')body=L('The chosen random-generator algorithm. Use the same algorithm and seed when you want repeatable comparisons.','指定的随机数生成算法。需要重复比较时，应使用相同的算法和种子。');
   else if(['title','xlabel','ylabel','legend'].includes(t.frame?.owner))body=L('Text that will appear on the graph. The quotes mark where that label starts and ends; they are not printed.','将出现在图上的文字。引号标记标签的起止位置，不会显示在图中。');
   return result(L('text / 文本','文本 / text'),body);
  }
  const keywords={
   for:L('Repeats the following block once for each value in the given list. The loop variable changes on each repetition.','对给定列表中的每个值，重复运行下面的代码块。循环变量每次取一个新值。'),
   end:t.inIndex?L('The last available position in this array dimension. It selects an entry; it does not end the program here.','这个数组维度中的最后一个位置。这里用于选取数据，不是结束程序。'):L('Closes the current loop or control block. An inner loop and an outer loop each need their own end.','结束当前循环或控制代码块。内层和外层循环各自需要一个 end。'),
   on:L('Turns grid lines on for the current axes, making it easier to compare values on the graph.','显示当前坐标区的网格线，方便比较图上的数值。'),
   off:L('With axis, hides the axis decorations. The image data is still displayed.','与 axis 连用时，隐藏坐标轴装饰，但仍然显示图像数据。'),
   equal:L('With axis, draws one unit at the same length in every direction, so shapes are not stretched.','与 axis 连用时，各方向一个单位的显示长度相同，避免形状被拉伸。'),
   image:L('With axis, uses equal-sized units and fits the axes tightly to the image, keeping pixels square.','与 axis 连用时，使用等长单位并紧贴图像边界，让像素保持正方形。'),
   longG:L('A number-display setting used with format. It shows more digits without changing the stored precision.','与 format 连用的数值显示设置。显示更多位数，但不改变存储精度。'),
   true:L('A logical value meaning a condition is satisfied. It can be used in checks and comparisons.','表示条件成立的逻辑值，可用于检查和比较。'),
   false:L('A logical value meaning a condition is not satisfied. It can be used in checks and comparisons.','表示条件不成立的逻辑值，可用于检查和比较。')
  };
  if(keywords[t.text])return result(L('instruction / 指令','指令 / instruction'),keywords[t.text]);
  const operators={
   '=':L('Calculate the right side, then store it in the name on the left. This assigns a value; == would compare two values.','先计算右边，再保存到左边的名称中。这是赋值；== 才是比较两个数值。'),
   '+':L('Adds values. A single number added to an array is added to every entry; matching arrays are added entry by entry.','把数值相加。数组加一个数时，每项都加这个数；两个尺寸匹配的数组逐项相加。'),
   '-':L('Subtracts the right value from the left. With matching arrays, corresponding entries are subtracted. A leading minus makes a value negative.','用左边的值减去右边的值。尺寸匹配的数组逐项相减；放在前面的负号使数值取负。'),
   '*':L('Multiplies values. With a single number, it scales the other input. For two nonscalar matrices, * follows matrix-multiplication rules.','乘法。一个输入是单个数时，对另一个输入缩放；两个非标量矩阵使用 * 时，遵循矩阵乘法规则。'),
   '/':L('Divides by the value on the right. Dividing an array by one number divides every entry; / between matrices follows different rules.','除以右边的值。数组除以一个数时，每项都除以该数；两个矩阵之间的 / 使用不同规则。'),
   '^':L('Raises a value to a power. For one number, ^2 means square it; use .^ to apply a power separately to array entries.','乘方。单个数的 ^2 表示平方；对数组各项分别乘方时，使用 .^。'),
   '.*':L('Multiplies corresponding entries separately. The dot selects an array operation instead of matrix multiplication.','把对应位置的数值分别相乘。点号表示逐项运算，而不是矩阵乘法。'),
   './':L('Divides corresponding entries separately. The dot makes the division an entry-by-entry operation.','把对应位置的数值分别相除。点号表示逐项除法。'),
   '.^':L('Raises each entry separately to the power on the right. The dot matters when the input contains several values.','把每一项分别提升到右边指定的次方。输入包含多个数时，这个点号很重要。'),
   '<':L('Tests whether the left value is smaller. The result is true or false; equal values do not pass this test.','检查左边是否更小。结果是 true 或 false；两边相等时不通过这个检查。'),
   '>':L('Tests whether the left value is larger. The result is true or false.','检查左边是否更大，结果是 true 或 false。'),
   '>=':L('Tests whether the left value is greater than or equal to the right value.','检查左边是否大于或等于右边。'),
   '<=':L('Tests whether the left value is smaller than or equal to the right value.','检查左边是否小于或等于右边。'),
   '==':L('Compares values for equality. It returns true or false and does not assign a new value.','比较两个数值是否相等，返回 true 或 false，不会赋予新值。'),
   '~=':L('Tests whether values are different. The result is true or false.','检查数值是否不同，结果是 true 或 false。'),
   '...':L('Continues the same command on the next line. This lets a long expression stay readable.','把同一条命令接到下一行，方便阅读较长的算式。'),
   "'":L('Transposes an array and conjugates complex entries. For real values, this swaps rows and columns.','对数组进行共轭转置。数值为实数时，就是把行和列交换。'),
   ".'":L('Transposes an array without complex conjugation. Rows become columns and columns become rows.','对数组进行非共轭转置，把行变成列、列变成行。')
  };
  let body=operators[t.text];
  if(t.text===';')body=t.inMatrix?L('Starts a new row in this matrix. Each row must have a compatible number of entries.','在矩阵中开始新的一行。各行的项数必须匹配。'):L('Ends this statement without printing its result. The calculation still runs and assigned values are still stored.','结束这条语句，但不显示结果。计算仍会运行，赋值也仍会保存。');
  if(t.text===':')body=t.frame?.kind==='index'&&t.prev==='('&&t.next===')'?L('Selects every entry as one column vector. This lets a calculation use the whole array, rather than separate columns.','把所有项取成一个列向量，方便对整个数组计算，而不是按列分别计算。'):t.frame?.kind==='index'&&['(', ','].includes(t.prev)&&[',',')'].includes(t.next)?L('Selects all positions in this array dimension, such as every row or every column.','选取这个数组维度中的全部位置，例如所有行或所有列。'):L('Builds a regularly spaced list: start:step:limit. With start:limit the step is 1. The limit is included only if a step lands on it.','生成等间隔列表：起点:步长:上限。只有起点:上限时，步长为 1；步进正好到达上限时才会包含它。');
  if(t.text==='('||t.text===')')body=t.frame?.kind==='index'?L('Encloses array positions, not a function call. One position selects an entry; two positions select row first, then column.','括住数组位置，这里不是调用函数。一个位置选取一项；两个位置先指定行，再指定列。'):t.frame?.kind==='call'?L('Encloses the function inputs. Commas separate the inputs; their order tells the function what each one means.','括住函数输入。逗号分隔各个输入，顺序决定每个输入的含义。'):L('Groups part of an expression so that it is calculated together before surrounding operations.','把算式的一部分组合起来，先计算这一组，再进行周围的运算。');
  if(t.text==='['||t.text===']')body=t.frame?.kind==='outputs'?L('Groups several output names. The function assigns a separate result to each name in order.','把多个输出名称放在一起。函数按顺序为每个名称赋予一个结果。'):L('Groups entries into an array. Spaces or commas separate columns; semicolons separate rows.','把各项组合成数组。空格或逗号分隔列，分号分隔行。');
  if(t.text===',')body=t.frame?.kind==='index'?L('Separates array dimensions. In A(row,column), the row comes first and the column comes second.','分隔数组维度。A(行,列) 中，行在前，列在后。'):L('Separates function inputs or entries in a row. Keep the order: each position has its own meaning.','分隔函数输入或一行中的各项。请保持顺序，每个位置都有自己的含义。');
  return result(L('syntax / 语法','语法 / syntax'),body||L('A piece of MATLAB syntax used by this expression. Keep it in place when running the command.','这个算式使用的 MATLAB 语法。运行命令时请保留它。'));
 }
 function render(source,options={}){
  const tokens=analyze(source,options),lang=options.lang==='zh'?'zh':'en';let first=true;
  const spoken={';':L('semicolon','分号'),':':L('colon','冒号'),',':L('comma','逗号'),'=':L('assignment equals sign','赋值等号'),'[':L('opening square bracket','左方括号'),']':L('closing square bracket','右方括号'),'(':L('opening parenthesis','左圆括号'),')':L('closing parenthesis','右圆括号'),'.^':L('element-by-element power','逐项乘方'),'.*':L('element-by-element multiplication','逐项乘法'),'./':L('element-by-element division','逐项除法'),'+':L('plus sign','加号'),'-':L('minus sign','减号'),'*':L('multiplication sign','乘号'),'/':L('division sign','除号'),'^':L('power operator','乘方符号')};
  const code=tokens.map((t,i)=>{if(!t.explanation)return esc(t.text);const tab=first?'0':'-1';first=false;return `<span class="code-token code-${t.kind}" role="button" tabindex="${tab}" data-code-token="${i}" aria-label="${esc((lang==='zh'?'解释 ':'Explain ')+(spoken[t.text]?.[lang]||t.text))}">${esc(t.text)}</span>`;}).join('');
  return `<div class="code-explorer" data-code-lesson="${esc(options.lessonKey||'')}" data-code-step="${esc(options.stepId||'')}"><pre class="code-block" role="group" aria-label="${lang==='zh'?'MATLAB 代码。使用左右方向键逐项查看。':'MATLAB code. Use left and right arrow keys to explore.'}"><code>${code}</code></pre></div>`;
 }
 let tip=null,active=null,pinned=false,hideTimer=null,cache=new WeakMap();
 function close(){clearTimeout(hideTimer);if(active){active.classList.remove('code-selected');active.removeAttribute('aria-describedby');}active=null;pinned=false;if(tip)tip.hidden=true;}
 function explanationFor(el){const block=el.closest('.code-explorer');if(!block)return null;let data=cache.get(block);if(!data){data=analyze(block.querySelector('code').textContent,{lessonKey:block.dataset.codeLesson,stepId:block.dataset.codeStep});cache.set(block,data);}return data[Number(el.dataset.codeToken)]?.explanation;}
 function position(){if(!tip||tip.hidden||!active)return;const r=active.getBoundingClientRect(),b=tip.getBoundingClientRect(),w=document.documentElement.clientWidth||root.innerWidth,h=root.innerHeight||document.documentElement.clientHeight;tip.style.left=Math.max(10,Math.min(r.left,w-b.width-10))+'px';tip.style.top=Math.max(10,r.bottom+b.height+10<=h?r.bottom+8:r.top-b.height-8)+'px';}
 function show(el,pin=false){const info=explanationFor(el);if(!info||!tip)return;clearTimeout(hideTimer);if(active&&active!==el){active.classList.remove('code-selected');active.removeAttribute('aria-describedby');}active=el;pinned=pin;const lang=document.documentElement.lang.startsWith('zh')?'zh':'en';tip.replaceChildren();const strong=document.createElement('strong');strong.textContent=info.title[lang];tip.append(strong);for(const text of [info.body,info.why])if(text){const p=document.createElement('p');p.textContent=text[lang];tip.append(p);}tip.hidden=false;el.classList.add('code-selected');el.setAttribute('aria-describedby',tip.id);position();}
 function laterClose(){clearTimeout(hideTimer);hideTimer=setTimeout(()=>{if(!pinned){const focused=document.activeElement;if(focused?.matches?.('[data-code-token]'))show(focused);else close();}},180);}
 function init(){
  if(tip)return;tip=document.createElement('div');tip.id='lab-code-tooltip';tip.className='code-tooltip';tip.setAttribute('role','tooltip');tip.hidden=true;document.body.append(tip);
  document.addEventListener('pointerover',e=>{const el=e.target.closest?.('[data-code-token]');if(el)show(el,el===active&&pinned);});
  document.addEventListener('pointerout',e=>{if(e.target.closest?.('[data-code-token]')&&!tip.contains(e.relatedTarget))laterClose();});
  tip.addEventListener('pointerenter',()=>clearTimeout(hideTimer));tip.addEventListener('pointerleave',laterClose);
  document.addEventListener('focusin',e=>{if(e.target.matches?.('[data-code-token]')){for(const el of e.target.closest('.code-explorer').querySelectorAll('[data-code-token]'))el.tabIndex=el===e.target?0:-1;show(e.target);}});
  document.addEventListener('focusout',e=>{if(e.target.matches?.('[data-code-token]')&&!e.relatedTarget?.closest?.('[data-code-token]'))close();});
  document.addEventListener('click',e=>{const el=e.target.closest?.('[data-code-token]');if(el){if(root.getSelection?.()?.toString())return;if(active===el&&pinned)close();else show(el,true);}else if(!tip.contains(e.target))close();});
  document.addEventListener('keydown',e=>{
   if(e.key==='Escape'){close();return;}const el=e.target.closest?.('[data-code-token]');if(!el)return;
   if(['ArrowRight','ArrowLeft','Home','End'].includes(e.key)&&!e.shiftKey&&!e.ctrlKey&&!e.altKey&&!e.metaKey){e.preventDefault();const all=Array.from(el.closest('.code-explorer').querySelectorAll('[data-code-token]')),i=all.indexOf(el),next=e.key==='Home'?0:e.key==='End'?all.length-1:(i+(e.key==='ArrowRight'?1:-1)+all.length)%all.length;for(const x of all)x.tabIndex=-1;all[next].tabIndex=0;all[next].focus();all[next].scrollIntoView?.({block:'nearest',inline:'nearest'});}
   if(e.key==='Enter'||e.key===' '){e.preventDefault();if(active===el&&pinned)close();else show(el,true);}
  });
  root.addEventListener('resize',close);root.addEventListener('scroll',e=>{if(e.target.closest?.('.code-explorer'))position();else if(!e.target.nodeType||!tip.contains(e.target))close();},true);
 }
 const api={tokenize,analyze,render,close};root.LabCodeExplorer=api;if(typeof module!=='undefined')module.exports=api;
 if(root.document?.addEventListener)root.document.addEventListener('DOMContentLoaded',init);
})(typeof window==='undefined'?globalThis:window);

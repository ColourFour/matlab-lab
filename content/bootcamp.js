/* Each lesson has one shared structure. Only the paired text is translated.
   Code, answers, diagrams, IDs and ordering are language-independent. */
(function (root) {
  const L = (en, zh) => ({ en, zh });
  const lessons = [
    {
      id: 'first-command', icon: 'terminal', minutes: 4,
      title: L('Make MATLAB answer', '让 MATLAB 回答'),
      short: L('First commands', '第一条命令'),
      goal: L('Turn a blank Command Window into your first small win.', '从空白的命令窗口开始，完成第一个小任务。'),
      term: 'command / 命令', diagram: 'command',
      see: L('A command goes in. An answer comes out.', '输入命令，就会得到结果。'),
      understand: L('MATLAB can work like a calculator. Type an expression, then press Enter. The name `ans` holds the latest result when you do not give it a name.', 'MATLAB 可以像计算器一样工作。输入算式，然后按 Enter。没有给结果命名时，MATLAB 会把结果存入 `ans`。'),
      steps: [L('Open MATLAB on your computer, or use MATLAB Online with your school account. Ask your teacher if you need access.', '打开电脑上的 MATLAB，或使用学校账户登录 MATLAB Online。如果无法访问，请联系老师。'), L('Find the Command Window. Click beside the `>>` prompt. Type the code below, then press Enter. Do not type `>>` yourself.', '找到 Command Window（命令窗口）。点击 `>>` 旁边，输入下面的代码，然后按 Enter。不要输入 `>>`。')],
      code: '2 + 2', output: 'ans =\n\n     4',
      compare: L('Find the number 4. Blank lines and spacing may look slightly different in your MATLAB.', '找到数字 4。你的 MATLAB 中，空行和间距可能略有不同。'),
      note: L('Try `8 / 2 + 3` next. MATLAB does division before addition.', '接着尝试 `8 / 2 + 3`。MATLAB 先做除法，再做加法。'),
      questions: [{ id: 'result', label: L('What result does 8 / 2 + 3 give?', '8 / 2 + 3 的结果是多少？'), type: 'number', answer: 7, placeholder: L('Enter a number', '输入一个数字') }],
      hint: L('First divide 8 by 2. Then add 3. Run it in the Command Window to check.', '先算 8 除以 2，再加 3。在命令窗口中运行，检查结果。'),
      success: L('7 is right. You have given MATLAB a command and read its answer.', '7，答对了！你已经向 MATLAB 输入命令，并读出了结果。')
    },
    {
      id: 'variables', icon: 'box', minutes: 4,
      title: L('Give a number a name', '给数字起个名字'), short: L('Variables', '变量'),
      goal: L('Keep a value so you can use it again.', '保存一个数值，方便之后再次使用。'),
      term: 'variable / 变量', diagram: 'variable',
      see: L('The name speed points to the value 20.', '名称 speed 对应数值 20。'),
      understand: L('A variable is a name for a stored value. `=` stores the value on the right in the name on the left. A semicolon `;` hides that line’s output; it does not stop the calculation.', '变量是已保存数值的名称。`=` 把右边的数值存入左边的变量。分号 `;` 隐藏这一行的输出，但不会停止计算。'),
      steps: [L('In the Command Window, run each line below. Press Enter after each line.', '在命令窗口中逐行运行下面的代码。每输入一行，就按 Enter。'), L('The first two lines store values quietly. The last line asks MATLAB to display speed.', '前两行保存数值，不显示结果。最后一行让 MATLAB 显示 speed。')],
      code: 'speed = 20;\nangle = 45;\nspeed', output: 'speed =\n\n    20',
      compare: L('You should see speed = 20. angle is still stored, even though it is not displayed.', '你应该看到 speed = 20。angle 也已经保存，只是没有显示。'),
      note: L('Names are case-sensitive: `speed` and `Speed` are different. Now run `speed = speed + 5;` and then `speed`.', '变量名区分大小写：`speed` 和 `Speed` 不同。现在运行 `speed = speed + 5;`，再运行 `speed`。'),
      questions: [{ id: 'result', label: L('What value is now stored in speed?', '现在 speed 中保存的数值是多少？'), type: 'number', answer: 25, placeholder: L('New value of speed', 'speed 的新数值') }],
      hint: L('Start from 20. The new line adds 5 and stores the new total under the same name.', '从 20 开始。新的一行加上 5，然后把结果保存到同一个变量中。'),
      success: L('Exactly. speed now holds 25. A variable can change.', '正确！speed 现在保存的是 25。变量的值可以改变。')
    },
    {
      id: 'vectors', icon: 'cells', minutes: 4,
      title: L('Collect numbers in a vector', '用向量收集数字'), short: L('Vectors', '向量'),
      goal: L('Store a whole row of values under one name.', '用一个名称保存一整行数值。'),
      term: 'vector / 向量', diagram: 'vector',
      see: L('One name. Four values. Their order matters.', '一个名称，四个数值。它们的顺序很重要。'),
      understand: L('A row vector is an ordered row of values. Put the values inside square brackets `[ ]`. Use spaces or commas between values.', '行向量是一行按顺序排列的数值。把数值放在方括号 `[ ]` 中，用空格或逗号分隔。'),
      steps: [L('Run the first line to create the vector scores.', '运行第一行，创建向量 scores。'), L('Run the second line to see every value, in order.', '运行第二行，按顺序查看所有数值。')],
      code: 'scores = [6 8 5 9];\nscores', output: 'scores =\n\n     6     8     5     9',
      compare: L('The output has one row and four values. The square brackets are not printed in MATLAB’s output.', '输出有一行、四个数值。MATLAB 的输出不会显示方括号。'),
      note: L('Try changing one value and running both lines again. Order stays exactly as you type it.', '试着改变一个数值，再次运行这两行。数值的顺序与你输入的顺序相同。'),
      questions: [{ id: 'count', label: L('How many values are in [3 6 9 12 15]?', '[3 6 9 12 15] 中有几个数值？'), type: 'number', answer: 5, placeholder: L('Number of values', '数值的个数') }],
      hint: L('Count the entries, not their total. Each number is one entry.', '数一数有多少个数值，不是把它们相加。每个数字算一项。'),
      success: L('Five values, one vector. You can now store a small collection of data.', '五个数值，一个向量。你已经可以保存一小组数据了。')
    },
    {
      id: 'ranges', icon: 'steps', minutes: 4,
      title: L('Build a timeline', '建立时间序列'), short: L('Evenly spaced values', '等间距数值'),
      goal: L('Let MATLAB write the repeating numbers for you.', '让 MATLAB 帮你生成有规律的数值。'),
      term: 'step / 步长', diagram: 'range',
      see: L('Start at 0. Add 1 each time. Stop at 4.', '从 0 开始，每次加 1，到 4 停止。'),
      understand: L('The pattern `start:step:stop` creates evenly spaced values. MATLAB includes the stop value only if the steps reach it exactly. `0:2:5` gives `[0 2 4]`.', '`start:step:stop` 用来生成等间距的数值。只有步长恰好能到达终点时，结果才包含终点值。例如 `0:2:5` 得到 `[0 2 4]`。'),
      steps: [L('Run these lines to make a time vector called t.', '运行下面的代码，创建名为 t 的时间向量。'), L('Read the output from left to right. Each gap is 1.', '从左到右阅读输出。相邻数值相差 1。')],
      code: 't = 0:1:4;\nt', output: 't =\n\n     0     1     2     3     4',
      compare: L('There are five values, including 0. Four gaps does not mean four values.', '包括 0 在内，一共有五个数值。四个间隔不代表四个数值。'),
      note: L('Now run `t = 0:2:8;` and then `t`. The step is different.', '现在运行 `t = 0:2:8;`，再运行 `t`。这次的步长不同。'),
      questions: [{ id: 'values', label: L('Enter all the values in 0:2:8, in order.', '按顺序输入 0:2:8 中的所有数值。'), type: 'vector', answer: [0,2,4,6,8], placeholder: L('Separate values with spaces', '用空格分隔数值') }],
      hint: L('Begin with 0, then add 2 each time until you reach 8. Include both ends.', '从 0 开始，每次加 2，直到 8。要包含起点和终点。'),
      success: L('0, 2, 4, 6, 8. You have made a timeline with a step of 2.', '0、2、4、6、8。你建立了一个步长为 2 的时间序列。')
    },
    {
      id: 'indexing', icon: 'target', minutes: 4,
      title: L('Pick one value', '取出一个数值'), short: L('Indexing', '索引'),
      goal: L('Use a position to get exactly the value you need.', '根据位置，取出你需要的数值。'),
      term: 'index / 索引', diagram: 'index',
      see: L('Position 3 holds the value 30.', '第 3 个位置保存着数值 30。'),
      understand: L('An index is a position. MATLAB starts counting positions at 1, not 0. Use round brackets `( )` to select a value. Square brackets `[ ]` create a vector; round brackets select from it.', '索引表示位置。MATLAB 从 1 开始计数，不是从 0 开始。用圆括号 `( )` 选择数值。方括号 `[ ]` 用来创建向量，圆括号用来从中取值。'),
      steps: [L('Create a fresh vector with these four values.', '用下面的四个数值创建一个新向量。'), L('Run values(3). The 3 is the position, not the value you are looking for.', '运行 values(3)。这里的 3 是位置，不是要查找的数值。')],
      code: 'values = [10 20 30 40];\nvalues(3)', output: 'ans =\n\n    30',
      compare: L('The third value is 30. You should see a single number, not the whole vector.', '第三个数值是 30。你应该看到一个数字，而不是整个向量。'),
      note: L('Run `values(2)` next. `values(0)` is not valid: there is no position 0.', '接着运行 `values(2)`。`values(0)` 无效，因为不存在第 0 个位置。'),
      questions: [{ id: 'result', label: L('What does values(2) return?', 'values(2) 返回什么数值？'), type: 'number', answer: 20, placeholder: L('Value at position 2', '第 2 个位置的数值') }],
      hint: L('Count from the left: position 1 is 10. What is at position 2?', '从左边开始数：第 1 个位置是 10。第 2 个位置是什么？'),
      success: L('20 is at position 2. You can now look inside a vector.', '第 2 个位置是 20。你已经可以从向量中取出数值了。')
    },
    {
      id: 'operations', icon: 'multiply', minutes: 5,
      title: L('Work on every value', '对每个数值做运算'), short: L('Vector operations', '向量运算'),
      goal: L('One instruction. A calculation for every entry.', '一条指令，就能对每一项进行计算。'),
      term: 'element-wise / 逐元素', diagram: 'operation',
      see: L('Each value is squared separately.', '每个数值分别进行平方运算。'),
      understand: L('Use `.^` to raise each value to a power. The dot means “each element”. For two same-size vectors, `.*` multiplies matching entries and `./` divides them. `+` and `-` already work entry by entry.', '用 `.^` 对每个数值求幂。点号表示“每个元素”。对于两个大小相同的向量，`.*` 将对应项相乘，`./` 将对应项相除。`+` 和 `-` 本身就逐项运算。'),
      steps: [L('Create x, then square each entry to make y. Run all three lines.', '创建 x，再把每一项平方，得到 y。运行全部三行。'), L('Match each input to the output directly below it in the diagram.', '在图中，把每个输入与其正下方的输出对应起来。')],
      code: 'x = [1 2 3 4];\ny = x.^2;\ny', output: 'y =\n\n     1     4     9    16',
      compare: L('For example, the third entry is 3² = 9. The number of entries stays the same.', '例如，第三项是 3² = 9。向量中数值的个数没有改变。'),
      note: L('Now run `x + 2`. Adding one number adds it to every entry. For `x.^2`, keep the dot: `x^2` is a different operation.', '现在运行 `x + 2`。加上一个数字，会对每一项都加上它。在 `x.^2` 中，要保留点号：`x^2` 是另一种运算。'),
      questions: [{ id: 'values', label: L('With x = [1 2 3 4], what is x + 2?', '当 x = [1 2 3 4] 时，x + 2 是多少？'), type: 'vector', answer: [3,4,5,6], placeholder: L('Enter the four values', '输入四个数值') }],
      hint: L('Add 2 to 1, then to 2, then to 3, then to 4. Keep the same order.', '分别给 1、2、3、4 加上 2，保持原来的顺序。'),
      success: L('3, 4, 5, 6. One line updated every value in the vector.', '3、4、5、6。一行代码对向量的每个数值都进行了运算。')
    },
    {
      id: 'plotting', icon: 'plot', minutes: 6,
      title: L('Turn numbers into a picture', '把数字变成图像'), short: L('Your first plot', '第一张图'),
      goal: L('Connect pairs of numbers to make a graph.', '把成对的数值连起来，画出一张图。'),
      term: 'plot / 绘图', diagram: 'pairs',
      see: L('Each position makes one (x, y) pair.', '同一位置的数值组成一对 (x, y)。'),
      understand: L('`plot(x, y, \'-o\')` puts x on the horizontal axis and y on the vertical axis. `-o` means lines with circle markers. Both vectors need the same number of values.', '`plot(x, y, \'-o\')` 把 x 放在横轴，y 放在纵轴。`-o` 表示带圆圈标记的连线。两个向量的数值个数必须相同。'),
      steps: [L('Run the code below, one line at a time. A figure opens after plot. In MATLAB Online, it may appear in a Figures panel.', '逐行运行下面的代码。运行 plot 后，会出现图形窗口。在 MATLAB Online 中，图形可能显示在 Figures 面板中。'), L('xlabel, ylabel and title add text. Keep the quotation marks. grid on adds grid lines.', 'xlabel、ylabel 和 title 添加文字，要保留引号。grid on 添加网格线。')],
      code: "x = 0:1:4;\ny = x.^2;\nplot(x, y, '-o');\nxlabel('x');\nylabel('y');\ntitle('My first plot');\ngrid on;", output: null, outputPlot: 'square',
      compare: L('Look for five circles: (0, 0), (1, 1), (2, 4), (3, 9), (4, 16). Straight line segments connect them. Colors may differ.', '找到五个圆圈：(0, 0)、(1, 1)、(2, 4)、(3, 9)、(4, 16)。它们由直线段连接。颜色可能不同。'),
      note: L('Read across the diagram: x(4) is 3 and y(4) is 9. Together they make the point (3, 9).', '对照图中的位置：x(4) 是 3，y(4) 是 9。它们组成点 (3, 9)。'),
      questions: [{ id: 'result', label: L('On your graph, what is y when x is 3?', '在你的图中，当 x 为 3 时，y 是多少？'), type: 'number', answer: 9, placeholder: L('Read the y value', '读出 y 的值') }, { id: 'axis', label: L('Which command labels the horizontal axis?', '哪条命令给横轴添加标签？'), type: 'choice', options: [{value:'xlabel',label:L('xlabel', 'xlabel')},{value:'ylabel',label:L('ylabel','ylabel')},{value:'title',label:L('title','title')}], answer: 'xlabel' }],
      hint: L('Find 3 on the x axis and move up to its circle. The “x” in xlabel names the horizontal axis.', '在 x 轴上找到 3，再向上找到对应的圆圈。xlabel 中的 x 表示横轴。'),
      success: L('Yes: y = 9, and xlabel labels the horizontal axis. Your data has become a picture.', '正确：y = 9，xlabel 给横轴添加标签。你的数据已经变成了一张图。')
    },
    {
      id: 'mini-challenge', icon: 'flag', minutes: 8,
      title: L('Mission: make an arc', '任务：画出一条弧线'), short: L('Mini challenge', '小挑战'),
      goal: L('Bring your new skills together in one small script.', '用一个小脚本，把学到的技能组合起来。'),
      term: 'script / 脚本', diagram: 'challenge',
      see: L('Time goes forward. Height goes up, then down.', '时间向前，高度先升后降。'),
      understand: L('A script is a saved set of commands. Here, t is time and h is height in a made-up model: `h = 4*t - t.^2`. Multiplying by the single number 4 scales every value. `t.^2` squares each time value.', '脚本是一组保存起来的命令。在这个示例模型中，t 表示时间，h 表示高度：`h = 4*t - t.^2`。乘以单个数字 4，会把每一项变为原来的 4 倍。`t.^2` 对每个时间值进行平方运算。'),
      steps: [L('Choose New Script in MATLAB. Type the starter below into the Editor. Add the three missing commands described in its comments.', '在 MATLAB 中选择 New Script（新建脚本）。在 Editor（编辑器）中输入下面的起始代码，并根据注释补充三条命令。'), L('Set t to 0:1:4. Set h to 4*t - t.^2. Add plot(t, h, \'-o\') before the labels.', '把 t 设为 0:1:4，把 h 设为 4*t - t.^2。在标签命令之前添加 plot(t, h, \'-o\')。'), L('Save as bootcamp_arc.m in your current folder. Click Run. If MATLAB asks, choose Change Folder. Compare the graph and type the values from h below.', '在当前文件夹中保存为 bootcamp_arc.m，然后点击 Run。如果 MATLAB 询问，请选择 Change Folder。对比图像，并在下方输入 h 的数值。')],
      code: "% 1. Create the time vector t\n\n% 2. Calculate the height vector h\n\n% 3. Plot t against h with '-o'\n\nxlabel('Time (s)');\nylabel('Height (m)');\ntitle('My first arc');\ngrid on;\nh", output: null, outputPlot: 'arc',
      compare: L('Your graph should start at height 0, rise to one peak, and return to 0. The reference uses the same five time values. Match the points, not the color.', '你的图应从高度 0 开始，上升到一个最高点，再回到 0。参考图使用相同的五个时间值。请对比点的位置，不必匹配颜色。'),
      note: L('A red error is a clue. Check that t is defined first, keep the dot in .^, and use round brackets in plot(t, h, \'-o\').', '红色错误信息是一条线索。检查是否先定义了 t，保留 .^ 中的点，并在 plot(t, h, \'-o\') 中使用圆括号。'),
      questions: [{ id: 'heights', label: L('Run h. Enter its five height values in order.', '运行 h，按顺序输入它的五个高度值。'), type: 'vector', answer: [0,3,4,3,0], placeholder: L('Five values, separated by spaces', '五个数值，用空格分隔') }, { id: 'peak', label: L('At what time t is the height greatest? (seconds)', '在什么时间 t，高度最大？（秒）'), type: 'number', answer: 2, placeholder: L('Time in seconds', '时间，单位：秒') }],
      hint: L('At t = 1, h = 4 × 1 − 1² = 3. Repeat for t = 0, 2, 3 and 4. The peak time is an x-axis value, not a position number.', '当 t = 1 时，h = 4 × 1 − 1² = 3。对 t = 0、2、3、4 重复计算。最高点的时间是横轴的数值，不是位置编号。'),
      success: L('Mission complete. Your model rises to 4 m at 2 s and returns to 0 m at 4 s. You are ready to explore projectile motion.', '任务完成！你的模型在 2 秒时升到 4 米，在 4 秒时回到 0 米。你已经准备好探索抛体运动了。')
    }
  ];
  root.BOOTCAMP = { id: 'bootcamp', version: 1, lessons };
  if (typeof module !== 'undefined') module.exports = root.BOOTCAMP;
})(typeof window !== 'undefined' ? window : globalThis);

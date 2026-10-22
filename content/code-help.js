/* Short explanations of this course's code. No answers or runtime values. */
(function(root){
 'use strict';
 const L=(en,zh)=>({en,zh});
 const functions={
  plot:L('Draws a graph from paired x and y values. The first input goes along the horizontal axis; the second goes up the vertical axis.','用成对的 x、y 数值画图。第一个输入对应横轴，第二个输入对应纵轴。'),
  xlabel:L('Labels the horizontal axis. Include units so another person can read the graph.','给横轴添加标签。写明单位，别人才能读懂图像。'),
  ylabel:L('Labels the vertical axis. Include units so another person can read the graph.','给纵轴添加标签。写明单位，别人才能读懂图像。'),
  title:L('Adds a title to the current axes. Use it to identify the model or settings being shown.','给当前坐标区添加标题，用来说明展示的模型或参数。'),
  grid:L('Controls grid lines on the graph. Grid lines help you compare positions with the axis values.','控制图中的网格线，方便把图上的位置与坐标数值对应起来。'),
  axis:L('Controls the axes and their appearance. The word after axis chooses the setting.','控制坐标区及其外观。axis 后面的词指定设置。'),
  format:L('Changes how numbers are displayed. It does not change the stored values or make the calculation more accurate.','改变数值的显示方式，不改变已保存的数值，也不会提高计算精度。'),
  cosd:L('Finds the cosine of an angle measured in degrees. Here it gives the horizontal share of the launch speed.','计算以度为单位的角度余弦值。这里用于求发射速度的水平分量。'),
  sind:L('Finds the sine of an angle measured in degrees. Use degrees here, rather than the radians expected by sin.','计算以度为单位的角度正弦值。这里使用角度；sin 则使用弧度。'),
  linspace:L('Makes evenly spaced values between two endpoints, using the requested number of points. Both endpoints are included.','在两个端点之间生成指定数量的等间隔数值，包含两个端点。'),
  numel:L('Counts every entry in an array. A matrix has rows times columns entries.','计算数组中的总项数。矩阵的总项数等于行数乘以列数。'),
  max:L('For a vector, finds its largest value. A second output can also give the position of that value.','对向量求最大值。第二个输出还可以给出最大值所在的位置。'),
  min:L('With one vector, finds its lowest value. With two inputs, chooses the smaller value at each matching position.','一个向量输入时求最小值；两个输入时，比较对应位置并取较小值。'),
  rng:L('Sets the random generator. Reusing the same seed and generator restarts the same sequence, so results can be compared fairly.','设置随机数生成器。使用相同的种子和生成器，会重新得到同一序列，方便公平比较。'),
  rand:L('Makes an array of random values between 0 and 1. The inputs specify its dimensions, not the values to generate.','生成 0 到 1 之间的随机数数组。输入指定数组尺寸，不是要生成的数值。'),
  double:L('Converts true and false to the numbers 1 and 0, so the outcomes can be used in arithmetic.','把 true、false 转换为数值 1、0，方便对结果进行运算。'),
  sum:L('Adds the entries of a vector. Adding true/false outcomes counts how many are true.','把向量中的各项相加。对 true/false 结果求和，可统计 true 的数量。'),
  mean:L('For a vector, adds its entries and divides by their count. This gives the average.','对向量中的各项求和，再除以项数，得到平均值。'),
  cumsum:L('Makes a running total: each entry includes all earlier entries. Here it shows the balance after each play.','计算累计和：每一项包含之前各项的总和。这里表示每次游戏后的余额。'),
  abs:L('Removes the sign of a number. Here it measures the size of an error without positive and negative errors cancelling.','取数值的绝对值。这里用来衡量误差大小，避免正负误差互相抵消。'),
  size:L('Reports array dimensions. size(A,1) counts rows; size(A,2) counts columns.','查看数组尺寸。size(A,1) 给出行数，size(A,2) 给出列数。'),
  nnz:L('Counts nonzero entries. In a 0/1 mask, this counts the cells that are kept.','统计非零项的数量。在 0/1 图案中，它统计被保留的格子。'),
  imagesc:L('Displays matrix entries as image colours. The two limits fix the colour scale so images can be compared.','把矩阵数值显示为图像颜色。两个范围值固定色阶，方便比较不同图像。'),
  colormap:L('Chooses the colours used to display numerical image values. It changes the display, not the matrix data.','选择显示图像数值所用的颜色。它改变显示方式，不改变矩阵数据。'),
  gray:L('Creates a greyscale colour map, from black to white. It is used by colormap to display the image.','生成从黑到白的灰度色图，交给 colormap 显示图像。'),
  kron:L('Replaces each entry of the first array with that entry multiplied by the whole second array.','把第一个数组的每一项，换成该项乘以整个第二个数组得到的小块。'),
  zeros:L('Creates an array filled with zeros. This prepares storage before the loop fills in the calculated values.','创建全为 0 的数组。在循环填入计算结果前，先准备好存储空间。'),
  ones:L('Creates an array filled with ones. One size input makes a square array; two inputs give rows and columns.','创建全为 1 的数组。一个尺寸输入生成方阵；两个输入分别指定行数和列数。'),
  figure:L('Opens a figure window, or selects the window with this number. Later plotting commands draw there.','打开图像窗口，或选择指定编号的窗口。后面的绘图命令会画在这个窗口中。'),
  gcf:L('Gets the current figure. Passing it to saveas tells MATLAB which figure to save.','取得当前图像窗口。把它传给 saveas，就能指定要保存的图像。'),
  saveas:L('Saves the chosen figure to the given filename. A .png ending requests an image file.','把指定图像保存为给定文件名。.png 后缀表示保存为图片。'),
  legend:L('Labels the plotted lines in their plotting order. Here the labels identify the S, I and R curves.','按绘制顺序给曲线添加标签。这里用于区分 S、I、R 三条曲线。')
 };
 const variables={
  bootcamp:{
   speed:L('A stored speed value. Reusing its name lets later calculations use or update the same value.','保存的速度数值。使用这个名称，后面的计算就能读取或更新它。'),
   angle:L('A stored angle in degrees. The name keeps the angle separate from the speed.','保存的角度，单位是度。这个名称把角度和速度区分开。'),
   scores:L('A row of values stored together. One name lets you calculate with the whole row.','保存在一起的一行数值。一个名称就能代表整行数据参与计算。'),
   values:L('The stored list being indexed. Parentheses choose a position in this list, starting at 1.','正在按位置取值的列表。括号用来选取位置，第一个位置是 1。'),
   t:L('The time values in the model. Each entry represents a time at which you calculate a result.','模型中的时间值。每一项表示一个需要计算结果的时刻。'),
   x:L('The input values for this calculation or graph. Each x value is paired with a y value.','这个计算或图像中的输入值。每个 x 值与一个 y 值配对。'),
   y:L('The output values calculated from x. Plotting x against y makes the relationship visible.','由 x 计算出的输出值。把 x、y 画在一起，就能看到它们的关系。'),
   h:L('The model height at each time in t. The graph pairs each time with its calculated height.','t 中各时刻对应的模型高度。图像把时间与计算出的高度配对。')
  },
  'projectile-motion':{
   speed:L('Launch speed, in metres per second. It is split into horizontal and vertical components.','发射速度，单位是米/秒。它被分解为水平和竖直两个分量。'),
   angle:L('Launch angle above the horizontal, in degrees. Changing it changes the speed components.','与水平方向的发射夹角，单位是度。改变它会改变速度分量。'),
   gravity:L('Downward gravitational acceleration, in metres per second squared. It reduces upward velocity as time passes.','向下的重力加速度，单位是米/秒²。它使向上的速度随时间减小。'),
   vx:L('The horizontal launch velocity, in metres per second. Multiplying by time gives horizontal distance in this model.','水平发射速度，单位是米/秒。在这个模型中，乘以时间得到水平距离。'),
   vy:L('The initial upward velocity, in metres per second. Gravity changes the vertical motion after launch.','初始向上的速度，单位是米/秒。发射后，重力会改变竖直运动。'),
   flightTime:L('The calculated time until the projectile returns to launch height. It sets the endpoint of the time vector.','抛射物回到发射高度所需的计算时间。它确定时间向量的终点。'),
   t:L('Times after launch, in seconds. Position is calculated at each of these times.','发射后的时间，单位是秒。程序会计算这些时刻的位置。'),
   x:L('Horizontal distance at each time, in metres. These values form the horizontal axis of the flight graph.','各时刻的水平距离，单位是米。这些值构成轨迹图的横坐标。'),
   y:L('Height relative to launch level at each time, in metres. Gravity makes this curve bend downward.','各时刻相对发射位置的高度，单位是米。重力使曲线向下弯曲。'),
   range:L('The final horizontal distance, in metres. It is read from the last entry of x.','最终水平距离，单位是米。它取自 x 的最后一项。'),
   maxHeight:L('The highest sampled height in y. It summarises the vertical reach of this simulated flight.','y 中采样得到的最高高度，用来概括这次模拟的竖直范围。'),
   angles:L('Several launch angles to compare, in degrees. Keeping speed fixed makes the angle comparison fair.','要比较的多个发射角度，单位是度。固定速度，才能公平比较角度的影响。'),
   ranges:L('The calculated horizontal ranges for the angles in angles. Matching positions belong to the same trial.','angles 中各角度对应的水平射程。相同位置的数据属于同一次试验。')
  },
  probability:{
   cost:L('Tokens paid for one play. Subtract this from the payout to find the net gain or loss.','每次游戏付出的代币数。从奖金中减去它，得到净收益或亏损。'),
   payout:L('Tokens returned for the possible outcomes. A payout is before the cost is subtracted.','各个可能结果返还的代币数。这是尚未扣除成本的奖金。'),
   net:L('Gain or loss after the cost of each play. Negative values mean a loss.','每次游戏扣除成本后的收益或亏损。负数表示亏损。'),
   u:L('Random values, or a supplied test list, used to decide the outcomes. Comparing with p marks winning plays.','用于决定游戏结果的随机数，或给定的测试列表。与概率阈值比较后，确定哪些次获胜。'),
   v:L('A second list of random values. Joining it with u lets you count the combined entries.','第二组随机数。与 u 合并后，可以统计两组共有多少项。'),
   win:L('True/false results for the plays. True means a win; false means a loss.','各次游戏的 true/false 结果。true 表示获胜，false 表示失败。'),
   balance:L('The running total of net gains and losses. It shows the balance after each play.','净收益和亏损的累计和，表示每次游戏后的余额。'),
   p:L('The probability of winning one play. Use a fraction between 0 and 1.','单次获胜的概率，使用 0 到 1 之间的数表示。'),
   expectedNet:L('The model’s average net gain per play over many plays. It is not a promise for any one play.','模型预测的大量游戏中的单次平均净收益，不代表某一次必然得到这个数。'),
   estimate:L('The fraction of simulated plays that won. Compare it with the probability used by the model.','模拟中获胜次数所占的比例，可与模型设置的概率比较。'),
   averageNet:L('The mean net result of the simulated plays. It summarises this particular set of outcomes.','这组模拟游戏的平均净收益，用来概括这一次模拟的结果。'),
   winPayout:L('The payout for a winning play. Here it is chosen to balance the expected payout against the cost.','获胜时返还的奖金。这里选择它，使预期返还与成本相平衡。')
  },
  fractals:{
   mask:L('The small 0/1 pattern. Ones keep a cell; zeros leave a gap when the pattern is repeated.','小型 0/1 图案。重复图案时，1 保留格子，0 留下空隙。'),
   A:L('The growing fractal pattern. Each loop replaces its cells with scaled copies of mask.','逐步扩大的分形图案。每次循环都把其中的格子替换为 mask 的缩放副本。'),
   level:L('The loop counter for the fractal levels. Each new level repeats the same construction rule.','表示分形层数的循环计数器。每一层重复同一个构造规则。'),
   keptFraction:L('The fraction of cells that are kept: nonzero cells divided by all cells. It lets you compare different levels.','被保留格子占总格子的比例，等于非零格子数除以总格子数，方便比较不同层数。')
  },
  'image-compression':{
   A:L('The original image matrix. Each entry is one pixel brightness; its row and column locate that pixel.','原始图像矩阵。每项是一个像素的亮度，行和列确定像素位置。'),
   lighter:L('A brighter copy of A. The calculation caps brightness so no entry exceeds the chosen maximum.','A 的较亮副本。计算会限制亮度，使数值不超过设定上限。'),
   block:L('A small rectangle selected from A. Its average becomes one pixel of the smaller image.','从 A 中选出的小矩形区域。它的平均值成为小图像的一个像素。'),
   smallPixel:L('The mean brightness of one block. One value represents the original pixels in that block.','一个小块的平均亮度。用一个数代表该块中原来的多个像素。'),
   B:L('The smaller image made from block averages. Each entry represents one block from the original image.','由各块平均值组成的小图像。每一项代表原图中的一个小块。'),
   B2:L('The smaller image for the 2-by-2 block comparison. It is kept separately from the other compressed image.','用于比较 2×2 像素块的小图像，与另一种压缩图像分开保存。'),
   C:L('A comparison array with fewer entries. Its size is used to calculate a storage-count ratio.','项数更少的比较数组。用它的尺寸计算数据项数之比。'),
   r:L('The output row being filled by the loop. It also selects the matching source rows in A.','循环正在填写的输出行，也用来选择 A 中对应的源图像行。'),
   c:L('The output column being filled by the loop. It also selects the matching source columns in A.','循环正在填写的输出列，也用来选择 A 中对应的源图像列。'),
   reconstructed:L('The small image expanded back to the original dimensions. Lost detail is not restored by making pixels larger.','把小图像扩大回原尺寸得到的图像。扩大像素不会恢复丢失的细节。'),
   reconstructed2:L('The enlarged image from the 2-by-2 block method. Compare it with A to measure the lost detail.','由 2×2 像素块方法重建的放大图像。与 A 比较，可衡量丢失的细节。'),
   ratio:L('Original entry count divided by compressed entry count. This is a model count ratio, not a measured file-size ratio.','原始项数除以压缩后的项数。这是模型中的数据项数比，不是实测文件大小比。'),
   difference:L('Pixel-by-pixel differences between the two images being compared. Squaring them prevents positive and negative errors cancelling.','正在比较的两幅图像逐像素的差值。平方后，正负误差不会互相抵消。'),
   difference2:L('Errors for the image reconstructed from 2-by-2 blocks. Use them to compare quality with the other method.','2×2 像素块重建图像的误差，用来与另一种方法比较质量。'),
   difference4:L('Errors for the image reconstructed from 4-by-4 blocks. Larger blocks usually discard more local detail.','4×4 像素块重建图像的误差。较大的块通常会丢失更多局部细节。'),
   mse:L('Mean squared error: the average of the squared pixel differences. A lower value means a closer match for this measure.','均方误差，即像素差值平方的平均值。在这个指标下，数值越小，图像越接近原图。')
  },
  epidemics:{
   S:L('Susceptible people in the model: people who can become infected. Values may be fractional in this numerical model.','模型中可能被感染的易感人群数量。数值模型中的人数可能带小数。'),
   I:L('Currently infected people in the model. Each stored entry corresponds to a time in t.','模型中当前感染的人数。保存为数组时，每一项对应 t 中的一个时刻。'),
   R:L('Recovered people in the model. Recovered people leave the infected group.','模型中已康复的人数。康复者离开感染人群。'),
   N:L('The total model population. S, I and R should add up to this total.','模型的总人数。S、I、R 的和应当等于这个总数。'),
   beta:L('The transmission-rate parameter. Changing it lets you compare how quickly infection spreads in this model.','传播率参数。改变它，可以比较模型中感染传播的快慢。'),
   gamma:L('The recovery-rate parameter. Together with I and the step length, it determines model recoveries.','康复率参数。它与 I、时间步长一起决定模型中的康复人数。'),
   dt:L('The time-step length, in days. Each loop advances the model by this much time.','时间步长，单位是天。每次循环让模型前进这么长的时间。'),
   t:L('The simulated times, in days. S, I and R store model values at the same positions.','模拟时刻，单位是天。S、I、R 的相同位置保存相应时刻的模型数值。'),
   new:L('New infections during one time step. These people move from S to I.','一个时间步内新增的感染人数。这些人从 S 移入 I。'),
   recovered:L('Recoveries during one time step. These people move from I to R.','一个时间步内新增的康复人数。这些人从 I 移入 R。'),
   nextS:L('The susceptible count for the next time step, after subtracting new infections.','下一个时刻的易感人数，等于当前人数减去新增感染。'),
   nextI:L('The infected count for the next time step: add new infections and subtract recoveries.','下一个时刻的感染人数：加上新增感染，再减去康复人数。'),
   nextR:L('The recovered count for the next time step, after adding the new recoveries.','下一个时刻的康复人数，等于当前人数加上新增康复。'),
   k:L('The position of the current time step. k+1 is the next stored position, not the next day.','当前时间步的位置。k+1 表示下一个存储位置，不一定是下一天。'),
   peak:L('The largest sampled infected count. It is one output of max(I).','采样得到的最大感染人数，是 max(I) 的一个输出。'),
   where:L('The position where the maximum occurs. t(where) converts that position to a model time.','最大值所在的位置。t(where) 把这个位置换成模型中的时间。'),
   totalOK:L('A true/false check that the model total stays close to N. The small tolerance allows numerical rounding.','检查模型总人数是否接近 N 的 true/false 结果。小容差用于容许数值舍入误差。'),
   nonnegative:L('A true/false check that none of the model populations is below zero.','检查模型中是否所有人数都不小于 0 的 true/false 结果。'),
   testS:L('A copy of S deliberately changed to test the total-population check. The original S is kept.','为了测试总人数检查而特意修改的 S 副本。原来的 S 被保留。'),
   peaks:L('Peak infection counts from separate trials. Matching positions identify which trial produced each peak.','不同试验的感染峰值。不同位置对应不同试验的结果。'),
   tc:L('The time values for the comparison run, with a different time-step length.','比较试验中的时间值，使用另一种时间步长。'),
   Sc:L('Susceptible counts for the comparison run. These are kept separate from S.','比较试验中的易感人数，与 S 分开保存。'),
   Ic:L('Infected counts for the comparison run. Compare their peak with the peak of I.','比较试验中的感染人数，可与 I 的峰值比较。'),
   Rc:L('Recovered counts for the comparison run. They belong to the same time points as Sc and Ic.','比较试验中的康复人数，与 Sc、Ic 使用相同的时间点。')
  }
 };
 const why={
  'projectile-motion':{sind:L('Here it splits launch velocity or calculates ranges for several angles.','这里用于分解发射速度，或计算多个角度对应的射程。'),numel:L('Here it checks how many times or positions were calculated.','这里用来检查计算了多少个时间或位置。')},
  probability:{mean:L('Here an average summarises the wins or net results across many plays.','这里用平均值概括多次游戏的获胜比例或净收益。')},
  fractals:{kron:L('Here every cell grows into a copy of the small mask, creating the next fractal level.','这里把每个格子扩展成小图案的副本，生成下一层分形。')},
  'image-compression':{kron:L('Here a block of ones repeats each small-image pixel to rebuild a full-size comparison image.','这里用全为 1 的小块重复小图像的各像素，重建原尺寸的比较图像。'),min:L('Here it prevents brighter pixels exceeding the chosen brightness limit.','这里用于防止变亮的像素超过亮度上限。'),mean:L('Here it replaces a pixel block with one average brightness, or averages squared errors.','这里用于把一个像素块替换为平均亮度，或计算误差平方的平均值。')},
  epidemics:{max:L('Here it finds an infection peak or the largest model-check error.','这里用于寻找感染峰值，或模型检查中的最大误差。'),numel:L('Here it sets a loop limit that leaves room to write the next time step.','这里用于设置循环终点，给下一个时间步的写入留出位置。')}
 };
 const data={functions,variables,why};root.LAB_CODE_HELP=data;if(typeof module!=='undefined')module.exports=data;
})(typeof window==='undefined'?globalThis:window);

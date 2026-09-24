(function(root){
  const L=(en,zh)=>({en,zh});
  root.LAB_COURSES={
    bootcamp:{...root.BOOTCAMP,number:0,title:L('MATLAB Boot Camp','MATLAB 入门训练营'),short:L('Boot camp','训练营'),headline:L('MATLAB\nBoot Camp','MATLAB\n入门训练营'),description:L('From your first command to your first graph.\nNo coding experience needed.','从第一条命令，到第一张图。\n无需任何编程经验。'),duration:40,previewPlot:'arc',fileName:'your_first_plot.m',previewCode:"plot(t, h, '-o')",reference:'downloads/bootcamp_reference.m',skills:[L('Store values','保存数值'),L('Build vectors','创建向量'),L('Calculate','进行运算'),L('Make a graph','绘制图像')],completeTitle:L('You made that.','这是你做出来的。'),completeText:L('From one command to a working model.\nEight small missions. One big first step.','从一条命令到一个模型。\n八个小任务，迈出第一大步。')},
    'projectile-motion':{...root.PROJECTILE,number:1,requires:'bootcamp',title:L('Projectile Motion','抛体运动'),short:L('Projectile motion','抛体运动'),headline:L('Launch it.\nModel it.','发射小球。\n建立模型。'),description:L('Build a flight from the ground up.\nThen land it inside a target zone.','从零建立飞行模型。\n让小球落入目标区。'),duration:45,previewPlot:'projectile-45',fileName:'projectile.m',previewCode:'plot(x, y)',reference:'downloads/projectile_reference.m',skills:[L('Define a model','设定模型'),L('Calculate a path','计算轨迹'),L('Compare angles','比较角度'),L('Test a prediction','检验预测')],completeTitle:L('Target reached.','命中目标。'),completeText:L('You turned a launch into a testable model.\nA prediction, a plot, and a result you can explain.','你把一次发射变成了可以检验的模型。\n作出预测，绘制轨迹，并解释结果。')}
  };
  // Per-lesson editor/download metadata also drives the reusable renderer.
  root.LAB_COURSES.bootcamp.lessons[7].editor='bootcamp_arc.m';
  root.LAB_COURSES.bootcamp.lessons[7].download='downloads/bootcamp_arc_starter.m';
})(typeof window!=='undefined'?window:globalThis);

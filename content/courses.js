(function(root){
  const L=(en,zh)=>({en,zh});
  root.LAB_COURSES={
    bootcamp:{...root.BOOTCAMP,number:0,title:L('MATLAB Boot Camp','MATLAB 入门训练营'),short:L('Boot camp','训练营'),headline:L('MATLAB\nBoot Camp','MATLAB\n入门训练营'),description:L('From your first command to your first graph.\nNo coding experience needed.','从第一条命令，到第一张图。\n无需任何编程经验。'),duration:40,previewPlot:'arc',fileName:'your_first_plot.m',previewCode:"plot(t, h, '-o')",reference:'downloads/bootcamp_reference.m',skills:[L('Store values','保存数值'),L('Build vectors','创建向量'),L('Calculate','进行运算'),L('Make a graph','绘制图像')],completeTitle:L('Boot Camp checks complete','训练营检查已完成'),completeText:L('You have checked commands, variables, vectors and a first plot.\nProject 1 applies these techniques to a motion model.','已检查命令、变量、向量与第一张图。\n项目 1 将这些方法用于运动模型。')},
    'projectile-motion':{...root.PROJECTILE,number:1,requires:'bootcamp',title:L('Projectile Motion','抛体运动'),short:L('Projectile motion','抛体运动'),headline:L('Projectile\nMotion','抛体\n运动'),description:L('Build a flight from the ground up.\nThen land it inside a target zone.','从零建立飞行模型。\n让小球落入目标区。'),duration:45,previewPlot:'projectile-45',fileName:'projectile.m',previewCode:'plot(x, y)',reference:'downloads/projectile_reference.m',skills:[L('Define a model','设定模型'),L('Calculate a path','计算轨迹'),L('Compare angles','比较角度'),L('Test a prediction','检验预测')],completeTitle:L('Target reached.','命中目标。'),completeText:L('You turned a launch into a testable model.\nSave the script and explain the assumptions behind the result.','你把一次发射变成了可以检验的模型。\n作出预测，绘制轨迹，并解释结果。')}
  };
  Object.assign(root.LAB_COURSES,root.LAB_EXTENSIONS || {});
  // Per-lesson editor/download metadata also drives the reusable renderer.
  root.LAB_COURSES.bootcamp.lessons[7].editor='bootcamp_arc.m';
  root.LAB_COURSES.bootcamp.lessons[7].download='downloads/bootcamp_arc_starter.m';
})(typeof window!=='undefined'?window:globalThis);

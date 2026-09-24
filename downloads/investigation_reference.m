% Run one section at a time using Run Section.
% Each mission is independent and resets its own inputs.

%% 1 Ask a testable question / 提出可检验问题
gravity = 9.81; angle = 45;
speed = [10 15 20 25 30];
range = speed.^2*sind(2*angle)/gravity;
numel(speed)

%% 2 Write a prediction / 写出预测
speedFactor = 2;
predictedRangeFactor = speedFactor^2;
predictedRangeFactor

%% 3 Make a fair test plan / 制定公平检验方案
gravity = 9.81; angle = 45;
speed = [10 15 20 25 30];
range = speed.^2*sind(2*angle)/gravity;
[speed(1) speed(end) angle gravity]

%% 4 Collect paired evidence / 收集配对证据
gravity = 9.81; angle = 45;
speed = [10 15 20 25 30];
range = speed.^2*sind(2*angle)/gravity;
results = [speed; range]';
results

%% 5 Make the graph explain / 让图像清楚表达
gravity = 9.81; angle = 45;
speed = [10 15 20 25 30];
range = speed.^2*sind(2*angle)/gravity;
plot(speed, range, '-o');
xlabel('Speed (m/s)'); ylabel('Range (m)');
title('Fixed angle: 45 degrees'); grid on;

%% 6 Test the prediction / 检验预测
gravity = 9.81; angle = 45;
speed = [10 15 20 25 30];
range = speed.^2*sind(2*angle)/gravity;
measuredFactor = range(3)/range(1);
constant = range./speed.^2;
[measuredFactor max(constant)-min(constant) < 1e-10]

%% 7 Test sensitivity / 检验敏感性
speed = [20 21]; angle = 45; gravity = 9.81;
range = speed.^2*sind(2*angle)/gravity;
percentChange = 100*(range(2)-range(1))/range(1);
percentChange

%% 8 Build your own study / 开展自己的研究
gravity = 9.81; angle = 45;
speed = [10 15 20 25 30];
range = speed.^2*sind(2*angle)/gravity;
% Worked example only: replace with your own question and model.
% Question: how does speed affect range at 45 degrees?
% Prediction: doubling speed gives four times the range.
% Controls: angle, gravity, no drag, same launch/landing height.
results = [speed; range]';
plot(speed, range, '-o');
xlabel('Speed (m/s)'); ylabel('Range (m)'); grid on;
results

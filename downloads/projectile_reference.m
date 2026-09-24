% MATLAB Lab — Project 1 reference / 项目 1 参考代码
% Run one section at a time / 请逐节运行

%% 1. Set the launch / 设定发射
speed = 20;
angle = 45;
gravity = 9.81;
[speed angle gravity]

%% 2. Split the speed / 分解速度
speed = 20;
angle = 45;
gravity = 9.81;
vx = speed*cosd(angle);
vy = speed*sind(angle);
[vx vy]

%% 3. Flight time / 飞行时间
speed = 20;
angle = 45;
gravity = 9.81;
vx = speed*cosd(angle);
vy = speed*sind(angle);
flightTime = 2*vy/gravity;
t = linspace(0, flightTime, 101);
[t(1) t(end) numel(t)]

%% 4. Build the trajectory / 建立轨迹
speed = 20;
angle = 45;
gravity = 9.81;
vx = speed*cosd(angle);
vy = speed*sind(angle);
flightTime = 2*vy/gravity;
t = linspace(0, flightTime, 101);
x = vx*t;
y = vy*t - 0.5*gravity*t.^2;
[x(51) y(51)]

%% 5. Plot the flight / 绘制轨迹
speed = 20;
angle = 45;
gravity = 9.81;
vx = speed*cosd(angle);
vy = speed*sind(angle);
flightTime = 2*vy/gravity;
t = linspace(0, flightTime, 101);
x = vx*t;
y = vy*t - 0.5*gravity*t.^2;
plot(x, y);
xlabel('Distance (m)');
ylabel('Height (m)');
title('Projectile motion');
grid on;
axis equal;

%% 6. Range and height / 射程与高度
speed = 20;
angle = 45;
gravity = 9.81;
vx = speed*cosd(angle);
vy = speed*sind(angle);
flightTime = 2*vy/gravity;
t = linspace(0, flightTime, 101);
x = vx*t;
y = vy*t - 0.5*gravity*t.^2;
range = x(end);
maxHeight = max(y);
[range maxHeight]

%% 7. Compare angles / 比较角度
speed = 20;
gravity = 9.81;
angles = [30 45 60];
ranges = speed^2*sind(2*angles)/gravity;
plot(angles, ranges, '-o');
xlabel('Angle (degrees)');
ylabel('Range (m)');
title('Same speed, different angles');
grid on;
ranges

%% 8. Target challenge / 目标挑战
speed = 20;
angle = 30;
gravity = 9.81;
vx = speed*cosd(angle);
vy = speed*sind(angle);
flightTime = 2*vy/gravity;
t = linspace(0, flightTime, 101);
x = vx*t;
y = vy*t - 0.5*gravity*t.^2;
plot(x, y);
xlabel('Distance (m)');
ylabel('Height (m)');
title('Target launch');
grid on;
axis equal;
range = x(end);
maxHeight = max(y);
[range maxHeight]

% Final example: angle 30, range 35.3119 m, peak 5.0968 m.
% angle 60 is also valid: range 35.3119 m, peak 15.2905 m.

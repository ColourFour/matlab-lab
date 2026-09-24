% MATLAB Lab — Project 1 / 项目 1
% Replace ___ with 30 or 60; save as target_launch.m.
% 将 ___ 替换为 30 或 60，并另存为 target_launch.m。

speed = 20;
angle = ___;
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

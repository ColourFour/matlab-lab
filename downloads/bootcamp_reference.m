% MATLAB Lab — Project 0 reference / 项目 0 参考代码
% Review after completing the missions. Run one section at a time.
% 完成任务后用于复习。请逐节运行。

%% 1. First commands / 第一条命令
2 + 2
8 / 2 + 3

%% 2. Variables / 变量
speed = 20;
angle = 45;
speed
speed = speed + 5;
speed

%% 3. Vectors / 向量
scores = [6 8 5 9];
scores

%% 4. Evenly spaced values / 等间距数值
t = 0:1:4;
t
t = 0:2:8;
t

%% 5. Indexing / 索引
values = [10 20 30 40];
values(3)
values(2)

%% 6. Vector operations / 向量运算
x = [1 2 3 4];
y = x.^2;
y
x + 2

%% 7. Plotting / 绘图
x = 0:1:4;
y = x.^2;
figure;
plot(x, y, '-o');
xlabel('x');
ylabel('y');
title('My first plot');
grid on;

%% 8. Mini challenge / 小挑战
t = 0:1:4;
h = 4*t - t.^2;
figure;
plot(t, h, '-o');
xlabel('Time (s)');
ylabel('Height (m)');
title('My first arc');
grid on;
h
% Expected h: 0 3 4 3 0. Highest point: t = 2, h = 4.
% h 的预期结果：0 3 4 3 0。最高点：t = 2，h = 4。

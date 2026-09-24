% Run one section at a time using Run Section.
% Each mission is independent and resets its own inputs.

%% 1 Read the rules / 读懂规则
cost = 1;
payout = [4 0];
net = payout - cost;
net

%% 2 Create random trials / 创建随机试验
rng(7, 'twister');
u = rand(1,5);
numel(u)

%% 3 Mark the wins / 标记获胜结果
u = [0.10 0.70 0.19 0.20 0.90];
win = u < 0.2;
double(win)

%% 4 Count and estimate / 统计与估计
u = [0.10 0.70 0.19 0.20 0.90];
win = u < 0.2;
[sum(win) mean(win)]

%% 5 Watch the balance / 观察累计收益
u = [0.10 0.70 0.19 0.20 0.90];
win = u < 0.2;
net = 4*win - 1;
balance = cumsum(net);
plot(1:5, balance, '-o');
xlabel('Play'); ylabel('Net tokens');
grid on;

%% 6 Ask if it is fair / 判断是否公平
p = 0.2;
expectedNet = 4*p - 1;
expectedNet

%% 7 Scale the experiment / 扩大实验规模
rng(7, 'twister');
u = rand(1,10000);
win = u < 0.2;
net = 4*win - 1;
estimate = mean(win);
averageNet = mean(net);
[numel(u) abs(averageNet - (4*estimate-1)) < 1e-10]

%% 8 Design a fair game / 设计公平游戏
p = 0.2;
cost = 1;
winPayout = cost/p;
expectedNet = p*winPayout-cost;
[winPayout expectedNet]

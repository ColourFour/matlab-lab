% Run one section at a time using Run Section.
% Each mission is independent and resets its own inputs.

%% 1 Meet three groups / 认识三个群体
S = 990;
I = 10;
R = 0;
N = S + I + R;
N

%% 2 Calculate transfers / 计算转移量
S = 990; I = 10; R = 0; N = 1000;
beta = 0.3; gamma = 0.1; dt = 1;
new = dt*beta*S*I/N;
recovered = dt*gamma*I;
[new recovered]

%% 3 Update together / 同时更新
S = 990; I = 10; R = 0; N = 1000;
beta = 0.3; gamma = 0.1; dt = 1;
new = dt*beta*S*I/N;
recovered = dt*gamma*I;
nextS = S - new;
nextI = I + new - recovered;
nextR = R + recovered;
[nextS nextI nextR]

%% 4 Follow sixty days / 跟踪六十天
N = 1000; beta = 0.3; gamma = 0.1;
dt = 0.1; t = 0:dt:60;
S = zeros(size(t)); I = S; R = S;
S(1) = 990; I(1) = 10;
for k = 1:numel(t)-1
    new = dt*beta*S(k)*I(k)/N;
    recovered = dt*gamma*I(k);
    S(k+1) = S(k) - new;
    I(k+1) = I(k) + new - recovered;
    R(k+1) = R(k) + recovered;
end
[numel(t) S(2) I(2) R(2)]

%% 5 Read three curves / 读取三条曲线
N = 1000; beta = 0.3; gamma = 0.1;
dt = 0.1; t = 0:dt:60;
S = zeros(size(t)); I = S; R = S;
S(1) = 990; I(1) = 10;
for k = 1:numel(t)-1
    new = dt*beta*S(k)*I(k)/N;
    recovered = dt*gamma*I(k);
    S(k+1) = S(k) - new;
    I(k+1) = I(k) + new - recovered;
    R(k+1) = R(k) + recovered;
end
plot(t,S,t,I,t,R);
legend('S','I','R'); grid on;
xlabel('Time (days)'); ylabel('Model population');
[peak,where] = max(I);
[peak t(where)]

%% 6 Test your model / 检验模型
N = 1000; beta = 0.3; gamma = 0.1;
dt = 0.1; t = 0:dt:60;
S = zeros(size(t)); I = S; R = S;
S(1) = 990; I(1) = 10;
for k = 1:numel(t)-1
    new = dt*beta*S(k)*I(k)/N;
    recovered = dt*gamma*I(k);
    S(k+1) = S(k) - new;
    I(k+1) = I(k) + new - recovered;
    R(k+1) = R(k) + recovered;
end
totalOK = max(abs(S+I+R-N)) < 1e-8;
nonnegative = min([S I R]) >= 0;
[totalOK nonnegative]

%% 7 Change one rate / 改变一个速率
N = 1000; gamma = 0.1; dt = 0.1; t = 0:dt:60;
betas = [0.15 0.3]; peaks = zeros(size(betas));
for j = 1:numel(betas)
    beta = betas(j);
    S = zeros(size(t)); I = S; R = S;
    S(1) = 990; I(1) = 10;
    for k = 1:numel(t)-1
        new = dt*beta*S(k)*I(k)/N;
        recovered = dt*gamma*I(k);
        S(k+1) = S(k) - new;
        I(k+1) = I(k) + new - recovered;
        R(k+1) = R(k) + recovered;
    end
    peaks(j) = max(I);
end
peaks

%% 8 Check the time step / 检查时间步长
N = 1000; beta = 0.3; gamma = 0.1;
dt = 0.05; t = 0:dt:60;
S = zeros(size(t)); I = S; R = S;
S(1) = 990; I(1) = 10;
for k = 1:numel(t)-1
    new = dt*beta*S(k)*I(k)/N;
    recovered = dt*gamma*I(k);
    S(k+1) = S(k) - new;
    I(k+1) = I(k) + new - recovered;
    R(k+1) = R(k) + recovered;
end
[peak,where] = max(I);
[peak t(where)]

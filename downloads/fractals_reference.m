% Run one section at a time using Run Section.
% Each mission is independent and resets its own inputs.

%% 1 Build a small pattern / 建立小图案
mask = [1 1 1; 1 0 1; 1 1 1];
size(mask)

%% 2 Locate the missing square / 定位空白方格
mask = [1 1 1; 1 0 1; 1 1 1];
[mask(2,2) mask(1,3)]

%% 3 Turn numbers into art / 把数字变成图案
mask = [1 1 1; 1 0 1; 1 1 1];
imagesc(1-mask, [0 1]);
colormap(gray);
axis image; axis off;

%% 4 Replace every square / 替换每个方格
mask = [1 1 1; 1 0 1; 1 1 1];
A = kron(mask, mask);
[size(A) nnz(A)]

%% 5 Repeat with a loop / 用循环重复
mask = [1 1 1; 1 0 1; 1 1 1];
A = 1;
for level = 1:3
    A = kron(A, mask);
end
[size(A) nnz(A)]

%% 6 See self-similarity / 观察自相似
mask = [1 1 1; 1 0 1; 1 1 1];
A = 1;
for level = 1:3
    A = kron(A, mask);
end
imagesc(1-A, [0 1]);
colormap(gray); axis image; axis off;
numel(A)

%% 7 Measure the kept fraction / 测量保留比例
mask = [1 1 1; 1 0 1; 1 1 1];
A = 1;
for level = 1:3
    A = kron(A, mask);
end
keptFraction = nnz(A)/numel(A);
keptFraction

%% 8 Predict the next level / 预测下一层
mask = [1 1 1; 1 0 1; 1 1 1];
% Prediction: write side and kept count here.
A = 1;
for level = 1:4
    A = kron(A, mask);
end
[size(A,1) nnz(A)]
imagesc(1-A, [0 1]);
colormap(gray); axis image; axis off;

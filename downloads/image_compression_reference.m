% Run one section at a time using Run Section.
% Each mission is independent and resets its own inputs.

%% 1 Read a tiny image / 读取微型图像
A = [0 0 80 80 80 80 0 0;
     0 80 160 160 160 160 80 0;
     80 160 240 0 0 240 160 80;
     80 160 240 240 240 240 160 80;
     80 160 0 240 240 0 160 80;
     80 160 240 0 0 240 160 80;
     0 80 160 160 160 160 80 0;
     0 0 80 80 80 80 0 0];
[size(A) A(3,4)]

%% 2 Keep the color scale fixed / 固定色标范围
A = [0 0 80 80 80 80 0 0;
     0 80 160 160 160 160 80 0;
     80 160 240 0 0 240 160 80;
     80 160 240 240 240 240 160 80;
     80 160 0 240 240 0 160 80;
     80 160 240 0 0 240 160 80;
     0 80 160 160 160 160 80 0;
     0 0 80 80 80 80 0 0];
imagesc(A, [0 255]);
colormap(gray); axis image;
xlabel('Column'); ylabel('Row');

%% 3 Average one block / 对一个方块求平均
A = [0 0 80 80 80 80 0 0;
     0 80 160 160 160 160 80 0;
     80 160 240 0 0 240 160 80;
     80 160 240 240 240 240 160 80;
     80 160 0 240 240 0 160 80;
     80 160 240 0 0 240 160 80;
     0 80 160 160 160 160 80 0;
     0 0 80 80 80 80 0 0];
block = A(1:2,1:2);
smallPixel = mean(block(:));
smallPixel

%% 4 Visit every block / 遍历每个方块
A = [0 0 80 80 80 80 0 0;
     0 80 160 160 160 160 80 0;
     80 160 240 0 0 240 160 80;
     80 160 240 240 240 240 160 80;
     80 160 0 240 240 0 160 80;
     80 160 240 0 0 240 160 80;
     0 80 160 160 160 160 80 0;
     0 0 80 80 80 80 0 0];
B = zeros(4,4);
for r = 1:4
    for c = 1:4
        block = A(2*r-1:2*r, 2*c-1:2*c);
        B(r,c) = mean(block(:));
    end
end
[size(B) B(1,1)]

%% 5 Rebuild a larger picture / 重建大图像
A = [0 0 80 80 80 80 0 0;
     0 80 160 160 160 160 80 0;
     80 160 240 0 0 240 160 80;
     80 160 240 240 240 240 160 80;
     80 160 0 240 240 0 160 80;
     80 160 240 0 0 240 160 80;
     0 80 160 160 160 160 80 0;
     0 0 80 80 80 80 0 0];
B = zeros(4,4);
for r = 1:4
    for c = 1:4
        block = A(2*r-1:2*r, 2*c-1:2*c);
        B(r,c) = mean(block(:));
    end
end
reconstructed = kron(B, ones(2));
imagesc(reconstructed, [0 255]);
colormap(gray); axis image;
xlabel('Column'); ylabel('Row');

%% 6 Count the saving / 计算节省量
A = [0 0 80 80 80 80 0 0;
     0 80 160 160 160 160 80 0;
     80 160 240 0 0 240 160 80;
     80 160 240 240 240 240 160 80;
     80 160 0 240 240 0 160 80;
     80 160 240 0 0 240 160 80;
     0 80 160 160 160 160 80 0;
     0 0 80 80 80 80 0 0];
B = zeros(4,4);
for r = 1:4
    for c = 1:4
        block = A(2*r-1:2*r, 2*c-1:2*c);
        B(r,c) = mean(block(:));
    end
end
ratio = numel(A)/numel(B);
ratio

%% 7 Measure lost detail / 测量细节损失
A = [0 0 80 80 80 80 0 0;
     0 80 160 160 160 160 80 0;
     80 160 240 0 0 240 160 80;
     80 160 240 240 240 240 160 80;
     80 160 0 240 240 0 160 80;
     80 160 240 0 0 240 160 80;
     0 80 160 160 160 160 80 0;
     0 0 80 80 80 80 0 0];
B = zeros(4,4);
for r = 1:4
    for c = 1:4
        block = A(2*r-1:2*r, 2*c-1:2*c);
        B(r,c) = mean(block(:));
    end
end
reconstructed = kron(B, ones(2));
difference = A - reconstructed;
mse = mean(difference(:).^2);
mse

%% 8 Choose a trade-off / 选择取舍
A = [0 0 80 80 80 80 0 0;
     0 80 160 160 160 160 80 0;
     80 160 240 0 0 240 160 80;
     80 160 240 240 240 240 160 80;
     80 160 0 240 240 0 160 80;
     80 160 240 0 0 240 160 80;
     0 80 160 160 160 160 80 0;
     0 0 80 80 80 80 0 0];
B = zeros(2,2);
for r = 1:2
    for c = 1:2
        block = A(4*r-3:4*r, 4*c-3:4*c);
        B(r,c) = mean(block(:));
    end
end
reconstructed = kron(B, ones(4));
difference = A - reconstructed;
ratio = numel(A)/numel(B);
mse = mean(difference(:).^2);
[ratio mse]

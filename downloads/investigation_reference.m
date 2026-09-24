%% Optional MATLAB testing utilities / 可选 MATLAB 检验工具示例
% These independent examples are not a solution to Project 6.
% 以下独立示例不是项目 6 的解答。使用 Run Section 分别运行。

%% A. A numerical correctness check / 数值正确性检查
expected = 1;
actual = sum([0.1 0.2 0.7]);
assert(abs(actual - expected) < 1e-10, 'Check failed');
% Replace both the case and the expected value with a justified test.
% 用有依据的测试案例与预期值替换它们。

%% B. Record repeated outcomes / 记录重复结果
% Invented example values, not a model's results.
% 虚构示例数值，不是某个模型的结果。
outcomes = [10 12 9 11 13];
summary = [mean(outcomes) min(outcomes) max(outcomes)];
summary
% Min/max show this sample's spread, not a confidence interval.
% 最小值/最大值表示样本范围，不是置信区间。

%% C. Compare feasibility before ranking / 先检查可行性，再排序
% Invented costs and errors. Lower error is better in this example.
% 虚构成本与误差。本示例中误差越低越好。
cost = [4 8 12];
error = [7 5 2];
budget = 10;
feasible = cost <= budget;
indices = find(feasible);
if isempty(indices)
    disp('No feasible design');
else
    [bestError, localIndex] = min(error(indices));
    selected = indices(localIndex);
    [selected bestError cost(selected)]
end
% The lowest error overall is infeasible under this budget.
% 全部方案中最低的误差，对应方案却超出预算。

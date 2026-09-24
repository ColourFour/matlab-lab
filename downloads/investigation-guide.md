# Your MATLAB investigation / MATLAB 自主探究

The website checks worked-example answers. Your teacher reviews this independent work. Submit through your school's usual channel; this site does not collect files.
网页核对示例答案，自主研究由老师评阅。请通过学校通常使用的渠道提交，本站不收集文件。

## 1. Choose and narrow a question / 选择并缩小问题

Use one model from Projects 1–5. Choose an input, a measured output and at least three input settings. For a random model, use at least three seeds per setting and report variation.
使用项目 1–5 中的一个模型。选择一个输入、一个可测量输出和至少三个输入取值。随机模型每个取值至少使用三个种子，并报告波动。

Possible directions (adapt one; do not just copy the worked speed example):
可选方向（调整其中一个，不要直接复制速度示例）：

- Probability: how does total win payout affect mean net gain when win probability stays at 0.2? / 概率：获胜概率保持 0.2 时，总返还额如何影响平均净收益？
- Fractal: how does level affect kept fraction for the carpet mask? Use levels 1–4. / 分形：层数如何影响地毯图案的保留比例？使用第 1–4 层。
- Images: how does block size affect MSE and stored value count? Use sizes 1, 2 and 4, all dividing the 8-by-8 image exactly. / 图像：方块大小如何影响 MSE 与保存的数值个数？使用能整除 8×8 图像的边长 1、2、4。
- SIR: how does beta affect peak I within a fixed 60-day window? Use invented beta values 0.15, 0.20 and 0.30, dt = 0.1, and check dt = 0.05. / SIR：beta 如何影响固定 60 天窗口内 I 的峰值？使用虚构 beta 值 0.15、0.20、0.30，dt = 0.1，并用 dt = 0.05 检验。
- Projectile: how does angle affect flight time at fixed speed? Use same-height, no-drag assumptions. / 抛体：固定速度时，角度如何影响飞行时间？保留起落等高、无空气阻力假设。

## 2. Plan before running / 运行前制定方案

- My question / 我的问题：
- Input and units / 输入与单位：
- Output and units / 输出与单位：
- Input settings / 输入取值：
- Fixed conditions / 固定条件：
- Prediction and reason / 预测与理由：
- Model assumptions / 模型假设：
- Checks I will run / 要进行的检查：

Save this prediction before collecting results. An incorrect prediction is acceptable if you explain the evidence honestly.
在收集结果前保存预测。预测错误也可以，只要如实解释证据。

## 3. Collect evidence / 收集证据

Use a runnable script with every required input defined. Keep an input-output results table, a labelled figure with units and a record of checks. For randomness, record seeds and sample sizes; distinguish the sample average from the theoretical expectation. Do not select only runs that support your prediction.
脚本应可直接运行，并定义所有必要输入。保留输入输出结果表、带单位的标注图像及检查记录。随机模型应记录种子和样本量，区分样本平均与理论期望。不要只选择支持预测的结果。

## 4. Write a short report / 撰写简短报告

Use six short sections: Question → Prediction → Method → Results → Conclusion → Limitations.
使用六个简短部分：问题 → 预测 → 方法 → 结果 → 结论 → 局限。

In the conclusion, cite at least two numerical results and explain whether they support the prediction. Identify one possible follow-up. Discuss numerical approximation, uncertain inputs or simplifying assumptions as relevant. A graph is evidence about this model and these settings; it is not proof about every real system.
结论至少引用两个数值结果，解释是否支持预测，并提出一个后续问题。根据研究内容讨论数值近似、输入不确定性或简化假设。图像是针对该模型和这些设置的证据，不是对所有真实系统的证明。

## 5. Submit / 提交

- Your `.m` script with comments / 带注释的 `.m` 脚本
- Your results table and labelled figure / 结果表与标注图像
- Your short report / 简短报告

No web upload is required. Save all files, then submit as your teacher directs.
无需在网页上传。保存全部文件，按老师要求提交。

## Teacher rubric / 教师评分量表

Score each criterion 0–2. Total 10. The website does not assign this score.
每项 0–2 分，共 10 分。此评分不由网站自动完成。

| Criterion / 标准 | 2 | 1 | 0 |
|---|---|---|---|
| Question and prediction / 问题与预测 | Measurable; prediction has a reason / 可测量，预测有理由 | Partly specified / 部分明确 | Missing / 缺失 |
| Method / 方法 | Controls, settings and code allow repetition / 控制条件、设置与代码可复现 | Important details missing / 缺少重要细节 | Cannot reproduce / 无法复现 |
| Evidence / 证据 | Paired data, units and readable figure / 配对数据、单位与清楚图像 | Partial evidence / 证据不完整 | Unsupported claim / 无依据结论 |
| Checks / 检查 | Relevant correctness and sensitivity checks explained / 解释相关正确性与敏感性检查 | Checks reported without explanation / 只报告未解释 | No checks / 无检查 |
| Interpretation / 解释 | Numeric evidence, limits and follow-up / 数值证据、局限与后续问题 | Some interpretation / 部分解释 | No interpretation / 无解释 |

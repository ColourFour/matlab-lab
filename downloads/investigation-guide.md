# Project 6: Independent Project / 项目 6：自主项目

Use MATLAB to recommend a change to a system you choose. Show who or what benefits, what the change costs, and the conditions under which your recommendation stops being useful.
使用 MATLAB 为你选择的系统提出改动建议。说明谁或什么会受益、改动的代价，以及在什么条件下该建议不再适用。

Work individually or in a pair. Plan for 6–10 hours over two weeks. Aim for a model another student can run and inspect on a school computer. You choose the subject, data, mathematics and algorithm.
独立完成或两人合作。计划在两周内投入 6–10 小时。模型应能让其他学生在学校电脑上运行并检查。主题、数据、数学方法和算法由你选择。

## Requirements / 要求

- Define a measurable objective and at least one real constraint before choosing a winner. Name the user, decision or use case. / 在选择最佳方案前，定义可测量目标和至少一个实际约束，明确使用者、决策或用途。

- Implement a credible baseline and at least two alternatives. A parameter sweep alone is insufficient unless you explain a consequential design decision it resolves. / 实现可信的基准方案与至少两个替代方案。只扫描参数并不够，除非能解释它解决了什么实质设计决策。

- Compare them across at least three operating conditions. Reserve at least one unseen test case or scenario until the designs and decision rule are fixed. / 在至少三种运行条件下比较。在设计与决策规则固定前，保留至少一个未使用的测试案例或情景。

- Test a boundary case, a failure case and sensitivity to an uncertain input or assumption. Report constraint violations and results that disagree with your prediction. / 检验边界情况、失效情况及对某个不确定输入或假设的敏感性，报告违反约束及不符合预测的结果。

- Make a recommendation supported by reproducible evidence. Keeping the baseline or concluding that evidence is insufficient can be the correct decision. / 用可复现证据支持建议。保留基准方案或认为证据不足，都可能是正确决策。

## Submission / 提交内容

- A project folder with a main.m entry point, required data, a README and any helper files. Include a quick rerun that takes roughly five minutes or less on a school computer. / 项目文件夹包含 main.m 入口、所需数据、README 与辅助文件。提供在学校电脑上约五分钟内完成的快速复现版本。

- One comparison table and at least two figures that answer different questions. Include units, sample counts and uncertainty where relevant. / 一张比较表及至少两张回答不同问题的图像，并按需要标注单位、样本量与不确定性。

- A two-page decision memo plus a five-minute demonstration. Explain the recommendation, evidence, cost, limitations and what would change your mind. / 两页决策说明及五分钟演示，解释建议、证据、代价、局限，以及什么证据会使你改变判断。

## Choosing a topic / 选择主题

These are starting points, not a topic list. Propose something outside them. You may combine earlier projects, use new mathematics, collect a small dataset or construct a transparent simulation. The model must make a decision that matters within your stated use case.
这些只是出发点，并非题目范围。你可以提出其他方向、组合此前项目、学习新数学、收集小型数据集或建立假设透明的模拟。模型必须解决所定义用途中的实质决策。

### School systems / 校园系统

Choose a queue, room timetable, library process or distribution problem. Recommend a policy under limited capacity. Synthetic demand is acceptable if its assumptions are explicit.
选择排队、教室安排、图书馆流程或分配问题，在容量有限的条件下提出策略。可使用模拟需求，但必须说明假设。

### Engineering and sport / 工程与运动

Design for accuracy, range, stability or energy use. Account for a constraint such as actuator limits, material, time or uncertainty in initial conditions.
围绕准确性、射程、稳定性或能耗设计，同时考虑执行器限制、材料、时间或初始条件的不确定性。

### Images, sound and information / 图像、声音与信息

Build a method for compression, denoising, identification or retrieval. Define what information must be preserved and evaluate on examples you did not tune against.
开发压缩、去噪、识别或检索方法，定义必须保留的信息，并用未参与调试的样本评估。

### Games, networks and collective behavior / 游戏、网络与群体行为

Change a rule, strategy or network structure. Test a measurable property such as fairness, congestion, robustness or resource use against competing designs.
改变规则、策略或网络结构，与其他设计比较公平性、拥堵、鲁棒性或资源消耗等可测量性质。

## Advanced work / 进阶研究

For a harder project: find the conditions where the preferred design changes, compare two competing model structures, or search for a feasible design when objectives conflict. Establish a working baseline and valid tests before increasing complexity.
进阶方向：找出最佳设计发生变化的条件、比较两种不同模型结构，或在目标冲突时搜索可行设计。增加复杂度之前，应先建立可运行基准与有效检验。

## Working sections (open in any order) / 工作环节（可按任意顺序访问）

### 1. Define the decision / 定义决策

State a decision worth using a model to make.
提出一个值得借助模型解决的决策。

Choose something you can represent and test within two weeks. Define the system boundary and the intended user. If you use synthetic data, the recommendation applies first to that simulated system.
选择两周内能表示和检验的对象，明确系统边界与预期使用者。如果使用模拟数据，建议首先只适用于该模拟系统。

- Write a one-sentence decision question. Name the current approach and what you might change. / 用一句话提出决策问题，写出当前做法与可能改动。

- List what you will represent, what you will omit, and how you can obtain or generate the inputs. / 列出要表示和省略的因素，以及如何获取或生成输入。

- Reduce scope until a first runnable baseline is feasible in the first two hours. Discuss feasibility with your teacher. / 缩小范围，确保前两小时内能做出可运行基准，并与老师讨论可行性。

Evidence / 证据：A one-page proposal identifying the decision, intended use, model boundary and available inputs. The teacher checks feasibility, not whether the idea matches a supplied answer. / 一页提案，明确决策、用途、模型边界与可用输入。老师判断可行性，不检查是否符合预设答案。

**Decision question and intended use / 决策问题与用途**


**System boundary, available inputs and first feasible baseline / 系统边界、可用输入与首个可行基准**


### 2. Set criteria and constraints / 设定标准与约束

Decide what counts as success before seeing which design wins.
在知道哪个设计获胜前，确定成功标准。

Define one primary metric with units and direction, plus at least one hard constraint. Justify the target and baseline. If you combine metrics into a score, defend the weights and test whether changing them changes your recommendation.
定义一个主要指标及其单位和优化方向，再定义至少一个硬约束，说明目标和基准为何合理。如果把指标合成得分，应解释权重，并检验改变权重是否改变建议。

- Write a success criterion: metric, target, resource limit and operating conditions. A target is a design aim, not a result you must force. / 写出成功标准：指标、目标、资源限制和运行条件。目标是设计意图，不是必须强行实现的结果。

- State how you will treat infeasible designs, ties and trade-offs. Date this rule before experiments. / 说明如何处理不可行设计、并列结果和取舍，在实验前记录规则及日期。

- If you later change the criteria, keep both versions and explain why. / 如之后修改标准，保留两个版本并解释原因。

Evidence / 证据：A criteria table another person could use to judge the same results without asking which outcome you prefer. / 一张标准表，使他人无需询问你的偏好也能判断相同结果。

**Metric, units, target, hard constraints and justification / 指标、单位、目标、硬约束与依据**


**Decision rule and how you will handle trade-offs / 决策规则及如何处理取舍**


### 3. Build a credible baseline / 建立可信基准

Make the existing or simplest defensible approach work first.
先实现当前做法或最简单且合理的方法。

Start with the smallest model that can answer the decision question. Make assumptions explicit. Test implementation correctness separately from whether the model adequately represents the intended system.
从能回答决策问题的最小模型开始，明确假设。分别检验实现是否正确，以及模型是否足以表示目标系统。

- Create main.m and a short README. Make every input, seed and dependency explicit. / 创建 main.m 与简短 README，明确所有输入、种子和依赖。

- Run a tiny case you can calculate by hand. Test at least one invariant or limiting case. / 运行能手算的小案例，并检验至少一个不变量或极限情况。

- Record the baseline metrics, runtime and known limitations. Save this version before changing the design. / 记录基准指标、运行时间与已知局限，修改设计前保存此版本。

Evidence / 证据：A runnable baseline, one hand-checkable result and at least one correctness test with an explained expected result. / 可运行基准、一项能手算的结果，以及至少一项说明预期结果的正确性检验。

**Baseline method, assumptions and file references / 基准方法、假设与文件引用**


**Hand calculation, invariant or limiting case; expected and actual results / 手算、不变量或极限情况；预期与实际结果**


### 4. Develop competing designs / 开发竞争方案

Implement two genuinely different alternatives to the baseline.
实现两个与基准有实质区别的替代方案。

You choose the methods. New mathematics, functions, optimization, signal processing or stochastic models are welcome if you can explain and test them. Extra complexity must solve a problem rather than decorate the submission.
方法由你选择。可以使用新数学、函数、优化、信号处理或随机模型，但必须能够解释和检验。额外复杂度应解决问题，而非装饰作品。

- For each alternative, write why it might improve the primary metric and what it may sacrifice. / 为每个替代方案写出它可能改善主要指标的原因，以及可能牺牲什么。

- Implement a common input/output interface so the test harness can compare all designs consistently. / 实现共同输入输出接口，使测试程序能一致地比较所有设计。

- Keep an experiment log, including abandoned approaches and useful failures. Attribute borrowed code, data and assistance; explain the parts you use. / 保留实验记录，包括放弃的方法与有用的失败。注明借用的代码、数据及协助，并能解释所使用的部分。

Evidence / 证据：Three runnable designs in total: baseline, alternative A and alternative B, with a short rationale for each. / 共三个可运行设计：基准、替代方案 A 与 B，并简述各自依据。

**Alternatives, rationale and implementation references / 替代方案、依据与实现引用**


**Expected costs, weaknesses and discarded approaches / 预期代价、弱点与放弃的方法**


### 5. Design an evaluation / 设计评估

Separate the cases used to improve the design from those used to judge it.
区分用于改进设计的案例与用于评判的案例。

Define at least three operating conditions. Reserve an unseen case or scenario before tuning; do not use its outcomes to choose parameters. For random simulations, compare multiple fixed seeds and report the distribution or spread, not only the best run.
定义至少三种运行条件，调试前保留一个未使用的案例或情景，不用其结果选择参数。随机模拟应比较多个固定种子，报告分布或波动，而不只报告最佳一次。

- Write an evaluation table: design, scenario, replicate or seed, metrics, constraint status and runtime. / 制定评估表：设计、情景、重复次数或种子、指标、约束状态与运行时间。

- Freeze designs and the decision rule before running the reserved test. If you tune again after seeing it, create a new reserved test. / 运行保留测试前固定设计与决策规则。若看过结果后再次调试，应建立新的保留测试。

- Run all designs under comparable conditions. Distinguish variation across runs from measurement and model uncertainty. / 在可比条件下运行所有设计，区分重复试验波动、测量不确定性与模型不确定性。

Evidence / 证据：A reproducible evaluation table and a clear record of which cases were used for development and which were held out. / 可复现评估表，以及明确区分开发案例与保留案例的记录。

**Scenarios, held-out case, seeds or repeats, and freeze date / 情景、保留案例、种子或重复次数、固定设计日期**


**Evaluation results and file references; uncertainty summary / 评估结果与文件引用；不确定性概述**


### 6. Try to break the recommendation / 尝试推翻建议

Find where the preferred design becomes unreliable, infeasible or inferior.
找出首选设计在哪些条件下不可靠、不可行或落后。

Test a boundary case, a plausible adverse case and sensitivity to an uncertain input or assumption. Choose magnitudes justified by your use case. Do not report impossible extremes as if they were normal conditions.
检验边界情况、合理的不利情况，以及对不确定输入或假设的敏感性。变化幅度应有用途依据，不要把不可能的极端情况当作正常条件。

- Choose a case likely to expose each design’s weakness. Record what you expected to fail and what actually failed. / 选择可能暴露各设计弱点的案例，记录预期失效与实际失效。

- Vary an uncertain input over a justified interval. Find whether and where the preferred design changes. / 在合理区间内改变一个不确定输入，找出首选设计是否及何时改变。

- For numerical simulations, check time step, sample resolution or stopping tolerance where relevant. For data models, test distribution or measurement changes. / 数值模拟按需要检查步长、采样分辨率或停止容差；数据模型检验分布或测量变化。

Evidence / 证据：One failure analysis and one sensitivity figure or table, including their effect on the recommendation. / 一项失效分析和一张敏感性图或表，说明它们如何影响建议。

**Boundary/adverse tests, failures and their causes / 边界／不利检验、失效及原因**


**Sensitivity interval, results and conditions where the decision changes / 敏感性区间、结果与决策改变条件**


### 7. Make the recommendation / 提出建议

Choose a design, retain the baseline or state what evidence is missing.
选择设计、保留基准，或说明还缺什么证据。

Apply the rule you set before testing. Separate measured evidence from interpretation. If no alternative clears the threshold, report that result; you are assessed on the investigation, not on producing a positive finding.
应用检验前制定的规则，区分测量证据与解释。如果没有替代方案达到标准，应如实报告；评判的是研究质量，而非是否得到正面结果。

- Build a comparison table with baseline and alternatives, costs, constraint status and uncertainty. / 建立比较表，包含基准与替代方案、代价、约束状态和不确定性。

- Write a recommendation with at least two numerical results and an explicit scope of use. Explain the strongest objection to it. / 用至少两个数值结果支持建议，明确适用范围，并解释最有力的反对理由。

- State what new evidence would change your mind, and propose the smallest useful next experiment. / 说明什么新证据会改变你的判断，并提出最小但有用的后续实验。

Evidence / 证据：A decision memo that could be used without reading every line of code, while linking every important claim to evidence. / 一份无需阅读全部代码即可使用的决策说明，同时让每个重要主张都有证据依据。

**Recommendation, numerical evidence and scope / 建议、数值证据与适用范围**


**Strongest objection, missing evidence and next experiment / 最强反对理由、缺失证据与后续实验**


### 8. Submit and defend / 提交与答辩

Make the work rerunnable and explain a live change to it.
使作品可复现，并解释一次现场改动。

Submit code, required data, an evaluation table, at least two purposeful figures and a two-page decision memo. Use a five-minute demo to show the decision and evidence. If the full analysis is slow, supply a quick representative rerun and instructions for the full version.
提交代码、所需数据、评估表、至少两张有明确用途的图像，以及两页决策说明。用五分钟演示展示决策与证据。完整分析较慢时，提供快速代表性复现及完整版本说明。

- Test from a fresh MATLAB session and a clean project folder. Document version, dependencies, inputs, seeds and expected checks. / 在新的 MATLAB 会话与干净项目文件夹中测试，记录版本、依赖、输入、种子及预期检查。

- Ask a peer to follow the README without verbal help. Record and fix reproducibility failures. / 让同伴在没有口头帮助的情况下按 README 操作，记录并修复复现失败。

- Prepare to justify a model assumption, defend a metric, trace one result to code and explain one failure. For pairs, each person must explain the whole system and identify their contribution. / 准备解释模型假设、指标依据、某项结果对应的代码及一次失败。两人合作时，每人都须解释整个系统并说明自身贡献。

Evidence / 证据：The complete submission folder and the decision memo, delivered through your teacher’s usual submission channel. This website does not upload or grade the work. / 完整提交文件夹与决策说明，通过老师通常使用的渠道提交。本网站不上传或评分。

**Submission files, rerun instructions and peer-test result / 提交文件、复现说明与同伴测试结果**


**Demo outline, live-change plan, sources and contributions / 演示提纲、现场改动计划、来源与贡献**


## Assessment / 评价

Five criteria, 0–4 each (20 total). 4 = convincing and supported; 3 = sound with minor gaps; 2 = partial with material gaps; 1 = asserted with little support; 0 = absent or unusable. Use the criterion descriptions below to judge the evidence.
五项标准，每项 0–4 分（共 20 分）。4：证据充分且有说服力；3：合理但有小缺口；2：部分完成且有重要缺口；1：缺乏支持的陈述；0：缺失或不可用。按下方标准判断证据。

- **Problem and criteria / 问题与标准** — A consequential decision, justified metrics, constraints and scope. / 有实质意义的决策、合理的指标、约束与范围。

- **Model and implementation / 模型与实现** — An explainable model, credible baseline, two alternatives and correctness checks. / 可解释模型、可信基准、两个替代方案与正确性检查。

- **Experimental evidence / 实验证据** — Fair comparisons, multiple conditions, held-out tests and honest uncertainty. / 公平比较、多种条件、保留测试与如实报告的不确定性。

- **Failure and interpretation / 失效与解释** — A serious attempt to falsify the recommendation; clear limits and trade-offs. / 认真尝试推翻自己的建议，明确局限与取舍。

- **Reproducibility and defense / 可复现性与论证** — Another student can rerun the work; the authors can explain and alter it live. / 其他学生能够复现，作者能够现场解释并修改。

A negative result can receive full marks. Extra complexity earns no credit by itself. Self-review marks on the website record student actions; they are not grades or proof of completed research.
负面结果也可获得满分。额外复杂度本身不加分。网页自查标记仅记录学生操作，不代表评分或研究完成证明。

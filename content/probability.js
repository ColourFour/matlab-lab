(function(root){
root.LAB_EXTENSIONS=root.LAB_EXTENSIONS||{};
root.LAB_EXTENSIONS["probability"]={
  "id": "probability",
  "version": 1,
  "number": 2,
  "title": {
    "en": "Beat the casino",
    "zh": "挑战概率"
  },
  "short": {
    "en": "Beat the casino",
    "zh": "挑战概率"
  },
  "headline": {
    "en": "Can chance\nbe fair?",
    "zh": "随机游戏\n公平吗？"
  },
  "description": {
    "en": "Simulate a fictional token game.\nUse evidence to test its rules.",
    "zh": "模拟一个虚构的代币游戏。\n用证据检验游戏规则。"
  },
  "requires": "projectile-motion",
  "duration": 50,
  "previewPlot": "prob-net",
  "fileName": "probability.m",
  "previewCode": "Run → compare → investigate",
  "reference": "downloads/probability_reference.m",
  "lessons": [
    {
      "id": "game-rules",
      "title": {
        "en": "Read the rules",
        "zh": "读懂规则"
      },
      "short": {
        "en": "Read the rules",
        "zh": "读懂规则"
      },
      "icon": "cells",
      "minutes": 6,
      "goal": {
        "en": "Pay 1 token. Win: receive 4. Lose: receive 0.",
        "zh": "支付 1 个代币。获胜返还 4 个，失败返还 0 个。"
      },
      "term": "net gain / 净收益",
      "see": {
        "en": "Pay 1 token. Win: receive 4. Lose: receive 0.",
        "zh": "支付 1 个代币。获胜返还 4 个，失败返还 0 个。"
      },
      "understand": {
        "en": "We use fictional tokens, not money. Payout is the total returned, so winning gains 3 tokens and losing costs 1. Keep payout and net gain separate.",
        "zh": "使用虚构代币，不使用金钱。payout 是返还总额，所以获胜净赚 3 个，失败损失 1 个。区分返还金额与净收益。"
      },
      "editor": "probability.m",
      "code": "cost = 1;\npayout = [4 0];\nnet = payout - cost;\nnet",
      "compare": {
        "en": "The order is win, then loss. Negative means a loss.",
        "zh": "顺序为获胜、失败。负数表示损失。"
      },
      "note": {
        "en": "Our game has a win probability of 0.2. We will encode that rule next.",
        "zh": "游戏获胜概率为 0.2，接下来用代码表示这个规则。"
      },
      "questions": [
        {
          "id": "net",
          "label": {
            "en": "Enter both net gains.",
            "zh": "输入两种净收益。"
          },
          "type": "vector",
          "answer": [
            3,
            -1
          ],
          "tolerance": 1e-08,
          "placeholder": {
            "en": "Example: 1 2 3",
            "zh": "例如：1 2 3"
          }
        }
      ],
      "hint": {
        "en": "Subtract 1 from each payout.",
        "zh": "每个返还金额减去 1。"
      },
      "diagram": "prob-rules",
      "success": {
        "en": "Checkpoint passed. Save your script, then continue.",
        "zh": "检查点已通过。保存脚本，然后继续。"
      },
      "steps": [
        {
          "en": "Open New Script. Save it with the filename shown below. Replace the Editor contents with this complete example.",
          "zh": "打开 New Script，按下方文件名保存。用这个完整示例替换编辑器内容。"
        },
        {
          "en": "Click Run. Read the result, compare it with the reference, then answer the checkpoint.",
          "zh": "点击 Run。读取结果，与参考对比，然后回答检查点问题。"
        }
      ],
      "output": "net =\n     3    -1",
      "download": "downloads/probability_starter.m"
    },
    {
      "id": "random-draws",
      "title": {
        "en": "Create random trials",
        "zh": "创建随机试验"
      },
      "short": {
        "en": "Create random trials",
        "zh": "创建随机试验"
      },
      "icon": "cells",
      "minutes": 6,
      "goal": {
        "en": "A random draw chooses a position between 0 and 1.",
        "zh": "随机数在 0 与 1 之间选择一个位置。"
      },
      "term": "random seed / 随机种子",
      "see": {
        "en": "A random draw chooses a position between 0 and 1.",
        "zh": "随机数在 0 与 1 之间选择一个位置。"
      },
      "understand": {
        "en": "`rng(7,'twister')` fixes a starting state so the experiment is repeatable. `rand(1,5)` creates one row with five uniform random draws. The seed does not make a game fair.",
        "zh": "`rng(7,'twister')` 固定初始状态，使实验可重复。`rand(1,5)` 生成一行五个均匀随机数。种子不会使游戏变公平。"
      },
      "editor": "probability.m",
      "code": "rng(7, 'twister');\nu = rand(1,5);\nnumel(u)",
      "compare": {
        "en": "There are five draws. Type u to inspect them; the checkpoint checks the count, not their decimal digits.",
        "zh": "共有五次抽样。输入 u 查看它们；检查点核对个数，而非小数位。"
      },
      "note": {
        "en": "Run the whole script twice to repeat the sequence. Running only rand again advances the sequence.",
        "zh": "完整运行两次可重复序列。只再次运行 rand 会生成后续数值。"
      },
      "questions": [
        {
          "id": "count",
          "label": {
            "en": "How many random values were generated?",
            "zh": "生成了多少个随机数？"
          },
          "type": "number",
          "answer": 5,
          "tolerance": 1e-08,
          "placeholder": {
            "en": "Enter a number",
            "zh": "输入数字"
          }
        },
        {
          "id": "seed",
          "label": {
            "en": "Why set a seed?",
            "zh": "为什么设定种子？"
          },
          "type": "choice",
          "answer": "repeat",
          "options": [
            {
              "value": "repeat",
              "label": {
                "en": "To repeat an experiment",
                "zh": "重复实验"
              }
            },
            {
              "value": "win",
              "label": {
                "en": "To guarantee wins",
                "zh": "保证获胜"
              }
            }
          ]
        }
      ],
      "hint": {
        "en": "The second input of rand is the number of columns.",
        "zh": "rand 的第二个输入是列数。"
      },
      "diagram": "prob-uniform",
      "success": {
        "en": "Checkpoint passed. Save your script, then continue.",
        "zh": "检查点已通过。保存脚本，然后继续。"
      },
      "steps": [
        {
          "en": "Open New Script. Save it with the filename shown below. Replace the Editor contents with this complete example.",
          "zh": "打开 New Script，按下方文件名保存。用这个完整示例替换编辑器内容。"
        },
        {
          "en": "Click Run. Read the result, compare it with the reference, then answer the checkpoint.",
          "zh": "点击 Run。读取结果，与参考对比，然后回答检查点问题。"
        }
      ],
      "output": "ans =\n     5"
    },
    {
      "id": "logical-test",
      "title": {
        "en": "Mark the wins",
        "zh": "标记获胜结果"
      },
      "short": {
        "en": "Mark the wins",
        "zh": "标记获胜结果"
      },
      "icon": "cells",
      "minutes": 6,
      "goal": {
        "en": "A comparison turns each draw into true or false.",
        "zh": "比较运算把每次抽样变为真或假。"
      },
      "term": "logical array / 逻辑数组",
      "see": {
        "en": "A comparison turns each draw into true or false.",
        "zh": "比较运算把每次抽样变为真或假。"
      },
      "understand": {
        "en": "`u < 0.2` applies the test to each value. MATLAB stores true as 1 and false as 0 in a logical array. Use fixed draws here so every student can check the boundary value 0.20.",
        "zh": "`u < 0.2` 对每个值进行判断。MATLAB 用逻辑数组中的 1 表示真，0 表示假。这里使用固定数值，方便所有人检查边界值 0.20。"
      },
      "editor": "probability.m",
      "code": "u = [0.10 0.70 0.19 0.20 0.90];\nwin = u < 0.2;\ndouble(win)",
      "compare": {
        "en": "The first and third draws win. Exactly 0.20 does not win. double shows logical values as numbers.",
        "zh": "第一次和第三次获胜。恰好 0.20 不获胜。double 将逻辑值显示为数字。"
      },
      "note": {
        "en": "One equals sign assigns a value. Two equals signs, ==, compare equality. Here we need <.",
        "zh": "一个等号用于赋值；两个等号 == 用于比较是否相等。这里需要 <。"
      },
      "questions": [
        {
          "id": "mask",
          "label": {
            "en": "Enter the five results, using 1 and 0.",
            "zh": "用 1 和 0 输入五个判断结果。"
          },
          "type": "vector",
          "answer": [
            1,
            0,
            1,
            0,
            0
          ],
          "tolerance": 1e-08,
          "placeholder": {
            "en": "Example: 1 2 3",
            "zh": "例如：1 2 3"
          }
        }
      ],
      "hint": {
        "en": "Check each value separately. 0.19 is smaller than 0.2; 0.20 is equal.",
        "zh": "逐个检查。0.19 小于 0.2，0.20 等于 0.2。"
      },
      "diagram": "prob-mask",
      "success": {
        "en": "Checkpoint passed. Save your script, then continue.",
        "zh": "检查点已通过。保存脚本，然后继续。"
      },
      "steps": [
        {
          "en": "Open New Script. Save it with the filename shown below. Replace the Editor contents with this complete example.",
          "zh": "打开 New Script，按下方文件名保存。用这个完整示例替换编辑器内容。"
        },
        {
          "en": "Click Run. Read the result, compare it with the reference, then answer the checkpoint.",
          "zh": "点击 Run。读取结果，与参考对比，然后回答检查点问题。"
        }
      ],
      "output": "ans =\n     1     0     1     0     0"
    },
    {
      "id": "estimate-frequency",
      "title": {
        "en": "Count and estimate",
        "zh": "统计与估计"
      },
      "short": {
        "en": "Count and estimate",
        "zh": "统计与估计"
      },
      "icon": "cells",
      "minutes": 6,
      "goal": {
        "en": "Two wins out of five trials give an estimate of 0.4.",
        "zh": "五次试验获胜两次，估计比例为 0.4。"
      },
      "term": "relative frequency / 相对频率",
      "see": {
        "en": "Two wins out of five trials give an estimate of 0.4.",
        "zh": "五次试验获胜两次，估计比例为 0.4。"
      },
      "understand": {
        "en": "`sum(win)` adds the true values. `mean(win)` is their average: wins divided by trials. A small sample estimate can differ greatly from the game probability of 0.2.",
        "zh": "`sum(win)` 把真值相加。`mean(win)` 求平均值，即获胜次数除以试验次数。小样本的估计可能与游戏概率 0.2 差别很大。"
      },
      "editor": "probability.m",
      "code": "u = [0.10 0.70 0.19 0.20 0.90];\nwin = u < 0.2;\n[sum(win) mean(win)]",
      "compare": {
        "en": "This fixed five-value example has an unusually high win fraction. It does not change the underlying rule.",
        "zh": "这组固定的五个数值获胜比例较高，但不会改变游戏规则。"
      },
      "note": {
        "en": "Do not replace the model probability with one short sample and call it certain.",
        "zh": "不能用一次短试验的结果替代模型概率，并把它当作确定事实。"
      },
      "questions": [
        {
          "id": "wins",
          "label": {
            "en": "How many wins?",
            "zh": "获胜几次？"
          },
          "type": "number",
          "answer": 2,
          "tolerance": 1e-08,
          "placeholder": {
            "en": "Enter a number",
            "zh": "输入数字"
          }
        },
        {
          "id": "fraction",
          "label": {
            "en": "What fraction won?",
            "zh": "获胜比例是多少？"
          },
          "type": "number",
          "answer": 0.4,
          "tolerance": 1e-08,
          "placeholder": {
            "en": "Enter a number",
            "zh": "输入数字"
          }
        }
      ],
      "hint": {
        "en": "Add the 1s, then divide by 5.",
        "zh": "把所有 1 相加，再除以 5。"
      },
      "diagram": "prob-mask",
      "success": {
        "en": "Checkpoint passed. Save your script, then continue.",
        "zh": "检查点已通过。保存脚本，然后继续。"
      },
      "steps": [
        {
          "en": "Open New Script. Save it with the filename shown below. Replace the Editor contents with this complete example.",
          "zh": "打开 New Script，按下方文件名保存。用这个完整示例替换编辑器内容。"
        },
        {
          "en": "Click Run. Read the result, compare it with the reference, then answer the checkpoint.",
          "zh": "点击 Run。读取结果，与参考对比，然后回答检查点问题。"
        }
      ],
      "output": "ans =\n    2.0000    0.4000"
    },
    {
      "id": "running-balance",
      "title": {
        "en": "Watch the balance",
        "zh": "观察累计收益"
      },
      "short": {
        "en": "Watch the balance",
        "zh": "观察累计收益"
      },
      "icon": "plot",
      "minutes": 6,
      "goal": {
        "en": "Every play adds its net gain to the running total.",
        "zh": "每次把净收益加入累计总额。"
      },
      "term": "cumulative sum / 累计和",
      "see": {
        "en": "Every play adds its net gain to the running total.",
        "zh": "每次把净收益加入累计总额。"
      },
      "understand": {
        "en": "`4*win - 1` pays 4 only on wins, then subtracts the cost for every play. `cumsum` adds entries from left to right. It describes this sample, not a guaranteed future.",
        "zh": "`4*win - 1` 只在获胜时返还 4，再为每次试验减去成本。`cumsum` 从左到右累计求和。它描述这组样本，不保证未来结果。"
      },
      "editor": "probability.m",
      "code": "u = [0.10 0.70 0.19 0.20 0.90];\nwin = u < 0.2;\nnet = 4*win - 1;\nbalance = cumsum(net);\nplot(1:5, balance, '-o');\nxlabel('Play'); ylabel('Net tokens');\ngrid on;",
      "compare": {
        "en": "The connected points are 3, 2, 5, 4, 3. The final net gain is 3 tokens.",
        "zh": "连线各点为 3、2、5、4、3，最终净收益为 3 个代币。"
      },
      "note": {
        "en": "The graph starts after play 1. An initial balance of 0 would be at play 0.",
        "zh": "图像从第一次试验后开始。初始净收益 0 对应第 0 次。"
      },
      "questions": [
        {
          "id": "balance",
          "label": {
            "en": "Enter the running totals.",
            "zh": "输入累计总额。"
          },
          "type": "vector",
          "answer": [
            3,
            2,
            5,
            4,
            3
          ],
          "tolerance": 1e-08,
          "placeholder": {
            "en": "Example: 1 2 3",
            "zh": "例如：1 2 3"
          }
        }
      ],
      "hint": {
        "en": "Use net gains [3 -1 3 -1 -1], adding one at a time.",
        "zh": "使用净收益 [3 -1 3 -1 -1]，逐项累加。"
      },
      "diagram": "prob-rules",
      "success": {
        "en": "Checkpoint passed. Save your script, then continue.",
        "zh": "检查点已通过。保存脚本，然后继续。"
      },
      "steps": [
        {
          "en": "Open New Script. Save it with the filename shown below. Replace the Editor contents with this complete example.",
          "zh": "打开 New Script，按下方文件名保存。用这个完整示例替换编辑器内容。"
        },
        {
          "en": "Click Run. Read the result, compare it with the reference, then answer the checkpoint.",
          "zh": "点击 Run。读取结果，与参考对比，然后回答检查点问题。"
        }
      ],
      "outputPlot": "prob-net"
    },
    {
      "id": "expected-value",
      "title": {
        "en": "Ask if it is fair",
        "zh": "判断是否公平"
      },
      "short": {
        "en": "Ask if it is fair",
        "zh": "判断是否公平"
      },
      "icon": "cells",
      "minutes": 6,
      "goal": {
        "en": "A winning sample can come from a losing game.",
        "zh": "一次获利的样本也可能来自长期不利的游戏。"
      },
      "term": "expected value / 期望值",
      "see": {
        "en": "A winning sample can come from a losing game.",
        "zh": "一次获利的样本也可能来自长期不利的游戏。"
      },
      "understand": {
        "en": "Expected net gain weights each outcome by its probability: `p*3 + (1-p)*(-1)`. Equivalently use `4*p - 1`. Fair means expected net gain equals zero, not that each play breaks even.",
        "zh": "净收益的期望值按概率加权：`p*3 + (1-p)*(-1)`，也可写为 `4*p - 1`。公平意味着期望净收益为零，而非每次都不赚不亏。"
      },
      "editor": "probability.m",
      "code": "p = 0.2;\nexpectedNet = 4*p - 1;\nexpectedNet",
      "compare": {
        "en": "The expected loss is 0.2 tokens per play. A particular play still gains 3 or loses 1.",
        "zh": "每次试验的期望损失为 0.2 个代币，单次实际结果仍是赚 3 个或亏 1 个。"
      },
      "note": {
        "en": "More plays do not guarantee recovery from losses. This project tests rules, not a betting strategy.",
        "zh": "增加次数不能保证挽回损失。本项目检验规则，而非教授下注策略。"
      },
      "questions": [
        {
          "id": "expected",
          "label": {
            "en": "Enter the expected net gain per play.",
            "zh": "输入每次净收益的期望值。"
          },
          "type": "number",
          "answer": -0.2,
          "tolerance": 1e-08,
          "placeholder": {
            "en": "Enter a number",
            "zh": "输入数字"
          }
        }
      ],
      "hint": {
        "en": "Compute 0.8 minus 1.",
        "zh": "计算 0.8 减去 1。"
      },
      "diagram": "prob-expected",
      "success": {
        "en": "Checkpoint passed. Save your script, then continue.",
        "zh": "检查点已通过。保存脚本，然后继续。"
      },
      "steps": [
        {
          "en": "Open New Script. Save it with the filename shown below. Replace the Editor contents with this complete example.",
          "zh": "打开 New Script，按下方文件名保存。用这个完整示例替换编辑器内容。"
        },
        {
          "en": "Click Run. Read the result, compare it with the reference, then answer the checkpoint.",
          "zh": "点击 Run。读取结果，与参考对比，然后回答检查点问题。"
        }
      ],
      "output": "expectedNet =\n   -0.2000"
    },
    {
      "id": "large-sample",
      "title": {
        "en": "Scale the experiment",
        "zh": "扩大实验规模"
      },
      "short": {
        "en": "Scale the experiment",
        "zh": "扩大实验规模"
      },
      "icon": "cells",
      "minutes": 6,
      "goal": {
        "en": "Use many trials to examine sampling variation.",
        "zh": "用大量试验观察抽样波动。"
      },
      "term": "simulation / 模拟",
      "see": {
        "en": "Use many trials to examine sampling variation.",
        "zh": "用大量试验观察抽样波动。"
      },
      "understand": {
        "en": "A row of 10,000 draws can be tested in one operation. Estimate p with mean(win) and average net gain with mean(net). These two measurements satisfy mean(net) = 4*mean(win)-1, even when the estimate differs from 0.2.",
        "zh": "一行 10000 个随机数可以一次判断。用 mean(win) 估计 p，用 mean(net) 计算平均净收益。即使估计与 0.2 不同，两者仍满足 mean(net) = 4*mean(win)-1。"
      },
      "editor": "probability.m",
      "code": "rng(7, 'twister');\nu = rand(1,10000);\nwin = u < 0.2;\nnet = 4*win - 1;\nestimate = mean(win);\naverageNet = mean(net);\n[numel(u) abs(averageNet - (4*estimate-1)) < 1e-10]",
      "compare": {
        "en": "The identity check is 1 (true). Type [estimate averageNet] to see your measured values; they should be near 0.2 and −0.2, not exactly equal.",
        "zh": "恒等式检查为 1（真）。输入 [estimate averageNet] 查看测量值，应接近 0.2 和 −0.2，但不完全相等。"
      },
      "note": {
        "en": "Change only the seed to 8 and repeat. Record both estimates in your script comments. The reference checks an identity, not a particular random sequence.",
        "zh": "只把种子改为 8，再运行。在脚本注释中记录两个估计值。参考结果检查恒等关系，不要求特定随机序列。"
      },
      "questions": [
        {
          "id": "count",
          "label": {
            "en": "How many trials?",
            "zh": "进行了多少次试验？"
          },
          "type": "number",
          "answer": 10000,
          "tolerance": 1e-08,
          "placeholder": {
            "en": "Enter a number",
            "zh": "输入数字"
          }
        },
        {
          "id": "claim",
          "label": {
            "en": "Which conclusion is supported?",
            "zh": "哪个结论有依据？"
          },
          "type": "choice",
          "answer": "approx",
          "options": [
            {
              "value": "approx",
              "label": {
                "en": "A sample estimates the probability",
                "zh": "样本估计概率"
              }
            },
            {
              "value": "exact",
              "label": {
                "en": "A sample proves the exact probability",
                "zh": "样本证明精确概率"
              }
            }
          ]
        }
      ],
      "hint": {
        "en": "Read the shape of rand. An estimate has sampling variation.",
        "zh": "读取 rand 的形状参数。估计值存在抽样波动。"
      },
      "diagram": "prob-expected",
      "success": {
        "en": "Checkpoint passed. Save your script, then continue.",
        "zh": "检查点已通过。保存脚本，然后继续。"
      },
      "steps": [
        {
          "en": "Open New Script. Save it with the filename shown below. Replace the Editor contents with this complete example.",
          "zh": "打开 New Script，按下方文件名保存。用这个完整示例替换编辑器内容。"
        },
        {
          "en": "Click Run. Read the result, compare it with the reference, then answer the checkpoint.",
          "zh": "点击 Run。读取结果，与参考对比，然后回答检查点问题。"
        }
      ],
      "output": "ans =\n       10000           1"
    },
    {
      "id": "fair-game-challenge",
      "title": {
        "en": "Design a fair game",
        "zh": "设计公平游戏"
      },
      "short": {
        "en": "Design a fair game",
        "zh": "设计公平游戏"
      },
      "icon": "cells",
      "minutes": 6,
      "goal": {
        "en": "Keep p = 0.2 and cost = 1. Find a fair total payout.",
        "zh": "保持 p = 0.2、成本为 1，找出公平的总返还额。"
      },
      "term": "fairness / 公平性",
      "see": {
        "en": "Keep p = 0.2 and cost = 1. Find a fair total payout.",
        "zh": "保持 p = 0.2、成本为 1，找出公平的总返还额。"
      },
      "understand": {
        "en": "For total win payout W, expected net is `p*W-cost`. Set it to zero and solve W = cost/p. The payout includes the original stake.",
        "zh": "获胜总返还额为 W 时，期望净收益为 `p*W-cost`。令其等于零，得到 W = cost/p。返还额包括原来的本金。"
      },
      "editor": "probability.m",
      "code": "p = 0.2;\ncost = 1;\nwinPayout = cost/p;\nexpectedNet = p*winPayout-cost;\n[winPayout expectedNet]",
      "compare": {
        "en": "A total payout of 5 makes the expected net zero. That is a gain of 4 after paying to play.",
        "zh": "总返还额为 5 时，期望净收益为零。支付成本后，获胜净赚 4。"
      },
      "note": {
        "en": "Final task: simulate the new game using mission 7. Save both versions and explain why a fair rule can still produce a losing sample. Show the script and explanation to your teacher.",
        "zh": "最终任务：用任务 7 的方法模拟新游戏。保存两个版本，解释公平规则为何仍可产生亏损样本。向老师展示脚本与解释。"
      },
      "questions": [
        {
          "id": "payout",
          "label": {
            "en": "What total win payout is fair?",
            "zh": "公平的获胜总返还额是多少？"
          },
          "type": "number",
          "answer": 5,
          "tolerance": 1e-08,
          "placeholder": {
            "en": "Enter a number",
            "zh": "输入数字"
          }
        },
        {
          "id": "net",
          "label": {
            "en": "What is its expected net gain?",
            "zh": "其期望净收益是多少？"
          },
          "type": "number",
          "answer": 0,
          "tolerance": 1e-08,
          "placeholder": {
            "en": "Enter a number",
            "zh": "输入数字"
          }
        }
      ],
      "hint": {
        "en": "Divide the cost by the win probability.",
        "zh": "用成本除以获胜概率。"
      },
      "diagram": "prob-rules",
      "success": {
        "en": "Checkpoint passed. Save your script, then continue.",
        "zh": "检查点已通过。保存脚本，然后继续。"
      },
      "steps": [
        {
          "en": "Open New Script. Save it with the filename shown below. Replace the Editor contents with this complete example.",
          "zh": "打开 New Script，按下方文件名保存。用这个完整示例替换编辑器内容。"
        },
        {
          "en": "Click Run. Read the result, compare it with the reference, then answer the checkpoint.",
          "zh": "点击 Run。读取结果，与参考对比，然后回答检查点问题。"
        }
      ],
      "output": "ans =\n     5     0"
    }
  ],
  "skills": [
    {
      "en": "Generate trials",
      "zh": "生成试验"
    },
    {
      "en": "Test conditions",
      "zh": "判断条件"
    },
    {
      "en": "Count outcomes",
      "zh": "统计结果"
    },
    {
      "en": "Evaluate fairness",
      "zh": "评估公平性"
    }
  ],
  "completeTitle": {
    "en": "You built a working model.",
    "zh": "你建立了一个可运行的模型。"
  },
  "completeText": {
    "en": "Save your script and explain what the results mean.\nYour next project is ready.",
    "zh": "保存脚本，并解释结果的含义。\n可以开始下一个项目了。"
  }
};
})(typeof window!=='undefined'?window:globalThis);

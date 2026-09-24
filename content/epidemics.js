(function(root){
root.LAB_EXTENSIONS=root.LAB_EXTENSIONS||{};
root.LAB_EXTENSIONS["epidemics"]={
  "id": "epidemics",
  "version": 1,
  "number": 5,
  "title": {
    "en": "Simulate an epidemic",
    "zh": "模拟传染过程"
  },
  "short": {
    "en": "Simulate an epidemic",
    "zh": "模拟传染过程"
  },
  "headline": {
    "en": "SIR\nsimulation",
    "zh": "SIR\n模拟"
  },
  "description": {
    "en": "Follow transfers through a fictional population.\nTest your model before trusting it.",
    "zh": "跟踪虚构人群中的转移。\n先检验模型，再解读结果。"
  },
  "requires": "image-compression",
  "duration": 50,
  "previewPlot": "sir-curves",
  "fileName": "epidemics.m",
  "previewCode": "plot(t,S,t,I,t,R)",
  "reference": "downloads/epidemics_reference.m",
  "lessons": [
    {
      "id": "population-groups",
      "title": {
        "en": "Meet three groups",
        "zh": "认识三个群体"
      },
      "short": {
        "en": "Meet three groups",
        "zh": "认识三个群体"
      },
      "icon": "cells",
      "minutes": 6,
      "goal": {
        "en": "Every model person belongs to S, I or R.",
        "zh": "模型中的每个人属于 S、I 或 R。"
      },
      "term": "compartment / 分组",
      "see": {
        "en": "Every model person belongs to S, I or R.",
        "zh": "模型中的每个人属于 S、I 或 R。"
      },
      "understand": {
        "en": "S is susceptible, I is infectious, and R is recovered. Assume a closed population, uniform mixing and lasting immunity after recovery. No births, deaths or new arrivals are included. These are invented classroom conditions, not disease data.",
        "zh": "S 为易感者，I 为具有传染性者，R 为康复者。假设人口封闭、均匀混合、康复后持续免疫，不含出生、死亡或新进入者。这些是虚构教学条件，并非疾病数据。"
      },
      "editor": "epidemics.m",
      "code": "S = 990;\nI = 10;\nR = 0;\nN = S + I + R;\nN",
      "compare": {
        "en": "The population starts at 1000 and should stay at 1000.",
        "zh": "初始总数为 1000，之后也应保持 1000。"
      },
      "note": {
        "en": "This is a mathematics exercise, not a forecast or a guide for health decisions.",
        "zh": "这是数学练习，不是预测，也不用于健康决策。"
      },
      "questions": [
        {
          "id": "total",
          "label": {
            "en": "What is N?",
            "zh": "N 是多少？"
          },
          "type": "number",
          "answer": 1000,
          "tolerance": 1e-08,
          "placeholder": {
            "en": "Enter a number",
            "zh": "输入数字"
          }
        },
        {
          "id": "assumption",
          "label": {
            "en": "Which assumption belongs to this model?",
            "zh": "哪项是本模型的假设？"
          },
          "type": "choice",
          "answer": "closed",
          "options": [
            {
              "value": "closed",
              "label": {
                "en": "No one enters or leaves",
                "zh": "没有人进入或离开"
              }
            },
            {
              "value": "real",
              "label": {
                "en": "It predicts every real outbreak",
                "zh": "它能预测所有真实疫情"
              }
            }
          ]
        }
      ],
      "hint": {
        "en": "Add all three groups.",
        "zh": "把三个群体相加。"
      },
      "diagram": "sir-groups",
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
      "output": "N =\n        1000",
      "download": "downloads/epidemics_starter.m"
    },
    {
      "id": "transfer-rates",
      "title": {
        "en": "Calculate transfers",
        "zh": "计算转移量"
      },
      "short": {
        "en": "Calculate transfers",
        "zh": "计算转移量"
      },
      "icon": "cells",
      "minutes": 6,
      "goal": {
        "en": "Some people move from S to I, while others move from I to R.",
        "zh": "一部分人从 S 转到 I，另一部分从 I 转到 R。"
      },
      "term": "rate / 速率",
      "see": {
        "en": "Some people move from S to I, while others move from I to R.",
        "zh": "一部分人从 S 转到 I，另一部分从 I 转到 R。"
      },
      "understand": {
        "en": "For a step of dt days, new infections are `dt*beta*S*I/N` and recoveries are `dt*gamma*I`. beta and gamma have units per day. Multiplying by dt converts rates into changes during a step.",
        "zh": "步长为 dt 天时，新感染量为 `dt*beta*S*I/N`，康复量为 `dt*gamma*I`。beta 与 gamma 的单位为每天，乘以 dt 后得到一步中的变化量。"
      },
      "editor": "epidemics.m",
      "code": "S = 990; I = 10; R = 0; N = 1000;\nbeta = 0.3; gamma = 0.1; dt = 1;\nnew = dt*beta*S*I/N;\nrecovered = dt*gamma*I;\n[new recovered]",
      "compare": {
        "en": "The first one-day step transfers 2.97 from S to I and 1 from I to R.",
        "zh": "第一个一天步长把 2.97 从 S 转到 I，把 1 从 I 转到 R。"
      },
      "note": {
        "en": "Fractional values describe a continuous approximation, not a claim that a fraction of a particular person changes group.",
        "zh": "小数表示连续近似，不代表某个具体人的一部分发生转移。"
      },
      "questions": [
        {
          "id": "new",
          "label": {
            "en": "How many model people move from S to I?",
            "zh": "有多少模型人数从 S 转到 I？"
          },
          "type": "number",
          "answer": 2.97,
          "tolerance": 0.001,
          "placeholder": {
            "en": "Enter a number",
            "zh": "输入数字"
          }
        },
        {
          "id": "recover",
          "label": {
            "en": "How many move from I to R?",
            "zh": "有多少从 I 转到 R？"
          },
          "type": "number",
          "answer": 1,
          "tolerance": 1e-08,
          "placeholder": {
            "en": "Enter a number",
            "zh": "输入数字"
          }
        }
      ],
      "hint": {
        "en": "Use the initial I = 10 in both formulas.",
        "zh": "两个公式都使用初始 I = 10。"
      },
      "diagram": "sir-flows",
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
      "output": "ans =\n    2.9700    1.0000"
    },
    {
      "id": "one-update",
      "title": {
        "en": "Update together",
        "zh": "同时更新"
      },
      "short": {
        "en": "Update together",
        "zh": "同时更新"
      },
      "icon": "cells",
      "minutes": 6,
      "goal": {
        "en": "Subtract outgoing transfers and add incoming transfers.",
        "zh": "减去转出量，加上转入量。"
      },
      "term": "Euler step / 欧拉步",
      "see": {
        "en": "Subtract outgoing transfers and add incoming transfers.",
        "zh": "减去转出量，加上转入量。"
      },
      "understand": {
        "en": "Compute both transfers first, then update S, I and R using the old values. This is one forward Euler step. Updating I before computing recovery would accidentally mix old and new states.",
        "zh": "先计算两个转移量，再用旧值更新 S、I、R。这是一次前向欧拉步。如果先更新 I 再计算康复量，就混用了旧状态与新状态。"
      },
      "editor": "epidemics.m",
      "code": "S = 990; I = 10; R = 0; N = 1000;\nbeta = 0.3; gamma = 0.1; dt = 1;\nnew = dt*beta*S*I/N;\nrecovered = dt*gamma*I;\nnextS = S - new;\nnextI = I + new - recovered;\nnextR = R + recovered;\n[nextS nextI nextR]",
      "compare": {
        "en": "The next groups still add to 1000. Infectious population rises by 1.97, not 2.97, because recovery also occurs.",
        "zh": "更新后三组总数仍为 1000。传染性人数增加 1.97，而非 2.97，因为同时发生康复。"
      },
      "note": {
        "en": "A one-day step is easy to inspect but coarse. We will use 0.1-day steps for the full simulation.",
        "zh": "一天的步长便于检查，但较粗。完整模拟将使用 0.1 天步长。"
      },
      "questions": [
        {
          "id": "next",
          "label": {
            "en": "Enter [nextS nextI nextR].",
            "zh": "输入 [nextS nextI nextR]。"
          },
          "type": "vector",
          "answer": [
            987.03,
            11.97,
            1
          ],
          "tolerance": 0.001,
          "placeholder": {
            "en": "Example: 1 2 3",
            "zh": "例如：1 2 3"
          }
        }
      ],
      "hint": {
        "en": "S loses new; I gains new and loses recovered; R gains recovered.",
        "zh": "S 减去 new；I 加上 new 再减去 recovered；R 加上 recovered。"
      },
      "diagram": "sir-flows",
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
      "output": "ans =\n  987.0300   11.9700    1.0000"
    },
    {
      "id": "time-loop",
      "title": {
        "en": "Follow sixty days",
        "zh": "跟踪六十天"
      },
      "short": {
        "en": "Follow sixty days",
        "zh": "跟踪六十天"
      },
      "icon": "cells",
      "minutes": 6,
      "goal": {
        "en": "Save every state so you can inspect the whole timeline.",
        "zh": "保存每个状态，以查看完整时间序列。"
      },
      "term": "state history / 状态历史",
      "see": {
        "en": "Save every state so you can inspect the whole timeline.",
        "zh": "保存每个状态，以查看完整时间序列。"
      },
      "understand": {
        "en": "`zeros(size(t))` creates a zero array matching the timeline. Entry k is the old state and k+1 is the next state. The loop stops at numel(t)-1 so the final update fits inside the arrays.",
        "zh": "`zeros(size(t))` 创建与时间序列形状相同的零数组。第 k 项为旧状态，第 k+1 项为新状态。循环止于 numel(t)-1，使最后一次更新仍在数组范围内。"
      },
      "editor": "epidemics.m",
      "code": "N = 1000; beta = 0.3; gamma = 0.1;\ndt = 0.1; t = 0:dt:60;\nS = zeros(size(t)); I = S; R = S;\nS(1) = 990; I(1) = 10;\nfor k = 1:numel(t)-1\n    new = dt*beta*S(k)*I(k)/N;\n    recovered = dt*gamma*I(k);\n    S(k+1) = S(k) - new;\n    I(k+1) = I(k) + new - recovered;\n    R(k+1) = R(k) + recovered;\nend\n[numel(t) S(2) I(2) R(2)]",
      "compare": {
        "en": "There are 601 times but 600 steps. The first update is smaller than the one-day example because dt is 0.1.",
        "zh": "有 601 个时刻、600 个步长。dt 为 0.1，因此首次更新比一天步长示例更小。"
      },
      "note": {
        "en": "Each mission is a complete script. Replace the earlier scalar S, I, R example rather than appending this code to it.",
        "zh": "每个任务都是完整脚本。请替换之前 S、I、R 为单值的示例，而非把代码接在后面。"
      },
      "questions": [
        {
          "id": "count",
          "label": {
            "en": "How many times are stored?",
            "zh": "保存了多少个时刻？"
          },
          "type": "number",
          "answer": 601,
          "tolerance": 1e-08,
          "placeholder": {
            "en": "Enter a number",
            "zh": "输入数字"
          }
        },
        {
          "id": "first",
          "label": {
            "en": "What is I(2)?",
            "zh": "I(2) 是多少？"
          },
          "type": "number",
          "answer": 10.197,
          "tolerance": 0.001,
          "placeholder": {
            "en": "Enter a number",
            "zh": "输入数字"
          }
        }
      ],
      "hint": {
        "en": "Count both t = 0 and t = 60. The first step changes I by 0.197.",
        "zh": "包括 t = 0 与 t = 60 两端。第一步使 I 增加 0.197。"
      },
      "diagram": "sir-flows",
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
      "output": "ans =\n  601.0000  989.7030   10.1970    0.1000"
    },
    {
      "id": "plot-groups",
      "title": {
        "en": "Read three curves",
        "zh": "读取三条曲线"
      },
      "short": {
        "en": "Read three curves",
        "zh": "读取三条曲线"
      },
      "icon": "plot",
      "minutes": 6,
      "goal": {
        "en": "S falls, R rises, and I first rises then falls.",
        "zh": "S 下降，R 上升，I 先上升后下降。"
      },
      "term": "peak / 峰值",
      "see": {
        "en": "S falls, R rises, and I first rises then falls.",
        "zh": "S 下降，R 上升，I 先上升后下降。"
      },
      "understand": {
        "en": "`plot(t,S,t,I,t,R)` draws three series on one set of axes. `legend` names them in the same order. `[peak,where] = max(I)` returns both the largest value and its index; t(where) converts that index into a time.",
        "zh": "`plot(t,S,t,I,t,R)` 在同一坐标系中绘制三条曲线。`legend` 按相同顺序命名。`[peak,where] = max(I)` 返回最大值及其索引，t(where) 把索引转为时间。"
      },
      "editor": "epidemics.m",
      "code": "N = 1000; beta = 0.3; gamma = 0.1;\ndt = 0.1; t = 0:dt:60;\nS = zeros(size(t)); I = S; R = S;\nS(1) = 990; I(1) = 10;\nfor k = 1:numel(t)-1\n    new = dt*beta*S(k)*I(k)/N;\n    recovered = dt*gamma*I(k);\n    S(k+1) = S(k) - new;\n    I(k+1) = I(k) + new - recovered;\n    R(k+1) = R(k) + recovered;\nend\nplot(t,S,t,I,t,R);\nlegend('S','I','R'); grid on;\nxlabel('Time (days)'); ylabel('Model population');\n[peak,where] = max(I);\n[peak t(where)]",
      "compare": {
        "en": "For dt = 0.1, peak I is about 304.99 at day 26.8. Colors may differ; follow the legend.",
        "zh": "dt = 0.1 时，I 峰值约为 304.99，发生在第 26.8 天。颜色可能不同，请依据图例。"
      },
      "note": {
        "en": "The maximum is infectious people at one time, not the total ever infected.",
        "zh": "最大值是同一时刻具有传染性的人数，不是累计感染人数。"
      },
      "questions": [
        {
          "id": "peak",
          "label": {
            "en": "Enter the peak infectious population (2 decimals).",
            "zh": "输入传染性人数峰值（两位小数）。"
          },
          "type": "number",
          "answer": 304.9876502188908,
          "tolerance": 0.02,
          "placeholder": {
            "en": "Enter a number",
            "zh": "输入数字"
          }
        },
        {
          "id": "day",
          "label": {
            "en": "On which day does the sampled peak occur?",
            "zh": "采样峰值发生在第几天？"
          },
          "type": "number",
          "answer": 26.8,
          "tolerance": 0.01,
          "placeholder": {
            "en": "Enter a number",
            "zh": "输入数字"
          }
        }
      ],
      "hint": {
        "en": "Read [peak t(where)], not the index where alone.",
        "zh": "读取 [peak t(where)]，不要仅使用索引 where。"
      },
      "diagram": "sir-curves",
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
      "outputPlot": "sir-curves"
    },
    {
      "id": "conservation-check",
      "title": {
        "en": "Test your model",
        "zh": "检验模型"
      },
      "short": {
        "en": "Test your model",
        "zh": "检验模型"
      },
      "icon": "cells",
      "minutes": 6,
      "goal": {
        "en": "Every transfer leaves one group and enters another.",
        "zh": "每次转移都离开一个群体并进入另一个。"
      },
      "term": "conservation / 守恒",
      "see": {
        "en": "Every transfer leaves one group and enters another.",
        "zh": "每次转移都离开一个群体并进入另一个。"
      },
      "understand": {
        "en": "Check the total at every time with S+I+R. Floating-point calculations may leave tiny errors, so compare the largest absolute error with 1e-8. Also test that all three groups remain nonnegative.",
        "zh": "用 S+I+R 检查每个时刻的总数。浮点计算可能留下微小误差，因此将最大绝对误差与 1e-8 比较。还要检查三组数值均非负。"
      },
      "editor": "epidemics.m",
      "code": "N = 1000; beta = 0.3; gamma = 0.1;\ndt = 0.1; t = 0:dt:60;\nS = zeros(size(t)); I = S; R = S;\nS(1) = 990; I(1) = 10;\nfor k = 1:numel(t)-1\n    new = dt*beta*S(k)*I(k)/N;\n    recovered = dt*gamma*I(k);\n    S(k+1) = S(k) - new;\n    I(k+1) = I(k) + new - recovered;\n    R(k+1) = R(k) + recovered;\nend\ntotalOK = max(abs(S+I+R-N)) < 1e-8;\nnonnegative = min([S I R]) >= 0;\n[totalOK nonnegative]",
      "compare": {
        "en": "Both checks should return 1. A result of 0 means investigate the update or the time step.",
        "zh": "两项检查都应返回 1。如果为 0，请检查更新公式或时间步长。"
      },
      "note": {
        "en": "Passing these checks does not prove the model describes a real population. It checks internal consistency.",
        "zh": "通过检查不证明模型描述真实人群，只说明内部一致性。"
      },
      "questions": [
        {
          "id": "checks",
          "label": {
            "en": "Enter [totalOK nonnegative].",
            "zh": "输入 [totalOK nonnegative]。"
          },
          "type": "vector",
          "answer": [
            1,
            1
          ],
          "tolerance": 1e-08,
          "placeholder": {
            "en": "Example: 1 2 3",
            "zh": "例如：1 2 3"
          }
        },
        {
          "id": "meaning",
          "label": {
            "en": "What have these checks tested?",
            "zh": "这些检查检验了什么？"
          },
          "type": "choice",
          "answer": "internal",
          "options": [
            {
              "value": "internal",
              "label": {
                "en": "Internal consistency",
                "zh": "内部一致性"
              }
            },
            {
              "value": "forecast",
              "label": {
                "en": "Real-world predictive accuracy",
                "zh": "真实预测准确性"
              }
            }
          ]
        }
      ],
      "hint": {
        "en": "Total stays 1000, and no group becomes negative.",
        "zh": "总数保持 1000，且没有群体变成负数。"
      },
      "diagram": "sir-groups",
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
      "output": "ans =\n     1     1"
    },
    {
      "id": "compare-rates",
      "title": {
        "en": "Change one rate",
        "zh": "改变一个速率"
      },
      "short": {
        "en": "Change one rate",
        "zh": "改变一个速率"
      },
      "icon": "cells",
      "minutes": 6,
      "goal": {
        "en": "Change beta while keeping the other settings fixed.",
        "zh": "改变 beta，同时保持其他设置不变。"
      },
      "term": "controlled comparison / 控制变量比较",
      "see": {
        "en": "Change beta while keeping the other settings fixed.",
        "zh": "改变 beta，同时保持其他设置不变。"
      },
      "understand": {
        "en": "An outer loop chooses beta. An inner loop runs the timeline. Reset all state arrays for each new beta so the second experiment starts from the same population. peaks stores the largest I within 60 days.",
        "zh": "外层循环选择 beta，内层循环运行时间序列。每次更改 beta 都重置状态数组，使第二次实验从相同人群开始。peaks 保存 60 天内 I 的最大值。"
      },
      "editor": "epidemics.m",
      "code": "N = 1000; gamma = 0.1; dt = 0.1; t = 0:dt:60;\nbetas = [0.15 0.3]; peaks = zeros(size(betas));\nfor j = 1:numel(betas)\n    beta = betas(j);\n    S = zeros(size(t)); I = S; R = S;\n    S(1) = 990; I(1) = 10;\n    for k = 1:numel(t)-1\n        new = dt*beta*S(k)*I(k)/N;\n        recovered = dt*gamma*I(k);\n        S(k+1) = S(k) - new;\n        I(k+1) = I(k) + new - recovered;\n        R(k+1) = R(k) + recovered;\n    end\n    peaks(j) = max(I);\nend\npeaks",
      "compare": {
        "en": "The smaller beta has the smaller peak in this comparison. The checkpoint is specific to these invented parameters.",
        "zh": "在此比较中，较小 beta 对应较小峰值。检查点只针对这些虚构参数。"
      },
      "note": {
        "en": "Do not label beta as a real policy or treatment. We changed a mathematical parameter without calibrating it to evidence.",
        "zh": "不要把 beta 直接称为某项真实政策或治疗。我们只是更改数学参数，并未用实际证据校准。"
      },
      "questions": [
        {
          "id": "peaks",
          "label": {
            "en": "Enter peaks for beta 0.15 and 0.30 (2 decimals).",
            "zh": "输入 beta 为 0.15 与 0.30 时的峰值（两位小数）。"
          },
          "type": "vector",
          "answer": [
            68.81166691925895,
            304.9876502188908
          ],
          "tolerance": 0.02,
          "placeholder": {
            "en": "Example: 1 2 3",
            "zh": "例如：1 2 3"
          }
        }
      ],
      "hint": {
        "en": "Read the two values in the order of betas.",
        "zh": "按 betas 的顺序读取两个数值。"
      },
      "diagram": "sir-compare",
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
      "output": "peaks =\n    68.8117    304.9877"
    },
    {
      "id": "time-step-challenge",
      "title": {
        "en": "Check the time step",
        "zh": "检查时间步长"
      },
      "short": {
        "en": "Check the time step",
        "zh": "检查时间步长"
      },
      "icon": "cells",
      "minutes": 6,
      "goal": {
        "en": "Halve dt and see how much the result changes.",
        "zh": "把 dt 减半，观察结果改变多少。"
      },
      "term": "convergence / 收敛",
      "see": {
        "en": "Halve dt and see how much the result changes.",
        "zh": "把 dt 减半，观察结果改变多少。"
      },
      "understand": {
        "en": "Euler is an approximation. A smaller step usually reduces its numerical error for this smooth model. Compare dt = 0.1 and 0.05 with identical model parameters; changing beta would test something else.",
        "zh": "欧拉法是一种近似。对这个平滑模型，更小步长通常减小数值误差。保持模型参数相同，比较 dt = 0.1 与 0.05；改变 beta 则检验了别的因素。"
      },
      "editor": "epidemics.m",
      "code": "N = 1000; beta = 0.3; gamma = 0.1;\ndt = 0.05; t = 0:dt:60;\nS = zeros(size(t)); I = S; R = S;\nS(1) = 990; I(1) = 10;\nfor k = 1:numel(t)-1\n    new = dt*beta*S(k)*I(k)/N;\n    recovered = dt*gamma*I(k);\n    S(k+1) = S(k) - new;\n    I(k+1) = I(k) + new - recovered;\n    R(k+1) = R(k) + recovered;\nend\n[peak,where] = max(I);\n[peak t(where)]",
      "compare": {
        "en": "The new peak is close to, but different from, the 0.1-day result. Numerical agreement is not evidence that the fictional model fits reality.",
        "zh": "新峰值接近但不同于 0.1 天步长结果。数值接近不代表虚构模型符合现实。"
      },
      "note": {
        "en": "Final task: submit both peak values, conservation checks and a labelled graph. Explain one numerical limitation and two model assumptions. Your teacher reviews the explanation.",
        "zh": "最终任务：提交两种峰值、守恒检查与标注图像。解释一个数值局限与两个模型假设。解释部分由老师审阅。"
      },
      "questions": [
        {
          "id": "peak",
          "label": {
            "en": "Peak I with dt = 0.05 (2 decimals)?",
            "zh": "dt = 0.05 时 I 的峰值（两位小数）？"
          },
          "type": "number",
          "answer": 304.39966415534434,
          "tolerance": 0.02,
          "placeholder": {
            "en": "Enter a number",
            "zh": "输入数字"
          }
        },
        {
          "id": "change",
          "label": {
            "en": "Which change tests numerical resolution?",
            "zh": "哪项更改检验数值分辨率？"
          },
          "type": "choice",
          "answer": "dt",
          "options": [
            {
              "value": "dt",
              "label": {
                "en": "Halve dt only",
                "zh": "只把 dt 减半"
              }
            },
            {
              "value": "beta",
              "label": {
                "en": "Halve beta only",
                "zh": "只把 beta 减半"
              }
            }
          ]
        }
      ],
      "hint": {
        "en": "Run the complete script with dt = 0.05. Read peak, not I(end).",
        "zh": "用 dt = 0.05 运行完整脚本。读取 peak，而非 I(end)。"
      },
      "diagram": "sir-compare",
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
      "output": "ans =\n    304.3997    26.7000"
    }
  ],
  "skills": [
    {
      "en": "Track groups",
      "zh": "跟踪群体"
    },
    {
      "en": "Update together",
      "zh": "同时更新"
    },
    {
      "en": "Check conservation",
      "zh": "检查守恒"
    },
    {
      "en": "Test time steps",
      "zh": "检验时间步长"
    }
  ],
  "completeTitle": {
    "en": "Project checks complete",
    "zh": "项目检查已完成"
  },
  "completeText": {
    "en": "Save your script and explain what the results mean.\nYour next project is ready.",
    "zh": "保存脚本，并解释结果的含义。\n可以开始下一个项目了。"
  }
};
})(typeof window!=='undefined'?window:globalThis);

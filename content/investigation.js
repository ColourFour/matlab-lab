(function(root){
root.LAB_EXTENSIONS=root.LAB_EXTENSIONS||{};
root.LAB_EXTENSIONS["investigation"]={
  "id": "investigation",
  "version": 1,
  "number": 6,
  "title": {
    "en": "Your own investigation",
    "zh": "自主探究"
  },
  "short": {
    "en": "Your own investigation",
    "zh": "自主探究"
  },
  "headline": {
    "en": "Ask. Test.\nExplain.",
    "zh": "提问、检验。\n解释结果。"
  },
  "description": {
    "en": "Learn an investigation method with a worked example.\nThen design and submit your own study.",
    "zh": "通过示例学习探究方法。\n然后设计并提交自己的研究。"
  },
  "requires": "epidemics",
  "duration": 50,
  "previewPlot": "investigation-sweep",
  "fileName": "investigation.m",
  "previewCode": "Run → compare → investigate",
  "reference": "downloads/investigation_reference.m",
  "lessons": [
    {
      "id": "research-question",
      "title": {
        "en": "Ask a testable question",
        "zh": "提出可检验问题"
      },
      "short": {
        "en": "Ask a testable question",
        "zh": "提出可检验问题"
      },
      "icon": "cells",
      "minutes": 6,
      "goal": {
        "en": "Name one input to change and one output to measure.",
        "zh": "指定一个要改变的输入和一个要测量的输出。"
      },
      "term": "research question / 研究问题",
      "see": {
        "en": "Name one input to change and one output to measure.",
        "zh": "指定一个要改变的输入和一个要测量的输出。"
      },
      "understand": {
        "en": "Our worked question is: how does launch speed affect range at 45 degrees in the ideal projectile model? A useful question names the model, the input and the output. It is narrower than “How do projectiles work?”",
        "zh": "示例问题为：在理想抛体模型中，45 度发射时速度如何影响射程？有用的问题明确模型、输入与输出，比“抛体如何运动？”更具体。"
      },
      "editor": "investigation.m",
      "code": "gravity = 9.81; angle = 45;\nspeed = [10 15 20 25 30];\nrange = speed.^2*sind(2*angle)/gravity;\nnumel(speed)",
      "compare": {
        "en": "The example tests five speeds. No physical launch is needed.",
        "zh": "示例检验五种速度，无需进行实际发射。"
      },
      "note": {
        "en": "Use this example to learn the method. Your final study must pose a new question using one of Projects 1–5.",
        "zh": "通过示例学习方法。最终研究须使用项目 1–5 中的一个，提出新问题。"
      },
      "questions": [
        {
          "id": "input",
          "label": {
            "en": "What input does this question vary?",
            "zh": "这个问题改变哪个输入？"
          },
          "type": "choice",
          "answer": "speed",
          "options": [
            {
              "value": "speed",
              "label": {
                "en": "Launch speed",
                "zh": "发射速度"
              }
            },
            {
              "value": "gravity",
              "label": {
                "en": "Gravity",
                "zh": "重力加速度"
              }
            }
          ]
        }
      ],
      "hint": {
        "en": "The input vector contains five speed values.",
        "zh": "输入向量包含五个速度值。"
      },
      "diagram": "investigation-plan",
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
      "output": "ans =\n     5",
      "download": "downloads/investigation_starter.m"
    },
    {
      "id": "make-prediction",
      "title": {
        "en": "Write a prediction",
        "zh": "写出预测"
      },
      "short": {
        "en": "Write a prediction",
        "zh": "写出预测"
      },
      "icon": "cells",
      "minutes": 6,
      "goal": {
        "en": "Predict what doubling speed will do to range.",
        "zh": "预测速度翻倍时射程如何变化。"
      },
      "term": "hypothesis / 假设",
      "see": {
        "en": "Predict what doubling speed will do to range.",
        "zh": "预测速度翻倍时射程如何变化。"
      },
      "understand": {
        "en": "At fixed angle and gravity, range is proportional to speed squared. Doubling speed should multiply range by four. A prediction should include a reason and a result that could be checked.",
        "zh": "固定角度和重力加速度时，射程与速度的平方成正比。速度翻倍应使射程变为四倍。预测应包含理由与可检验结果。"
      },
      "editor": "investigation.m",
      "code": "speedFactor = 2;\npredictedRangeFactor = speedFactor^2;\npredictedRangeFactor",
      "compare": {
        "en": "The prediction is a factor of 4, not 2. We have not yet checked measured model outputs.",
        "zh": "预测为 4 倍，而非 2 倍。此时还未检查模型输出。"
      },
      "note": {
        "en": "Write your prediction in comments before generating your own results. A prediction can turn out to be wrong and still be useful.",
        "zh": "生成自己的结果前，先在注释中写下预测。即使预测错误，也能产生有用的认识。"
      },
      "questions": [
        {
          "id": "factor",
          "label": {
            "en": "Predicted range factor when speed doubles?",
            "zh": "速度翻倍时预测射程变为几倍？"
          },
          "type": "number",
          "answer": 4,
          "tolerance": 1e-08,
          "placeholder": {
            "en": "Enter a number",
            "zh": "输入数字"
          }
        }
      ],
      "hint": {
        "en": "Square the speed factor.",
        "zh": "把速度倍数平方。"
      },
      "diagram": "investigation-predict",
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
      "output": "predictedRangeFactor =\n     4"
    },
    {
      "id": "fair-test-plan",
      "title": {
        "en": "Make a fair test plan",
        "zh": "制定公平检验方案"
      },
      "short": {
        "en": "Make a fair test plan",
        "zh": "制定公平检验方案"
      },
      "icon": "cells",
      "minutes": 6,
      "goal": {
        "en": "Change speed only; keep the rest of the model fixed.",
        "zh": "只改变速度，保持模型其他部分不变。"
      },
      "term": "controlled variable / 控制变量",
      "see": {
        "en": "Change speed only; keep the rest of the model fixed.",
        "zh": "只改变速度，保持模型其他部分不变。"
      },
      "understand": {
        "en": "Use speeds from 10 to 30 m/s, angle 45 degrees and gravity 9.81 m/s². Retain the same-height, no-drag assumptions. A controlled comparison changes one input so differences have a clear interpretation.",
        "zh": "使用 10 到 30 m/s 的速度、45 度角度和 9.81 m/s² 的重力加速度。保留起落等高、无空气阻力假设。控制变量比较只改变一个输入，使差异有明确解释。"
      },
      "editor": "investigation.m",
      "code": "gravity = 9.81; angle = 45;\nspeed = [10 15 20 25 30];\nrange = speed.^2*sind(2*angle)/gravity;\n[speed(1) speed(end) angle gravity]",
      "compare": {
        "en": "Read the lowest speed, highest speed, fixed angle and fixed gravity in that order.",
        "zh": "依次读取最低速度、最高速度、固定角度和固定重力加速度。"
      },
      "note": {
        "en": "If you also change angle, you cannot attribute a changed range to speed alone.",
        "zh": "如果同时改变角度，就无法把射程变化只归因于速度。"
      },
      "questions": [
        {
          "id": "angle",
          "label": {
            "en": "What angle stays fixed? (degrees)",
            "zh": "保持的角度是多少？（度）"
          },
          "type": "number",
          "answer": 45,
          "tolerance": 1e-08,
          "placeholder": {
            "en": "Enter a number",
            "zh": "输入数字"
          }
        },
        {
          "id": "plan",
          "label": {
            "en": "Which plan isolates speed?",
            "zh": "哪个方案能单独检验速度？"
          },
          "type": "choice",
          "answer": "one",
          "options": [
            {
              "value": "one",
              "label": {
                "en": "Change speed; hold angle and gravity fixed",
                "zh": "改变速度，固定角度与重力"
              }
            },
            {
              "value": "many",
              "label": {
                "en": "Change speed, angle and gravity together",
                "zh": "同时改变速度、角度和重力"
              }
            }
          ]
        }
      ],
      "hint": {
        "en": "A fair comparison changes one input.",
        "zh": "公平比较只改变一个输入。"
      },
      "diagram": "investigation-plan",
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
      "output": "ans =\n   10.0000   30.0000   45.0000    9.8100"
    },
    {
      "id": "collect-evidence",
      "title": {
        "en": "Collect paired evidence",
        "zh": "收集配对证据"
      },
      "short": {
        "en": "Collect paired evidence",
        "zh": "收集配对证据"
      },
      "icon": "cells",
      "minutes": 6,
      "goal": {
        "en": "Every tested speed needs its own measured range.",
        "zh": "每个测试速度都需要对应的射程。"
      },
      "term": "data table / 数据表",
      "see": {
        "en": "Every tested speed needs its own measured range.",
        "zh": "每个测试速度都需要对应的射程。"
      },
      "understand": {
        "en": "`[speed; range]` stacks two rows. Transposing with `'` turns it into a two-column table of numbers, with speed first and range second. Here all values are real. Matching rows preserve each input-output pair.",
        "zh": "`[speed; range]` 把数据叠成两行，用 `'` 转置为两列数值表，先速度后射程。这里的值均为实数。对应行保留输入与输出配对。"
      },
      "editor": "investigation.m",
      "code": "gravity = 9.81; angle = 45;\nspeed = [10 15 20 25 30];\nrange = speed.^2*sind(2*angle)/gravity;\nresults = [speed; range]';\nresults",
      "compare": {
        "en": "The range at 20 m/s matches Project 1: about 40.77 m. This cross-check helps find mistakes.",
        "zh": "20 m/s 的射程与项目 1 相同，约为 40.77 米。这种交叉检查能帮助发现错误。"
      },
      "note": {
        "en": "Keep full precision during calculations. Round only values displayed in your report.",
        "zh": "计算时保留完整精度，仅在报告展示时四舍五入。"
      },
      "questions": [
        {
          "id": "range",
          "label": {
            "en": "Range at speed 30 m/s? (m)",
            "zh": "速度为 30 m/s 时射程是多少？（米）"
          },
          "type": "number",
          "answer": 91.74311926605505,
          "tolerance": 0.02,
          "placeholder": {
            "en": "Enter a number",
            "zh": "输入数字"
          }
        }
      ],
      "hint": {
        "en": "Use the row whose first column is 30.",
        "zh": "找到第一列为 30 的那一行。"
      },
      "diagram": "investigation-plan",
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
      "output": "results =\n   10.0000   10.1937\n   15.0000   22.9358\n   20.0000   40.7747\n   25.0000   63.7105\n   30.0000   91.7431"
    },
    {
      "id": "graph-evidence",
      "title": {
        "en": "Make the graph explain",
        "zh": "让图像清楚表达"
      },
      "short": {
        "en": "Make the graph explain",
        "zh": "让图像清楚表达"
      },
      "icon": "plot",
      "minutes": 6,
      "goal": {
        "en": "Label the changing input horizontally and the output vertically.",
        "zh": "横轴标注改变的输入，纵轴标注输出。"
      },
      "term": "evidence / 证据",
      "see": {
        "en": "Label the changing input horizontally and the output vertically.",
        "zh": "横轴标注改变的输入，纵轴标注输出。"
      },
      "understand": {
        "en": "Use `plot(speed,range,'-o')`: markers show the five actual test points; lines join them. Include units in both axis labels. This graph shows range versus speed, not a ball’s path through space.",
        "zh": "使用 `plot(speed,range,'-o')`：标记显示五个测试点，线段连接它们。两个坐标轴都要包含单位。这张图显示射程随速度变化，而非小球在空间中的轨迹。"
      },
      "editor": "investigation.m",
      "code": "gravity = 9.81; angle = 45;\nspeed = [10 15 20 25 30];\nrange = speed.^2*sind(2*angle)/gravity;\nplot(speed, range, '-o');\nxlabel('Speed (m/s)'); ylabel('Range (m)');\ntitle('Fixed angle: 45 degrees'); grid on;",
      "compare": {
        "en": "The graph bends upward. Equal increases in speed give progressively larger increases in range.",
        "zh": "图像向上弯曲，相同速度增量产生越来越大的射程增量。"
      },
      "note": {
        "en": "Do not claim the joining line supplies extra measured points. It connects the five samples.",
        "zh": "不要把连接线当作额外测量点；它只是连接五个样本。"
      },
      "questions": [
        {
          "id": "horizontal",
          "label": {
            "en": "What does the horizontal axis represent?",
            "zh": "横轴表示什么？"
          },
          "type": "choice",
          "answer": "speed",
          "options": [
            {
              "value": "speed",
              "label": {
                "en": "Launch speed (m/s)",
                "zh": "发射速度（m/s）"
              }
            },
            {
              "value": "distance",
              "label": {
                "en": "Distance along the ground (m)",
                "zh": "地面距离（m）"
              }
            }
          ]
        }
      ],
      "hint": {
        "en": "Read xlabel in the code.",
        "zh": "读取代码中的 xlabel。"
      },
      "diagram": "investigation-sweep",
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
      "outputPlot": "investigation-sweep"
    },
    {
      "id": "test-prediction",
      "title": {
        "en": "Test the prediction",
        "zh": "检验预测"
      },
      "short": {
        "en": "Test the prediction",
        "zh": "检验预测"
      },
      "icon": "cells",
      "minutes": 6,
      "goal": {
        "en": "Compare the ranges at 10 and 20 m/s.",
        "zh": "比较 10 与 20 m/s 的射程。"
      },
      "term": "ratio test / 比值检验",
      "see": {
        "en": "Compare the ranges at 10 and 20 m/s.",
        "zh": "比较 10 与 20 m/s 的射程。"
      },
      "understand": {
        "en": "Entries 1 and 3 correspond to speeds 10 and 20. Divide their ranges to test the predicted factor. Also check that range divided element-by-element by speed squared stays constant. Use `./` for matching entries.",
        "zh": "第 1 与第 3 项对应 10 与 20 的速度。用射程比检验预测倍数。还可逐项将射程除以速度平方，检查是否为常数。使用 `./` 对应元素相除。"
      },
      "editor": "investigation.m",
      "code": "gravity = 9.81; angle = 45;\nspeed = [10 15 20 25 30];\nrange = speed.^2*sind(2*angle)/gravity;\nmeasuredFactor = range(3)/range(1);\nconstant = range./speed.^2;\n[measuredFactor max(constant)-min(constant) < 1e-10]",
      "compare": {
        "en": "The ratio is 4 and the constant check is true. This confirms consistency with the formula used, not independent experimental proof of that formula.",
        "zh": "比值为 4，常数检查为真。这验证了与所用公式的一致性，不是对公式的独立实验证明。"
      },
      "note": {
        "en": "To test a physical law, you would need independent measurements and uncertainty analysis. Here we investigate a mathematical model.",
        "zh": "检验物理规律需要独立测量与不确定性分析。这里研究的是数学模型。"
      },
      "questions": [
        {
          "id": "factor",
          "label": {
            "en": "What measured factor appears?",
            "zh": "测得的倍数是多少？"
          },
          "type": "number",
          "answer": 4,
          "tolerance": 1e-08,
          "placeholder": {
            "en": "Enter a number",
            "zh": "输入数字"
          }
        },
        {
          "id": "claim",
          "label": {
            "en": "What does this calculation establish?",
            "zh": "这个计算说明什么？"
          },
          "type": "choice",
          "answer": "model",
          "options": [
            {
              "value": "model",
              "label": {
                "en": "The model follows its square law",
                "zh": "模型遵循其平方关系"
              }
            },
            {
              "value": "world",
              "label": {
                "en": "Every real launch follows it exactly",
                "zh": "所有真实发射都精确遵循它"
              }
            }
          ]
        }
      ],
      "hint": {
        "en": "Divide range at 20 by range at 10.",
        "zh": "用 20 时的射程除以 10 时的射程。"
      },
      "diagram": "investigation-predict",
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
      "output": "ans =\n     4     1"
    },
    {
      "id": "sensitivity-limits",
      "title": {
        "en": "Test sensitivity",
        "zh": "检验敏感性"
      },
      "short": {
        "en": "Test sensitivity",
        "zh": "检验敏感性"
      },
      "icon": "cells",
      "minutes": 6,
      "goal": {
        "en": "Change speed by 5% and measure the percentage change in range.",
        "zh": "把速度增加 5%，测量射程的百分比变化。"
      },
      "term": "sensitivity / 敏感性",
      "see": {
        "en": "Change speed by 5% and measure the percentage change in range.",
        "zh": "把速度增加 5%，测量射程的百分比变化。"
      },
      "understand": {
        "en": "`100*(new-old)/old` computes percentage change. A speed increase from 20 to 21 m/s increases range by 10.25% in this model. Uncertain inputs can produce larger relative changes in outputs.",
        "zh": "`100*(new-old)/old` 计算百分比变化。在此模型中，速度从 20 增至 21 m/s，射程增加 10.25%。输入的不确定性可能使输出产生更大的相对变化。"
      },
      "editor": "investigation.m",
      "code": "speed = [20 21]; angle = 45; gravity = 9.81;\nrange = speed.^2*sind(2*angle)/gravity;\npercentChange = 100*(range(2)-range(1))/range(1);\npercentChange",
      "compare": {
        "en": "The output changes by more than 5%. The result is an exact comparison within this formula, not an uncertainty interval.",
        "zh": "输出变化超过 5%。此结果是公式内部的比较，不是不确定性区间。"
      },
      "note": {
        "en": "In your report, separate numerical errors, uncertain inputs and simplified assumptions. They are different limitations.",
        "zh": "报告中应区分数值误差、输入不确定性和简化假设，它们是不同局限。"
      },
      "questions": [
        {
          "id": "percent",
          "label": {
            "en": "What is the percentage increase in range?",
            "zh": "射程增加了百分之多少？"
          },
          "type": "number",
          "answer": 10.25,
          "tolerance": 0.001,
          "placeholder": {
            "en": "Enter a number",
            "zh": "输入数字"
          }
        }
      ],
      "hint": {
        "en": "Compute (21^2/20^2 - 1)*100.",
        "zh": "计算 (21^2/20^2 - 1)*100。"
      },
      "diagram": "investigation-sensitive",
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
      "output": "percentChange =\n   10.2500"
    },
    {
      "id": "independent-study",
      "title": {
        "en": "Build your own study",
        "zh": "开展自己的研究"
      },
      "short": {
        "en": "Build your own study",
        "zh": "开展自己的研究"
      },
      "icon": "cells",
      "minutes": 6,
      "goal": {
        "en": "Choose a new question, collect evidence and submit a report.",
        "zh": "选择新问题，收集证据并提交报告。"
      },
      "term": "reproducibility / 可重复性",
      "see": {
        "en": "Choose a new question, collect evidence and submit a report.",
        "zh": "选择新问题，收集证据并提交报告。"
      },
      "understand": {
        "en": "Choose one: probability versus win payout; fractal level versus kept fraction; block size versus image error; or beta versus peak I. Define the range of inputs, keep controls fixed, and state a prediction. For random studies, use several seeds and report variation.",
        "zh": "任选一个：获胜返还额与期望收益；分形层数与保留比例；方块大小与图像误差；beta 与 I 峰值。明确输入范围、保持控制变量不变并提出预测。随机研究应使用多个种子，报告波动。"
      },
      "editor": "investigation.m",
      "code": "gravity = 9.81; angle = 45;\nspeed = [10 15 20 25 30];\nrange = speed.^2*sind(2*angle)/gravity;\n% Worked example only: replace with your own question and model.\n% Question: how does speed affect range at 45 degrees?\n% Prediction: doubling speed gives four times the range.\n% Controls: angle, gravity, no drag, same launch/landing height.\nresults = [speed; range]';\nplot(speed, range, '-o');\nxlabel('Speed (m/s)'); ylabel('Range (m)'); grid on;\nresults",
      "compare": {
        "en": "This output belongs to the worked example. Your new study will have different outputs. The checkpoint below checks your investigation plan, not the quality of your independent work.",
        "zh": "此输出属于示例。你的新研究将产生不同输出。下方检查点只核对探究方案知识，不评判自主研究质量。"
      },
      "note": {
        "en": "Submit a runnable .m script, a labelled figure, a results table and a short report using the downloadable guide. Include your question, prediction, method, evidence, conclusion and limitations. Your teacher reviews these; the site does not upload them.",
        "zh": "使用可下载指南，提交可运行的 .m 脚本、标注图像、结果表与简短报告。包括问题、预测、方法、证据、结论和局限。由老师评阅，本网站不会上传作品。"
      },
      "questions": [
        {
          "id": "evidence",
          "label": {
            "en": "Which submission supports a conclusion?",
            "zh": "哪种提交能支持结论？"
          },
          "type": "choice",
          "answer": "complete",
          "options": [
            {
              "value": "complete",
              "label": {
                "en": "Code, labelled data and an explained comparison",
                "zh": "代码、标注数据与有解释的比较"
              }
            },
            {
              "value": "picture",
              "label": {
                "en": "Only an attractive picture",
                "zh": "只有漂亮图片"
              }
            }
          ]
        },
        {
          "id": "limits",
          "label": {
            "en": "What should a strong conclusion include?",
            "zh": "有说服力的结论应包括什么？"
          },
          "type": "choice",
          "answer": "limits",
          "options": [
            {
              "value": "limits",
              "label": {
                "en": "Evidence and the model’s limitations",
                "zh": "证据与模型局限"
              }
            },
            {
              "value": "certain",
              "label": {
                "en": "A claim that the model is always correct",
                "zh": "声称模型永远正确"
              }
            }
          ]
        }
      ],
      "hint": {
        "en": "Another student should be able to rerun your code and understand how the evidence supports your conclusion.",
        "zh": "其他学生应能重新运行代码，并理解证据如何支持结论。"
      },
      "diagram": "investigation-plan",
      "success": {
        "en": "Planning check passed. Your independent investigation still needs to be completed and reviewed by your teacher.",
        "zh": "方案知识检查已通过。你仍需完成自主探究，并交由老师评阅。"
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
      "output": "Worked-example rows (speed, range):\n10 m/s  →  10.19 m\n15 m/s  →  22.94 m\n20 m/s  →  40.77 m\n25 m/s  →  63.71 m\n30 m/s  →  91.74 m",
      "download": "downloads/investigation-guide.md"
    }
  ],
  "skills": [
    {
      "en": "Ask a testable question",
      "zh": "提出可检验问题"
    },
    {
      "en": "Control variables",
      "zh": "控制变量"
    },
    {
      "en": "Use evidence",
      "zh": "使用证据"
    },
    {
      "en": "Explain limitations",
      "zh": "解释局限"
    }
  ],
  "completeTitle": {
    "en": "Ready for your own investigation.",
    "zh": "准备开展自主探究。"
  },
  "completeText": {
    "en": "The worked-example checks are complete.\nYour independent report is reviewed by your teacher.",
    "zh": "示例检查已完成。\n自主研究报告由老师评阅。"
  }
};
})(typeof window!=='undefined'?window:globalThis);

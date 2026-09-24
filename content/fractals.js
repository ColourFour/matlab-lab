(function(root){
root.LAB_EXTENSIONS=root.LAB_EXTENSIONS||{};
root.LAB_EXTENSIONS["fractals"]={
  "id": "fractals",
  "version": 1,
  "number": 3,
  "title": {
    "en": "Make a fractal",
    "zh": "制作分形"
  },
  "short": {
    "en": "Make a fractal",
    "zh": "制作分形"
  },
  "headline": {
    "en": "One rule.\nEndless detail.",
    "zh": "一条规则。\n不断细分。"
  },
  "description": {
    "en": "Replace each square with a smaller pattern.\nBuild a Sierpiński carpet.",
    "zh": "用更小的图案替换每个方格。\n制作谢尔宾斯基地毯。"
  },
  "requires": "probability",
  "duration": 50,
  "previewPlot": "carpet-three",
  "fileName": "fractals.m",
  "previewCode": "Run → compare → investigate",
  "reference": "downloads/fractals_reference.m",
  "lessons": [
    {
      "id": "pattern-matrix",
      "title": {
        "en": "Build a small pattern",
        "zh": "建立小图案"
      },
      "short": {
        "en": "Build a small pattern",
        "zh": "建立小图案"
      },
      "icon": "cells",
      "minutes": 6,
      "goal": {
        "en": "A matrix arranges values in rows and columns.",
        "zh": "矩阵把数值排列成行和列。"
      },
      "term": "matrix / 矩阵",
      "see": {
        "en": "A matrix arranges values in rows and columns.",
        "zh": "矩阵把数值排列成行和列。"
      },
      "understand": {
        "en": "Spaces separate columns. Semicolons inside brackets start a new row. In our mask, 1 means a kept square and 0 means a removed square. This meaning comes from our model.",
        "zh": "空格分隔列，方括号里的分号开始新的一行。在 mask 中，1 表示保留，0 表示移除。这些含义由模型设定。"
      },
      "editor": "fractals.m",
      "code": "mask = [1 1 1; 1 0 1; 1 1 1];\nsize(mask)",
      "compare": {
        "en": "size returns row count first, column count second. The middle cell is zero.",
        "zh": "size 先返回行数，再返回列数。中间的格子为零。"
      },
      "note": {
        "en": "A semicolon outside brackets suppresses output. Inside brackets it separates rows.",
        "zh": "方括号外的分号抑制输出，方括号内的分号用于分行。"
      },
      "questions": [
        {
          "id": "size",
          "label": {
            "en": "Enter [rows columns].",
            "zh": "输入 [行数 列数]。"
          },
          "type": "vector",
          "answer": [
            3,
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
        "en": "Count the three row groups separated by semicolons.",
        "zh": "数一数分号分隔的三个行组。"
      },
      "diagram": "carpet-one",
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
      "output": "ans =\n     3     3",
      "download": "downloads/fractals_starter.m"
    },
    {
      "id": "matrix-index",
      "title": {
        "en": "Locate the missing square",
        "zh": "定位空白方格"
      },
      "short": {
        "en": "Locate the missing square",
        "zh": "定位空白方格"
      },
      "icon": "cells",
      "minutes": 6,
      "goal": {
        "en": "The center is row 2, column 2.",
        "zh": "中心位于第 2 行、第 2 列。"
      },
      "term": "row, column / 行、列",
      "see": {
        "en": "The center is row 2, column 2.",
        "zh": "中心位于第 2 行、第 2 列。"
      },
      "understand": {
        "en": "`mask(row,column)` selects one entry. Both indices start at 1. The first index moves down rows; the second moves across columns.",
        "zh": "`mask(row,column)` 选取一个元素。两个索引都从 1 开始。第一个索引向下选行，第二个向右选列。"
      },
      "editor": "fractals.m",
      "code": "mask = [1 1 1; 1 0 1; 1 1 1];\n[mask(2,2) mask(1,3)]",
      "compare": {
        "en": "The center is 0. The top-right corner is 1.",
        "zh": "中心为 0，右上角为 1。"
      },
      "note": {
        "en": "Try mask(3,1) for the bottom-left corner. Do not use index 0.",
        "zh": "尝试 mask(3,1) 读取左下角。不要使用索引 0。"
      },
      "questions": [
        {
          "id": "entries",
          "label": {
            "en": "Enter center and top-right values.",
            "zh": "输入中心和右上角的数值。"
          },
          "type": "vector",
          "answer": [
            0,
            1
          ],
          "tolerance": 1e-08,
          "placeholder": {
            "en": "Example: 1 2 3",
            "zh": "例如：1 2 3"
          }
        }
      ],
      "hint": {
        "en": "Read the second row, second column, then the first row, third column.",
        "zh": "先读第 2 行第 2 列，再读第 1 行第 3 列。"
      },
      "diagram": "carpet-one",
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
      "output": "ans =\n     0     1"
    },
    {
      "id": "draw-mask",
      "title": {
        "en": "Turn numbers into art",
        "zh": "把数字变成图案"
      },
      "short": {
        "en": "Turn numbers into art",
        "zh": "把数字变成图案"
      },
      "icon": "plot",
      "minutes": 6,
      "goal": {
        "en": "Map kept cells to black and the missing cell to white.",
        "zh": "把保留格映射为黑色，把空白格映射为白色。"
      },
      "term": "grayscale / 灰度",
      "see": {
        "en": "Map kept cells to black and the missing cell to white.",
        "zh": "把保留格映射为黑色，把空白格映射为白色。"
      },
      "understand": {
        "en": "`imagesc` displays matrix values using a color scale. `1-mask` changes kept 1s to black 0s. `[0 1]` fixes the scale. `colormap(gray)` uses black-to-white colors; `axis image` makes cells square.",
        "zh": "`imagesc` 用色标显示矩阵。`1-mask` 把保留格的 1 变成黑色的 0。`[0 1]` 固定色标范围。`colormap(gray)` 使用黑白灰度，`axis image` 使方格呈正方形。"
      },
      "editor": "fractals.m",
      "code": "mask = [1 1 1; 1 0 1; 1 1 1];\nimagesc(1-mask, [0 1]);\ncolormap(gray);\naxis image; axis off;",
      "compare": {
        "en": "Eight black cells surround one white center. Axis labels are hidden by axis off.",
        "zh": "八个黑格围绕一个白色中心。axis off 隐藏坐标轴。"
      },
      "note": {
        "en": "The displayed color values are 1-mask, but the stored mask still uses 1 for kept cells.",
        "zh": "显示颜色使用 1-mask，但保存的 mask 仍以 1 表示保留。"
      },
      "questions": [
        {
          "id": "kept",
          "label": {
            "en": "How many black cells are kept?",
            "zh": "保留了多少个黑格？"
          },
          "type": "number",
          "answer": 8,
          "tolerance": 1e-08,
          "placeholder": {
            "en": "Enter a number",
            "zh": "输入数字"
          }
        }
      ],
      "hint": {
        "en": "A 3-by-3 square has nine cells; remove one.",
        "zh": "3×3 有九格，移除一格。"
      },
      "diagram": "carpet-one",
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
      "outputPlot": "carpet-one"
    },
    {
      "id": "replacement-rule",
      "title": {
        "en": "Replace every square",
        "zh": "替换每个方格"
      },
      "short": {
        "en": "Replace every square",
        "zh": "替换每个方格"
      },
      "icon": "cells",
      "minutes": 6,
      "goal": {
        "en": "One kept cell becomes eight smaller kept cells.",
        "zh": "一个保留格变成八个更小的保留格。"
      },
      "term": "Kronecker product / 克罗内克积",
      "see": {
        "en": "One kept cell becomes eight smaller kept cells.",
        "zh": "一个保留格变成八个更小的保留格。"
      },
      "understand": {
        "en": "`kron(A,mask)` replaces each entry of A with that entry multiplied by the whole mask. A 1 becomes mask; a 0 becomes a 3-by-3 block of zeros. We use this block replacement without needing matrix-product theory.",
        "zh": "`kron(A,mask)` 把 A 的每个元素替换为该元素乘以完整 mask。1 变成 mask，0 变成 3×3 的零方块。这里把它作为方块替换工具，无需矩阵乘积理论。"
      },
      "editor": "fractals.m",
      "code": "mask = [1 1 1; 1 0 1; 1 1 1];\nA = kron(mask, mask);\n[size(A) nnz(A)]",
      "compare": {
        "en": "The side grows from 3 to 9. nnz counts nonzero entries: 8 × 8 = 64.",
        "zh": "边长从 3 变为 9。nnz 统计非零元素：8×8 = 64。"
      },
      "note": {
        "en": "Do not use ordinary multiplication mask*mask. That performs a different operation.",
        "zh": "不要使用普通乘法 mask*mask，它执行的是另一种运算。"
      },
      "questions": [
        {
          "id": "side",
          "label": {
            "en": "What is the new side length in cells?",
            "zh": "新图案每边有多少格？"
          },
          "type": "number",
          "answer": 9,
          "tolerance": 1e-08,
          "placeholder": {
            "en": "Enter a number",
            "zh": "输入数字"
          }
        },
        {
          "id": "kept",
          "label": {
            "en": "How many cells are kept?",
            "zh": "保留了多少格？"
          },
          "type": "number",
          "answer": 64,
          "tolerance": 1e-08,
          "placeholder": {
            "en": "Enter a number",
            "zh": "输入数字"
          }
        }
      ],
      "hint": {
        "en": "Multiply the old side by 3 and the kept count by 8.",
        "zh": "旧边长乘以 3，保留格数乘以 8。"
      },
      "diagram": "carpet-replace",
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
      "output": "ans =\n     9     9    64"
    },
    {
      "id": "repeat-loop",
      "title": {
        "en": "Repeat with a loop",
        "zh": "用循环重复"
      },
      "short": {
        "en": "Repeat with a loop",
        "zh": "用循环重复"
      },
      "icon": "cells",
      "minutes": 6,
      "goal": {
        "en": "Start with one cell, then apply the rule three times.",
        "zh": "从一格开始，把规则执行三次。"
      },
      "term": "for loop / for 循环",
      "see": {
        "en": "Start with one cell, then apply the rule three times.",
        "zh": "从一格开始，把规则执行三次。"
      },
      "understand": {
        "en": "`for level = 1:3` repeats the indented line for level 1, 2 and 3. `end` closes the loop. Each repetition uses the updated A. Starting A at 1 represents level 0.",
        "zh": "`for level = 1:3` 在 level 为 1、2、3 时重复缩进的代码行。`end` 结束循环。每次使用更新后的 A。初始 A = 1 表示第 0 层。"
      },
      "editor": "fractals.m",
      "code": "mask = [1 1 1; 1 0 1; 1 1 1];\nA = 1;\nfor level = 1:3\n    A = kron(A, mask);\nend\n[size(A) nnz(A)]",
      "compare": {
        "en": "After three replacements the side is 27 and the kept count is 512.",
        "zh": "替换三次后，边长为 27，保留格数为 512。"
      },
      "note": {
        "en": "Indentation makes the loop easier to read; the end keyword determines its boundary.",
        "zh": "缩进帮助阅读，end 关键字决定循环边界。"
      },
      "questions": [
        {
          "id": "side",
          "label": {
            "en": "How many cells along one side?",
            "zh": "每边有多少格？"
          },
          "type": "number",
          "answer": 27,
          "tolerance": 1e-08,
          "placeholder": {
            "en": "Enter a number",
            "zh": "输入数字"
          }
        },
        {
          "id": "count",
          "label": {
            "en": "How many kept cells?",
            "zh": "保留了多少格？"
          },
          "type": "number",
          "answer": 512,
          "tolerance": 1e-08,
          "placeholder": {
            "en": "Enter a number",
            "zh": "输入数字"
          }
        }
      ],
      "hint": {
        "en": "Use 3^3 and 8^3.",
        "zh": "计算 3^3 和 8^3。"
      },
      "diagram": "carpet-replace",
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
      "output": "ans =\n    27    27   512"
    },
    {
      "id": "carpet-plot",
      "title": {
        "en": "See self-similarity",
        "zh": "观察自相似"
      },
      "short": {
        "en": "See self-similarity",
        "zh": "观察自相似"
      },
      "icon": "plot",
      "minutes": 6,
      "goal": {
        "en": "Zoom into any large kept block: the rule repeats.",
        "zh": "观察任一大保留方块：相同规则再次出现。"
      },
      "term": "self-similarity / 自相似",
      "see": {
        "en": "Zoom into any large kept block: the rule repeats.",
        "zh": "观察任一大保留方块：相同规则再次出现。"
      },
      "understand": {
        "en": "A fractal repeats a pattern across scales. This finite matrix is an approximation to an ideal infinite carpet. `numel(A)` counts all cells, including removed cells.",
        "zh": "分形在不同尺度上重复图案。这个有限矩阵近似理想的无限地毯。`numel(A)` 统计全部格子，包括被移除的格子。"
      },
      "editor": "fractals.m",
      "code": "mask = [1 1 1; 1 0 1; 1 1 1];\nA = 1;\nfor level = 1:3\n    A = kron(A, mask);\nend\nimagesc(1-A, [0 1]);\ncolormap(gray); axis image; axis off;\nnumel(A)",
      "compare": {
        "en": "The reference has 27 rows and 27 columns. Large, medium and small holes share the same arrangement. numel(A) is 729.",
        "zh": "参考图有 27 行 27 列，大、中、小空洞遵循相同排列。numel(A) 为 729。"
      },
      "note": {
        "en": "Tiny gaps can disappear on small screens. The matrix counts, not screen pixels, define the model.",
        "zh": "小屏幕上细小空隙可能难以看到。模型由矩阵格数定义，而非屏幕像素。"
      },
      "questions": [
        {
          "id": "all",
          "label": {
            "en": "How many cells are in the complete grid?",
            "zh": "完整网格共有多少格？"
          },
          "type": "number",
          "answer": 729,
          "tolerance": 1e-08,
          "placeholder": {
            "en": "Enter a number",
            "zh": "输入数字"
          }
        }
      ],
      "hint": {
        "en": "Multiply 27 by 27, or use 9^3.",
        "zh": "计算 27×27，或 9^3。"
      },
      "diagram": "carpet-three",
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
      "outputPlot": "carpet-three"
    },
    {
      "id": "measure-area",
      "title": {
        "en": "Measure the kept fraction",
        "zh": "测量保留比例"
      },
      "short": {
        "en": "Measure the kept fraction",
        "zh": "测量保留比例"
      },
      "icon": "cells",
      "minutes": 6,
      "goal": {
        "en": "More detail does not mean more kept area.",
        "zh": "更多细节并不意味着更多保留面积。"
      },
      "term": "fraction / 比例",
      "see": {
        "en": "More detail does not mean more kept area.",
        "zh": "更多细节并不意味着更多保留面积。"
      },
      "understand": {
        "en": "`nnz(A)/numel(A)` is the kept fraction of the original square. At level n it equals `(8/9)^n`. When displayed at a fixed outer size, each extra level removes more area.",
        "zh": "`nnz(A)/numel(A)` 是相对于原正方形的保留比例。第 n 层等于 `(8/9)^n`。外框大小固定时，每增加一层都移除更多面积。"
      },
      "editor": "fractals.m",
      "code": "mask = [1 1 1; 1 0 1; 1 1 1];\nA = 1;\nfor level = 1:3\n    A = kron(A, mask);\nend\nkeptFraction = nnz(A)/numel(A);\nkeptFraction",
      "compare": {
        "en": "At level 3, about 70.23% of the original area remains.",
        "zh": "第 3 层约保留原面积的 70.23%。"
      },
      "note": {
        "en": "The outer square stays the same size in this interpretation; the cells become smaller.",
        "zh": "在这种解释中，外部正方形大小不变，内部格子越来越小。"
      },
      "questions": [
        {
          "id": "fraction",
          "label": {
            "en": "Enter the kept fraction at level 3 (four decimals).",
            "zh": "输入第 3 层保留比例（四位小数）。"
          },
          "type": "number",
          "answer": 0.7023319615912208,
          "tolerance": 0.0001,
          "placeholder": {
            "en": "Enter a number",
            "zh": "输入数字"
          }
        }
      ],
      "hint": {
        "en": "Divide 512 by 729.",
        "zh": "计算 512 除以 729。"
      },
      "diagram": "carpet-area",
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
      "output": "keptFraction =\n    0.7023"
    },
    {
      "id": "fractal-challenge",
      "title": {
        "en": "Predict the next level",
        "zh": "预测下一层"
      },
      "short": {
        "en": "Predict the next level",
        "zh": "预测下一层"
      },
      "icon": "cells",
      "minutes": 6,
      "goal": {
        "en": "Predict level 4 before running it.",
        "zh": "运行之前，预测第 4 层。"
      },
      "term": "prediction / 预测",
      "see": {
        "en": "Predict level 4 before running it.",
        "zh": "运行之前，预测第 4 层。"
      },
      "understand": {
        "en": "The side multiplies by 3 each time; the kept count multiplies by 8. Separate your prediction from your measurement: write the prediction in a comment beginning with %.",
        "zh": "每次边长乘以 3，保留格数乘以 8。区分预测与测量：先在以 % 开头的注释中写下预测。"
      },
      "editor": "fractals.m",
      "code": "mask = [1 1 1; 1 0 1; 1 1 1];\n% Prediction: write side and kept count here.\nA = 1;\nfor level = 1:4\n    A = kron(A, mask);\nend\n[size(A,1) nnz(A)]\nimagesc(1-A, [0 1]);\ncolormap(gray); axis image; axis off;",
      "compare": {
        "en": "The numeric result is side length 81 and kept count 4096. The new figure has more detail than the level-3 preview.",
        "zh": "数值结果为边长 81、保留格数 4096。新图比第 3 层预览更精细。"
      },
      "note": {
        "en": "Final task: save levels 2, 3 and 4 as figures. Explain self-similarity and why finite screens cannot show infinite detail. Keep levels at 4 or below for this exercise.",
        "zh": "最终任务：保存第 2、3、4 层图像。解释自相似以及有限屏幕为何无法显示无限细节。本练习保持层数不超过 4。"
      },
      "questions": [
        {
          "id": "side",
          "label": {
            "en": "Predicted side at level 4?",
            "zh": "第 4 层预测边长是多少？"
          },
          "type": "number",
          "answer": 81,
          "tolerance": 1e-08,
          "placeholder": {
            "en": "Enter a number",
            "zh": "输入数字"
          }
        },
        {
          "id": "count",
          "label": {
            "en": "Predicted kept count?",
            "zh": "预测保留格数是多少？"
          },
          "type": "number",
          "answer": 4096,
          "tolerance": 1e-08,
          "placeholder": {
            "en": "Enter a number",
            "zh": "输入数字"
          }
        }
      ],
      "hint": {
        "en": "Use 3^4 and 8^4.",
        "zh": "计算 3^4 和 8^4。"
      },
      "diagram": "carpet-area",
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
      "output": "ans =\n    81   4096"
    }
  ],
  "skills": [
    {
      "en": "Read matrices",
      "zh": "读取矩阵"
    },
    {
      "en": "Repeat with loops",
      "zh": "用循环重复"
    },
    {
      "en": "Count a pattern",
      "zh": "统计图案"
    },
    {
      "en": "Explain scaling",
      "zh": "解释缩放规律"
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

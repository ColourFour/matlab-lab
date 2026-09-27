/* Short bilingual learning steps. Worked examples precede fresh MATLAB transfer checks. */
(function(root){root.LAB_GUIDES={
  "bootcamp:first-command": [
    {
      "title": {
        "en": "Open MATLAB",
        "zh": "打开 MATLAB"
      },
      "text": {
        "en": "Open the MATLAB your teacher uses. This page is the guide; you will type in MATLAB.",
        "zh": "打开老师使用的 MATLAB。本页是指南，代码要输入到 MATLAB 中。"
      },
      "phase": "see",
      "visual": "open",
      "setup": true,
      "ack": {
        "en": "MATLAB is open",
        "zh": "MATLAB 已打开"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Keep both windows visible",
        "zh": "同时看到两个窗口"
      },
      "text": {
        "en": "Keep this guide on one side and MATLAB on the other. Use the picture below.",
        "zh": "把指南放在一侧，把 MATLAB 放在另一侧。参照下图。"
      },
      "phase": "see",
      "visual": "windows",
      "ack": {
        "en": "I can see both",
        "zh": "两个窗口都能看到"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Find where to type",
        "zh": "找到输入位置"
      },
      "text": {
        "en": "In MATLAB, find `Command Window`. Click just after `>>`. Do not type the `>>` yourself.",
        "zh": "在 MATLAB 找到 `Command Window`。点击 `>>` 右侧。不要自己输入 `>>`。"
      },
      "phase": "understand",
      "visual": "command",
      "ack": {
        "en": "I found the prompt",
        "zh": "我找到了输入位置"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Run your first command",
        "zh": "运行第一条命令"
      },
      "text": {
        "en": "Type this in MATLAB. Then press Enter.",
        "zh": "在 MATLAB 输入下面这一行，然后按 Enter。"
      },
      "phase": "do",
      "code": "2 + 2",
      "output": "ans =\n     4",
      "typed": true,
      "ack": {
        "en": "I see 4 in MATLAB",
        "zh": "我在 MATLAB 看到了 4"
      },
      "win": {
        "en": "First command run",
        "zh": "第一条命令已运行"
      },
      "id": "3"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Try a new calculation. Run this command in MATLAB.",
        "zh": "试一次新的计算。在 MATLAB 中运行这条命令。"
      },
      "code": "137 + 286",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "What result did MATLAB give?",
          "zh": "MATLAB 得到了什么结果？"
        },
        "type": "number",
        "answer": 423,
        "tolerance": 0
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "4"
    },
    {
      "title": {
        "en": "Make a graph",
        "zh": "画一张图"
      },
      "text": {
        "en": "Copy this line into the Command Window. Press Enter. Look for a Figure window or Figures panel.",
        "zh": "把这一行复制到命令窗口。按 Enter，查看 Figure 窗口或 Figures 面板。"
      },
      "phase": "do",
      "code": "plot([0 1 2 3 4], [0 3 4 3 0], '-o')",
      "plot": "arc",
      "ack": {
        "en": "My graph has five points",
        "zh": "我的图有五个点"
      },
      "win": {
        "en": "First graph drawn",
        "zh": "第一张图已画出"
      },
      "id": "5"
    },
    {
      "title": {
        "en": "Make your graph taller",
        "zh": "让你的图更高"
      },
      "text": {
        "en": "Run this line. The middle height changes from 4 to 8. Compare your two results.",
        "zh": "运行这一行。中间的高度从 4 变为 8。对比前后结果。"
      },
      "phase": "do",
      "code": "plot([0 1 2 3 4], [0 3 8 3 0], '-o')",
      "plot": "first-tall",
      "ack": {
        "en": "I see the taller middle point",
        "zh": "我看到了更高的中间点"
      },
      "win": {
        "en": "You changed your graph",
        "zh": "你改变了自己的图像"
      },
      "id": "6"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "Press Enter to run a command. MATLAB prints its answer below.",
        "zh": "按 Enter 运行命令。MATLAB 会在下方显示答案。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "First commands complete",
        "zh": "第一条命令已完成"
      },
      "id": "7"
    }
  ],
  "bootcamp:variables": [
    {
      "title": {
        "en": "Give a number a name",
        "zh": "给数字起个名字"
      },
      "text": {
        "en": "A name keeps a number for later. Running `speed` shows its value.",
        "zh": "名称可以保存数字。运行 `speed` 可查看它的值。"
      },
      "phase": "see",
      "diagram": "variable",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "speed = 20;\nangle = 45;\nspeed",
      "append": false,
      "typed": true,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": "speed =\n\n    20",
      "plot": null,
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "A name keeps a number for later. Running `speed` shows its value.",
        "zh": "名称可以保存数字。运行 `speed` 可查看它的值。"
      },
      "phase": "understand",
      "diagram": "variable",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "3"
    },
    {
      "title": {
        "en": "Increase the stored speed",
        "zh": "增加已保存的速度"
      },
      "text": {
        "en": "Run these two lines. The second line displays the new value.",
        "zh": "运行这两行。第二行显示新数值。"
      },
      "phase": "do",
      "code": "speed = speed + 5;\nspeed",
      "output": "25",
      "typed": true,
      "ack": {
        "en": "I see the new result",
        "zh": "我看到了新结果"
      },
      "id": "4"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Store a new speed. Increase it, then read the stored value.",
        "zh": "保存一个新速度。增加它，再读出保存的数值。"
      },
      "code": "speed = 37;\nspeed = speed + 18;\nspeed",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "What result did MATLAB give?",
          "zh": "MATLAB 得到了什么结果？"
        },
        "type": "number",
        "answer": 55,
        "tolerance": 0
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "5"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "A name keeps a number for later. Running `speed` shows its value.",
        "zh": "名称可以保存数字。运行 `speed` 可查看它的值。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Variables complete",
        "zh": "变量已完成"
      },
      "id": "6"
    }
  ],
  "bootcamp:vectors": [
    {
      "title": {
        "en": "Collect numbers in a vector",
        "zh": "用向量收集数字"
      },
      "text": {
        "en": "A vector stores several values in order. Square brackets hold the values.",
        "zh": "向量按顺序保存多个数值。用方括号括住这些数值。"
      },
      "phase": "see",
      "diagram": "vector",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "scores = [6 8 5 9];\nscores",
      "append": false,
      "typed": true,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": "scores =\n\n     6     8     5     9",
      "plot": null,
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "A vector stores several values in order. Square brackets hold the values.",
        "zh": "向量按顺序保存多个数值。用方括号括住这些数值。"
      },
      "phase": "understand",
      "diagram": "vector",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "3"
    },
    {
      "title": {
        "en": "Count a new vector",
        "zh": "数一个新向量"
      },
      "text": {
        "en": "Run this line. Count the values in the result.",
        "zh": "运行这一行。数一数结果中的数值。"
      },
      "phase": "do",
      "code": "[3 6 9 12 15]",
      "output": "3  6  9  12  15",
      "typed": true,
      "ack": {
        "en": "I see the new result",
        "zh": "我看到了新结果"
      },
      "id": "4"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "A vector can hold calculations too. Run both lines. Read the three results in order.",
        "zh": "向量也能包含计算。运行这两行，按顺序读出三个结果。"
      },
      "code": "scores = [37+18 64+29 83+46];\nscores",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "What are the three values?",
          "zh": "三个数值分别是多少？"
        },
        "type": "vector",
        "answer": [
          55,
          93,
          129
        ],
        "tolerance": 0
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "5"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "A vector stores several values in order. Square brackets hold the values.",
        "zh": "向量按顺序保存多个数值。用方括号括住这些数值。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Vectors complete",
        "zh": "向量已完成"
      },
      "id": "6"
    }
  ],
  "bootcamp:ranges": [
    {
      "title": {
        "en": "Build a timeline",
        "zh": "建立时间序列"
      },
      "text": {
        "en": "`0:2:8` means start at 0, add 2, stop at 8.",
        "zh": "`0:2:8` 表示从 0 开始，每次加 2，到 8 停止。"
      },
      "phase": "see",
      "diagram": "range",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "t = 0:1:4;\nt",
      "append": false,
      "typed": true,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": "t =\n\n     0     1     2     3     4",
      "plot": null,
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "`0:2:8` means start at 0, add 2, stop at 8.",
        "zh": "`0:2:8` 表示从 0 开始，每次加 2，到 8 停止。"
      },
      "phase": "understand",
      "diagram": "range",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "3"
    },
    {
      "title": {
        "en": "Change the step to 2",
        "zh": "把步长改为 2"
      },
      "text": {
        "en": "Run both lines. Read the values from left to right.",
        "zh": "运行两行。从左到右读出数值。"
      },
      "phase": "do",
      "code": "t = 0:2:8;\nt",
      "output": "0  2  4  6  8",
      "typed": true,
      "ack": {
        "en": "I see the new result",
        "zh": "我看到了新结果"
      },
      "id": "4"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Try a new start, step and end. Run both lines.",
        "zh": "试试新的起点、步长和终点。运行这两行。"
      },
      "code": "t = 1.5:0.7:5;\nt",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "Enter all the values in order.",
          "zh": "按顺序输入所有数值。"
        },
        "type": "vector",
        "answer": [
          1.5,
          2.2,
          2.9,
          3.6,
          4.3,
          5
        ],
        "tolerance": 0.001
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "5"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "`0:2:8` means start at 0, add 2, stop at 8.",
        "zh": "`0:2:8` 表示从 0 开始，每次加 2，到 8 停止。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Evenly spaced values complete",
        "zh": "等间距数值已完成"
      },
      "id": "6"
    }
  ],
  "bootcamp:indexing": [
    {
      "title": {
        "en": "Pick one value",
        "zh": "取出一个数值"
      },
      "text": {
        "en": "`values(2)` selects position 2. MATLAB starts counting at 1.",
        "zh": "`values(2)` 选取第 2 项。MATLAB 从 1 开始计数。"
      },
      "phase": "see",
      "diagram": "index",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "values = [10 20 30 40];\nvalues(3)",
      "append": false,
      "typed": true,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": "ans =\n\n    30",
      "plot": null,
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "`values(2)` selects position 2. MATLAB starts counting at 1.",
        "zh": "`values(2)` 选取第 2 项。MATLAB 从 1 开始计数。"
      },
      "phase": "understand",
      "diagram": "index",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "3"
    },
    {
      "title": {
        "en": "Select position 2",
        "zh": "选择第 2 项"
      },
      "text": {
        "en": "Run this line. Keep the round brackets.",
        "zh": "运行这一行。保留圆括号。"
      },
      "phase": "do",
      "code": "values(2)",
      "output": "20",
      "typed": true,
      "ack": {
        "en": "I see the new result",
        "zh": "我看到了新结果"
      },
      "id": "4"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Use positions to select two values. MATLAB adds them for you.",
        "zh": "用位置选出两个数值，让 MATLAB 把它们相加。"
      },
      "code": "values = [17 28 43 59];\nvalues(3) + values(4)",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "What result did MATLAB give?",
          "zh": "MATLAB 得到了什么结果？"
        },
        "type": "number",
        "answer": 102,
        "tolerance": 0
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "5"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "`values(2)` selects position 2. MATLAB starts counting at 1.",
        "zh": "`values(2)` 选取第 2 项。MATLAB 从 1 开始计数。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Indexing complete",
        "zh": "索引已完成"
      },
      "id": "6"
    }
  ],
  "bootcamp:operations": [
    {
      "title": {
        "en": "Work on every value",
        "zh": "对每个数值做运算"
      },
      "text": {
        "en": "The dot in `.^2` means square each value separately.",
        "zh": "`.^2` 中的点表示对每个数值分别平方。"
      },
      "phase": "see",
      "diagram": "operation",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "x = [1 2 3 4];\ny = x.^2;\ny",
      "append": false,
      "typed": true,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": "y =\n\n     1     4     9    16",
      "plot": null,
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "The dot in `.^2` means square each value separately.",
        "zh": "`.^2` 中的点表示对每个数值分别平方。"
      },
      "phase": "understand",
      "diagram": "operation",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "3"
    },
    {
      "title": {
        "en": "Add 2 to every value",
        "zh": "每一项都加 2"
      },
      "text": {
        "en": "Run this line. Read all four new values.",
        "zh": "运行这一行。读出四个新数值。"
      },
      "phase": "do",
      "code": "x + 2",
      "output": "3  4  5  6",
      "typed": true,
      "ack": {
        "en": "I see the new result",
        "zh": "我看到了新结果"
      },
      "id": "4"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Use new values. Square each value, then add 5.",
        "zh": "换一组数值。每项平方后，再加 5。"
      },
      "code": "x = [3 7 11 14];\ny = x.^2 + 5;\ny",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "Enter the four values of y.",
          "zh": "输入 y 的四个数值。"
        },
        "type": "vector",
        "answer": [
          14,
          54,
          126,
          201
        ],
        "tolerance": 0
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "5"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "The dot in `.^2` means square each value separately.",
        "zh": "`.^2` 中的点表示对每个数值分别平方。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Vector operations complete",
        "zh": "向量运算已完成"
      },
      "id": "6"
    }
  ],
  "bootcamp:plotting": [
    {
      "title": {
        "en": "Turn numbers into a picture",
        "zh": "把数字变成图像"
      },
      "text": {
        "en": "`plot(x,y)` pairs matching positions. The x value goes across; the y value goes up.",
        "zh": "`plot(x,y)` 把对应位置配成点。x 表示横向位置，y 表示纵向位置。"
      },
      "phase": "see",
      "diagram": "pairs",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Draw the result",
        "zh": "画出结果"
      },
      "text": {
        "en": "These lines make a figure. Look for the graph in MATLAB’s Figure window or Figures panel.",
        "zh": "这些代码生成图像。在 MATLAB 的 Figure 窗口或 Figures 面板查看。"
      },
      "phase": "do",
      "code": "x = 0:1:4;\ny = x.^2;\nplot(x, y, '-o');",
      "append": false,
      "typed": true,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Label or format the figure",
        "zh": "标注或设置图像"
      },
      "text": {
        "en": "These lines change the current figure. Keep all quotation marks and brackets.",
        "zh": "这些代码修改当前图像。保留所有引号和括号。"
      },
      "phase": "do",
      "code": "xlabel('x');\nylabel('y');\ntitle('My first plot');",
      "append": false,
      "typed": true,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "grid on;",
      "append": false,
      "typed": true,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3"
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": null,
      "plot": "square",
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "4"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "`plot(x,y)` pairs matching positions. The x value goes across; the y value goes up.",
        "zh": "`plot(x,y)` 把对应位置配成点。x 表示横向位置，y 表示纵向位置。"
      },
      "phase": "understand",
      "diagram": "pairs",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "5"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Plot a new curve. The last line prints its height at x = 3.",
        "zh": "画一条新曲线。最后一行显示 x = 3 时的高度。"
      },
      "code": "x = 0:1:4;\ny = x.^2 + 3*x;\nplot(x,y,'-o');\ngrid on;\ny(4)",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "What is y at x = 3?",
          "zh": "x = 3 时，y 是多少？"
        },
        "type": "number",
        "answer": 18,
        "tolerance": 0
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "6"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "`plot(x,y)` pairs matching positions. The x value goes across; the y value goes up.",
        "zh": "`plot(x,y)` 把对应位置配成点。x 表示横向位置，y 表示纵向位置。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Your first plot complete",
        "zh": "第一张图已完成"
      },
      "id": "7"
    }
  ],
  "bootcamp:mini-challenge": [
    {
      "title": {
        "en": "Mission: make an arc",
        "zh": "任务：画出一条弧线"
      },
      "text": {
        "en": "A script saves your commands. Run it again to reproduce your graph.",
        "zh": "脚本保存你的命令。再次运行，就能重现图像。"
      },
      "phase": "see",
      "diagram": "challenge",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Open a new script",
        "zh": "打开新脚本"
      },
      "text": {
        "en": "In MATLAB, click `New Script`. Use a new blank script for this lesson.",
        "zh": "在 MATLAB 点击 `New Script`。本课使用新的空白脚本。"
      },
      "phase": "understand",
      "visual": "editor",
      "ack": {
        "en": "My blank script is open",
        "zh": "空白脚本已打开"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Save the script",
        "zh": "保存脚本"
      },
      "text": {
        "en": "Click Save. Use the filename below. Keep it in MATLAB’s current folder.",
        "zh": "点击 Save。使用下方文件名，保存在 MATLAB 当前文件夹中。"
      },
      "phase": "do",
      "filename": "p0_mini_challenge.m",
      "ack": {
        "en": "Script saved",
        "zh": "脚本已保存"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Draw the result",
        "zh": "画出结果"
      },
      "text": {
        "en": "Write a time vector from 0 to 4. Then calculate `h = 4*t - t.^2` and plot t against h. Need help? Reveal the code.",
        "zh": "写出从 0 到 4 的时间向量，再计算 `h = 4*t - t.^2`，绘制 t 与 h。需要帮助时可展开代码。"
      },
      "phase": "do",
      "code": "t = 0:1:4;\nh = 4*t - t.^2;\nplot(t,h,'-o');",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3",
      "revealCode": true,
      "observe": {
        "en": "After Run, find t, h in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 t, h。"
      }
    },
    {
      "title": {
        "en": "Label or format the figure",
        "zh": "标注或设置图像"
      },
      "text": {
        "en": "These lines change the current figure. Keep all quotation marks and brackets.",
        "zh": "这些代码修改当前图像。保留所有引号和括号。"
      },
      "phase": "do",
      "code": "xlabel('Time (s)');\nylabel('Height (m)');\ntitle('My first arc');",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "4"
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "grid on;\nh",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "5"
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": null,
      "plot": "arc",
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "6"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "A script saves your commands. Run it again to reproduce your graph.",
        "zh": "脚本保存你的命令。再次运行，就能重现图像。"
      },
      "phase": "understand",
      "diagram": "challenge",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "7"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Try a different arc. Read its six heights from MATLAB.",
        "zh": "试试另一条弧线。从 MATLAB 读出六个高度。"
      },
      "code": "t = 0:1:5;\nh = 5*t - t.^2;\nplot(t,h,'-o');\ngrid on;\nh",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "Enter the six values of h.",
          "zh": "输入 h 的六个数值。"
        },
        "type": "vector",
        "answer": [
          0,
          4,
          6,
          6,
          4,
          0
        ],
        "tolerance": 0
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "8"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "A script saves your commands. Run it again to reproduce your graph.",
        "zh": "脚本保存你的命令。再次运行，就能重现图像。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Mini challenge complete",
        "zh": "小挑战已完成"
      },
      "id": "9"
    }
  ],
  "projectile-motion:launch-setup": [
    {
      "title": {
        "en": "Choose your launch",
        "zh": "设定发射条件"
      },
      "text": {
        "en": "This model ignores air resistance. Speed is in metres per second; angle is in degrees.",
        "zh": "此模型忽略空气阻力。速度单位是米/秒，角度单位是度。"
      },
      "phase": "see",
      "diagram": "launch-setup",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Open a new script",
        "zh": "打开新脚本"
      },
      "text": {
        "en": "In MATLAB, click `New Script`. Use a new blank script for this lesson.",
        "zh": "在 MATLAB 点击 `New Script`。本课使用新的空白脚本。"
      },
      "phase": "understand",
      "visual": "editor",
      "ack": {
        "en": "My blank script is open",
        "zh": "空白脚本已打开"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Save the script",
        "zh": "保存脚本"
      },
      "text": {
        "en": "Click Save. Use the filename below. Keep it in MATLAB’s current folder.",
        "zh": "点击 Save。使用下方文件名，保存在 MATLAB 当前文件夹中。"
      },
      "phase": "do",
      "filename": "p1_launch_setup.m",
      "ack": {
        "en": "Script saved",
        "zh": "脚本已保存"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "speed = 20;\nangle = 45;\ngravity = 9.81;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3",
      "observe": {
        "en": "After Run, find speed, angle, gravity in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 speed, angle, gravity。"
      }
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "[speed angle gravity]",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "4"
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": "ans =\n\n   20.0000   45.0000    9.8100",
      "plot": null,
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "5"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "This model ignores air resistance. Speed is in metres per second; angle is in degrees.",
        "zh": "此模型忽略空气阻力。速度单位是米/秒，角度单位是度。"
      },
      "phase": "understand",
      "diagram": "launch-setup",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "6"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Try speed 27. Divide by gravity to find a time scale in seconds.",
        "zh": "试试速度 27。用速度除以重力加速度，得到以秒为单位的时间尺度。"
      },
      "code": "speed = 27;\nangle = 38;\ngravity = 9.81;\nspeed/gravity",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "What result did MATLAB give?",
          "zh": "MATLAB 得到了什么结果？"
        },
        "type": "number",
        "answer": 2.7522935779816513,
        "tolerance": 0.02
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "7"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "This model ignores air resistance. Speed is in metres per second; angle is in degrees.",
        "zh": "此模型忽略空气阻力。速度单位是米/秒，角度单位是度。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Set the launch complete",
        "zh": "设定发射已完成"
      },
      "id": "8"
    }
  ],
  "projectile-motion:speed-components": [
    {
      "title": {
        "en": "Split one speed into two",
        "zh": "把速度分成两个方向"
      },
      "text": {
        "en": "`vx` is horizontal speed. `vy` is upward speed. `sind` and `cosd` use degrees.",
        "zh": "`vx` 是水平速度，`vy` 是向上速度。`sind` 和 `cosd` 使用角度制。"
      },
      "phase": "see",
      "diagram": "speed-components",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Open a new script",
        "zh": "打开新脚本"
      },
      "text": {
        "en": "In MATLAB, click `New Script`. Use a new blank script for this lesson.",
        "zh": "在 MATLAB 点击 `New Script`。本课使用新的空白脚本。"
      },
      "phase": "understand",
      "visual": "editor",
      "ack": {
        "en": "My blank script is open",
        "zh": "空白脚本已打开"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Save the script",
        "zh": "保存脚本"
      },
      "text": {
        "en": "Click Save. Use the filename below. Keep it in MATLAB’s current folder.",
        "zh": "点击 Save。使用下方文件名，保存在 MATLAB 当前文件夹中。"
      },
      "phase": "do",
      "filename": "p1_speed_components.m",
      "ack": {
        "en": "Script saved",
        "zh": "脚本已保存"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "speed = 20;\nangle = 45;\ngravity = 9.81;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3",
      "observe": {
        "en": "After Run, find speed, angle, gravity in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 speed, angle, gravity。"
      }
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "vx = speed*cosd(angle);\nvy = speed*sind(angle);\n[vx vy]",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "4",
      "observe": {
        "en": "After Run, find vx, vy in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 vx, vy。"
      }
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": "ans =\n\n   14.1421   14.1421",
      "plot": null,
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "5"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "`vx` is horizontal speed. `vy` is upward speed. `sind` and `cosd` use degrees.",
        "zh": "`vx` 是水平速度，`vy` 是向上速度。`sind` 和 `cosd` 使用角度制。"
      },
      "phase": "understand",
      "diagram": "speed-components",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "6"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Find the horizontal speed for a new launch.",
        "zh": "求一次新发射的水平速度。"
      },
      "code": "speed = 27;\nangle = 38;\nvx = speed*cosd(angle);\nvx",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "What is vx (m/s)?",
          "zh": "vx 是多少（m/s）？"
        },
        "type": "number",
        "answer": 21.27629034738149,
        "tolerance": 0.02
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "7"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "`vx` is horizontal speed. `vy` is upward speed. `sind` and `cosd` use degrees.",
        "zh": "`vx` 是水平速度，`vy` 是向上速度。`sind` 和 `cosd` 使用角度制。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Split the speed complete",
        "zh": "分解速度已完成"
      },
      "id": "8"
    }
  ],
  "projectile-motion:flight-time": [
    {
      "title": {
        "en": "Build time up to landing",
        "zh": "建立到落地为止的时间序列"
      },
      "text": {
        "en": "`linspace` includes both ends. Here it gives 101 times from launch to landing.",
        "zh": "`linspace` 包含两个端点。这里生成从发射到落地的 101 个时刻。"
      },
      "phase": "see",
      "diagram": "flight-time",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Open a new script",
        "zh": "打开新脚本"
      },
      "text": {
        "en": "In MATLAB, click `New Script`. Use a new blank script for this lesson.",
        "zh": "在 MATLAB 点击 `New Script`。本课使用新的空白脚本。"
      },
      "phase": "understand",
      "visual": "editor",
      "ack": {
        "en": "My blank script is open",
        "zh": "空白脚本已打开"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Save the script",
        "zh": "保存脚本"
      },
      "text": {
        "en": "Click Save. Use the filename below. Keep it in MATLAB’s current folder.",
        "zh": "点击 Save。使用下方文件名，保存在 MATLAB 当前文件夹中。"
      },
      "phase": "do",
      "filename": "p1_flight_time.m",
      "ack": {
        "en": "Script saved",
        "zh": "脚本已保存"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "speed = 20;\nangle = 45;\ngravity = 9.81;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3",
      "observe": {
        "en": "After Run, find speed, angle, gravity in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 speed, angle, gravity。"
      }
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "vx = speed*cosd(angle);\nvy = speed*sind(angle);\nflightTime = 2*vy/gravity;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "4",
      "observe": {
        "en": "After Run, find vx, vy, flightTime in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 vx, vy, flightTime。"
      }
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "t = linspace(0, flightTime, 101);\n[t(1) t(end) numel(t)]",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "5",
      "observe": {
        "en": "After Run, find t in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 t。"
      }
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": "ans =\n\n         0    2.8832  101.0000",
      "plot": null,
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "6"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "`linspace` includes both ends. Here it gives 101 times from launch to landing.",
        "zh": "`linspace` 包含两个端点。这里生成从发射到落地的 101 个时刻。"
      },
      "phase": "understand",
      "diagram": "flight-time",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "7"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Change the speed and angle. Find the new flight time.",
        "zh": "改变速度和角度，求新的飞行时间。"
      },
      "code": "speed = 24;\nangle = 52;\ngravity = 9.81;\nvy = speed*sind(angle);\nflightTime = 2*vy/gravity;\nflightTime",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "What is flightTime (s)?",
          "zh": "flightTime 是多少（秒）？"
        },
        "type": "number",
        "answer": 3.8557101093906887,
        "tolerance": 0.02
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "8"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "`linspace` includes both ends. Here it gives 101 times from launch to landing.",
        "zh": "`linspace` 包含两个端点。这里生成从发射到落地的 101 个时刻。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Flight time complete",
        "zh": "飞行时间已完成"
      },
      "id": "9"
    }
  ],
  "projectile-motion:trajectory-values": [
    {
      "title": {
        "en": "Calculate the whole path",
        "zh": "计算完整轨迹"
      },
      "text": {
        "en": "Horizontal distance grows with time. Gravity reduces the height. Keep the dot in `t.^2`.",
        "zh": "水平距离随时间增加。重力使高度降低。保留 `t.^2` 中的点。"
      },
      "phase": "see",
      "diagram": "trajectory-values",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Open a new script",
        "zh": "打开新脚本"
      },
      "text": {
        "en": "In MATLAB, click `New Script`. Use a new blank script for this lesson.",
        "zh": "在 MATLAB 点击 `New Script`。本课使用新的空白脚本。"
      },
      "phase": "understand",
      "visual": "editor",
      "ack": {
        "en": "My blank script is open",
        "zh": "空白脚本已打开"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Save the script",
        "zh": "保存脚本"
      },
      "text": {
        "en": "Click Save. Use the filename below. Keep it in MATLAB’s current folder.",
        "zh": "点击 Save。使用下方文件名，保存在 MATLAB 当前文件夹中。"
      },
      "phase": "do",
      "filename": "p1_trajectory_values.m",
      "ack": {
        "en": "Script saved",
        "zh": "脚本已保存"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "speed = 20;\nangle = 45;\ngravity = 9.81;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3",
      "observe": {
        "en": "After Run, find speed, angle, gravity in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 speed, angle, gravity。"
      }
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "vx = speed*cosd(angle);\nvy = speed*sind(angle);\nflightTime = 2*vy/gravity;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "4",
      "observe": {
        "en": "After Run, find vx, vy, flightTime in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 vx, vy, flightTime。"
      }
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "t = linspace(0, flightTime, 101);\nx = vx*t;\ny = vy*t - 0.5*gravity*t.^2;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "5",
      "observe": {
        "en": "After Run, find t, x, y in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 t, x, y。"
      }
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "[x(51) y(51)]",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "6"
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": "ans =\n\n   20.3874   10.1937",
      "plot": null,
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "7"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "Horizontal distance grows with time. Gravity reduces the height. Keep the dot in `t.^2`.",
        "zh": "水平距离随时间增加。重力使高度降低。保留 `t.^2` 中的点。"
      },
      "phase": "understand",
      "diagram": "trajectory-values",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "8"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Find the height 0.8 seconds into a new launch.",
        "zh": "求一次新发射在 0.8 秒时的高度。"
      },
      "code": "speed = 23; angle = 41; gravity = 9.81;\nvy = speed*sind(angle);\nt = 0.8;\ny = vy*t - 0.5*gravity*t.^2;\ny",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "What is y (m)?",
          "zh": "y 是多少（米）？"
        },
        "type": "number",
        "answer": 8.932286133425334,
        "tolerance": 0.02
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "9"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "Horizontal distance grows with time. Gravity reduces the height. Keep the dot in `t.^2`.",
        "zh": "水平距离随时间增加。重力使高度降低。保留 `t.^2` 中的点。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Build the trajectory complete",
        "zh": "建立轨迹已完成"
      },
      "id": "10"
    }
  ],
  "projectile-motion:flight-plot": [
    {
      "title": {
        "en": "Draw the flight",
        "zh": "画出飞行轨迹"
      },
      "text": {
        "en": "Plot distance against height to show the path. Time is not the horizontal axis here.",
        "zh": "用距离和高度画出轨迹。此图的横轴不是时间。"
      },
      "phase": "see",
      "diagram": "flight-plot",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Open a new script",
        "zh": "打开新脚本"
      },
      "text": {
        "en": "In MATLAB, click `New Script`. Use a new blank script for this lesson.",
        "zh": "在 MATLAB 点击 `New Script`。本课使用新的空白脚本。"
      },
      "phase": "understand",
      "visual": "editor",
      "ack": {
        "en": "My blank script is open",
        "zh": "空白脚本已打开"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Save the script",
        "zh": "保存脚本"
      },
      "text": {
        "en": "Click Save. Use the filename below. Keep it in MATLAB’s current folder.",
        "zh": "点击 Save。使用下方文件名，保存在 MATLAB 当前文件夹中。"
      },
      "phase": "do",
      "filename": "p1_flight_plot.m",
      "ack": {
        "en": "Script saved",
        "zh": "脚本已保存"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "speed = 20;\nangle = 45;\ngravity = 9.81;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3",
      "observe": {
        "en": "After Run, find speed, angle, gravity in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 speed, angle, gravity。"
      }
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "vx = speed*cosd(angle);\nvy = speed*sind(angle);\nflightTime = 2*vy/gravity;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "4",
      "observe": {
        "en": "After Run, find vx, vy, flightTime in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 vx, vy, flightTime。"
      }
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "t = linspace(0, flightTime, 101);\nx = vx*t;\ny = vy*t - 0.5*gravity*t.^2;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "5",
      "observe": {
        "en": "After Run, find t, x, y in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 t, x, y。"
      }
    },
    {
      "title": {
        "en": "Draw the result",
        "zh": "画出结果"
      },
      "text": {
        "en": "These lines make a figure. Look for the graph in MATLAB’s Figure window or Figures panel.",
        "zh": "这些代码生成图像。在 MATLAB 的 Figure 窗口或 Figures 面板查看。"
      },
      "phase": "do",
      "code": "plot(x, y);\nxlabel('Distance (m)');\nylabel('Height (m)');",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "6"
    },
    {
      "title": {
        "en": "Label or format the figure",
        "zh": "标注或设置图像"
      },
      "text": {
        "en": "These lines change the current figure. Keep all quotation marks and brackets.",
        "zh": "这些代码修改当前图像。保留所有引号和括号。"
      },
      "phase": "do",
      "code": "title('Projectile motion');\ngrid on;\naxis equal;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "7"
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": null,
      "plot": "projectile-45",
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "8"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "Plot distance against height to show the path. Time is not the horizontal axis here.",
        "zh": "用距离和高度画出轨迹。此图的横轴不是时间。"
      },
      "phase": "understand",
      "diagram": "flight-plot",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "9"
    },
    {
      "title": {
        "en": "Read the landing distance",
        "zh": "读出落地距离"
      },
      "text": {
        "en": "Run this in the Command Window. `end` means the last position.",
        "zh": "在命令窗口运行。`end` 表示最后一项。"
      },
      "phase": "do",
      "code": "x(end)",
      "output": "40.7747",
      "typed": true,
      "ack": {
        "en": "I see the new result",
        "zh": "我看到了新结果"
      },
      "id": "10"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Use your example flight. Read the horizontal distance at point 76, before landing.",
        "zh": "使用刚才的飞行示例。读出落地前第 76 个点的水平距离。"
      },
      "code": "x(76)",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "What is x(76) (m)?",
          "zh": "x(76) 是多少（米）？"
        },
        "type": "number",
        "answer": 30.58103975535168,
        "tolerance": 0.02
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "11"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "Plot distance against height to show the path. Time is not the horizontal axis here.",
        "zh": "用距离和高度画出轨迹。此图的横轴不是时间。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Plot the flight complete",
        "zh": "绘制轨迹已完成"
      },
      "id": "12"
    }
  ],
  "projectile-motion:flight-measures": [
    {
      "title": {
        "en": "Read the two big numbers",
        "zh": "读出两个关键数值"
      },
      "text": {
        "en": "`end` selects the last value. `max` finds the largest stored value.",
        "zh": "`end` 选择最后一项。`max` 找到已保存数值中的最大值。"
      },
      "phase": "see",
      "diagram": "flight-measures",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Open a new script",
        "zh": "打开新脚本"
      },
      "text": {
        "en": "In MATLAB, click `New Script`. Use a new blank script for this lesson.",
        "zh": "在 MATLAB 点击 `New Script`。本课使用新的空白脚本。"
      },
      "phase": "understand",
      "visual": "editor",
      "ack": {
        "en": "My blank script is open",
        "zh": "空白脚本已打开"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Save the script",
        "zh": "保存脚本"
      },
      "text": {
        "en": "Click Save. Use the filename below. Keep it in MATLAB’s current folder.",
        "zh": "点击 Save。使用下方文件名，保存在 MATLAB 当前文件夹中。"
      },
      "phase": "do",
      "filename": "p1_flight_measures.m",
      "ack": {
        "en": "Script saved",
        "zh": "脚本已保存"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "speed = 20;\nangle = 45;\ngravity = 9.81;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3",
      "observe": {
        "en": "After Run, find speed, angle, gravity in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 speed, angle, gravity。"
      }
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "vx = speed*cosd(angle);\nvy = speed*sind(angle);\nflightTime = 2*vy/gravity;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "4",
      "observe": {
        "en": "After Run, find vx, vy, flightTime in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 vx, vy, flightTime。"
      }
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "t = linspace(0, flightTime, 101);\nx = vx*t;\ny = vy*t - 0.5*gravity*t.^2;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "5",
      "observe": {
        "en": "After Run, find t, x, y in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 t, x, y。"
      }
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "range = x(end);\nmaxHeight = max(y);\n[range maxHeight]",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "6",
      "observe": {
        "en": "After Run, find range, maxHeight in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 range, maxHeight。"
      }
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": "ans =\n\n   40.7747   10.1937",
      "plot": null,
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "7"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "`end` selects the last value. `max` finds the largest stored value.",
        "zh": "`end` 选择最后一项。`max` 找到已保存数值中的最大值。"
      },
      "phase": "understand",
      "diagram": "flight-measures",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "8"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Use the example flight. How far below the peak is point 26?",
        "zh": "使用飞行示例。第 26 个点比峰值低多少？"
      },
      "code": "max(y) - y(26)",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "Enter the height difference (m).",
          "zh": "输入高度差（米）。"
        },
        "type": "number",
        "answer": 2.54841997961264,
        "tolerance": 0.02
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "9"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "`end` selects the last value. `max` finds the largest stored value.",
        "zh": "`end` 选择最后一项。`max` 找到已保存数值中的最大值。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Range and height complete",
        "zh": "射程与高度已完成"
      },
      "id": "10"
    }
  ],
  "projectile-motion:angle-investigation": [
    {
      "title": {
        "en": "Change one thing",
        "zh": "只改变一个条件"
      },
      "text": {
        "en": "Change the angle. Keep speed and gravity fixed so the comparison is fair.",
        "zh": "改变角度。保持速度和重力不变，才能公平比较。"
      },
      "phase": "see",
      "diagram": "angle-investigation",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Open a new script",
        "zh": "打开新脚本"
      },
      "text": {
        "en": "In MATLAB, click `New Script`. Use a new blank script for this lesson.",
        "zh": "在 MATLAB 点击 `New Script`。本课使用新的空白脚本。"
      },
      "phase": "understand",
      "visual": "editor",
      "ack": {
        "en": "My blank script is open",
        "zh": "空白脚本已打开"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Save the script",
        "zh": "保存脚本"
      },
      "text": {
        "en": "Click Save. Use the filename below. Keep it in MATLAB’s current folder.",
        "zh": "点击 Save。使用下方文件名，保存在 MATLAB 当前文件夹中。"
      },
      "phase": "do",
      "filename": "p1_angle_investigation.m",
      "ack": {
        "en": "Script saved",
        "zh": "脚本已保存"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "speed = 20;\ngravity = 9.81;\nangles = [30 45 60];",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3",
      "observe": {
        "en": "After Run, find speed, gravity, angles in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 speed, gravity, angles。"
      }
    },
    {
      "title": {
        "en": "Draw the result",
        "zh": "画出结果"
      },
      "text": {
        "en": "These lines make a figure. Look for the graph in MATLAB’s Figure window or Figures panel.",
        "zh": "这些代码生成图像。在 MATLAB 的 Figure 窗口或 Figures 面板查看。"
      },
      "phase": "do",
      "code": "ranges = speed^2*sind(2*angles)/gravity;\nplot(angles, ranges, '-o');\nxlabel('Angle (degrees)');",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "4",
      "observe": {
        "en": "After Run, find ranges in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 ranges。"
      }
    },
    {
      "title": {
        "en": "Label or format the figure",
        "zh": "标注或设置图像"
      },
      "text": {
        "en": "These lines change the current figure. Keep all quotation marks and brackets.",
        "zh": "这些代码修改当前图像。保留所有引号和括号。"
      },
      "phase": "do",
      "code": "ylabel('Range (m)');\ntitle('Same speed, different angles');\ngrid on;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "5"
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "ranges",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "6"
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": null,
      "plot": "angle-ranges",
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "7"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "Change the angle. Keep speed and gravity fixed so the comparison is fair.",
        "zh": "改变角度。保持速度和重力不变，才能公平比较。"
      },
      "phase": "understand",
      "diagram": "angle-investigation",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "8"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Test three new angles at the same speed.",
        "zh": "用相同速度测试三个新角度。"
      },
      "code": "speed = 23; gravity = 9.81;\nangles = [25 40 55];\nranges = speed^2*sind(2*angles)/gravity;\nranges",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "Enter the three ranges (m).",
          "zh": "输入三个射程（米）。"
        },
        "type": "vector",
        "answer": [
          41.30861472068699,
          53.10533143154516,
          50.67251747153369
        ],
        "tolerance": 0.02
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "9"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "Change the angle. Keep speed and gravity fixed so the comparison is fair.",
        "zh": "改变角度。保持速度和重力不变，才能公平比较。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Compare angles complete",
        "zh": "比较角度已完成"
      },
      "id": "10"
    }
  ],
  "projectile-motion:target-challenge": [
    {
      "title": {
        "en": "Mission: land in the zone",
        "zh": "任务：落入目标区"
      },
      "text": {
        "en": "Choose 30° or 60°. Both can reach the target, but their peak heights differ.",
        "zh": "选择 30° 或 60°。两者都能到达目标，但最高点不同。"
      },
      "phase": "see",
      "diagram": "target-challenge",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Open a new script",
        "zh": "打开新脚本"
      },
      "text": {
        "en": "In MATLAB, click `New Script`. Use a new blank script for this lesson.",
        "zh": "在 MATLAB 点击 `New Script`。本课使用新的空白脚本。"
      },
      "phase": "understand",
      "visual": "editor",
      "ack": {
        "en": "My blank script is open",
        "zh": "空白脚本已打开"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Save the script",
        "zh": "保存脚本"
      },
      "text": {
        "en": "Click Save. Use the filename below. Keep it in MATLAB’s current folder.",
        "zh": "点击 Save。使用下方文件名，保存在 MATLAB 当前文件夹中。"
      },
      "phase": "do",
      "filename": "p1_target_challenge.m",
      "ack": {
        "en": "Script saved",
        "zh": "脚本已保存"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Choose 30 or 60 for `angle`. The example uses 30. Keep your chosen value throughout this lesson.",
        "zh": "给 `angle` 选择 30 或 60。示例使用 30。本课始终使用你选择的数值。"
      },
      "phase": "do",
      "code": "speed = 20;\nangle = 30;\ngravity = 9.81;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3",
      "observe": {
        "en": "After Run, find speed, angle, gravity in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 speed, angle, gravity。"
      }
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "vx = speed*cosd(angle);\nvy = speed*sind(angle);\nflightTime = 2*vy/gravity;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "4",
      "observe": {
        "en": "After Run, find vx, vy, flightTime in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 vx, vy, flightTime。"
      }
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "t = linspace(0, flightTime, 101);\nx = vx*t;\ny = vy*t - 0.5*gravity*t.^2;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "5",
      "observe": {
        "en": "After Run, find t, x, y in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 t, x, y。"
      }
    },
    {
      "title": {
        "en": "Draw the result",
        "zh": "画出结果"
      },
      "text": {
        "en": "These lines make a figure. Look for the graph in MATLAB’s Figure window or Figures panel.",
        "zh": "这些代码生成图像。在 MATLAB 的 Figure 窗口或 Figures 面板查看。"
      },
      "phase": "do",
      "code": "plot(x, y);\nxlabel('Distance (m)');\nylabel('Height (m)');",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "6"
    },
    {
      "title": {
        "en": "Label or format the figure",
        "zh": "标注或设置图像"
      },
      "text": {
        "en": "These lines change the current figure. Keep all quotation marks and brackets.",
        "zh": "这些代码修改当前图像。保留所有引号和括号。"
      },
      "phase": "do",
      "code": "title('Target launch');\ngrid on;\naxis equal;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "7"
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "range = x(end);\nmaxHeight = max(y);\n[range maxHeight]",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "8",
      "observe": {
        "en": "After Run, find range, maxHeight in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 range, maxHeight。"
      }
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": null,
      "plot": "target-paths",
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "9"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "Choose 30° or 60°. Both can reach the target, but their peak heights differ.",
        "zh": "选择 30° 或 60°。两者都能到达目标，但最高点不同。"
      },
      "phase": "understand",
      "diagram": "target-challenge",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "10"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "A new target is 51–53 metres away. Test this launch. Use its landing distance to decide whether it hits.",
        "zh": "新目标在 51–53 米处。测试这次发射，用落地距离判断能否命中。"
      },
      "code": "speed = 23; angle = 37; gravity = 9.81;\nvx = speed*cosd(angle); vy = speed*sind(angle);\nt = linspace(0,2*vy/gravity,101);\nx = vx*t; y = vy*t - 0.5*gravity*t.^2;\nplot(x,y); grid on;\nx(end)",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "Where does it land (m)?",
          "zh": "落地距离是多少（米）？"
        },
        "type": "number",
        "answer": 51.835620504726876,
        "tolerance": 0.02
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "11"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "Choose 30° or 60°. Both can reach the target, but their peak heights differ.",
        "zh": "选择 30° 或 60°。两者都能到达目标，但最高点不同。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Target challenge complete",
        "zh": "目标挑战已完成"
      },
      "id": "12"
    }
  ],
  "probability:game-rules": [
    {
      "title": {
        "en": "Read the rules",
        "zh": "读懂规则"
      },
      "text": {
        "en": "Net gain is payout minus cost. A negative result means you lost tokens.",
        "zh": "净收益等于返还减去成本。负数表示损失代币。"
      },
      "phase": "see",
      "diagram": "prob-rules",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Open a new script",
        "zh": "打开新脚本"
      },
      "text": {
        "en": "In MATLAB, click `New Script`. Use a new blank script for this lesson.",
        "zh": "在 MATLAB 点击 `New Script`。本课使用新的空白脚本。"
      },
      "phase": "understand",
      "visual": "editor",
      "ack": {
        "en": "My blank script is open",
        "zh": "空白脚本已打开"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Save the script",
        "zh": "保存脚本"
      },
      "text": {
        "en": "Click Save. Use the filename below. Keep it in MATLAB’s current folder.",
        "zh": "点击 Save。使用下方文件名，保存在 MATLAB 当前文件夹中。"
      },
      "phase": "do",
      "filename": "p2_game_rules.m",
      "ack": {
        "en": "Script saved",
        "zh": "脚本已保存"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "cost = 1;\npayout = [4 0];\nnet = payout - cost;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3",
      "observe": {
        "en": "After Run, find cost, payout, net in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 cost, payout, net。"
      }
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "net",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "4"
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": "net =\n     3    -1",
      "plot": null,
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "5"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "Net gain is payout minus cost. A negative result means you lost tokens.",
        "zh": "净收益等于返还减去成本。负数表示损失代币。"
      },
      "phase": "understand",
      "diagram": "prob-rules",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "6"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Try a game costing 3 tokens, with payouts of 11 or 2.",
        "zh": "试试花费 3 枚代币、返还 11 或 2 枚的新游戏。"
      },
      "code": "cost = 3;\npayout = [11 2];\nnet = payout - cost;\nnet",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "Enter both net gains.",
          "zh": "输入两种净收益。"
        },
        "type": "vector",
        "answer": [
          8,
          -1
        ],
        "tolerance": 0
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "7"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "Net gain is payout minus cost. A negative result means you lost tokens.",
        "zh": "净收益等于返还减去成本。负数表示损失代币。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Read the rules complete",
        "zh": "读懂规则已完成"
      },
      "id": "8"
    }
  ],
  "probability:random-draws": [
    {
      "title": {
        "en": "Create random trials",
        "zh": "创建随机试验"
      },
      "text": {
        "en": "A seed lets you repeat a random sequence. Each `rand` value is between 0 and 1.",
        "zh": "种子让随机序列可以重复。`rand` 的每个数值在 0 和 1 之间。"
      },
      "phase": "see",
      "diagram": "prob-uniform",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Open a new script",
        "zh": "打开新脚本"
      },
      "text": {
        "en": "In MATLAB, click `New Script`. Use a new blank script for this lesson.",
        "zh": "在 MATLAB 点击 `New Script`。本课使用新的空白脚本。"
      },
      "phase": "understand",
      "visual": "editor",
      "ack": {
        "en": "My blank script is open",
        "zh": "空白脚本已打开"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Save the script",
        "zh": "保存脚本"
      },
      "text": {
        "en": "Click Save. Use the filename below. Keep it in MATLAB’s current folder.",
        "zh": "点击 Save。使用下方文件名，保存在 MATLAB 当前文件夹中。"
      },
      "phase": "do",
      "filename": "p2_random_draws.m",
      "ack": {
        "en": "Script saved",
        "zh": "脚本已保存"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Set up repeatable trials",
        "zh": "设置可重复的试验"
      },
      "text": {
        "en": "`rng` sets the seed. Run it before `rand` to repeat the same sequence.",
        "zh": "`rng` 设置种子。在 `rand` 前运行它，可以重复同一序列。"
      },
      "phase": "do",
      "code": "rng(7, 'twister');\nu = rand(1,5);\nnumel(u)",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3",
      "observe": {
        "en": "After Run, find u in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 u。"
      }
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": "ans =\n     5",
      "plot": null,
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "4"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "A seed lets you repeat a random sequence. Each `rand` value is between 0 and 1.",
        "zh": "种子让随机序列可以重复。`rand` 的每个数值在 0 和 1 之间。"
      },
      "phase": "understand",
      "diagram": "prob-uniform",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "5"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Generate two batches. Join them with [u v], then count all the draws.",
        "zh": "生成两组随机数。用 [u v] 合并，再统计总个数。"
      },
      "code": "u = rand(1,137);\nv = rand(1,286);\nnumel([u v])",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "What result did MATLAB give?",
          "zh": "MATLAB 得到了什么结果？"
        },
        "type": "number",
        "answer": 423,
        "tolerance": 0
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "6"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "A seed lets you repeat a random sequence. Each `rand` value is between 0 and 1.",
        "zh": "种子让随机序列可以重复。`rand` 的每个数值在 0 和 1 之间。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Create random trials complete",
        "zh": "创建随机试验已完成"
      },
      "id": "7"
    }
  ],
  "probability:logical-test": [
    {
      "title": {
        "en": "Mark the wins",
        "zh": "标记获胜结果"
      },
      "text": {
        "en": "`u < 0.2` tests every value. A true result is 1; a false result is 0.",
        "zh": "`u < 0.2` 检查每个数值。成立为 1，不成立为 0。"
      },
      "phase": "see",
      "diagram": "prob-mask",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Open a new script",
        "zh": "打开新脚本"
      },
      "text": {
        "en": "In MATLAB, click `New Script`. Use a new blank script for this lesson.",
        "zh": "在 MATLAB 点击 `New Script`。本课使用新的空白脚本。"
      },
      "phase": "understand",
      "visual": "editor",
      "ack": {
        "en": "My blank script is open",
        "zh": "空白脚本已打开"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Save the script",
        "zh": "保存脚本"
      },
      "text": {
        "en": "Click Save. Use the filename below. Keep it in MATLAB’s current folder.",
        "zh": "点击 Save。使用下方文件名，保存在 MATLAB 当前文件夹中。"
      },
      "phase": "do",
      "filename": "p2_logical_test.m",
      "ack": {
        "en": "Script saved",
        "zh": "脚本已保存"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "u = [0.10 0.70 0.19 0.20 0.90];\nwin = u < 0.2;\ndouble(win)",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3",
      "observe": {
        "en": "After Run, find u, win in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 u, win。"
      }
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": "ans =\n     1     0     1     0     0",
      "plot": null,
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "4"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "`u < 0.2` tests every value. A true result is 1; a false result is 0.",
        "zh": "`u < 0.2` 检查每个数值。成立为 1，不成立为 0。"
      },
      "phase": "understand",
      "diagram": "prob-mask",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "5"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Try new draws and a new winning threshold.",
        "zh": "试试新的随机数与获胜阈值。"
      },
      "code": "u = [0.31 0.08 0.45 0.29 0.30];\nwin = u < 0.3;\ndouble(win)",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "Enter the five 0/1 results.",
          "zh": "输入五个 0/1 结果。"
        },
        "type": "vector",
        "answer": [
          0,
          1,
          0,
          1,
          0
        ],
        "tolerance": 0
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "6"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "`u < 0.2` tests every value. A true result is 1; a false result is 0.",
        "zh": "`u < 0.2` 检查每个数值。成立为 1，不成立为 0。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Mark the wins complete",
        "zh": "标记获胜结果已完成"
      },
      "id": "7"
    }
  ],
  "probability:estimate-frequency": [
    {
      "title": {
        "en": "Count and estimate",
        "zh": "统计与估计"
      },
      "text": {
        "en": "`sum(win)` counts wins. `mean(win)` gives the winning fraction in this sample.",
        "zh": "`sum(win)` 统计获胜次数。`mean(win)` 给出本次样本的获胜比例。"
      },
      "phase": "see",
      "diagram": "prob-mask",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Open a new script",
        "zh": "打开新脚本"
      },
      "text": {
        "en": "In MATLAB, click `New Script`. Use a new blank script for this lesson.",
        "zh": "在 MATLAB 点击 `New Script`。本课使用新的空白脚本。"
      },
      "phase": "understand",
      "visual": "editor",
      "ack": {
        "en": "My blank script is open",
        "zh": "空白脚本已打开"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Save the script",
        "zh": "保存脚本"
      },
      "text": {
        "en": "Click Save. Use the filename below. Keep it in MATLAB’s current folder.",
        "zh": "点击 Save。使用下方文件名，保存在 MATLAB 当前文件夹中。"
      },
      "phase": "do",
      "filename": "p2_estimate_frequency.m",
      "ack": {
        "en": "Script saved",
        "zh": "脚本已保存"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "u = [0.10 0.70 0.19 0.20 0.90];\nwin = u < 0.2;\n[sum(win) mean(win)]",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3",
      "observe": {
        "en": "After Run, find u, win in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 u, win。"
      }
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": "ans =\n    2.0000    0.4000",
      "plot": null,
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "4"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "`sum(win)` counts wins. `mean(win)` gives the winning fraction in this sample.",
        "zh": "`sum(win)` 统计获胜次数。`mean(win)` 给出本次样本的获胜比例。"
      },
      "phase": "understand",
      "diagram": "prob-mask",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "5"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Estimate the winning fraction for these seven new draws.",
        "zh": "估计这七次新抽样的获胜比例。"
      },
      "code": "u = [0.31 0.08 0.45 0.29 0.30 0.12 0.91];\nwin = u < 0.3;\nmean(win)",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "What fraction won? Use four decimals.",
          "zh": "获胜比例是多少？保留四位小数。"
        },
        "type": "number",
        "answer": 0.42857142857142855,
        "tolerance": 0.0001
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "6"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "`sum(win)` counts wins. `mean(win)` gives the winning fraction in this sample.",
        "zh": "`sum(win)` 统计获胜次数。`mean(win)` 给出本次样本的获胜比例。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Count and estimate complete",
        "zh": "统计与估计已完成"
      },
      "id": "7"
    }
  ],
  "probability:running-balance": [
    {
      "title": {
        "en": "Watch the balance",
        "zh": "观察累计收益"
      },
      "text": {
        "en": "`cumsum` keeps a running total. Each point includes all gains and losses so far.",
        "zh": "`cumsum` 累加数值。每个点包含此前所有收益与损失。"
      },
      "phase": "see",
      "diagram": "prob-rules",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Open a new script",
        "zh": "打开新脚本"
      },
      "text": {
        "en": "In MATLAB, click `New Script`. Use a new blank script for this lesson.",
        "zh": "在 MATLAB 点击 `New Script`。本课使用新的空白脚本。"
      },
      "phase": "understand",
      "visual": "editor",
      "ack": {
        "en": "My blank script is open",
        "zh": "空白脚本已打开"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Save the script",
        "zh": "保存脚本"
      },
      "text": {
        "en": "Click Save. Use the filename below. Keep it in MATLAB’s current folder.",
        "zh": "点击 Save。使用下方文件名，保存在 MATLAB 当前文件夹中。"
      },
      "phase": "do",
      "filename": "p2_running_balance.m",
      "ack": {
        "en": "Script saved",
        "zh": "脚本已保存"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "u = [0.10 0.70 0.19 0.20 0.90];\nwin = u < 0.2;\nnet = 4*win - 1;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3",
      "observe": {
        "en": "After Run, find u, win, net in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 u, win, net。"
      }
    },
    {
      "title": {
        "en": "Draw the result",
        "zh": "画出结果"
      },
      "text": {
        "en": "These lines make a figure. Look for the graph in MATLAB’s Figure window or Figures panel.",
        "zh": "这些代码生成图像。在 MATLAB 的 Figure 窗口或 Figures 面板查看。"
      },
      "phase": "do",
      "code": "balance = cumsum(net);\nplot(1:5, balance, '-o');\nxlabel('Play'); ylabel('Net tokens');",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "4",
      "observe": {
        "en": "After Run, find balance in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 balance。"
      }
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "grid on;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "5"
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": null,
      "plot": "prob-net",
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "6"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "`cumsum` keeps a running total. Each point includes all gains and losses so far.",
        "zh": "`cumsum` 累加数值。每个点包含此前所有收益与损失。"
      },
      "phase": "understand",
      "diagram": "prob-rules",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "7"
    },
    {
      "title": {
        "en": "Read your totals",
        "zh": "读出累计数值"
      },
      "text": {
        "en": "Run this in the Command Window to display the plotted values.",
        "zh": "在命令窗口运行，显示绘图所用的数值。"
      },
      "phase": "do",
      "code": "balance",
      "output": "3  2  5  4  3",
      "typed": true,
      "ack": {
        "en": "I see the new result",
        "zh": "我看到了新结果"
      },
      "id": "8"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Track a new game: each play costs 2; each win returns 5.",
        "zh": "追踪一个新游戏：每次花费 2 枚，获胜返还 5 枚。"
      },
      "code": "u = [0.31 0.08 0.45 0.29 0.30];\nwin = u < 0.3;\nnet = 5*win - 2;\nbalance = cumsum(net);\nbalance",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "Enter the five running balances.",
          "zh": "输入五个累计余额。"
        },
        "type": "vector",
        "answer": [
          -2,
          1,
          -1,
          2,
          0
        ],
        "tolerance": 0
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "9"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "`cumsum` keeps a running total. Each point includes all gains and losses so far.",
        "zh": "`cumsum` 累加数值。每个点包含此前所有收益与损失。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Watch the balance complete",
        "zh": "观察累计收益已完成"
      },
      "id": "10"
    }
  ],
  "probability:expected-value": [
    {
      "title": {
        "en": "Ask if it is fair",
        "zh": "判断是否公平"
      },
      "text": {
        "en": "Expected value is the model average per play. It does not promise a particular result.",
        "zh": "期望值是模型中每次游戏的平均收益，不保证某次的实际结果。"
      },
      "phase": "see",
      "diagram": "prob-expected",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Open a new script",
        "zh": "打开新脚本"
      },
      "text": {
        "en": "In MATLAB, click `New Script`. Use a new blank script for this lesson.",
        "zh": "在 MATLAB 点击 `New Script`。本课使用新的空白脚本。"
      },
      "phase": "understand",
      "visual": "editor",
      "ack": {
        "en": "My blank script is open",
        "zh": "空白脚本已打开"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Save the script",
        "zh": "保存脚本"
      },
      "text": {
        "en": "Click Save. Use the filename below. Keep it in MATLAB’s current folder.",
        "zh": "点击 Save。使用下方文件名，保存在 MATLAB 当前文件夹中。"
      },
      "phase": "do",
      "filename": "p2_expected_value.m",
      "ack": {
        "en": "Script saved",
        "zh": "脚本已保存"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "p = 0.2;\nexpectedNet = 4*p - 1;\nexpectedNet",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3",
      "observe": {
        "en": "After Run, find p, expectedNet in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 p, expectedNet。"
      }
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": "expectedNet =\n   -0.2000",
      "plot": null,
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "4"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "Expected value is the model average per play. It does not promise a particular result.",
        "zh": "期望值是模型中每次游戏的平均收益，不保证某次的实际结果。"
      },
      "phase": "understand",
      "diagram": "prob-expected",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "5"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Try probability 0.17, payout 7 and cost 1.5.",
        "zh": "试试获胜概率 0.17、返还 7、花费 1.5。"
      },
      "code": "p = 0.17;\nexpectedNet = 7*p - 1.5;\nexpectedNet",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "What result did MATLAB give?",
          "zh": "MATLAB 得到了什么结果？"
        },
        "type": "number",
        "answer": -0.31,
        "tolerance": 0.001
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "6"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "Expected value is the model average per play. It does not promise a particular result.",
        "zh": "期望值是模型中每次游戏的平均收益，不保证某次的实际结果。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Ask if it is fair complete",
        "zh": "判断是否公平已完成"
      },
      "id": "7"
    }
  ],
  "probability:large-sample": [
    {
      "title": {
        "en": "Scale the experiment",
        "zh": "扩大实验规模"
      },
      "text": {
        "en": "A larger sample usually gives a steadier estimate. It still has random variation.",
        "zh": "更大的样本通常给出更稳定的估计，但仍有随机波动。"
      },
      "phase": "see",
      "diagram": "prob-expected",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Open a new script",
        "zh": "打开新脚本"
      },
      "text": {
        "en": "In MATLAB, click `New Script`. Use a new blank script for this lesson.",
        "zh": "在 MATLAB 点击 `New Script`。本课使用新的空白脚本。"
      },
      "phase": "understand",
      "visual": "editor",
      "ack": {
        "en": "My blank script is open",
        "zh": "空白脚本已打开"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Save the script",
        "zh": "保存脚本"
      },
      "text": {
        "en": "Click Save. Use the filename below. Keep it in MATLAB’s current folder.",
        "zh": "点击 Save。使用下方文件名，保存在 MATLAB 当前文件夹中。"
      },
      "phase": "do",
      "filename": "p2_large_sample.m",
      "ack": {
        "en": "Script saved",
        "zh": "脚本已保存"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Set up repeatable trials",
        "zh": "设置可重复的试验"
      },
      "text": {
        "en": "`rng` sets the seed. Run it before `rand` to repeat the same sequence.",
        "zh": "`rng` 设置种子。在 `rand` 前运行它，可以重复同一序列。"
      },
      "phase": "do",
      "code": "rng(7, 'twister');\nu = rand(1,10000);\nwin = u < 0.2;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3",
      "observe": {
        "en": "After Run, find u, win in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 u, win。"
      }
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "net = 4*win - 1;\nestimate = mean(win);\naverageNet = mean(net);",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "4",
      "observe": {
        "en": "After Run, find net, estimate, averageNet in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 net, estimate, averageNet。"
      }
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "[numel(u) abs(averageNet - (4*estimate-1)) < 1e-10]",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "5"
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": "ans =\n       10000           1",
      "plot": null,
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "6"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "A larger sample usually gives a steadier estimate. It still has random variation.",
        "zh": "更大的样本通常给出更稳定的估计，但仍有随机波动。"
      },
      "phase": "understand",
      "diagram": "prob-expected",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "7"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Use a short fixed sample to inspect the same average-net calculation. Each entry is one draw.",
        "zh": "用一组固定的短样本检查同样的平均净收益计算。每一项代表一次抽样。"
      },
      "code": "u = [0.04 0.28 0.18 0.81 0.33 0.07 0.20];\nwin = u < 0.2;\nnet = 4*win - 1;\nmean(net)",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "What is the average net gain? Use four decimals.",
          "zh": "平均净收益是多少？保留四位小数。"
        },
        "type": "number",
        "answer": 0.7142857142857143,
        "tolerance": 0.0001
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "8"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "A larger sample usually gives a steadier estimate. It still has random variation.",
        "zh": "更大的样本通常给出更稳定的估计，但仍有随机波动。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Scale the experiment complete",
        "zh": "扩大实验规模已完成"
      },
      "id": "9"
    }
  ],
  "probability:fair-game-challenge": [
    {
      "title": {
        "en": "Design a fair game",
        "zh": "设计公平游戏"
      },
      "text": {
        "en": "A fair game has expected net gain zero. A short run can still lose tokens.",
        "zh": "公平游戏的期望净收益为零。短期游戏仍可能损失代币。"
      },
      "phase": "see",
      "diagram": "prob-rules",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Open a new script",
        "zh": "打开新脚本"
      },
      "text": {
        "en": "In MATLAB, click `New Script`. Use a new blank script for this lesson.",
        "zh": "在 MATLAB 点击 `New Script`。本课使用新的空白脚本。"
      },
      "phase": "understand",
      "visual": "editor",
      "ack": {
        "en": "My blank script is open",
        "zh": "空白脚本已打开"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Save the script",
        "zh": "保存脚本"
      },
      "text": {
        "en": "Click Save. Use the filename below. Keep it in MATLAB’s current folder.",
        "zh": "点击 Save。使用下方文件名，保存在 MATLAB 当前文件夹中。"
      },
      "phase": "do",
      "filename": "p2_fair_game_challenge.m",
      "ack": {
        "en": "Script saved",
        "zh": "脚本已保存"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "p = 0.2;\ncost = 1;\nwinPayout = cost/p;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3",
      "observe": {
        "en": "After Run, find p, cost, winPayout in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 p, cost, winPayout。"
      }
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "expectedNet = p*winPayout-cost;\n[winPayout expectedNet]",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "4",
      "observe": {
        "en": "After Run, find expectedNet in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 expectedNet。"
      }
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": "ans =\n     5     0",
      "plot": null,
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "5"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "A fair game has expected net gain zero. A short run can still lose tokens.",
        "zh": "公平游戏的期望净收益为零。短期游戏仍可能损失代币。"
      },
      "phase": "understand",
      "diagram": "prob-rules",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "6"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Design the fair payout for a new probability and cost.",
        "zh": "为新的获胜概率和花费设计公平返还额。"
      },
      "code": "p = 0.16; cost = 1.2;\nwinPayout = cost/p;\nwinPayout",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "What result did MATLAB give?",
          "zh": "MATLAB 得到了什么结果？"
        },
        "type": "number",
        "answer": 7.5,
        "tolerance": 0.001
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "7"
    },
    {
      "title": {
        "en": "Keep evidence of your work",
        "zh": "保留你的作品证据"
      },
      "text": {
        "en": "Save your script and figure. Your teacher will review your explanation.",
        "zh": "保存脚本和图像。老师会查看你的解释。"
      },
      "phase": "continue",
      "assignment": {
        "en": "Final task: simulate the new game using mission 7. Save both versions and explain why a fair rule can still produce a losing sample. Show the script and explanation to your teacher.",
        "zh": "最终任务：用任务 7 的方法模拟新游戏。保存两个版本，解释公平规则为何仍可产生亏损样本。向老师展示脚本与解释。"
      },
      "ack": {
        "en": "I saved my work",
        "zh": "我已保存作品"
      },
      "id": "8"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "A fair game has expected net gain zero. A short run can still lose tokens.",
        "zh": "公平游戏的期望净收益为零。短期游戏仍可能损失代币。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Design a fair game complete",
        "zh": "设计公平游戏已完成"
      },
      "id": "9"
    }
  ],
  "fractals:pattern-matrix": [
    {
      "title": {
        "en": "Build a small pattern",
        "zh": "建立小图案"
      },
      "text": {
        "en": "A matrix has rows and columns. A semicolon inside brackets starts a new row.",
        "zh": "矩阵有行和列。方括号内的分号表示开始新的一行。"
      },
      "phase": "see",
      "diagram": "carpet-one",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Open a new script",
        "zh": "打开新脚本"
      },
      "text": {
        "en": "In MATLAB, click `New Script`. Use a new blank script for this lesson.",
        "zh": "在 MATLAB 点击 `New Script`。本课使用新的空白脚本。"
      },
      "phase": "understand",
      "visual": "editor",
      "ack": {
        "en": "My blank script is open",
        "zh": "空白脚本已打开"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Save the script",
        "zh": "保存脚本"
      },
      "text": {
        "en": "Click Save. Use the filename below. Keep it in MATLAB’s current folder.",
        "zh": "点击 Save。使用下方文件名，保存在 MATLAB 当前文件夹中。"
      },
      "phase": "do",
      "filename": "p3_pattern_matrix.m",
      "ack": {
        "en": "Script saved",
        "zh": "脚本已保存"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "mask = [1 1 1; 1 0 1; 1 1 1];\nsize(mask)",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3",
      "observe": {
        "en": "After Run, find mask in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 mask。"
      }
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": "ans =\n     3     3",
      "plot": null,
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "4"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "A matrix has rows and columns. A semicolon inside brackets starts a new row.",
        "zh": "矩阵有行和列。方括号内的分号表示开始新的一行。"
      },
      "phase": "understand",
      "diagram": "carpet-one",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "5"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Try a rectangular pattern. Ask MATLAB for its dimensions.",
        "zh": "试试一个长方形图案，用 MATLAB 查询它的尺寸。"
      },
      "code": "mask = [1 0 1 0; 0 1 0 1; 1 1 0 0];\nsize(mask)",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "Enter [rows columns].",
          "zh": "输入 [行数 列数]。"
        },
        "type": "vector",
        "answer": [
          3,
          4
        ],
        "tolerance": 0
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "6"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "A matrix has rows and columns. A semicolon inside brackets starts a new row.",
        "zh": "矩阵有行和列。方括号内的分号表示开始新的一行。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Build a small pattern complete",
        "zh": "建立小图案已完成"
      },
      "id": "7"
    }
  ],
  "fractals:matrix-index": [
    {
      "title": {
        "en": "Locate the missing square",
        "zh": "定位空白方格"
      },
      "text": {
        "en": "`mask(row,column)` selects one cell. Count rows down and columns across.",
        "zh": "`mask(行,列)` 选取一个格子。向下数行，向右数列。"
      },
      "phase": "see",
      "diagram": "carpet-one",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Open a new script",
        "zh": "打开新脚本"
      },
      "text": {
        "en": "In MATLAB, click `New Script`. Use a new blank script for this lesson.",
        "zh": "在 MATLAB 点击 `New Script`。本课使用新的空白脚本。"
      },
      "phase": "understand",
      "visual": "editor",
      "ack": {
        "en": "My blank script is open",
        "zh": "空白脚本已打开"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Save the script",
        "zh": "保存脚本"
      },
      "text": {
        "en": "Click Save. Use the filename below. Keep it in MATLAB’s current folder.",
        "zh": "点击 Save。使用下方文件名，保存在 MATLAB 当前文件夹中。"
      },
      "phase": "do",
      "filename": "p3_matrix_index.m",
      "ack": {
        "en": "Script saved",
        "zh": "脚本已保存"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "mask = [1 1 1; 1 0 1; 1 1 1];\n[mask(2,2) mask(1,3)]",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3",
      "observe": {
        "en": "After Run, find mask in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 mask。"
      }
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": "ans =\n     0     1",
      "plot": null,
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "4"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "`mask(row,column)` selects one cell. Count rows down and columns across.",
        "zh": "`mask(行,列)` 选取一个格子。向下数行，向右数列。"
      },
      "phase": "understand",
      "diagram": "carpet-one",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "5"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Read three positions from a new mask.",
        "zh": "从新模板中读取三个位置。"
      },
      "code": "mask = [1 0 1; 0 1 0; 1 1 0];\n[mask(2,2) mask(3,3) mask(3,2)]",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "Enter the three values.",
          "zh": "输入三个数值。"
        },
        "type": "vector",
        "answer": [
          1,
          0,
          1
        ],
        "tolerance": 0
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "6"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "`mask(row,column)` selects one cell. Count rows down and columns across.",
        "zh": "`mask(行,列)` 选取一个格子。向下数行，向右数列。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Locate the missing square complete",
        "zh": "定位空白方格已完成"
      },
      "id": "7"
    }
  ],
  "fractals:draw-mask": [
    {
      "title": {
        "en": "Turn numbers into art",
        "zh": "把数字变成图案"
      },
      "text": {
        "en": "In `mask`, 1 means keep the cell. `1-mask` makes those cells black in the picture.",
        "zh": "`mask` 中的 1 表示保留。`1-mask` 让这些格子在图中显示为黑色。"
      },
      "phase": "see",
      "diagram": "carpet-one",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Open a new script",
        "zh": "打开新脚本"
      },
      "text": {
        "en": "In MATLAB, click `New Script`. Use a new blank script for this lesson.",
        "zh": "在 MATLAB 点击 `New Script`。本课使用新的空白脚本。"
      },
      "phase": "understand",
      "visual": "editor",
      "ack": {
        "en": "My blank script is open",
        "zh": "空白脚本已打开"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Save the script",
        "zh": "保存脚本"
      },
      "text": {
        "en": "Click Save. Use the filename below. Keep it in MATLAB’s current folder.",
        "zh": "点击 Save。使用下方文件名，保存在 MATLAB 当前文件夹中。"
      },
      "phase": "do",
      "filename": "p3_draw_mask.m",
      "ack": {
        "en": "Script saved",
        "zh": "脚本已保存"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Draw the result",
        "zh": "画出结果"
      },
      "text": {
        "en": "These lines make a figure. Look for the graph in MATLAB’s Figure window or Figures panel.",
        "zh": "这些代码生成图像。在 MATLAB 的 Figure 窗口或 Figures 面板查看。"
      },
      "phase": "do",
      "code": "mask = [1 1 1; 1 0 1; 1 1 1];\nimagesc(1-mask, [0 1]);\ncolormap(gray);",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3",
      "observe": {
        "en": "After Run, find mask in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 mask。"
      }
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "axis image; axis off;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "4"
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": null,
      "plot": "carpet-one",
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "5"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "In `mask`, 1 means keep the cell. `1-mask` makes those cells black in the picture.",
        "zh": "`mask` 中的 1 表示保留。`1-mask` 让这些格子在图中显示为黑色。"
      },
      "phase": "understand",
      "diagram": "carpet-one",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "6"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Draw a new mask. nnz counts the nonzero entries: the black cells here.",
        "zh": "画一个新模板。nnz 统计非零项，也就是这里的黑格。"
      },
      "code": "mask = [1 0 1; 0 1 0; 1 0 1];\nimagesc(1-mask,[0 1]);\ncolormap(gray); axis image; axis off;\nnnz(mask)",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "How many black cells did MATLAB count?",
          "zh": "MATLAB 统计出多少个黑格？"
        },
        "type": "number",
        "answer": 5,
        "tolerance": 0
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "7"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "In `mask`, 1 means keep the cell. `1-mask` makes those cells black in the picture.",
        "zh": "`mask` 中的 1 表示保留。`1-mask` 让这些格子在图中显示为黑色。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Turn numbers into art complete",
        "zh": "把数字变成图案已完成"
      },
      "id": "8"
    }
  ],
  "fractals:replacement-rule": [
    {
      "title": {
        "en": "Replace every square",
        "zh": "替换每个方格"
      },
      "text": {
        "en": "`kron` replaces each kept cell with the small pattern. A missing cell stays empty.",
        "zh": "`kron` 把每个保留格子替换为小图案。缺失格子保持空白。"
      },
      "phase": "see",
      "diagram": "carpet-replace",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Open a new script",
        "zh": "打开新脚本"
      },
      "text": {
        "en": "In MATLAB, click `New Script`. Use a new blank script for this lesson.",
        "zh": "在 MATLAB 点击 `New Script`。本课使用新的空白脚本。"
      },
      "phase": "understand",
      "visual": "editor",
      "ack": {
        "en": "My blank script is open",
        "zh": "空白脚本已打开"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Save the script",
        "zh": "保存脚本"
      },
      "text": {
        "en": "Click Save. Use the filename below. Keep it in MATLAB’s current folder.",
        "zh": "点击 Save。使用下方文件名，保存在 MATLAB 当前文件夹中。"
      },
      "phase": "do",
      "filename": "p3_replacement_rule.m",
      "ack": {
        "en": "Script saved",
        "zh": "脚本已保存"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Replace cells with blocks",
        "zh": "用方块替换格子"
      },
      "text": {
        "en": "`kron` expands each entry into a block. Run it before displaying the new image.",
        "zh": "`kron` 把每一项扩展为方块。先运行，再显示新图像。"
      },
      "phase": "do",
      "code": "mask = [1 1 1; 1 0 1; 1 1 1];\nA = kron(mask, mask);\n[size(A) nnz(A)]",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3",
      "observe": {
        "en": "After Run, find mask, A in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 mask, A。"
      }
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": "ans =\n     9     9    64",
      "plot": null,
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "4"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "`kron` replaces each kept cell with the small pattern. A missing cell stays empty.",
        "zh": "`kron` 把每个保留格子替换为小图案。缺失格子保持空白。"
      },
      "phase": "understand",
      "diagram": "carpet-replace",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "5"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Apply the same replacement rule to a new mask.",
        "zh": "把相同的替换规则应用到新模板。"
      },
      "code": "mask = [1 0 1; 0 1 0; 1 0 1];\nA = kron(mask,mask);\nnnz(A)",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "How many cells are kept?",
          "zh": "保留了多少格？"
        },
        "type": "number",
        "answer": 25,
        "tolerance": 0
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "6"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "`kron` replaces each kept cell with the small pattern. A missing cell stays empty.",
        "zh": "`kron` 把每个保留格子替换为小图案。缺失格子保持空白。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Replace every square complete",
        "zh": "替换每个方格已完成"
      },
      "id": "7"
    }
  ],
  "fractals:repeat-loop": [
    {
      "title": {
        "en": "Repeat with a loop",
        "zh": "用循环重复"
      },
      "text": {
        "en": "A `for` loop repeats the lines before its matching `end`. Here it makes three levels.",
        "zh": "`for` 循环重复执行到对应 `end` 之间的代码。这里生成三层图案。"
      },
      "phase": "see",
      "diagram": "carpet-replace",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Open a new script",
        "zh": "打开新脚本"
      },
      "text": {
        "en": "In MATLAB, click `New Script`. Use a new blank script for this lesson.",
        "zh": "在 MATLAB 点击 `New Script`。本课使用新的空白脚本。"
      },
      "phase": "understand",
      "visual": "editor",
      "ack": {
        "en": "My blank script is open",
        "zh": "空白脚本已打开"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Save the script",
        "zh": "保存脚本"
      },
      "text": {
        "en": "Click Save. Use the filename below. Keep it in MATLAB’s current folder.",
        "zh": "点击 Save。使用下方文件名，保存在 MATLAB 当前文件夹中。"
      },
      "phase": "do",
      "filename": "p3_repeat_loop.m",
      "ack": {
        "en": "Script saved",
        "zh": "脚本已保存"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "mask = [1 1 1; 1 0 1; 1 1 1];\nA = 1;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3",
      "observe": {
        "en": "After Run, find mask, A in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 mask, A。"
      }
    },
    {
      "title": {
        "en": "Repeat the pattern",
        "zh": "重复图案"
      },
      "text": {
        "en": "Copy the complete loop. The line inside repeats once for each level.",
        "zh": "复制完整循环。循环内的代码在每一层执行一次。"
      },
      "phase": "do",
      "code": "for level = 1:3\n    A = kron(A, mask);\nend",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "4",
      "observe": {
        "en": "Wait for >> to return in Command Window. A complete loop should run without red errors.",
        "zh": "等待命令窗口重新出现 >>。完整循环应运行结束，且没有红色报错。"
      }
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "[size(A) nnz(A)]",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "5"
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": "ans =\n    27    27   512",
      "plot": null,
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "6"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "A `for` loop repeats the lines before its matching `end`. Here it makes three levels.",
        "zh": "`for` 循环重复执行到对应 `end` 之间的代码。这里生成三层图案。"
      },
      "phase": "understand",
      "diagram": "carpet-replace",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "7"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Run level 4. Read the last result.",
        "zh": "运行第 4 层。读出最后的结果。"
      },
      "code": "mask = [1 1 1; 1 0 1; 1 1 1];\nA = 1;\nfor level = 1:4\n    A = kron(A,mask);\nend\nnnz(A)",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "Enter the final result.",
          "zh": "输入最后的结果。"
        },
        "type": "number",
        "answer": 4096,
        "tolerance": 0
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "8"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "A `for` loop repeats the lines before its matching `end`. Here it makes three levels.",
        "zh": "`for` 循环重复执行到对应 `end` 之间的代码。这里生成三层图案。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Repeat with a loop complete",
        "zh": "用循环重复已完成"
      },
      "id": "9"
    }
  ],
  "fractals:carpet-plot": [
    {
      "title": {
        "en": "See self-similarity",
        "zh": "观察自相似"
      },
      "text": {
        "en": "Small pieces repeat the same shape. The grid has 27 rows and 27 columns.",
        "zh": "小部分重复同样的形状。网格有 27 行、27 列。"
      },
      "phase": "see",
      "diagram": "carpet-three",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Open a new script",
        "zh": "打开新脚本"
      },
      "text": {
        "en": "In MATLAB, click `New Script`. Use a new blank script for this lesson.",
        "zh": "在 MATLAB 点击 `New Script`。本课使用新的空白脚本。"
      },
      "phase": "understand",
      "visual": "editor",
      "ack": {
        "en": "My blank script is open",
        "zh": "空白脚本已打开"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Save the script",
        "zh": "保存脚本"
      },
      "text": {
        "en": "Click Save. Use the filename below. Keep it in MATLAB’s current folder.",
        "zh": "点击 Save。使用下方文件名，保存在 MATLAB 当前文件夹中。"
      },
      "phase": "do",
      "filename": "p3_carpet_plot.m",
      "ack": {
        "en": "Script saved",
        "zh": "脚本已保存"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "mask = [1 1 1; 1 0 1; 1 1 1];\nA = 1;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3",
      "observe": {
        "en": "After Run, find mask, A in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 mask, A。"
      }
    },
    {
      "title": {
        "en": "Repeat the pattern",
        "zh": "重复图案"
      },
      "text": {
        "en": "Copy the complete loop. The line inside repeats once for each level.",
        "zh": "复制完整循环。循环内的代码在每一层执行一次。"
      },
      "phase": "do",
      "code": "for level = 1:3\n    A = kron(A, mask);\nend",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "4",
      "observe": {
        "en": "Wait for >> to return in Command Window. A complete loop should run without red errors.",
        "zh": "等待命令窗口重新出现 >>。完整循环应运行结束，且没有红色报错。"
      }
    },
    {
      "title": {
        "en": "Draw the result",
        "zh": "画出结果"
      },
      "text": {
        "en": "These lines make a figure. Look for the graph in MATLAB’s Figure window or Figures panel.",
        "zh": "这些代码生成图像。在 MATLAB 的 Figure 窗口或 Figures 面板查看。"
      },
      "phase": "do",
      "code": "imagesc(1-A, [0 1]);\ncolormap(gray); axis image; axis off;\nnumel(A)",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "5"
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": null,
      "plot": "carpet-three",
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "6"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "Small pieces repeat the same shape. The grid has 27 rows and 27 columns.",
        "zh": "小部分重复同样的形状。网格有 27 行、27 列。"
      },
      "phase": "understand",
      "diagram": "carpet-three",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "7"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Run level 4. Read the last result.",
        "zh": "运行第 4 层。读出最后的结果。"
      },
      "code": "mask = [1 1 1; 1 0 1; 1 1 1];\nA = 1;\nfor level = 1:4\n    A = kron(A,mask);\nend\nimagesc(1-A,[0 1]);\ncolormap(gray); axis image; axis off;\nnumel(A)",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "Enter the final result.",
          "zh": "输入最后的结果。"
        },
        "type": "number",
        "answer": 6561,
        "tolerance": 0
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "8"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "Small pieces repeat the same shape. The grid has 27 rows and 27 columns.",
        "zh": "小部分重复同样的形状。网格有 27 行、27 列。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "See self-similarity complete",
        "zh": "观察自相似已完成"
      },
      "id": "9"
    }
  ],
  "fractals:measure-area": [
    {
      "title": {
        "en": "Measure the kept fraction",
        "zh": "测量保留比例"
      },
      "text": {
        "en": "`nnz` counts nonzero cells. Divide by `numel` to find the fraction kept.",
        "zh": "`nnz` 统计非零格子。除以 `numel` 就得到保留比例。"
      },
      "phase": "see",
      "diagram": "carpet-area",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Open a new script",
        "zh": "打开新脚本"
      },
      "text": {
        "en": "In MATLAB, click `New Script`. Use a new blank script for this lesson.",
        "zh": "在 MATLAB 点击 `New Script`。本课使用新的空白脚本。"
      },
      "phase": "understand",
      "visual": "editor",
      "ack": {
        "en": "My blank script is open",
        "zh": "空白脚本已打开"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Save the script",
        "zh": "保存脚本"
      },
      "text": {
        "en": "Click Save. Use the filename below. Keep it in MATLAB’s current folder.",
        "zh": "点击 Save。使用下方文件名，保存在 MATLAB 当前文件夹中。"
      },
      "phase": "do",
      "filename": "p3_measure_area.m",
      "ack": {
        "en": "Script saved",
        "zh": "脚本已保存"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "mask = [1 1 1; 1 0 1; 1 1 1];\nA = 1;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3",
      "observe": {
        "en": "After Run, find mask, A in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 mask, A。"
      }
    },
    {
      "title": {
        "en": "Repeat the pattern",
        "zh": "重复图案"
      },
      "text": {
        "en": "Copy the complete loop. The line inside repeats once for each level.",
        "zh": "复制完整循环。循环内的代码在每一层执行一次。"
      },
      "phase": "do",
      "code": "for level = 1:3\n    A = kron(A, mask);\nend",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "4",
      "observe": {
        "en": "Wait for >> to return in Command Window. A complete loop should run without red errors.",
        "zh": "等待命令窗口重新出现 >>。完整循环应运行结束，且没有红色报错。"
      }
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "keptFraction = nnz(A)/numel(A);\nkeptFraction",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "5",
      "observe": {
        "en": "After Run, find keptFraction in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 keptFraction。"
      }
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": "keptFraction =\n    0.7023",
      "plot": null,
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "6"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "`nnz` counts nonzero cells. Divide by `numel` to find the fraction kept.",
        "zh": "`nnz` 统计非零格子。除以 `numel` 就得到保留比例。"
      },
      "phase": "understand",
      "diagram": "carpet-area",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "7"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Run level 4. Read the last result.",
        "zh": "运行第 4 层。读出最后的结果。"
      },
      "code": "mask = [1 1 1; 1 0 1; 1 1 1];\nA = 1;\nfor level = 1:4\n    A = kron(A,mask);\nend\nnnz(A)/numel(A)",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "Enter the final result (four decimals).",
          "zh": "输入最后的结果（四位小数）。"
        },
        "type": "number",
        "answer": 0.624295076969974,
        "tolerance": 0.0001
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "8"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "`nnz` counts nonzero cells. Divide by `numel` to find the fraction kept.",
        "zh": "`nnz` 统计非零格子。除以 `numel` 就得到保留比例。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Measure the kept fraction complete",
        "zh": "测量保留比例已完成"
      },
      "id": "9"
    }
  ],
  "fractals:fractal-challenge": [
    {
      "title": {
        "en": "Predict the next level",
        "zh": "预测下一层"
      },
      "text": {
        "en": "Each level multiplies side length by 3 and kept cells by 8. Predict before running.",
        "zh": "每增加一层，边长乘 3，保留格数乘 8。先预测，再运行。"
      },
      "phase": "see",
      "diagram": "carpet-area",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Open a new script",
        "zh": "打开新脚本"
      },
      "text": {
        "en": "In MATLAB, click `New Script`. Use a new blank script for this lesson.",
        "zh": "在 MATLAB 点击 `New Script`。本课使用新的空白脚本。"
      },
      "phase": "understand",
      "visual": "editor",
      "ack": {
        "en": "My blank script is open",
        "zh": "空白脚本已打开"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Save the script",
        "zh": "保存脚本"
      },
      "text": {
        "en": "Click Save. Use the filename below. Keep it in MATLAB’s current folder.",
        "zh": "点击 Save。使用下方文件名，保存在 MATLAB 当前文件夹中。"
      },
      "phase": "do",
      "filename": "p3_fractal_challenge.m",
      "ack": {
        "en": "Script saved",
        "zh": "脚本已保存"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "mask = [1 1 1; 1 0 1; 1 1 1];\nA = 1;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3",
      "observe": {
        "en": "After Run, find mask, A in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 mask, A。"
      }
    },
    {
      "title": {
        "en": "Repeat the pattern",
        "zh": "重复图案"
      },
      "text": {
        "en": "Copy the complete loop. The line inside repeats once for each level.",
        "zh": "复制完整循环。循环内的代码在每一层执行一次。"
      },
      "phase": "do",
      "code": "for level = 1:4\n    A = kron(A, mask);\nend",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "4",
      "observe": {
        "en": "Wait for >> to return in Command Window. A complete loop should run without red errors.",
        "zh": "等待命令窗口重新出现 >>。完整循环应运行结束，且没有红色报错。"
      }
    },
    {
      "title": {
        "en": "Draw the result",
        "zh": "画出结果"
      },
      "text": {
        "en": "These lines make a figure. Look for the graph in MATLAB’s Figure window or Figures panel.",
        "zh": "这些代码生成图像。在 MATLAB 的 Figure 窗口或 Figures 面板查看。"
      },
      "phase": "do",
      "code": "[size(A,1) nnz(A)]\nimagesc(1-A, [0 1]);\ncolormap(gray); axis image; axis off;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "5"
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": "ans =\n    81   4096",
      "plot": null,
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "6"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "Each level multiplies side length by 3 and kept cells by 8. Predict before running.",
        "zh": "每增加一层，边长乘 3，保留格数乘 8。先预测，再运行。"
      },
      "phase": "understand",
      "diagram": "carpet-area",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "7"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Run level 4 with a five-cell mask. Read the last result.",
        "zh": "运行第 4 层，使用五格模板。读出最后的结果。"
      },
      "code": "mask = [1 0 1; 0 1 0; 1 0 1];\nA = 1;\nfor level = 1:4\n    A = kron(A,mask);\nend\nnnz(A)",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "Enter the final result.",
          "zh": "输入最后的结果。"
        },
        "type": "number",
        "answer": 625,
        "tolerance": 0
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "8"
    },
    {
      "title": {
        "en": "Keep evidence of your work",
        "zh": "保留你的作品证据"
      },
      "text": {
        "en": "Save your script and figure. Your teacher will review your explanation.",
        "zh": "保存脚本和图像。老师会查看你的解释。"
      },
      "phase": "continue",
      "assignment": {
        "en": "Final task: save levels 2, 3 and 4 as figures. Explain self-similarity and why finite screens cannot show infinite detail. Keep levels at 4 or below for this exercise.",
        "zh": "最终任务：保存第 2、3、4 层图像。解释自相似以及有限屏幕为何无法显示无限细节。本练习保持层数不超过 4。"
      },
      "ack": {
        "en": "I saved my work",
        "zh": "我已保存作品"
      },
      "id": "9"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "Each level multiplies side length by 3 and kept cells by 8. Predict before running.",
        "zh": "每增加一层，边长乘 3，保留格数乘 8。先预测，再运行。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Predict the next level complete",
        "zh": "预测下一层已完成"
      },
      "id": "10"
    }
  ],
  "image-compression:pixel-values": [
    {
      "title": {
        "en": "Read a tiny image",
        "zh": "读取微型图像"
      },
      "text": {
        "en": "Each matrix entry is one pixel. Here 0 is black and 255 is white.",
        "zh": "矩阵中的每一项代表一个像素。这里 0 是黑色，255 是白色。"
      },
      "phase": "see",
      "diagram": "image-original",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Open a new script",
        "zh": "打开新脚本"
      },
      "text": {
        "en": "In MATLAB, click `New Script`. Use a new blank script for this lesson.",
        "zh": "在 MATLAB 点击 `New Script`。本课使用新的空白脚本。"
      },
      "phase": "understand",
      "visual": "editor",
      "ack": {
        "en": "My blank script is open",
        "zh": "空白脚本已打开"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Save the script",
        "zh": "保存脚本"
      },
      "text": {
        "en": "Click Save. Use the filename below. Keep it in MATLAB’s current folder.",
        "zh": "点击 Save。使用下方文件名，保存在 MATLAB 当前文件夹中。"
      },
      "phase": "do",
      "filename": "p4_pixel_values.m",
      "ack": {
        "en": "Script saved",
        "zh": "脚本已保存"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Load the pixel values",
        "zh": "载入像素数值"
      },
      "text": {
        "en": "Copy the whole matrix together, including both square brackets. Each row is one row of pixels.",
        "zh": "一次复制整个矩阵，包括两端方括号。每一行就是一行像素。"
      },
      "phase": "do",
      "code": "A = [0 0 80 80 80 80 0 0;\n     0 80 160 160 160 160 80 0;\n     80 160 240 0 0 240 160 80;\n     80 160 240 240 240 240 160 80;\n     80 160 0 240 240 0 160 80;\n     80 160 240 0 0 240 160 80;\n     0 80 160 160 160 160 80 0;\n     0 0 80 80 80 80 0 0];",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3",
      "observe": {
        "en": "After Run, find A in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 A。"
      }
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "[size(A) A(3,4)]",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "4"
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": "ans =\n     8     8     0",
      "plot": null,
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "5"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "Each matrix entry is one pixel. Here 0 is black and 255 is white.",
        "zh": "矩阵中的每一项代表一个像素。这里 0 是黑色，255 是白色。"
      },
      "phase": "understand",
      "diagram": "image-original",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "6"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Keep the example image A. Inspect three different pixels.",
        "zh": "保留示例图像 A。查看三个不同的像素。"
      },
      "code": "[A(2,3) A(5,3) A(6,6)]",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "Enter the three pixel values.",
          "zh": "输入三个像素值。"
        },
        "type": "vector",
        "answer": [
          160,
          0,
          240
        ],
        "tolerance": 0
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "7"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "Each matrix entry is one pixel. Here 0 is black and 255 is white.",
        "zh": "矩阵中的每一项代表一个像素。这里 0 是黑色，255 是白色。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Read a tiny image complete",
        "zh": "读取微型图像已完成"
      },
      "id": "8"
    }
  ],
  "image-compression:show-image": [
    {
      "title": {
        "en": "Keep the color scale fixed",
        "zh": "固定色标范围"
      },
      "text": {
        "en": "Keep `[0 255]` fixed so the same number always has the same shade.",
        "zh": "固定使用 `[0 255]`，让同一个数值始终显示为相同灰度。"
      },
      "phase": "see",
      "diagram": "image-original",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Open a new script",
        "zh": "打开新脚本"
      },
      "text": {
        "en": "In MATLAB, click `New Script`. Use a new blank script for this lesson.",
        "zh": "在 MATLAB 点击 `New Script`。本课使用新的空白脚本。"
      },
      "phase": "understand",
      "visual": "editor",
      "ack": {
        "en": "My blank script is open",
        "zh": "空白脚本已打开"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Save the script",
        "zh": "保存脚本"
      },
      "text": {
        "en": "Click Save. Use the filename below. Keep it in MATLAB’s current folder.",
        "zh": "点击 Save。使用下方文件名，保存在 MATLAB 当前文件夹中。"
      },
      "phase": "do",
      "filename": "p4_show_image.m",
      "ack": {
        "en": "Script saved",
        "zh": "脚本已保存"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Load the pixel values",
        "zh": "载入像素数值"
      },
      "text": {
        "en": "Copy the whole matrix together, including both square brackets. Each row is one row of pixels.",
        "zh": "一次复制整个矩阵，包括两端方括号。每一行就是一行像素。"
      },
      "phase": "do",
      "code": "A = [0 0 80 80 80 80 0 0;\n     0 80 160 160 160 160 80 0;\n     80 160 240 0 0 240 160 80;\n     80 160 240 240 240 240 160 80;\n     80 160 0 240 240 0 160 80;\n     80 160 240 0 0 240 160 80;\n     0 80 160 160 160 160 80 0;\n     0 0 80 80 80 80 0 0];",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3",
      "observe": {
        "en": "After Run, find A in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 A。"
      }
    },
    {
      "title": {
        "en": "Draw the result",
        "zh": "画出结果"
      },
      "text": {
        "en": "These lines make a figure. Look for the graph in MATLAB’s Figure window or Figures panel.",
        "zh": "这些代码生成图像。在 MATLAB 的 Figure 窗口或 Figures 面板查看。"
      },
      "phase": "do",
      "code": "imagesc(A, [0 255]);\ncolormap(gray); axis image;\nxlabel('Column'); ylabel('Row');",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "4"
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": null,
      "plot": "image-original",
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "5"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "Keep `[0 255]` fixed so the same number always has the same shade.",
        "zh": "固定使用 `[0 255]`，让同一个数值始终显示为相同灰度。"
      },
      "phase": "understand",
      "diagram": "image-original",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "6"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Brighten the image by 35. min limits each pixel to 255.",
        "zh": "把图像调亮 35。min 把每个像素限制在 255 以内。"
      },
      "code": "lighter = min(A + 35,255);\nimagesc(lighter,[0 255]);\ncolormap(gray); axis image;\nlighter(3,3)",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "What is lighter(3,3)?",
          "zh": "lighter(3,3) 是多少？"
        },
        "type": "number",
        "answer": 255,
        "tolerance": 0
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "7"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "Keep `[0 255]` fixed so the same number always has the same shade.",
        "zh": "固定使用 `[0 255]`，让同一个数值始终显示为相同灰度。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Keep the color scale fixed complete",
        "zh": "固定色标范围已完成"
      },
      "id": "8"
    }
  ],
  "image-compression:one-block": [
    {
      "title": {
        "en": "Average one block",
        "zh": "对一个方块求平均"
      },
      "text": {
        "en": "Replace four pixel values with their mean. This saves values but loses detail.",
        "zh": "用四个像素的平均值替代它们。这样减少数值数量，但会丢失细节。"
      },
      "phase": "see",
      "diagram": "image-block",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Open a new script",
        "zh": "打开新脚本"
      },
      "text": {
        "en": "In MATLAB, click `New Script`. Use a new blank script for this lesson.",
        "zh": "在 MATLAB 点击 `New Script`。本课使用新的空白脚本。"
      },
      "phase": "understand",
      "visual": "editor",
      "ack": {
        "en": "My blank script is open",
        "zh": "空白脚本已打开"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Save the script",
        "zh": "保存脚本"
      },
      "text": {
        "en": "Click Save. Use the filename below. Keep it in MATLAB’s current folder.",
        "zh": "点击 Save。使用下方文件名，保存在 MATLAB 当前文件夹中。"
      },
      "phase": "do",
      "filename": "p4_one_block.m",
      "ack": {
        "en": "Script saved",
        "zh": "脚本已保存"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Load the pixel values",
        "zh": "载入像素数值"
      },
      "text": {
        "en": "Copy the whole matrix together, including both square brackets. Each row is one row of pixels.",
        "zh": "一次复制整个矩阵，包括两端方括号。每一行就是一行像素。"
      },
      "phase": "do",
      "code": "A = [0 0 80 80 80 80 0 0;\n     0 80 160 160 160 160 80 0;\n     80 160 240 0 0 240 160 80;\n     80 160 240 240 240 240 160 80;\n     80 160 0 240 240 0 160 80;\n     80 160 240 0 0 240 160 80;\n     0 80 160 160 160 160 80 0;\n     0 0 80 80 80 80 0 0];",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3",
      "observe": {
        "en": "After Run, find A in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 A。"
      }
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "block = A(1:2,1:2);\nsmallPixel = mean(block(:));\nsmallPixel",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "4",
      "observe": {
        "en": "After Run, find block, smallPixel in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 block, smallPixel。"
      }
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": "smallPixel =\n    20",
      "plot": null,
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "5"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "Replace four pixel values with their mean. This saves values but loses detail.",
        "zh": "用四个像素的平均值替代它们。这样减少数值数量，但会丢失细节。"
      },
      "phase": "understand",
      "diagram": "image-block",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "6"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Average a different block: rows 3–4, columns 3–4.",
        "zh": "计算另一个方块的平均值：第 3–4 行、第 3–4 列。"
      },
      "code": "block = A(3:4,3:4);\nsmallPixel = mean(block(:));\nsmallPixel",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "What result did MATLAB give?",
          "zh": "MATLAB 得到了什么结果？"
        },
        "type": "number",
        "answer": 180,
        "tolerance": 0
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "7"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "Replace four pixel values with their mean. This saves values but loses detail.",
        "zh": "用四个像素的平均值替代它们。这样减少数值数量，但会丢失细节。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Average one block complete",
        "zh": "对一个方块求平均已完成"
      },
      "id": "8"
    }
  ],
  "image-compression:all-blocks": [
    {
      "title": {
        "en": "Visit every block",
        "zh": "遍历每个方块"
      },
      "text": {
        "en": "The outer loop chooses a row of blocks. The inner loop visits its columns.",
        "zh": "外层循环选择一行方块。内层循环遍历这一行的各列。"
      },
      "phase": "see",
      "diagram": "image-block",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Open a new script",
        "zh": "打开新脚本"
      },
      "text": {
        "en": "In MATLAB, click `New Script`. Use a new blank script for this lesson.",
        "zh": "在 MATLAB 点击 `New Script`。本课使用新的空白脚本。"
      },
      "phase": "understand",
      "visual": "editor",
      "ack": {
        "en": "My blank script is open",
        "zh": "空白脚本已打开"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Save the script",
        "zh": "保存脚本"
      },
      "text": {
        "en": "Click Save. Use the filename below. Keep it in MATLAB’s current folder.",
        "zh": "点击 Save。使用下方文件名，保存在 MATLAB 当前文件夹中。"
      },
      "phase": "do",
      "filename": "p4_all_blocks.m",
      "ack": {
        "en": "Script saved",
        "zh": "脚本已保存"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Load the pixel values",
        "zh": "载入像素数值"
      },
      "text": {
        "en": "Copy the whole matrix together, including both square brackets. Each row is one row of pixels.",
        "zh": "一次复制整个矩阵，包括两端方括号。每一行就是一行像素。"
      },
      "phase": "do",
      "code": "A = [0 0 80 80 80 80 0 0;\n     0 80 160 160 160 160 80 0;\n     80 160 240 0 0 240 160 80;\n     80 160 240 240 240 240 160 80;\n     80 160 0 240 240 0 160 80;\n     80 160 240 0 0 240 160 80;\n     0 80 160 160 160 160 80 0;\n     0 0 80 80 80 80 0 0];",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3",
      "observe": {
        "en": "After Run, find A in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 A。"
      }
    },
    {
      "title": {
        "en": "Make space for results",
        "zh": "准备保存结果"
      },
      "text": {
        "en": "`zeros` creates places to store results. Later calculations fill them.",
        "zh": "`zeros` 创建保存结果的位置。之后的计算会填入这些位置。"
      },
      "phase": "do",
      "code": "B = zeros(4,4);",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "4",
      "observe": {
        "en": "After Run, find B in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 B。"
      }
    },
    {
      "title": {
        "en": "Visit the image blocks",
        "zh": "遍历图像方块"
      },
      "text": {
        "en": "Use both loops together. Each block becomes one mean value. Keep both `end` lines.",
        "zh": "一起使用两个循环。每个方块变为一个平均值。保留两行 `end`。"
      },
      "phase": "do",
      "code": "for r = 1:4\n    for c = 1:4\n        block = A(2*r-1:2*r, 2*c-1:2*c);\n        B(r,c) = mean(block(:));\n    end\nend",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "5",
      "observe": {
        "en": "Wait for >> to return in Command Window. A complete loop should run without red errors.",
        "zh": "等待命令窗口重新出现 >>。完整循环应运行结束，且没有红色报错。"
      }
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "[size(B) B(1,1)]",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "6"
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": "ans =\n     4     4    20",
      "plot": null,
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "7"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "The outer loop chooses a row of blocks. The inner loop visits its columns.",
        "zh": "外层循环选择一行方块。内层循环遍历这一行的各列。"
      },
      "phase": "understand",
      "diagram": "image-block",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "8"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Keep your loop result B. Inspect two blocks away from the corner.",
        "zh": "保留循环结果 B。查看两个不在角落的方块。"
      },
      "code": "[B(2,2) B(3,3)]",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "Enter both block means.",
          "zh": "输入两个方块的平均值。"
        },
        "type": "vector",
        "answer": [
          180.0,
          120.0
        ],
        "tolerance": 0
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "9"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "The outer loop chooses a row of blocks. The inner loop visits its columns.",
        "zh": "外层循环选择一行方块。内层循环遍历这一行的各列。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Visit every block complete",
        "zh": "遍历每个方块已完成"
      },
      "id": "10"
    }
  ],
  "image-compression:reconstruct-image": [
    {
      "title": {
        "en": "Rebuild a larger picture",
        "zh": "重建大图像"
      },
      "text": {
        "en": "Repeating an average makes a larger image. It cannot recover the original detail.",
        "zh": "重复平均值可以放大图像，但无法恢复原有细节。"
      },
      "phase": "see",
      "diagram": "image-block",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Open a new script",
        "zh": "打开新脚本"
      },
      "text": {
        "en": "In MATLAB, click `New Script`. Use a new blank script for this lesson.",
        "zh": "在 MATLAB 点击 `New Script`。本课使用新的空白脚本。"
      },
      "phase": "understand",
      "visual": "editor",
      "ack": {
        "en": "My blank script is open",
        "zh": "空白脚本已打开"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Save the script",
        "zh": "保存脚本"
      },
      "text": {
        "en": "Click Save. Use the filename below. Keep it in MATLAB’s current folder.",
        "zh": "点击 Save。使用下方文件名，保存在 MATLAB 当前文件夹中。"
      },
      "phase": "do",
      "filename": "p4_reconstruct_image.m",
      "ack": {
        "en": "Script saved",
        "zh": "脚本已保存"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Load the pixel values",
        "zh": "载入像素数值"
      },
      "text": {
        "en": "Copy the whole matrix together, including both square brackets. Each row is one row of pixels.",
        "zh": "一次复制整个矩阵，包括两端方括号。每一行就是一行像素。"
      },
      "phase": "do",
      "code": "A = [0 0 80 80 80 80 0 0;\n     0 80 160 160 160 160 80 0;\n     80 160 240 0 0 240 160 80;\n     80 160 240 240 240 240 160 80;\n     80 160 0 240 240 0 160 80;\n     80 160 240 0 0 240 160 80;\n     0 80 160 160 160 160 80 0;\n     0 0 80 80 80 80 0 0];",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3",
      "observe": {
        "en": "After Run, find A in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 A。"
      }
    },
    {
      "title": {
        "en": "Make space for results",
        "zh": "准备保存结果"
      },
      "text": {
        "en": "`zeros` creates places to store results. Later calculations fill them.",
        "zh": "`zeros` 创建保存结果的位置。之后的计算会填入这些位置。"
      },
      "phase": "do",
      "code": "B = zeros(4,4);",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "4",
      "observe": {
        "en": "After Run, find B in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 B。"
      }
    },
    {
      "title": {
        "en": "Visit the image blocks",
        "zh": "遍历图像方块"
      },
      "text": {
        "en": "Use both loops together. Each block becomes one mean value. Keep both `end` lines.",
        "zh": "一起使用两个循环。每个方块变为一个平均值。保留两行 `end`。"
      },
      "phase": "do",
      "code": "for r = 1:4\n    for c = 1:4\n        block = A(2*r-1:2*r, 2*c-1:2*c);\n        B(r,c) = mean(block(:));\n    end\nend",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "5",
      "observe": {
        "en": "Wait for >> to return in Command Window. A complete loop should run without red errors.",
        "zh": "等待命令窗口重新出现 >>。完整循环应运行结束，且没有红色报错。"
      }
    },
    {
      "title": {
        "en": "Draw the result",
        "zh": "画出结果"
      },
      "text": {
        "en": "These lines make a figure. Look for the graph in MATLAB’s Figure window or Figures panel.",
        "zh": "这些代码生成图像。在 MATLAB 的 Figure 窗口或 Figures 面板查看。"
      },
      "phase": "do",
      "code": "reconstructed = kron(B, ones(2));\nimagesc(reconstructed, [0 255]);\ncolormap(gray); axis image;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "6",
      "observe": {
        "en": "After Run, find reconstructed in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 reconstructed。"
      }
    },
    {
      "title": {
        "en": "Label or format the figure",
        "zh": "标注或设置图像"
      },
      "text": {
        "en": "These lines change the current figure. Keep all quotation marks and brackets.",
        "zh": "这些代码修改当前图像。保留所有引号和括号。"
      },
      "phase": "do",
      "code": "xlabel('Column'); ylabel('Row');",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "7"
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": null,
      "plot": "image-two",
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "8"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "Repeating an average makes a larger image. It cannot recover the original detail.",
        "zh": "重复平均值可以放大图像，但无法恢复原有细节。"
      },
      "phase": "understand",
      "diagram": "image-block",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "9"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Compare one reconstructed pixel with its original value.",
        "zh": "比较一个重建像素与它的原始值。"
      },
      "code": "reconstructed(3,4) - A(3,4)",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "What is the pixel difference?",
          "zh": "像素差是多少？"
        },
        "type": "number",
        "answer": 180,
        "tolerance": 0
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "10"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "Repeating an average makes a larger image. It cannot recover the original detail.",
        "zh": "重复平均值可以放大图像，但无法恢复原有细节。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Rebuild a larger picture complete",
        "zh": "重建大图像已完成"
      },
      "id": "11"
    }
  ],
  "image-compression:storage-ratio": [
    {
      "title": {
        "en": "Count the saving",
        "zh": "计算节省量"
      },
      "text": {
        "en": "Compare the number of values stored in A and B. This is not a file-size ratio.",
        "zh": "比较 A 与 B 保存的数值个数。这不是文件大小的比值。"
      },
      "phase": "see",
      "diagram": "image-storage",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Open a new script",
        "zh": "打开新脚本"
      },
      "text": {
        "en": "In MATLAB, click `New Script`. Use a new blank script for this lesson.",
        "zh": "在 MATLAB 点击 `New Script`。本课使用新的空白脚本。"
      },
      "phase": "understand",
      "visual": "editor",
      "ack": {
        "en": "My blank script is open",
        "zh": "空白脚本已打开"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Save the script",
        "zh": "保存脚本"
      },
      "text": {
        "en": "Click Save. Use the filename below. Keep it in MATLAB’s current folder.",
        "zh": "点击 Save。使用下方文件名，保存在 MATLAB 当前文件夹中。"
      },
      "phase": "do",
      "filename": "p4_storage_ratio.m",
      "ack": {
        "en": "Script saved",
        "zh": "脚本已保存"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Load the pixel values",
        "zh": "载入像素数值"
      },
      "text": {
        "en": "Copy the whole matrix together, including both square brackets. Each row is one row of pixels.",
        "zh": "一次复制整个矩阵，包括两端方括号。每一行就是一行像素。"
      },
      "phase": "do",
      "code": "A = [0 0 80 80 80 80 0 0;\n     0 80 160 160 160 160 80 0;\n     80 160 240 0 0 240 160 80;\n     80 160 240 240 240 240 160 80;\n     80 160 0 240 240 0 160 80;\n     80 160 240 0 0 240 160 80;\n     0 80 160 160 160 160 80 0;\n     0 0 80 80 80 80 0 0];",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3",
      "observe": {
        "en": "After Run, find A in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 A。"
      }
    },
    {
      "title": {
        "en": "Make space for results",
        "zh": "准备保存结果"
      },
      "text": {
        "en": "`zeros` creates places to store results. Later calculations fill them.",
        "zh": "`zeros` 创建保存结果的位置。之后的计算会填入这些位置。"
      },
      "phase": "do",
      "code": "B = zeros(4,4);",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "4",
      "observe": {
        "en": "After Run, find B in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 B。"
      }
    },
    {
      "title": {
        "en": "Visit the image blocks",
        "zh": "遍历图像方块"
      },
      "text": {
        "en": "Use both loops together. Each block becomes one mean value. Keep both `end` lines.",
        "zh": "一起使用两个循环。每个方块变为一个平均值。保留两行 `end`。"
      },
      "phase": "do",
      "code": "for r = 1:4\n    for c = 1:4\n        block = A(2*r-1:2*r, 2*c-1:2*c);\n        B(r,c) = mean(block(:));\n    end\nend",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "5",
      "observe": {
        "en": "Wait for >> to return in Command Window. A complete loop should run without red errors.",
        "zh": "等待命令窗口重新出现 >>。完整循环应运行结束，且没有红色报错。"
      }
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "ratio = numel(A)/numel(B);\nratio",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "6",
      "observe": {
        "en": "After Run, find ratio in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 ratio。"
      }
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": "ratio =\n     4",
      "plot": null,
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "7"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "Compare the number of values stored in A and B. This is not a file-size ratio.",
        "zh": "比较 A 与 B 保存的数值个数。这不是文件大小的比值。"
      },
      "phase": "understand",
      "diagram": "image-storage",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "8"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "A different method stores eight block means in a 2-by-4 matrix C. Compare its value count with A.",
        "zh": "另一种方法把八个方块均值保存在 2×4 矩阵 C 中。比较它与 A 的数值个数。"
      },
      "code": "C = zeros(2,4);\nnumel(A)/numel(C)",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "What result did MATLAB give?",
          "zh": "MATLAB 得到了什么结果？"
        },
        "type": "number",
        "answer": 8,
        "tolerance": 0
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "9"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "Compare the number of values stored in A and B. This is not a file-size ratio.",
        "zh": "比较 A 与 B 保存的数值个数。这不是文件大小的比值。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Count the saving complete",
        "zh": "计算节省量已完成"
      },
      "id": "10"
    }
  ],
  "image-compression:measure-error": [
    {
      "title": {
        "en": "Measure lost detail",
        "zh": "测量细节损失"
      },
      "text": {
        "en": "Subtract matching pixels, square each difference, then average. This gives MSE.",
        "zh": "相同位置的像素相减，再分别平方，最后求平均，得到 MSE。"
      },
      "phase": "see",
      "diagram": "image-error",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Open a new script",
        "zh": "打开新脚本"
      },
      "text": {
        "en": "In MATLAB, click `New Script`. Use a new blank script for this lesson.",
        "zh": "在 MATLAB 点击 `New Script`。本课使用新的空白脚本。"
      },
      "phase": "understand",
      "visual": "editor",
      "ack": {
        "en": "My blank script is open",
        "zh": "空白脚本已打开"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Save the script",
        "zh": "保存脚本"
      },
      "text": {
        "en": "Click Save. Use the filename below. Keep it in MATLAB’s current folder.",
        "zh": "点击 Save。使用下方文件名，保存在 MATLAB 当前文件夹中。"
      },
      "phase": "do",
      "filename": "p4_measure_error.m",
      "ack": {
        "en": "Script saved",
        "zh": "脚本已保存"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Load the pixel values",
        "zh": "载入像素数值"
      },
      "text": {
        "en": "Copy the whole matrix together, including both square brackets. Each row is one row of pixels.",
        "zh": "一次复制整个矩阵，包括两端方括号。每一行就是一行像素。"
      },
      "phase": "do",
      "code": "A = [0 0 80 80 80 80 0 0;\n     0 80 160 160 160 160 80 0;\n     80 160 240 0 0 240 160 80;\n     80 160 240 240 240 240 160 80;\n     80 160 0 240 240 0 160 80;\n     80 160 240 0 0 240 160 80;\n     0 80 160 160 160 160 80 0;\n     0 0 80 80 80 80 0 0];",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3",
      "observe": {
        "en": "After Run, find A in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 A。"
      }
    },
    {
      "title": {
        "en": "Make space for results",
        "zh": "准备保存结果"
      },
      "text": {
        "en": "`zeros` creates places to store results. Later calculations fill them.",
        "zh": "`zeros` 创建保存结果的位置。之后的计算会填入这些位置。"
      },
      "phase": "do",
      "code": "B = zeros(4,4);",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "4",
      "observe": {
        "en": "After Run, find B in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 B。"
      }
    },
    {
      "title": {
        "en": "Visit the image blocks",
        "zh": "遍历图像方块"
      },
      "text": {
        "en": "Use both loops together. Each block becomes one mean value. Keep both `end` lines.",
        "zh": "一起使用两个循环。每个方块变为一个平均值。保留两行 `end`。"
      },
      "phase": "do",
      "code": "for r = 1:4\n    for c = 1:4\n        block = A(2*r-1:2*r, 2*c-1:2*c);\n        B(r,c) = mean(block(:));\n    end\nend",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "5",
      "observe": {
        "en": "Wait for >> to return in Command Window. A complete loop should run without red errors.",
        "zh": "等待命令窗口重新出现 >>。完整循环应运行结束，且没有红色报错。"
      }
    },
    {
      "title": {
        "en": "Replace cells with blocks",
        "zh": "用方块替换格子"
      },
      "text": {
        "en": "`kron` expands each entry into a block. Run it before displaying the new image.",
        "zh": "`kron` 把每一项扩展为方块。先运行，再显示新图像。"
      },
      "phase": "do",
      "code": "reconstructed = kron(B, ones(2));\ndifference = A - reconstructed;\nmse = mean(difference(:).^2);",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "6",
      "observe": {
        "en": "After Run, find reconstructed, difference, mse in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 reconstructed, difference, mse。"
      }
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "mse",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "7"
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": "mse =\n    4250.0000",
      "plot": null,
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "8"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "Subtract matching pixels, square each difference, then average. This gives MSE.",
        "zh": "相同位置的像素相减，再分别平方，最后求平均，得到 MSE。"
      },
      "phase": "understand",
      "diagram": "image-error",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "9"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Halve both images before comparing them. Find the new MSE.",
        "zh": "先把两幅图像的数值都减半，再求新的 MSE。"
      },
      "code": "difference = A/2 - reconstructed/2;\nmean(difference(:).^2)",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "What result did MATLAB give?",
          "zh": "MATLAB 得到了什么结果？"
        },
        "type": "number",
        "answer": 1062.5,
        "tolerance": 0.001
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "10"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "Subtract matching pixels, square each difference, then average. This gives MSE.",
        "zh": "相同位置的像素相减，再分别平方，最后求平均，得到 MSE。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Measure lost detail complete",
        "zh": "测量细节损失已完成"
      },
      "id": "11"
    }
  ],
  "image-compression:compression-challenge": [
    {
      "title": {
        "en": "Choose a trade-off",
        "zh": "选择取舍"
      },
      "text": {
        "en": "Larger blocks save more values but lose more detail. The best choice depends on the use.",
        "zh": "更大的方块更节省数值，但损失更多细节。最佳选择取决于用途。"
      },
      "phase": "see",
      "diagram": "image-four",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Open a new script",
        "zh": "打开新脚本"
      },
      "text": {
        "en": "In MATLAB, click `New Script`. Use a new blank script for this lesson.",
        "zh": "在 MATLAB 点击 `New Script`。本课使用新的空白脚本。"
      },
      "phase": "understand",
      "visual": "editor",
      "ack": {
        "en": "My blank script is open",
        "zh": "空白脚本已打开"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Save the script",
        "zh": "保存脚本"
      },
      "text": {
        "en": "Click Save. Use the filename below. Keep it in MATLAB’s current folder.",
        "zh": "点击 Save。使用下方文件名，保存在 MATLAB 当前文件夹中。"
      },
      "phase": "do",
      "filename": "p4_compression_challenge.m",
      "ack": {
        "en": "Script saved",
        "zh": "脚本已保存"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Load the pixel values",
        "zh": "载入像素数值"
      },
      "text": {
        "en": "Copy the whole matrix together, including both square brackets. Each row is one row of pixels.",
        "zh": "一次复制整个矩阵，包括两端方括号。每一行就是一行像素。"
      },
      "phase": "do",
      "code": "A = [0 0 80 80 80 80 0 0;\n     0 80 160 160 160 160 80 0;\n     80 160 240 0 0 240 160 80;\n     80 160 240 240 240 240 160 80;\n     80 160 0 240 240 0 160 80;\n     80 160 240 0 0 240 160 80;\n     0 80 160 160 160 160 80 0;\n     0 0 80 80 80 80 0 0];",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3",
      "observe": {
        "en": "After Run, find A in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 A。"
      }
    },
    {
      "title": {
        "en": "Make space for results",
        "zh": "准备保存结果"
      },
      "text": {
        "en": "`zeros` creates places to store results. Later calculations fill them.",
        "zh": "`zeros` 创建保存结果的位置。之后的计算会填入这些位置。"
      },
      "phase": "do",
      "code": "B = zeros(2,2);",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "4",
      "observe": {
        "en": "After Run, find B in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 B。"
      }
    },
    {
      "title": {
        "en": "Visit the image blocks",
        "zh": "遍历图像方块"
      },
      "text": {
        "en": "Use both loops together. Each block becomes one mean value. Keep both `end` lines.",
        "zh": "一起使用两个循环。每个方块变为一个平均值。保留两行 `end`。"
      },
      "phase": "do",
      "code": "for r = 1:2\n    for c = 1:2\n        block = A(4*r-3:4*r, 4*c-3:4*c);\n        B(r,c) = mean(block(:));\n    end\nend",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "5",
      "observe": {
        "en": "Wait for >> to return in Command Window. A complete loop should run without red errors.",
        "zh": "等待命令窗口重新出现 >>。完整循环应运行结束，且没有红色报错。"
      }
    },
    {
      "title": {
        "en": "Replace cells with blocks",
        "zh": "用方块替换格子"
      },
      "text": {
        "en": "`kron` expands each entry into a block. Run it before displaying the new image.",
        "zh": "`kron` 把每一项扩展为方块。先运行，再显示新图像。"
      },
      "phase": "do",
      "code": "reconstructed = kron(B, ones(4));\ndifference = A - reconstructed;\nratio = numel(A)/numel(B);",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "6",
      "observe": {
        "en": "After Run, find reconstructed, difference, ratio in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 reconstructed, difference, ratio。"
      }
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "mse = mean(difference(:).^2);\n[ratio mse]",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "7",
      "observe": {
        "en": "After Run, find mse in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 mse。"
      }
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": "ans =\n    16.0000    6837.5000",
      "plot": null,
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "8"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "Larger blocks save more values but lose more detail. The best choice depends on the use.",
        "zh": "更大的方块更节省数值，但损失更多细节。最佳选择取决于用途。"
      },
      "phase": "understand",
      "diagram": "image-four",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "9"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Use your 4-by-4 block reconstruction. Halve both images and measure the new MSE.",
        "zh": "使用你的 4×4 方块重建结果。两幅图像数值都减半，再测量新的 MSE。"
      },
      "code": "difference = A/2 - reconstructed/2;\nmean(difference(:).^2)",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "What result did MATLAB give?",
          "zh": "MATLAB 得到了什么结果？"
        },
        "type": "number",
        "answer": 1709.375,
        "tolerance": 0.001
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "10"
    },
    {
      "title": {
        "en": "Keep evidence of your work",
        "zh": "保留你的作品证据"
      },
      "text": {
        "en": "Save your script and figure. Your teacher will review your explanation.",
        "zh": "保存脚本和图像。老师会查看你的解释。"
      },
      "phase": "continue",
      "assignment": {
        "en": "Final task: submit original and both reconstructed figures, ratios and MSE values. Choose a version and explain your balance between storage and detail. No single choice fits every use.",
        "zh": "最终任务：提交原图、两张重建图、压缩比与 MSE。选择一个版本，解释如何权衡存储与细节。不同用途可能需要不同选择。"
      },
      "ack": {
        "en": "I saved my work",
        "zh": "我已保存作品"
      },
      "id": "11"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "Larger blocks save more values but lose more detail. The best choice depends on the use.",
        "zh": "更大的方块更节省数值，但损失更多细节。最佳选择取决于用途。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Choose a trade-off complete",
        "zh": "选择取舍已完成"
      },
      "id": "12"
    }
  ],
  "epidemics:population-groups": [
    {
      "title": {
        "en": "Meet three groups",
        "zh": "认识三个群体"
      },
      "text": {
        "en": "S can become infected. I is infectious. R has recovered. Nobody enters or leaves this model.",
        "zh": "S 可能感染，I 有传染性，R 已康复。此模型无人进入或离开。"
      },
      "phase": "see",
      "diagram": "sir-groups",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Open a new script",
        "zh": "打开新脚本"
      },
      "text": {
        "en": "In MATLAB, click `New Script`. Use a new blank script for this lesson.",
        "zh": "在 MATLAB 点击 `New Script`。本课使用新的空白脚本。"
      },
      "phase": "understand",
      "visual": "editor",
      "ack": {
        "en": "My blank script is open",
        "zh": "空白脚本已打开"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Save the script",
        "zh": "保存脚本"
      },
      "text": {
        "en": "Click Save. Use the filename below. Keep it in MATLAB’s current folder.",
        "zh": "点击 Save。使用下方文件名，保存在 MATLAB 当前文件夹中。"
      },
      "phase": "do",
      "filename": "p5_population_groups.m",
      "ack": {
        "en": "Script saved",
        "zh": "脚本已保存"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "S = 990;\nI = 10;\nR = 0;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3",
      "observe": {
        "en": "After Run, find S, I, R in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 S, I, R。"
      }
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "N = S + I + R;\nN",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "4",
      "observe": {
        "en": "After Run, find N in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 N。"
      }
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": "N =\n        1000",
      "plot": null,
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "5"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "S can become infected. I is infectious. R has recovered. Nobody enters or leaves this model.",
        "zh": "S 可能感染，I 有传染性，R 已康复。此模型无人进入或离开。"
      },
      "phase": "understand",
      "diagram": "sir-groups",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "6"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Count a different closed population.",
        "zh": "统计另一个封闭人群的总人数。"
      },
      "code": "S = 847; I = 23; R = 76;\nN = S + I + R;\nN",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "What result did MATLAB give?",
          "zh": "MATLAB 得到了什么结果？"
        },
        "type": "number",
        "answer": 946,
        "tolerance": 0
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "7"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "S can become infected. I is infectious. R has recovered. Nobody enters or leaves this model.",
        "zh": "S 可能感染，I 有传染性，R 已康复。此模型无人进入或离开。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Meet three groups complete",
        "zh": "认识三个群体已完成"
      },
      "id": "8"
    }
  ],
  "epidemics:transfer-rates": [
    {
      "title": {
        "en": "Calculate transfers",
        "zh": "计算转移量"
      },
      "text": {
        "en": "Compute transfers from the current group sizes. `dt` is the time-step length.",
        "zh": "用当前各组人数计算转移量。`dt` 是每一步的时间长度。"
      },
      "phase": "see",
      "diagram": "sir-flows",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Open a new script",
        "zh": "打开新脚本"
      },
      "text": {
        "en": "In MATLAB, click `New Script`. Use a new blank script for this lesson.",
        "zh": "在 MATLAB 点击 `New Script`。本课使用新的空白脚本。"
      },
      "phase": "understand",
      "visual": "editor",
      "ack": {
        "en": "My blank script is open",
        "zh": "空白脚本已打开"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Save the script",
        "zh": "保存脚本"
      },
      "text": {
        "en": "Click Save. Use the filename below. Keep it in MATLAB’s current folder.",
        "zh": "点击 Save。使用下方文件名，保存在 MATLAB 当前文件夹中。"
      },
      "phase": "do",
      "filename": "p5_transfer_rates.m",
      "ack": {
        "en": "Script saved",
        "zh": "脚本已保存"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "S = 990; I = 10; R = 0; N = 1000;\nbeta = 0.3; gamma = 0.1; dt = 1;\nnew = dt*beta*S*I/N;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3",
      "observe": {
        "en": "After Run, find S, beta, new in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 S, beta, new。"
      }
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "recovered = dt*gamma*I;\n[new recovered]",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "4",
      "observe": {
        "en": "After Run, find recovered in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 recovered。"
      }
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": "ans =\n    2.9700    1.0000",
      "plot": null,
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "5"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "Compute transfers from the current group sizes. `dt` is the time-step length.",
        "zh": "用当前各组人数计算转移量。`dt` 是每一步的时间长度。"
      },
      "phase": "understand",
      "diagram": "sir-flows",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "6"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Use new starting groups and a half-day step. Find the S-to-I transfer.",
        "zh": "用新的初始人数和半天步长，求从 S 到 I 的转移量。"
      },
      "code": "S = 975; I = 25; N = 1000;\nbeta = 0.24; gamma = 0.1; dt = 0.5;\nnew = dt*beta*S*I/N;\nnew",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "How many model people move from S to I?",
          "zh": "多少模型人数从 S 转到 I？"
        },
        "type": "number",
        "answer": 2.925,
        "tolerance": 0.001
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "7"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "Compute transfers from the current group sizes. `dt` is the time-step length.",
        "zh": "用当前各组人数计算转移量。`dt` 是每一步的时间长度。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Calculate transfers complete",
        "zh": "计算转移量已完成"
      },
      "id": "8"
    }
  ],
  "epidemics:one-update": [
    {
      "title": {
        "en": "Update together",
        "zh": "同时更新"
      },
      "text": {
        "en": "Calculate all new group sizes from the old values. Do not update one group early.",
        "zh": "所有新人数都要用旧数值计算。不要提前更新某一组。"
      },
      "phase": "see",
      "diagram": "sir-flows",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Open a new script",
        "zh": "打开新脚本"
      },
      "text": {
        "en": "In MATLAB, click `New Script`. Use a new blank script for this lesson.",
        "zh": "在 MATLAB 点击 `New Script`。本课使用新的空白脚本。"
      },
      "phase": "understand",
      "visual": "editor",
      "ack": {
        "en": "My blank script is open",
        "zh": "空白脚本已打开"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Save the script",
        "zh": "保存脚本"
      },
      "text": {
        "en": "Click Save. Use the filename below. Keep it in MATLAB’s current folder.",
        "zh": "点击 Save。使用下方文件名，保存在 MATLAB 当前文件夹中。"
      },
      "phase": "do",
      "filename": "p5_one_update.m",
      "ack": {
        "en": "Script saved",
        "zh": "脚本已保存"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "S = 990; I = 10; R = 0; N = 1000;\nbeta = 0.3; gamma = 0.1; dt = 1;\nnew = dt*beta*S*I/N;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3",
      "observe": {
        "en": "After Run, find S, beta, new in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 S, beta, new。"
      }
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "recovered = dt*gamma*I;\nnextS = S - new;\nnextI = I + new - recovered;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "4",
      "observe": {
        "en": "After Run, find recovered, nextS, nextI in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 recovered, nextS, nextI。"
      }
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "nextR = R + recovered;\n[nextS nextI nextR]",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "5",
      "observe": {
        "en": "After Run, find nextR in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 nextR。"
      }
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": "ans =\n  987.0300   11.9700    1.0000",
      "plot": null,
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "6"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "Calculate all new group sizes from the old values. Do not update one group early.",
        "zh": "所有新人数都要用旧数值计算。不要提前更新某一组。"
      },
      "phase": "understand",
      "diagram": "sir-flows",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "7"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Calculate the next groups for a different starting population and time step.",
        "zh": "计算另一组初始人数和步长下的下一步人数。"
      },
      "code": "S = 975; I = 25; R = 0; N = 1000;\nbeta = 0.24; gamma = 0.1; dt = 0.5;\nnew = dt*beta*S*I/N;\nrecovered = dt*gamma*I;\n[S-new I+new-recovered R+recovered]",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "Enter the three new group sizes.",
          "zh": "输入三个新的组人数。"
        },
        "type": "vector",
        "answer": [
          972.075,
          26.675,
          1.25
        ],
        "tolerance": 0.001
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "8"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "Calculate all new group sizes from the old values. Do not update one group early.",
        "zh": "所有新人数都要用旧数值计算。不要提前更新某一组。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Update together complete",
        "zh": "同时更新已完成"
      },
      "id": "9"
    }
  ],
  "epidemics:time-loop": [
    {
      "title": {
        "en": "Follow sixty days",
        "zh": "跟踪六十天"
      },
      "text": {
        "en": "Each loop calculates one later time. Store the new values at position `k+1`.",
        "zh": "每次循环计算下一个时刻。把新数值保存在第 `k+1` 项。"
      },
      "phase": "see",
      "diagram": "sir-flows",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Open a new script",
        "zh": "打开新脚本"
      },
      "text": {
        "en": "In MATLAB, click `New Script`. Use a new blank script for this lesson.",
        "zh": "在 MATLAB 点击 `New Script`。本课使用新的空白脚本。"
      },
      "phase": "understand",
      "visual": "editor",
      "ack": {
        "en": "My blank script is open",
        "zh": "空白脚本已打开"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Save the script",
        "zh": "保存脚本"
      },
      "text": {
        "en": "Click Save. Use the filename below. Keep it in MATLAB’s current folder.",
        "zh": "点击 Save。使用下方文件名，保存在 MATLAB 当前文件夹中。"
      },
      "phase": "do",
      "filename": "p5_time_loop.m",
      "ack": {
        "en": "Script saved",
        "zh": "脚本已保存"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Make space for results",
        "zh": "准备保存结果"
      },
      "text": {
        "en": "`zeros` creates places to store results. Later calculations fill them.",
        "zh": "`zeros` 创建保存结果的位置。之后的计算会填入这些位置。"
      },
      "phase": "do",
      "code": "N = 1000; beta = 0.3; gamma = 0.1;\ndt = 0.1; t = 0:dt:60;\nS = zeros(size(t)); I = S; R = S;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3",
      "observe": {
        "en": "After Run, find N, dt, S in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 N, dt, S。"
      }
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "S(1) = 990; I(1) = 10;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "4"
    },
    {
      "title": {
        "en": "Advance one time step repeatedly",
        "zh": "重复推进一个时间步"
      },
      "text": {
        "en": "Use the complete loop. Each new value uses values at time k. Keep its final `end`.",
        "zh": "使用完整循环。每个新值都使用时刻 k 的数值。保留末尾的 `end`。"
      },
      "phase": "do",
      "code": "for k = 1:numel(t)-1\n    new = dt*beta*S(k)*I(k)/N;\n    recovered = dt*gamma*I(k);\n    S(k+1) = S(k) - new;\n    I(k+1) = I(k) + new - recovered;\n    R(k+1) = R(k) + recovered;\nend",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "5",
      "observe": {
        "en": "Wait for >> to return in Command Window. A complete loop should run without red errors.",
        "zh": "等待命令窗口重新出现 >>。完整循环应运行结束，且没有红色报错。"
      }
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "[numel(t) S(2) I(2) R(2)]",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "6"
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": "ans =\n  601.0000  989.7030   10.1970    0.1000",
      "plot": null,
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "7"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "Each loop calculates one later time. Store the new values at position `k+1`.",
        "zh": "每次循环计算下一个时刻。把新数值保存在第 `k+1` 项。"
      },
      "phase": "understand",
      "diagram": "sir-flows",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "8"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Keep your example simulation. Read position 101, which is day 10.",
        "zh": "保留示例模拟。读取第 101 项，它对应第 10 天。"
      },
      "code": "I(101)",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "What is I(101)? Use two decimals.",
          "zh": "I(101) 是多少？保留两位小数。"
        },
        "type": "number",
        "answer": 64.43502767847014,
        "tolerance": 0.02
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "9"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "Each loop calculates one later time. Store the new values at position `k+1`.",
        "zh": "每次循环计算下一个时刻。把新数值保存在第 `k+1` 项。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Follow sixty days complete",
        "zh": "跟踪六十天已完成"
      },
      "id": "10"
    }
  ],
  "epidemics:plot-groups": [
    {
      "title": {
        "en": "Read three curves",
        "zh": "读取三条曲线"
      },
      "text": {
        "en": "The peak of I is the largest infectious group at one time, not all infections added together.",
        "zh": "I 的峰值是同一时刻最多的感染人数，不是累计感染人数。"
      },
      "phase": "see",
      "diagram": "sir-curves",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Open a new script",
        "zh": "打开新脚本"
      },
      "text": {
        "en": "In MATLAB, click `New Script`. Use a new blank script for this lesson.",
        "zh": "在 MATLAB 点击 `New Script`。本课使用新的空白脚本。"
      },
      "phase": "understand",
      "visual": "editor",
      "ack": {
        "en": "My blank script is open",
        "zh": "空白脚本已打开"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Save the script",
        "zh": "保存脚本"
      },
      "text": {
        "en": "Click Save. Use the filename below. Keep it in MATLAB’s current folder.",
        "zh": "点击 Save。使用下方文件名，保存在 MATLAB 当前文件夹中。"
      },
      "phase": "do",
      "filename": "p5_plot_groups.m",
      "ack": {
        "en": "Script saved",
        "zh": "脚本已保存"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Make space for results",
        "zh": "准备保存结果"
      },
      "text": {
        "en": "`zeros` creates places to store results. Later calculations fill them.",
        "zh": "`zeros` 创建保存结果的位置。之后的计算会填入这些位置。"
      },
      "phase": "do",
      "code": "N = 1000; beta = 0.3; gamma = 0.1;\ndt = 0.1; t = 0:dt:60;\nS = zeros(size(t)); I = S; R = S;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3",
      "observe": {
        "en": "After Run, find N, dt, S in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 N, dt, S。"
      }
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "S(1) = 990; I(1) = 10;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "4"
    },
    {
      "title": {
        "en": "Advance one time step repeatedly",
        "zh": "重复推进一个时间步"
      },
      "text": {
        "en": "Use the complete loop. Each new value uses values at time k. Keep its final `end`.",
        "zh": "使用完整循环。每个新值都使用时刻 k 的数值。保留末尾的 `end`。"
      },
      "phase": "do",
      "code": "for k = 1:numel(t)-1\n    new = dt*beta*S(k)*I(k)/N;\n    recovered = dt*gamma*I(k);\n    S(k+1) = S(k) - new;\n    I(k+1) = I(k) + new - recovered;\n    R(k+1) = R(k) + recovered;\nend",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "5",
      "observe": {
        "en": "Wait for >> to return in Command Window. A complete loop should run without red errors.",
        "zh": "等待命令窗口重新出现 >>。完整循环应运行结束，且没有红色报错。"
      }
    },
    {
      "title": {
        "en": "Draw the result",
        "zh": "画出结果"
      },
      "text": {
        "en": "These lines make a figure. Look for the graph in MATLAB’s Figure window or Figures panel.",
        "zh": "这些代码生成图像。在 MATLAB 的 Figure 窗口或 Figures 面板查看。"
      },
      "phase": "do",
      "code": "plot(t,S,t,I,t,R);\nlegend('S','I','R'); grid on;\nxlabel('Time (days)'); ylabel('Model population');",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "6"
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "[peak,where] = max(I);\n[peak t(where)]",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "7"
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": "[peak t(where)]\n304.9877   26.8000",
      "plot": "sir-curves",
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "8"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "The peak of I is the largest infectious group at one time, not all infections added together.",
        "zh": "I 的峰值是同一时刻最多的感染人数，不是累计感染人数。"
      },
      "phase": "understand",
      "diagram": "sir-curves",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "9"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Use the plotted simulation. Read the recovered group on day 20.",
        "zh": "使用刚绘制的模拟，读出第 20 天的康复人数。"
      },
      "code": "R(201)",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "What is R(201)? Use two decimals.",
          "zh": "R(201) 是多少？保留两位小数。"
        },
        "type": "number",
        "answer": 172.34820781786553,
        "tolerance": 0.02
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "10"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "The peak of I is the largest infectious group at one time, not all infections added together.",
        "zh": "I 的峰值是同一时刻最多的感染人数，不是累计感染人数。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Read three curves complete",
        "zh": "读取三条曲线已完成"
      },
      "id": "11"
    }
  ],
  "epidemics:conservation-check": [
    {
      "title": {
        "en": "Test your model",
        "zh": "检验模型"
      },
      "text": {
        "en": "Group sizes should stay nonnegative and add to N. These checks test the code, not real-world accuracy.",
        "zh": "各组人数应非负，且总和为 N。这些检查检验代码，不代表现实准确性。"
      },
      "phase": "see",
      "diagram": "sir-groups",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Open a new script",
        "zh": "打开新脚本"
      },
      "text": {
        "en": "In MATLAB, click `New Script`. Use a new blank script for this lesson.",
        "zh": "在 MATLAB 点击 `New Script`。本课使用新的空白脚本。"
      },
      "phase": "understand",
      "visual": "editor",
      "ack": {
        "en": "My blank script is open",
        "zh": "空白脚本已打开"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Save the script",
        "zh": "保存脚本"
      },
      "text": {
        "en": "Click Save. Use the filename below. Keep it in MATLAB’s current folder.",
        "zh": "点击 Save。使用下方文件名，保存在 MATLAB 当前文件夹中。"
      },
      "phase": "do",
      "filename": "p5_conservation_check.m",
      "ack": {
        "en": "Script saved",
        "zh": "脚本已保存"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Make space for results",
        "zh": "准备保存结果"
      },
      "text": {
        "en": "`zeros` creates places to store results. Later calculations fill them.",
        "zh": "`zeros` 创建保存结果的位置。之后的计算会填入这些位置。"
      },
      "phase": "do",
      "code": "N = 1000; beta = 0.3; gamma = 0.1;\ndt = 0.1; t = 0:dt:60;\nS = zeros(size(t)); I = S; R = S;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3",
      "observe": {
        "en": "After Run, find N, dt, S in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 N, dt, S。"
      }
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "S(1) = 990; I(1) = 10;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "4"
    },
    {
      "title": {
        "en": "Advance one time step repeatedly",
        "zh": "重复推进一个时间步"
      },
      "text": {
        "en": "Use the complete loop. Each new value uses values at time k. Keep its final `end`.",
        "zh": "使用完整循环。每个新值都使用时刻 k 的数值。保留末尾的 `end`。"
      },
      "phase": "do",
      "code": "for k = 1:numel(t)-1\n    new = dt*beta*S(k)*I(k)/N;\n    recovered = dt*gamma*I(k);\n    S(k+1) = S(k) - new;\n    I(k+1) = I(k) + new - recovered;\n    R(k+1) = R(k) + recovered;\nend",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "5",
      "observe": {
        "en": "Wait for >> to return in Command Window. A complete loop should run without red errors.",
        "zh": "等待命令窗口重新出现 >>。完整循环应运行结束，且没有红色报错。"
      }
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "totalOK = max(abs(S+I+R-N)) < 1e-8;\nnonnegative = min([S I R]) >= 0;\n[totalOK nonnegative]",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "6",
      "observe": {
        "en": "After Run, find totalOK, nonnegative in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 totalOK, nonnegative。"
      }
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": "ans =\n     1     1",
      "plot": null,
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "7"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "Group sizes should stay nonnegative and add to N. These checks test the code, not real-world accuracy.",
        "zh": "各组人数应非负，且总和为 N。这些检查检验代码，不代表现实准确性。"
      },
      "phase": "understand",
      "diagram": "sir-groups",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "8"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Introduce a missing-population error in a copy of S. Measure the largest total-population error.",
        "zh": "在 S 的副本中加入人数丢失错误。测量总人数的最大误差。"
      },
      "code": "testS = S;\ntestS(101) = testS(101) - 7;\nmax(abs(testS+I+R-N))",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "What result did MATLAB give?",
          "zh": "MATLAB 得到了什么结果？"
        },
        "type": "number",
        "answer": 7,
        "tolerance": 0.001
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "9"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "Group sizes should stay nonnegative and add to N. These checks test the code, not real-world accuracy.",
        "zh": "各组人数应非负，且总和为 N。这些检查检验代码，不代表现实准确性。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Test your model complete",
        "zh": "检验模型已完成"
      },
      "id": "10"
    }
  ],
  "epidemics:compare-rates": [
    {
      "title": {
        "en": "Change one rate",
        "zh": "改变一个速率"
      },
      "text": {
        "en": "Change only beta. Keep the starting groups, recovery rate and time step the same.",
        "zh": "只改变 beta。初始人数、康复率与时间步长保持不变。"
      },
      "phase": "see",
      "diagram": "sir-compare",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Open a new script",
        "zh": "打开新脚本"
      },
      "text": {
        "en": "In MATLAB, click `New Script`. Use a new blank script for this lesson.",
        "zh": "在 MATLAB 点击 `New Script`。本课使用新的空白脚本。"
      },
      "phase": "understand",
      "visual": "editor",
      "ack": {
        "en": "My blank script is open",
        "zh": "空白脚本已打开"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Save the script",
        "zh": "保存脚本"
      },
      "text": {
        "en": "Click Save. Use the filename below. Keep it in MATLAB’s current folder.",
        "zh": "点击 Save。使用下方文件名，保存在 MATLAB 当前文件夹中。"
      },
      "phase": "do",
      "filename": "p5_compare_rates.m",
      "ack": {
        "en": "Script saved",
        "zh": "脚本已保存"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Make space for results",
        "zh": "准备保存结果"
      },
      "text": {
        "en": "`zeros` creates places to store results. Later calculations fill them.",
        "zh": "`zeros` 创建保存结果的位置。之后的计算会填入这些位置。"
      },
      "phase": "do",
      "code": "N = 1000; gamma = 0.1; dt = 0.1; t = 0:dt:60;\npeaks = zeros(1,2);\nbeta = 0.15;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3",
      "observe": {
        "en": "After Run, find N, peaks, beta in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 N, peaks, beta。"
      }
    },
    {
      "title": {
        "en": "Make space for results",
        "zh": "准备保存结果"
      },
      "text": {
        "en": "`zeros` creates places to store results. Later calculations fill them.",
        "zh": "`zeros` 创建保存结果的位置。之后的计算会填入这些位置。"
      },
      "phase": "do",
      "code": "S = zeros(size(t)); I = S; R = S;\nS(1) = 990; I(1) = 10;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "4",
      "observe": {
        "en": "After Run, find S in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 S。"
      }
    },
    {
      "title": {
        "en": "Advance one time step repeatedly",
        "zh": "重复推进一个时间步"
      },
      "text": {
        "en": "Use the complete loop. Each new value uses values at time k. Keep its final `end`.",
        "zh": "使用完整循环。每个新值都使用时刻 k 的数值。保留末尾的 `end`。"
      },
      "phase": "do",
      "code": "for k = 1:numel(t)-1\n    new = dt*beta*S(k)*I(k)/N;\n    recovered = dt*gamma*I(k);\n    S(k+1) = S(k) - new;\n    I(k+1) = I(k) + new - recovered;\n    R(k+1) = R(k) + recovered;\nend",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "5",
      "observe": {
        "en": "Wait for >> to return in Command Window. A complete loop should run without red errors.",
        "zh": "等待命令窗口重新出现 >>。完整循环应运行结束，且没有红色报错。"
      }
    },
    {
      "title": {
        "en": "Make space for results",
        "zh": "准备保存结果"
      },
      "text": {
        "en": "`zeros` creates places to store results. Later calculations fill them.",
        "zh": "`zeros` 创建保存结果的位置。之后的计算会填入这些位置。"
      },
      "phase": "do",
      "code": "peaks(1) = max(I);\nbeta = 0.3;\nS = zeros(size(t)); I = S; R = S;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "6",
      "observe": {
        "en": "After Run, find beta, S in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 beta, S。"
      }
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "S(1) = 990; I(1) = 10;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "7"
    },
    {
      "title": {
        "en": "Advance one time step repeatedly",
        "zh": "重复推进一个时间步"
      },
      "text": {
        "en": "Use the complete loop. Each new value uses values at time k. Keep its final `end`.",
        "zh": "使用完整循环。每个新值都使用时刻 k 的数值。保留末尾的 `end`。"
      },
      "phase": "do",
      "code": "for k = 1:numel(t)-1\n    new = dt*beta*S(k)*I(k)/N;\n    recovered = dt*gamma*I(k);\n    S(k+1) = S(k) - new;\n    I(k+1) = I(k) + new - recovered;\n    R(k+1) = R(k) + recovered;\nend",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "8",
      "observe": {
        "en": "Wait for >> to return in Command Window. A complete loop should run without red errors.",
        "zh": "等待命令窗口重新出现 >>。完整循环应运行结束，且没有红色报错。"
      }
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "peaks(2) = max(I);\npeaks",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "9"
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": "peaks =\n    68.8117    304.9877",
      "plot": null,
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "10"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "Change only beta. Keep the starting groups, recovery rate and time step the same.",
        "zh": "只改变 beta。初始人数、康复率与时间步长保持不变。"
      },
      "phase": "understand",
      "diagram": "sir-compare",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "11"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "Use both runs. Measure how much the peak increased when beta changed.",
        "zh": "使用两次运行结果，测量 beta 改变后峰值增加了多少。"
      },
      "code": "peaks(2) - peaks(1)",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "Enter the peak increase. Use two decimals.",
          "zh": "输入峰值增量。保留两位小数。"
        },
        "type": "number",
        "answer": 236.17598329963184,
        "tolerance": 0.02
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "12"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "Change only beta. Keep the starting groups, recovery rate and time step the same.",
        "zh": "只改变 beta。初始人数、康复率与时间步长保持不变。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Change one rate complete",
        "zh": "改变一个速率已完成"
      },
      "id": "13"
    }
  ],
  "epidemics:time-step-challenge": [
    {
      "title": {
        "en": "Check the time step",
        "zh": "检查时间步长"
      },
      "text": {
        "en": "A smaller time step tests numerical resolution. It does not change the model assumptions.",
        "zh": "更小的时间步长用于检查数值精度，不改变模型假设。"
      },
      "phase": "see",
      "diagram": "sir-compare",
      "ack": {
        "en": "Try it in MATLAB",
        "zh": "在 MATLAB 试一试"
      },
      "id": "0"
    },
    {
      "title": {
        "en": "Open a new script",
        "zh": "打开新脚本"
      },
      "text": {
        "en": "In MATLAB, click `New Script`. Use a new blank script for this lesson.",
        "zh": "在 MATLAB 点击 `New Script`。本课使用新的空白脚本。"
      },
      "phase": "understand",
      "visual": "editor",
      "ack": {
        "en": "My blank script is open",
        "zh": "空白脚本已打开"
      },
      "id": "1"
    },
    {
      "title": {
        "en": "Save the script",
        "zh": "保存脚本"
      },
      "text": {
        "en": "Click Save. Use the filename below. Keep it in MATLAB’s current folder.",
        "zh": "点击 Save。使用下方文件名，保存在 MATLAB 当前文件夹中。"
      },
      "phase": "do",
      "filename": "p5_time_step_challenge.m",
      "ack": {
        "en": "Script saved",
        "zh": "脚本已保存"
      },
      "id": "2"
    },
    {
      "title": {
        "en": "Make space for results",
        "zh": "准备保存结果"
      },
      "text": {
        "en": "`zeros` creates places to store results. Later calculations fill them.",
        "zh": "`zeros` 创建保存结果的位置。之后的计算会填入这些位置。"
      },
      "phase": "do",
      "code": "N = 1000; beta = 0.3; gamma = 0.1;\ndt = 0.05; t = 0:dt:60;\nS = zeros(size(t)); I = S; R = S;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "3",
      "observe": {
        "en": "After Run, find N, dt, S in Workspace.",
        "zh": "点击 Run 后，在 Workspace 查找 N, dt, S。"
      }
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "S(1) = 990; I(1) = 10;",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "4"
    },
    {
      "title": {
        "en": "Advance one time step repeatedly",
        "zh": "重复推进一个时间步"
      },
      "text": {
        "en": "Use the complete loop. Each new value uses values at time k. Keep its final `end`.",
        "zh": "使用完整循环。每个新值都使用时刻 k 的数值。保留末尾的 `end`。"
      },
      "phase": "do",
      "code": "for k = 1:numel(t)-1\n    new = dt*beta*S(k)*I(k)/N;\n    recovered = dt*gamma*I(k);\n    S(k+1) = S(k) - new;\n    I(k+1) = I(k) + new - recovered;\n    R(k+1) = R(k) + recovered;\nend",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "5",
      "observe": {
        "en": "Wait for >> to return in Command Window. A complete loop should run without red errors.",
        "zh": "等待命令窗口重新出现 >>。完整循环应运行结束，且没有红色报错。"
      }
    },
    {
      "title": {
        "en": "Run the next lines",
        "zh": "运行接下来的代码"
      },
      "text": {
        "en": "Add these lines below the earlier lines in this lesson. Keep the names exactly as shown.",
        "zh": "把这些代码加在本课已有代码下方。名称要与示例完全一致。"
      },
      "phase": "do",
      "code": "[peak,where] = max(I);\n[peak t(where)]",
      "append": true,
      "typed": false,
      "ack": {
        "en": "I ran these lines",
        "zh": "我已运行这些代码"
      },
      "id": "6"
    },
    {
      "title": {
        "en": "Compare your result",
        "zh": "对比你的结果"
      },
      "text": {
        "en": "Compare your MATLAB result with this reference. Match values or shapes; spacing and colors can differ.",
        "zh": "把 MATLAB 结果与参考对比。数值或形状应一致，间距和颜色可以不同。"
      },
      "phase": "compare",
      "output": "ans =\n    304.3997    26.7000",
      "plot": null,
      "ack": {
        "en": "My result matches",
        "zh": "我的结果一致"
      },
      "win": {
        "en": "Result compared",
        "zh": "已对比结果"
      },
      "id": "7"
    },
    {
      "title": {
        "en": "What the result means",
        "zh": "结果说明什么"
      },
      "text": {
        "en": "A smaller time step tests numerical resolution. It does not change the model assumptions.",
        "zh": "更小的时间步长用于检查数值精度，不改变模型假设。"
      },
      "phase": "understand",
      "diagram": "sir-compare",
      "ack": {
        "en": "Check my understanding",
        "zh": "检查我的理解"
      },
      "id": "8"
    },
    {
      "phase": "check",
      "title": {
        "en": "Your turn",
        "zh": "轮到你了"
      },
      "text": {
        "en": "With dt = 0.05, day 10 is position 201. Read that result for comparison with the earlier run.",
        "zh": "当 dt = 0.05 时，第 10 天是第 201 项。读取结果，与前面的运行比较。"
      },
      "code": "I(201)",
      "question": {
        "id": "transfer-v2",
        "label": {
          "en": "What is I(201)? Use two decimals.",
          "zh": "I(201) 是多少？保留两位小数。"
        },
        "type": "number",
        "answer": 64.9102617587605,
        "tolerance": 0.02
      },
      "win": {
        "en": "You used MATLAB to find a new result.",
        "zh": "你用 MATLAB 求出了一个新结果。"
      },
      "hint": {
        "en": "Run the lines above in order. Read the last output. Keep decimals; check every value if there is a list.",
        "zh": "按顺序运行上面的代码。读取最后的输出。保留小数；如果是数列，检查每一项。"
      },
      "transfer": true,
      "id": "9"
    },
    {
      "title": {
        "en": "Keep evidence of your work",
        "zh": "保留你的作品证据"
      },
      "text": {
        "en": "Save your script and figure. Your teacher will review your explanation.",
        "zh": "保存脚本和图像。老师会查看你的解释。"
      },
      "phase": "continue",
      "assignment": {
        "en": "Final task: submit both peak values, conservation checks and a labelled graph. Explain one numerical limitation and two model assumptions. Your teacher reviews the explanation.",
        "zh": "最终任务：提交两种峰值、守恒检查与标注图像。解释一个数值局限与两个模型假设。解释部分由老师审阅。"
      },
      "ack": {
        "en": "I saved my work",
        "zh": "我已保存作品"
      },
      "id": "10"
    },
    {
      "title": {
        "en": "Lesson complete",
        "zh": "本课完成"
      },
      "text": {
        "en": "A smaller time step tests numerical resolution. It does not change the model assumptions.",
        "zh": "更小的时间步长用于检查数值精度，不改变模型假设。"
      },
      "phase": "continue",
      "done": true,
      "win": {
        "en": "Check the time step complete",
        "zh": "检查时间步长已完成"
      },
      "id": "11"
    }
  ]
};})(typeof window!=='undefined'?window:globalThis);

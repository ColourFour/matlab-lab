(function(root){
root.LAB_EXTENSIONS=root.LAB_EXTENSIONS||{};
root.LAB_EXTENSIONS["image-compression"]={
  "id": "image-compression",
  "version": 1,
  "number": 4,
  "title": {
    "en": "Compress an image",
    "zh": "压缩图像"
  },
  "short": {
    "en": "Compress an image",
    "zh": "压缩图像"
  },
  "headline": {
    "en": "A picture\nis numbers.",
    "zh": "图像\n就是数字。"
  },
  "description": {
    "en": "Store fewer values with block averages.\nMeasure what detail is lost.",
    "zh": "用方块平均值保存更少数值。\n测量损失了多少细节。"
  },
  "requires": "fractals",
  "duration": 50,
  "previewPlot": "image-two",
  "fileName": "image_compression.m",
  "previewCode": "Run → compare → investigate",
  "reference": "downloads/image_compression_reference.m",
  "lessons": [
    {
      "id": "pixel-values",
      "title": {
        "en": "Read a tiny image",
        "zh": "读取微型图像"
      },
      "short": {
        "en": "Read a tiny image",
        "zh": "读取微型图像"
      },
      "icon": "cells",
      "minutes": 6,
      "goal": {
        "en": "Each matrix value controls the brightness of one pixel.",
        "zh": "矩阵中的每个数值决定一个像素的亮度。"
      },
      "term": "pixel / 像素",
      "see": {
        "en": "Each matrix value controls the brightness of one pixel.",
        "zh": "矩阵中的每个数值决定一个像素的亮度。"
      },
      "understand": {
        "en": "We use double-precision values on a fixed 0–255 scale: 0 is black, 255 is white, and values between are gray. This small generated image needs no file or extra toolbox.",
        "zh": "使用 0–255 固定范围内的双精度数值：0 为黑色，255 为白色，中间为灰色。这张小型生成图无需外部文件或额外工具箱。"
      },
      "editor": "image_compression.m",
      "code": "A = [0 0 80 80 80 80 0 0;\n     0 80 160 160 160 160 80 0;\n     80 160 240 0 0 240 160 80;\n     80 160 240 240 240 240 160 80;\n     80 160 0 240 240 0 160 80;\n     80 160 240 0 0 240 160 80;\n     0 80 160 160 160 160 80 0;\n     0 0 80 80 80 80 0 0];\n[size(A) A(3,4)]",
      "compare": {
        "en": "Eight rows, eight columns. Row 3, column 4 is black.",
        "zh": "八行八列，第 3 行第 4 列为黑色。"
      },
      "note": {
        "en": "A is numeric data, not a photo file. We will compare numbers stored, not JPEG or PNG file sizes.",
        "zh": "A 是数值数据，而非照片文件。我们比较保存的数值个数，不比较 JPEG 或 PNG 文件大小。"
      },
      "questions": [
        {
          "id": "pixels",
          "label": {
            "en": "How many pixels are in A?",
            "zh": "A 共有多少像素？"
          },
          "type": "number",
          "answer": 64,
          "tolerance": 1e-08,
          "placeholder": {
            "en": "Enter a number",
            "zh": "输入数字"
          }
        },
        {
          "id": "value",
          "label": {
            "en": "What is A(3,4)?",
            "zh": "A(3,4) 是多少？"
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
        "en": "Rows × columns gives the pixel count.",
        "zh": "行数乘以列数得到像素个数。"
      },
      "diagram": "image-original",
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
      "output": "ans =\n     8     8     0",
      "download": "downloads/image_compression_starter.m"
    },
    {
      "id": "show-image",
      "title": {
        "en": "Keep the color scale fixed",
        "zh": "固定色标范围"
      },
      "short": {
        "en": "Keep the color scale fixed",
        "zh": "固定色标范围"
      },
      "icon": "plot",
      "minutes": 6,
      "goal": {
        "en": "The same number must have the same shade in every image.",
        "zh": "在每张图中，相同数值必须对应相同灰度。"
      },
      "term": "color limits / 色标范围",
      "see": {
        "en": "The same number must have the same shade in every image.",
        "zh": "在每张图中，相同数值必须对应相同灰度。"
      },
      "understand": {
        "en": "Use `imagesc(A,[0 255])` to fix the display limits. Without fixed limits, MATLAB rescales each image separately, which can hide brightness changes. `axis image` keeps pixels square.",
        "zh": "用 `imagesc(A,[0 255])` 固定显示范围。不固定时，MATLAB 会单独缩放每张图，可能掩盖亮度变化。`axis image` 保持像素为正方形。"
      },
      "editor": "image_compression.m",
      "code": "A = [0 0 80 80 80 80 0 0;\n     0 80 160 160 160 160 80 0;\n     80 160 240 0 0 240 160 80;\n     80 160 240 240 240 240 160 80;\n     80 160 0 240 240 0 160 80;\n     80 160 240 0 0 240 160 80;\n     0 80 160 160 160 160 80 0;\n     0 0 80 80 80 80 0 0];\nimagesc(A, [0 255]);\ncolormap(gray); axis image;\nxlabel('Column'); ylabel('Row');",
      "compare": {
        "en": "The reference uses the same 0–255 scale and has row 1 at the top. The brightest value used here is 240.",
        "zh": "参考图使用相同的 0–255 色标，第 1 行在顶部。这里使用的最亮数值为 240。"
      },
      "note": {
        "en": "The darkest patches are 0, even when surrounded by bright neighbors.",
        "zh": "即使周围很亮，最暗方块仍为 0。"
      },
      "questions": [
        {
          "id": "limits",
          "label": {
            "en": "Which limits make a fair visual comparison?",
            "zh": "哪组设置能公平比较图像？"
          },
          "type": "choice",
          "answer": "fixed",
          "options": [
            {
              "value": "fixed",
              "label": {
                "en": "Use [0 255] for every image",
                "zh": "每张图都用 [0 255]"
              }
            },
            {
              "value": "auto",
              "label": {
                "en": "Rescale every image independently",
                "zh": "每张图单独重新缩放"
              }
            }
          ]
        }
      ],
      "hint": {
        "en": "Use one shared scale for all versions.",
        "zh": "所有版本使用相同色标。"
      },
      "diagram": "image-original",
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
      "outputPlot": "image-original"
    },
    {
      "id": "one-block",
      "title": {
        "en": "Average one block",
        "zh": "对一个方块求平均"
      },
      "short": {
        "en": "Average one block",
        "zh": "对一个方块求平均"
      },
      "icon": "cells",
      "minutes": 6,
      "goal": {
        "en": "Four pixels become one representative value.",
        "zh": "四个像素变成一个代表值。"
      },
      "term": "block average / 方块平均值",
      "see": {
        "en": "Four pixels become one representative value.",
        "zh": "四个像素变成一个代表值。"
      },
      "understand": {
        "en": "`A(1:2,1:2)` selects rows 1–2 and columns 1–2. `block(:)` turns all entries into one column, so `mean(block(:))` averages all four pixels, not each column separately.",
        "zh": "`A(1:2,1:2)` 选取第 1–2 行、第 1–2 列。`block(:)` 把元素排成一列，因此 `mean(block(:))` 求全部四个像素的平均值，而非分别求每列平均。"
      },
      "editor": "image_compression.m",
      "code": "A = [0 0 80 80 80 80 0 0;\n     0 80 160 160 160 160 80 0;\n     80 160 240 0 0 240 160 80;\n     80 160 240 240 240 240 160 80;\n     80 160 0 240 240 0 160 80;\n     80 160 240 0 0 240 160 80;\n     0 80 160 160 160 160 80 0;\n     0 0 80 80 80 80 0 0];\nblock = A(1:2,1:2);\nsmallPixel = mean(block(:));\nsmallPixel",
      "compare": {
        "en": "The four values are 0, 0, 0 and 80. Their mean is 20.",
        "zh": "四个数值为 0、0、0、80，平均值为 20。"
      },
      "note": {
        "en": "This loses information. Many different groups of four values can have the same mean.",
        "zh": "这会损失信息。许多不同的四个数值组合都可能具有相同平均值。"
      },
      "questions": [
        {
          "id": "mean",
          "label": {
            "en": "What value represents the first block?",
            "zh": "哪个数值代表第一个方块？"
          },
          "type": "number",
          "answer": 20,
          "tolerance": 1e-08,
          "placeholder": {
            "en": "Enter a number",
            "zh": "输入数字"
          }
        }
      ],
      "hint": {
        "en": "Add the four values and divide by 4.",
        "zh": "四个数值相加，再除以 4。"
      },
      "diagram": "image-block",
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
      "output": "smallPixel =\n    20"
    },
    {
      "id": "all-blocks",
      "title": {
        "en": "Visit every block",
        "zh": "遍历每个方块"
      },
      "short": {
        "en": "Visit every block",
        "zh": "遍历每个方块"
      },
      "icon": "cells",
      "minutes": 6,
      "goal": {
        "en": "A row loop and a column loop cover all sixteen blocks.",
        "zh": "行循环与列循环覆盖全部十六个方块。"
      },
      "term": "nested loops / 嵌套循环",
      "see": {
        "en": "A row loop and a column loop cover all sixteen blocks.",
        "zh": "行循环与列循环覆盖全部十六个方块。"
      },
      "understand": {
        "en": "`zeros(4,4)` reserves a small image. For output row r, input rows are 2*r-1 to 2*r; the same rule maps columns. The inner loop completes four columns for each outer row.",
        "zh": "`zeros(4,4)` 创建小图像。输出行 r 对应输入行 2*r-1 到 2*r；列也遵循同样规则。内层循环为外层的每一行处理四列。"
      },
      "editor": "image_compression.m",
      "code": "A = [0 0 80 80 80 80 0 0;\n     0 80 160 160 160 160 80 0;\n     80 160 240 0 0 240 160 80;\n     80 160 240 240 240 240 160 80;\n     80 160 0 240 240 0 160 80;\n     80 160 240 0 0 240 160 80;\n     0 80 160 160 160 160 80 0;\n     0 0 80 80 80 80 0 0];\nB = zeros(4,4);\nfor r = 1:4\n    for c = 1:4\n        block = A(2*r-1:2*r, 2*c-1:2*c);\n        B(r,c) = mean(block(:));\n    end\nend\n[size(B) B(1,1)]",
      "compare": {
        "en": "B contains sixteen averages. Its first entry matches the previous mission.",
        "zh": "B 包含十六个平均值，第一个元素与上一任务一致。"
      },
      "note": {
        "en": "The two end keywords close two different loops. Keep both.",
        "zh": "两个 end 分别结束两个不同的循环，请都保留。"
      },
      "questions": [
        {
          "id": "stored",
          "label": {
            "en": "How many values are stored in B?",
            "zh": "B 保存了多少个数值？"
          },
          "type": "number",
          "answer": 16,
          "tolerance": 1e-08,
          "placeholder": {
            "en": "Enter a number",
            "zh": "输入数字"
          }
        },
        {
          "id": "first",
          "label": {
            "en": "What is B(1,1)?",
            "zh": "B(1,1) 是多少？"
          },
          "type": "number",
          "answer": 20,
          "tolerance": 1e-08,
          "placeholder": {
            "en": "Enter a number",
            "zh": "输入数字"
          }
        }
      ],
      "hint": {
        "en": "A 4-by-4 matrix has 16 entries.",
        "zh": "4×4 矩阵有 16 个元素。"
      },
      "diagram": "image-block",
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
      "output": "ans =\n     4     4    20"
    },
    {
      "id": "reconstruct-image",
      "title": {
        "en": "Rebuild a larger picture",
        "zh": "重建大图像"
      },
      "short": {
        "en": "Rebuild a larger picture",
        "zh": "重建大图像"
      },
      "icon": "plot",
      "minutes": 6,
      "goal": {
        "en": "Repeat each average into a 2 × 2 square.",
        "zh": "把每个平均值重复为一个 2 × 2 方块。"
      },
      "term": "reconstruction / 重建",
      "see": {
        "en": "Repeat each average into a 2 × 2 square.",
        "zh": "把每个平均值重复为一个 2 × 2 方块。"
      },
      "understand": {
        "en": "`kron(B,ones(2))` replaces each value with a 2-by-2 block of that value. The reconstructed image has the original dimensions, but repeating an average cannot restore the lost detail.",
        "zh": "`kron(B,ones(2))` 把每个值替换为填满该值的 2×2 方块。重建图像与原图尺寸相同，但重复平均值无法恢复丢失的细节。"
      },
      "editor": "image_compression.m",
      "code": "A = [0 0 80 80 80 80 0 0;\n     0 80 160 160 160 160 80 0;\n     80 160 240 0 0 240 160 80;\n     80 160 240 240 240 240 160 80;\n     80 160 0 240 240 0 160 80;\n     80 160 240 0 0 240 160 80;\n     0 80 160 160 160 160 80 0;\n     0 0 80 80 80 80 0 0];\nB = zeros(4,4);\nfor r = 1:4\n    for c = 1:4\n        block = A(2*r-1:2*r, 2*c-1:2*c);\n        B(r,c) = mean(block(:));\n    end\nend\nreconstructed = kron(B, ones(2));\nimagesc(reconstructed, [0 255]);\ncolormap(gray); axis image;\nxlabel('Column'); ylabel('Row');",
      "compare": {
        "en": "The 8-by-8 result looks blocky. Every 2-by-2 patch has a constant shade.",
        "zh": "8×8 的结果呈现块状，每个 2×2 方块灰度相同。"
      },
      "note": {
        "en": "Store B and the block size 2; reconstruction can be performed later. Storing the large reconstructed array would remove the storage saving.",
        "zh": "保存 B 和方块边长 2，之后再重建。如果保存完整重建数组，就失去了节省存储的意义。"
      },
      "questions": [
        {
          "id": "side",
          "label": {
            "en": "How many columns does reconstructed have?",
            "zh": "reconstructed 有多少列？"
          },
          "type": "number",
          "answer": 8,
          "tolerance": 1e-08,
          "placeholder": {
            "en": "Enter a number",
            "zh": "输入数字"
          }
        },
        {
          "id": "detail",
          "label": {
            "en": "Does repeating averages restore every original pixel?",
            "zh": "重复平均值能恢复每个原始像素吗？"
          },
          "type": "choice",
          "answer": "no",
          "options": [
            {
              "value": "no",
              "label": {
                "en": "No, detail was lost",
                "zh": "不能，细节已丢失"
              }
            },
            {
              "value": "yes",
              "label": {
                "en": "Yes, exactly",
                "zh": "能，完全恢复"
              }
            }
          ]
        }
      ],
      "hint": {
        "en": "Four columns in B each expand to two columns.",
        "zh": "B 的四列各扩展为两列。"
      },
      "diagram": "image-block",
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
      "outputPlot": "image-two"
    },
    {
      "id": "storage-ratio",
      "title": {
        "en": "Count the saving",
        "zh": "计算节省量"
      },
      "short": {
        "en": "Count the saving",
        "zh": "计算节省量"
      },
      "icon": "cells",
      "minutes": 6,
      "goal": {
        "en": "The smaller matrix stores one quarter as many values.",
        "zh": "小矩阵保存的数值个数为原来的四分之一。"
      },
      "term": "compression ratio / 压缩比",
      "see": {
        "en": "The smaller matrix stores one quarter as many values.",
        "zh": "小矩阵保存的数值个数为原来的四分之一。"
      },
      "understand": {
        "en": "Define our ratio as original value count divided by compressed value count. `numel(A)/numel(B)` equals 4. Both arrays use the same numeric type, so this compares array payload sizes; real files also store metadata.",
        "zh": "这里把压缩比定义为原数值个数除以压缩后数值个数。`numel(A)/numel(B)` 等于 4。两者使用相同数值类型，因此比较的是数组数据量；实际文件还保存元数据。"
      },
      "editor": "image_compression.m",
      "code": "A = [0 0 80 80 80 80 0 0;\n     0 80 160 160 160 160 80 0;\n     80 160 240 0 0 240 160 80;\n     80 160 240 240 240 240 160 80;\n     80 160 0 240 240 0 160 80;\n     80 160 240 0 0 240 160 80;\n     0 80 160 160 160 160 80 0;\n     0 0 80 80 80 80 0 0];\nB = zeros(4,4);\nfor r = 1:4\n    for c = 1:4\n        block = A(2*r-1:2*r, 2*c-1:2*c);\n        B(r,c) = mean(block(:));\n    end\nend\nratio = numel(A)/numel(B);\nratio",
      "compare": {
        "en": "A 4:1 ratio means 16 values replace 64 values. It does not mean the file is exactly four times smaller.",
        "zh": "4:1 表示用 16 个值替代 64 个值，不表示文件大小恰好缩小四倍。"
      },
      "note": {
        "en": "We are studying lossy downsampling, not implementing JPEG or PNG.",
        "zh": "我们研究有损降采样，并非实现 JPEG 或 PNG。"
      },
      "questions": [
        {
          "id": "ratio",
          "label": {
            "en": "What is the value-count ratio?",
            "zh": "数值个数之比是多少？"
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
        "en": "Divide 64 by 16.",
        "zh": "计算 64 除以 16。"
      },
      "diagram": "image-storage",
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
      "output": "ratio =\n     4"
    },
    {
      "id": "measure-error",
      "title": {
        "en": "Measure lost detail",
        "zh": "测量细节损失"
      },
      "short": {
        "en": "Measure lost detail",
        "zh": "测量细节损失"
      },
      "icon": "cells",
      "minutes": 6,
      "goal": {
        "en": "Measure each pixel difference, square it, then average.",
        "zh": "计算每个像素差，平方后取平均。"
      },
      "term": "mean squared error / 均方误差",
      "see": {
        "en": "Measure each pixel difference, square it, then average.",
        "zh": "计算每个像素差，平方后取平均。"
      },
      "understand": {
        "en": "`difference = A-reconstructed` compares matching pixels. Squaring with `.^2` makes errors nonnegative. `mean(difference(:).^2)` gives mean squared error (MSE), in squared intensity units. Zero means an exact match.",
        "zh": "`difference = A-reconstructed` 比较对应像素。用 `.^2` 平方使误差非负。`mean(difference(:).^2)` 得到均方误差（MSE），单位为灰度值的平方。零表示完全相同。"
      },
      "editor": "image_compression.m",
      "code": "A = [0 0 80 80 80 80 0 0;\n     0 80 160 160 160 160 80 0;\n     80 160 240 0 0 240 160 80;\n     80 160 240 240 240 240 160 80;\n     80 160 0 240 240 0 160 80;\n     80 160 240 0 0 240 160 80;\n     0 80 160 160 160 160 80 0;\n     0 0 80 80 80 80 0 0];\nB = zeros(4,4);\nfor r = 1:4\n    for c = 1:4\n        block = A(2*r-1:2*r, 2*c-1:2*c);\n        B(r,c) = mean(block(:));\n    end\nend\nreconstructed = kron(B, ones(2));\ndifference = A - reconstructed;\nmse = mean(difference(:).^2);\nmse",
      "compare": {
        "en": "Check your result against the value shown. Smaller MSE means a closer pixel match, not always a better-looking image.",
        "zh": "与所示数值对比。MSE 越小表示像素更接近，但不一定在视觉上更好。"
      },
      "note": {
        "en": "Do not square the average difference. Positive and negative differences can cancel before squaring.",
        "zh": "不要先求差值平均再平方，正负差可能在平方前抵消。"
      },
      "questions": [
        {
          "id": "mse",
          "label": {
            "en": "Enter the MSE for 2 × 2 averaging.",
            "zh": "输入 2 × 2 平均压缩的 MSE。"
          },
          "type": "number",
          "answer": 4250.0,
          "tolerance": 0.01,
          "placeholder": {
            "en": "Enter a number",
            "zh": "输入数字"
          }
        }
      ],
      "hint": {
        "en": "Flatten the difference array with (:), square each entry, then use mean.",
        "zh": "用 (:) 展平差值数组，逐项平方后求 mean。"
      },
      "diagram": "image-error",
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
      "output": "mse =\n    4250.0000"
    },
    {
      "id": "compression-challenge",
      "title": {
        "en": "Choose a trade-off",
        "zh": "选择取舍"
      },
      "short": {
        "en": "Choose a trade-off",
        "zh": "选择取舍"
      },
      "icon": "cells",
      "minutes": 6,
      "goal": {
        "en": "Compare 2 × 2 and 4 × 4 blocks using the same original image.",
        "zh": "用相同原图比较 2 × 2 与 4 × 4 方块。"
      },
      "term": "trade-off / 取舍",
      "see": {
        "en": "Compare 2 × 2 and 4 × 4 blocks using the same original image.",
        "zh": "用相同原图比较 2 × 2 与 4 × 4 方块。"
      },
      "understand": {
        "en": "Larger blocks save more values but remove more detail. This script uses 4-by-4 input blocks, a 2-by-2 compressed array, and a 16:1 value-count ratio. Compare its MSE with mission 7.",
        "zh": "更大方块节省更多数值，但损失更多细节。此脚本使用 4×4 输入方块、2×2 压缩数组，数值个数之比为 16:1。将 MSE 与任务 7 比较。"
      },
      "editor": "image_compression.m",
      "code": "A = [0 0 80 80 80 80 0 0;\n     0 80 160 160 160 160 80 0;\n     80 160 240 0 0 240 160 80;\n     80 160 240 240 240 240 160 80;\n     80 160 0 240 240 0 160 80;\n     80 160 240 0 0 240 160 80;\n     0 80 160 160 160 160 80 0;\n     0 0 80 80 80 80 0 0];\nB = zeros(2,2);\nfor r = 1:2\n    for c = 1:2\n        block = A(4*r-3:4*r, 4*c-3:4*c);\n        B(r,c) = mean(block(:));\n    end\nend\nreconstructed = kron(B, ones(4));\ndifference = A - reconstructed;\nratio = numel(A)/numel(B);\nmse = mean(difference(:).^2);\n[ratio mse]",
      "compare": {
        "en": "The 4-by-4-block version has greater error for this image. It also stores fewer values.",
        "zh": "对这张图，4×4 方块版本的误差更大，但保存的数值更少。"
      },
      "note": {
        "en": "Final task: submit original and both reconstructed figures, ratios and MSE values. Choose a version and explain your balance between storage and detail. No single choice fits every use.",
        "zh": "最终任务：提交原图、两张重建图、压缩比与 MSE。选择一个版本，解释如何权衡存储与细节。不同用途可能需要不同选择。"
      },
      "questions": [
        {
          "id": "ratio",
          "label": {
            "en": "Enter the 4 × 4-block ratio.",
            "zh": "输入 4 × 4 方块版本的压缩比。"
          },
          "type": "number",
          "answer": 16,
          "tolerance": 1e-08,
          "placeholder": {
            "en": "Enter a number",
            "zh": "输入数字"
          }
        },
        {
          "id": "mse",
          "label": {
            "en": "Enter its MSE.",
            "zh": "输入其 MSE。"
          },
          "type": "number",
          "answer": 6837.5,
          "tolerance": 0.01,
          "placeholder": {
            "en": "Enter a number",
            "zh": "输入数字"
          }
        }
      ],
      "hint": {
        "en": "There are four stored averages. Use the displayed [ratio mse] result.",
        "zh": "保存了四个平均值，读取 [ratio mse] 的结果。"
      },
      "diagram": "image-four",
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
      "output": "ans =\n    16.0000    6837.5000"
    }
  ],
  "skills": [
    {
      "en": "Map pixels",
      "zh": "映射像素"
    },
    {
      "en": "Average blocks",
      "zh": "对方块求平均"
    },
    {
      "en": "Reconstruct",
      "zh": "重建图像"
    },
    {
      "en": "Measure error",
      "zh": "测量误差"
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

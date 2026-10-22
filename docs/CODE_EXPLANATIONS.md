# Interactive MATLAB code explanations

The 214 guided code blocks in Projects 0–5 share one renderer. Existing lesson text, code, questions, answers, step IDs and save formats are unchanged. This feature changes the website’s code panels; it does not add controls to the MATLAB application.

## Student interaction

- Hover over code for a short explanation. The pointer can move into the explanation without dismissing it.
- Tap or click to keep an explanation open. Tap again, click outside, or press Escape to close it.
- Tab into a code block, then use Left/Right arrows to explore. Home/End select the first/last piece. Each block has one position in the Tab order.
- EN/中文 switches the explanation language while keeping code and variables unchanged. Optional bilingual vocabulary appears in the tooltip title.
- Copy always uses the original lesson string. Selecting the visible code also produces the original plain text; explanations and instructions live outside the code element.

The text describes a function’s action and a variable’s purpose in this project. It distinguishes array indexing from function inputs, `end` in an index from a loop terminator, matrix-row semicolons from output-suppression semicolons, and array arithmetic from matrix operations. It never calculates a result or reads checkpoint answers. Hovering or tapping does not submit a result, unlock a step, or change a save. The existing class account and progress architecture is untouched.

## Authoring

`content/code-help.js` contains paired English/Chinese function descriptions, per-project variable meanings, and optional per-project explanations of why a function is used. Add meanings there when introducing a new named value or function. Keep sentences short and describe the actual model. Avoid inferred live values: the website cannot read MATLAB.

`assets/code-explorer.js` tokenizes the supplied lesson code without executing it. This is a renderer for this course’s examples, not a general MATLAB parser. It uses the project, the current step and earlier code in that lesson for context. Source strings and attribute values are escaped; tooltip content is assigned as text. The app dismisses stale tooltips when a lesson rerenders. The stylesheet uses fixed-position tooltips to avoid clipping them inside horizontally scrollable code blocks.

## Verification

The automated checks cover all 214 examples and 5,637 explained pieces. They verify exact source-text reconstruction and copying, bilingual context, indexing and function inputs, strings and comments, scientific notation, transpose syntax, matrix rows, multi-output syntax, keyboard navigation, tap and hover dismissal, language changes, safe rendering, and unchanged learning progress. Existing course, account and save regression suites also pass. Real-browser checks exercise explanations, keyboard navigation and the Chinese version; responsive positioning is checked on a phone viewport before release.

The wording was checked against primary MathWorks references, including [array and matrix operations](https://www.mathworks.com/help/matlab/matlab_prog/array-vs-matrix-operations.html), [array indexing](https://www.mathworks.com/help/matlab/learn_matlab/array-indexing.html), [colon syntax](https://www.mathworks.com/help/matlab/ref/double.colon.html), [random generator settings](https://www.mathworks.com/help/matlab/ref/rng.html), and [Kronecker products](https://www.mathworks.com/help/matlab/ref/kron.html). The descriptions are original, simplified course explanations.

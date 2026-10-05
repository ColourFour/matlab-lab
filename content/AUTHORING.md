# Add a course using the shared lesson template

The seven project content files contain paired English / Simplified Chinese lesson text. Projects 0–5 share the guided renderer. Project 6 uses `assets/capstone.js` for its open brief, notebook and self-review, with shared routing, language and navigation. `courses.js` supplies course-level titles, completion messages, files and prerequisites. `projects.js` lists the wider learning path.

## Lesson schema

- `id`: stable, unique URL/storage key. Do not rename a published ID without a migration.
- `title`, `short`, `goal`, `see`, `understand`, `compare`, `note`, `hint`, `success`: `{en, zh}` text. Backticks mark inline MATLAB code.
- `steps`: ordered `{en, zh}` instructions. Explain every newly introduced MATLAB command.
- `code`: one canonical MATLAB source string, shared by both languages.
- `editor`: optional script filename. Otherwise the code is labeled Command Window.
- `download`: optional relative URL of a starter script.
- `diagram`: shared renderer name; `output`: literal Command Window text, or `outputPlot`: a shared reference graph name.
- `questions`: `{id, label:{en,zh}, type, answer, placeholder}`; types are `number`, `vector`, `choice`.
- `tolerance`: optional absolute numeric tolerance. Default 1e-8; use a suitable tolerance when students round physical quantities.
- `options`: choice items `{value, label:{en,zh}}`. `answers` can allow multiple valid choice values.
- `dependsOn` plus `answersByValue`: validate a numeric result against another field (used to match the target-launch height to its selected angle).
- `icon`, `minutes`, `term`: navigation icon, time estimate, bilingual vocabulary.

All lessons automatically receive See → Understand → Do → Compare → Check → Continue. All checkpoint values are parsed as data; no JavaScript or MATLAB submitted by a student is executed.

## Add another course

1. Create a file using the lesson schema. Projects 2–6 register metadata and lessons in `LAB_EXTENSIONS`; `courses.js` merges these with the original courses. Load content before `courses.js` in `index.html`.
2. Use a stable course ID, number, prerequisites, overview/completion text, reference download and eight lessons. Use valid MATLAB identifiers for editor filenames (letters, numbers, underscores; no hyphens).
3. Add concept and output visuals to `content/visuals.js`. The shared `course-diagrams.js` renderer supports cells, grayscale grids and labelled multi-series plots. SVG geometry is identical in English and Chinese. Titles/captions use paired translations. Original Boot Camp/projectile diagrams remain supported.
4. Supply MATLAB starter/reference files, all bilingual strings, numeric tolerances and independent model checks. Add the catalog item in `projects.js`. The homepage path, sidebar and completion handoff use the registered courses automatically.
5. Test prerequisites, old progress migration and teacher preview (`?review=1`). Preview opens every lesson without modifying stored student progress; it is not an authentication or grading system.

The route parser and sidebar course switch automatically support registered courses. Course progress is stored independently under `matlab-lab:v2`, with one global language preference. Version-1 Boot Camp progress migrates automatically on the same site origin. Answer drafts and feedback are namespaced by course and lesson. Reset clears progress for all courses.

`requires` locks a course until its prerequisite is complete. Its overview remains visible. Use `requires` to identify the previous registered course. Projects 0–5 have guided lessons. Project 6 has open working sections with no answer key.

Before publication, run the MATLAB examples in your teaching environment; verify both translations, references and SVG values; test correct/empty/wrong answers, rounded values, any dependent fields, navigation, reload, language switching, keyboard use and narrow screens. Update reference scripts when lesson code changes.

## Open independent project

`investigation.js` registers `kind: "capstone"`, `openNavigation: true`, no `requires`, and eight sections with `open: true`. Each section supplies paired `title`, `goal`, `see`, `understand`, `steps`, `compare`, `checks` and `prompts` (`id`, bilingual `label`). The course also supplies `brief`, `scope`, `requirements`, `deliverables`, `freedom`, `directions`, `extension` and `rubric`. Do not add a numeric answer key to this project.

Self-review marks are independent, so completing section 8 does not mark sections 1–7. Old worked-investigation IDs do not carry over as new self-review. Notes use the separate `matlab-lab:capstone:v1` key and are bounded to known prompts and 6,000 characters per field. Input autosaves; explicit Save gives status. Markdown export preserves student text and bilingual prompts. The site does not upload or grade it. Teacher preview keeps edits in memory and disables self-review persistence. Resetting progress preserves notes; clearing site data removes both.

Use paired `fmt({en,zh})` text in capstone panels so both languages reserve the same space. Keep a realistic scope and concrete evidence requirements while leaving the topic, mathematics and model to the student.

## Student steps (September 27 revision)

`content/guided.js` supplies `LAB_GUIDES[courseId + ":" + lessonId]`. Each ordered step has bilingual `title` and `text`, and a `phase` (see, understand, do, compare, check, continue). Limit the main instruction to 35 English words / 110 Chinese characters. Use one action per screen. Keep matrices and loops intact; displayed code blocks are at most eight lines. `append: true` means add the block to this lesson’s new script, save, then run the assembled script. Command Window steps use `typed: true`.

Optional fields: `code`, `output`, `plot`, `diagram`, `visual`, `filename`, `observe`, `ack`, `win`, `hint`, `question`, `assignment`, `revealCode`, `done`. `question` uses the existing numeric/vector/choice schema; show one at a time. `hint` must refer to this exact question, especially when the lesson changes an input. Do not hide required code changes in the old `note`. The last step has `done: true`; all checks must pass before it records a new completion. Manual confirmations do not inspect MATLAB or grade the student.

The original content files remain the detailed reference and course metadata. Keep both sources and downloadable examples consistent when changing math or answer keys. `LabGuide.clean` restores known, bounded fields, revalidates solved answers and prevents resuming past an unanswered checkpoint. `matlab-lab:guided:v1` stores the current lesson/step and answers separately from existing course completions. Teacher preview uses memory only.

Test the student route through every revised lesson, not just correct values in isolated functions. Test an incorrect result, return/back, resume, language switching, copy, export, help and mobile layout. Use identical geometry in both languages through `fmt`. Build version query strings in index.html ensure updated JS/CSS replace browser caches.

## Transfer checks and rewards (September 28)

Use exactly one `transfer: true` checkpoint per guided lesson. Keep the worked example and its expected output. Then ask for a **new result** using changed inputs or a measurement not shown in the example. Supply a short runnable `code` block and numeric/vector `question`; do not include `output`, `plot`, an answer-revealing hint, or a multiple-choice shortcut on this step. When a new command is necessary, explain its role in one short sentence. Code runs in Command Window unless `append` is set. Reused variables must be defined earlier in this lesson.

The original course question sets remain reference examples; `content/guided.js` is authoritative for active student checkpoints. Generated lesson exports include both practice and transfer code. Static reference downloads contain the worked examples, not the new answer key. Independently calculate new numeric results and test rounded input.

Guide records now have payload `version: 2` under the existing storage key. Old step records restart; separate completed-course records and notebooks are untouched. Revise the payload version again if reordered steps or changed answers make old positions unsafe.

`LabCelebrate.play` runs only after a newly correct form submission. Never call it from render, resume, language switching, or manual acknowledgements. Keep the overlay outside the rerendered app, decorative and pointer-transparent, bounded to 36 particles and one live cleanup timer. Respect reduced motion and clear overlays on navigation. All sixteen CSS variants should appear once per shuffled batch.

## Saved scripts and revised results

Keep each step's `id` stable when inserting new teaching steps. Cursor/reached IDs align existing saves to that step; numeric positions migrate from the prior sequence. Do not reuse a removed step ID for a different task.

For lessons with a `filename`, every code step (including `transfer`) uses `append: true`. Put fresh inputs after the worked example so Run reproduces the new result. Reset loop accumulators inside a complete runnable block before repeating a model. When new values change a figure, draw/label it again. Final evidence tasks must supply drawing, a matching Compare visual and `saveas(gcf,'name.png')` instructions. Keep each displayed block at eight lines or fewer.

Decimal transfer gates use `format longG`; set `question.matlabDisplay: true` only for entered MATLAB results. The validator allows four-decimal scientific mantissa rounding and scaled four-decimal vectors without loosening plain-decimal tolerances. Integer checks stay exact. Never execute student input. Test malformed input separately from wrong numeric values.

App persistence uses `LabStorage` channels. Save only changed leaf fields; do not restore whole-record overwrites. Capstone conflicts keep the current text plus separate preserved versions, including full-length notes; exports include both. Reset affects progress channels through a shared generation, not notes or language. Teacher preview reads saved state but never writes.

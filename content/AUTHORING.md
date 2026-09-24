# Add a course using the shared lesson template

The seven project content files contain paired English / Simplified Chinese lesson text. All seven courses use the same renderer, navigation, validation and progress handling. `courses.js` supplies course-level titles, completion messages, files and prerequisites. `projects.js` lists the wider learning path.

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

`requires` locks a course until its prerequisite is complete. Its overview remains visible. Use `requires` to identify the previous registered course. Current Projects 0–6 all have complete guided lessons.

Before publication, run the MATLAB examples in your teaching environment; verify both translations, references and SVG values; test correct/empty/wrong answers, rounded values, any dependent fields, navigation, reload, language switching, keyboard use and narrow screens. Update reference scripts when lesson code changes.

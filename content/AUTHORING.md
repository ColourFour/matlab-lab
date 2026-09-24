# Add a course using the shared lesson template

`bootcamp.js` and `projectile-motion.js` contain paired English / Simplified Chinese lesson text. Both courses use the same renderer, navigation, validation and progress handling. `courses.js` supplies course-level titles, completion messages, files and prerequisites. `projects.js` lists the wider learning path.

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

## Add Project 2

1. Create a content file with the same lesson schema and load it in `index.html` before `courses.js`.
2. Add a descriptor to `LAB_COURSES` in `courses.js`. Include `id`, `number`, `version`, `lessons`, title/overview/completion text, reference file, preview plot, and optional `requires` course ID.
3. Implement any new diagrams. Existing course renderers are shared; the projectile diagram extension delegates unrelated names to the original renderer.
4. Add starter/reference downloads and tests, then set its project catalog item to `available:true`.
5. Add any desired homepage promotion/completion link. The existing prominent next-project card intentionally highlights Project 1.

The route parser and sidebar course switch automatically support registered courses. Course progress is stored independently under `matlab-lab:v2`, with one global language preference. Version-1 Boot Camp progress migrates automatically on the same site origin. Answer drafts and feedback are namespaced by course and lesson. Reset clears progress for all courses.

`requires` locks a course until its prerequisite is complete. Its overview remains visible. Keep unfinished projects as non-clickable placeholders, not fake routes.

Before publication, run the MATLAB examples in your teaching environment; verify both translations, references and SVG values; test correct/empty/wrong answers, rounded values, any dependent fields, navigation, reload, language switching, keyboard use and narrow screens. Update reference scripts when lesson code changes.

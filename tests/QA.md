# Verification — 24 September 2026

## Browser checks

- Completed all eight Boot Camp missions again after the multi-project update; its completion unlocks Project 1.
- Completed all eight Projectile Motion missions through the visible forms and Continue links.
- Checked incorrect/empty answers, locked progression, hints, copied code, starter/reference links, previous/next navigation, section anchors, browser Back/Forward, setup/help, Escape, reset/cancel and keyboard skip-to-main.
- Confirmed Project 1's overview is visible before Boot Camp completion but its lessons remain locked. Projects 2–6 are unfinished, non-clickable placeholders.
- Final target: 30° with range 35.31 m and height 5.10 m passes; 60° with range 35.31 m and height 15.29 m also passes. Selecting 30° with the 60° height fails.
- Rounded answers and comma-separated vectors work. Project 1's copied starter includes the intentional ___ angle placeholder.
- Both course histories retain separate progress through course switching and reload. The language choice also survives reload.
- At 1366 px, all eight Project 1 lessons have identical section positions and dimensions across EN/中文, with unchanged MATLAB code.
- At 390 px, all eight Project 1 lessons in both languages have no page-level horizontal overflow. The shared homepage also fits at 320 px.
- Visually inspected desktop/mobile layouts, Chinese instructions, reference graphs and aligned code/output panels. No browser errors or warnings were reported.

## Automated checks

Run `node --test tests/*.test.cjs`: **14 test groups pass**. Coverage includes both answer sets, malformed input, tolerances, dependent answers, both target trajectories, analytic flight values, bilingual completeness, independent course histories, sequential unlock sanitation and legacy Boot Camp migration.

## Limits

The browser validates entered results, not a student's MATLAB script. MATLAB examples were not executed in MATLAB here; their syntax follows core documentation and the numeric model results were independently verified. Do a teacher walkthrough in your school's MATLAB environment before class, especially account access and Editor/Figures panels.

This is local browser/model QA, not certification across every browser, screen reader or MATLAB release. Storage-denied behavior is defensive; corrupted state and migration were covered in automated tests.

## Full-course expansion — 2026-09-24

- Seven courses / 56 lessons; added 40 new lessons in Projects 2–6.
- All 40 new checkpoints exercised in the actual browser in student mode: empty input rejected, correct values accepted (including stated rounding), sequential progress reached 8/8 per course.
- Project 2 completion linked to Project 3; subsequent prerequisites opened through real checkpoint completion. Final investigation completion explicitly distinguishes worked checks from independent teacher-reviewed work. Completion survived reload.
- Every new lesson measured in both languages: six lesson-section rectangles and code text match on desktop. At 390 px, all 40 have zero measured section shift and no horizontal document overflow after fixing shared progress-caption and input-note sizing.
- Independent automated calculations verify carpet cells/counts, block means/MSE, SIR population conservation and simultaneous updates, time-step refinement, and investigation square-law calculations.
- Existing two-course progress migrates with all five new histories initially empty.
- MATLAB is unavailable locally; these are numerical/browser checks, not native MATLAB execution. Teacher execution of the provided `.m` sections remains part of the classroom audit.
- After resetting test progress, a direct Project 5 lesson URL correctly returned its locked overview and named Project 4 as its prerequisite. Teacher preview opened the same lesson, accepted a correct answer, and kept progress at 0; returning to student mode restored the lock.
- Copy returned the complete SIR script; hint toggled; the report download link worked; help/reset wording covers all seven courses. At 320 px the hub showed seven course cards without document overflow. No browser console errors or warnings were recorded.

## Open Project 6 and language revision — 2026-09-24

This revision replaces the former eight guided investigation lessons. Current structure: **48 guided lessons + 8 open working sections**. The earlier Project 6 checks above describe the previous release.

- Removed promotional headline/tagline copy. Rebuilt Project 6 around a student-chosen system and a recommendation supported by reproducible evidence, competing designs, constraints, held-out evaluation, failure analysis and a realistic 6–10-hour scope.
- All eight sections are accessible with zero guided-course progress. Entered section 8 first, rejected an empty self-review, saved bilingual notes and recorded only that section. Reload and language switching preserved notes and its mark. Removing the mark worked. Test notes were cleared afterward.
- Teacher preview disabled self-review, accepted temporary notes, and restored original saved notes on return to student mode.
- All eight section panel positions and sizes match across English/Chinese on desktop and at 390 px. No horizontal document overflow at 390 px. Project overview also fits at 320 px after changing its nested cards to one column.
- Inspected desktop overview and mobile working sections visually. Topic disclosures open correctly. Export opens a readable, selectable Markdown preview containing all eight sections and a correctly named download link. The browser automation did not report its native download event, so the copyable preview also provides access without relying on download support. Export content and escaping are covered by unit checks.
- All **28 automated test groups pass**, covering the existing guided course, independent self-review state, old Project 6 migration, bounded notebook text, readiness without fake quality grading, bilingual exports and HTML escaping.
- Native MATLAB execution remains unverified in this environment. The optional Project 6 files are a skeleton and testing utilities, not a supplied project solution.

## Student-first walkthrough revision — 27 September 2026

- Replaced the dashboard-first student UI with one Start/Continue action. Course map, teacher preview, long explanations and supporting files are secondary. Fresh visitors default to Chinese; existing language preferences and course completions are retained.
- All 48 guided lessons now use short bilingual steps, one question per screen, complete runnable code blocks (maximum eight displayed lines), manual result confirmations and saved position/answers. The first lesson checks 4 from `2 + 2`, then 7 from `2 + 5`, draws a graph and changes its middle height.
- Completed every step and checkpoint in all 48 lessons through actual browser controls in student mode. This tests the website; no MATLAB process was available. Confirmed sequential project unlocks, the 60-degree projectile solution, rounded values and multi-value answers.
- Checked incorrect first-command input, correct feedback, editing a previously correct answer, Back/step review, reload/resume, language switching, clipboard code copy, modal help, full-script export contents and Copy, reset and course prerequisites. Answer edits now invalidate their previous success until checked again.
- Teacher preview answer edits did not overwrite saved student answers. Project 6 remains accessible at zero progress. Its out-of-order self-review, autosaved notes and export contents still work after the renderer change; temporary test notes were removed.
- Measured a code step in every guided lesson in EN and Chinese on desktop and at 390 px: identical card position/size, no document overflow. Fresh homepage and Project 6 overview also fit at 320 px. Visually inspected the homepage and first command/result/action screen. Reset all temporary guided test progress afterward.
- Native browser download completion events were not exposed by the embedded test browser. Exports therefore also provide a selectable preview and a direct Copy control, both verified. Download links remain standard browser downloads; test them in the school browser during the audit.
- **36 automated test groups pass.** Added coverage for all short-step schemas and original checkpoints, bilingual instruction bounds, intact MATLAB matrices/loops, first-win alignment, completion requirements, resume sanitation, edited answers and dependent-value invalidation. Earlier model/numerical tests remain passing.
- Layout illustrations are explicitly schematic, not screenshots of a particular MATLAB release. Test the actual Windows/Mac classroom layout and run the scripts in that MATLAB version. Student engagement and pacing require an observed trial with students; browser success is not evidence of student mastery.

## Fresh results and celebrations — 28 September 2026

- Replaced the active copy-the-example / trivia gates with one new MATLAB result in each of 48 guided lessons. Worked examples and expected visuals remain. The first checked result is a fresh calculation; vectors now compute a new vector instead of asking students to count five displayed numbers. Project 6 remains open and unchanged.
- Tested all 48 new checkpoints in the browser using rounded numeric/vector inputs. All accepted correct results and allowed Continue during their reward. Tested wrong answers throughout Boot Camp and Projectile Motion: no celebration or unlock. All 16 distinct animation variants appeared through actual submissions.
- Tested the final 16 lessons in Chinese at 390 px with no horizontal document overflow. Checked English/Chinese card geometry, editing a solved answer, reload persistence and no reward replay on reload or language change.
- 41 automated test groups pass. Coverage includes all transfer gates, short bilingual instructions, complete MATLAB blocks, payload migration retaining course completions, numeric tolerance, independent projectile/SIR/image calculations, animation shuffle/lifecycle and reduced-motion suppression.
- Animations use 36 decorative particles, no pointer interception, no sound and one bounded cleanup timer. They clear when navigating; reduced motion retains text feedback.
- MATLAB is unavailable here. Browser checks validate the teaching site; numerical checks independently calculate outputs without claiming that MATLAB itself was executed. Classroom observation is still needed to judge engagement and pacing.

## Six adversarial audit corrections — 5 October 2026

- Replaced whole-record writes with changed-field storage. Automated two-tab regressions cover language changes after completion, different notebook sections/fields, simultaneous same-note edits (including 6,000-character versions), legacy migration, self-review removal, storage events without cross-tab resume loops and resets that cannot resurrect old progress. Same-note conflicts keep separate versions and include them in exports; notes/language survive progress reset. Preview never writes. Storage-denied behavior remains usable in memory.
- Safe answer normalization accepts full-width numerals, Chinese commas, Unicode minus, optional brackets, scientific notation, MATLAB headers and scale factors. Form feedback distinguishes blank, format, value-count and wrong-value errors. Formulas, malformed lists, trailing junk and nonfinite values are rejected. Decimal transfers request `format longG`; recognized four-decimal MATLAB scientific/scaled displays use their rounding intervals instead of generally widening tolerances.
- Saved Editor lessons now append their transfer code. Added figure updates for changed data, a five-cell fractal level 2/3/4 drawing and PNG-saving sequence, all three final image figures plus both ratio/MSE rows, and a fine SIR graph plus both time-step peaks/conservation checks. Completion text uses the new 81-by-81/five-cell fractal and 23 m/s, 37-degree target results. Stable step IDs preserve cursor alignment through added steps.
- **60 automated test groups pass**, including traversal of all 48 lessons through the actual app renderer/form/navigation with DOM/storage test doubles. These component tests are not browser or MATLAB execution. Independent numerical checks also validate the finer SIR data and five-cell reference images.
- Actual local in-app browser checks: fresh start, language switching, distinct format feedback, correct full-width/header answers, success/Continue, two-tab completion synchronization and reload, notes saved in separate sections and reloaded, acceptance of `1.7094e+3`, code clipboard copy, assembled script export containing the fresh check/both reconstructions/three PNG saves, and the new SIR Compare figure. English/Chinese SIR card rectangles matched at 1280 px. Screenshot saved outside the repo as `outputs/matlab-audit-fixes.png`.
- The requested 390-px viewport override did not take effect in the embedded browser: measured width stayed 1280 px. This pass therefore does not claim a new mobile browser verification; previous mobile QA remains recorded above. Temporary override was reset.
- Native MATLAB execution is still unavailable. Run the assembled scripts in the school's MATLAB release during the teacher audit. PNG commands use core `saveas` rather than a newer release-specific export API.


## October 7 — classroom/video integration branch (not deployed)

- Restored the October 3 classroom/video/account drafts selectively onto October 5 commit `693f388`. Existing lessons, validators, changed-field storage, stable-ID migration and figure/script corrections remain intact.
- Baseline 60/60 passed; combined site/account suite 88/88 and backend suite 8/8 pass. Added combined regression cases; mocked DOM and local PostgreSQL-WASM checks pass, including private export cleanup, account isolation, full snapshots/conflict copies, atomic CAS conflict behavior and heartbeat deduplication.
- Actual local browser: first-visit video entry, full 30-second playback, stopping on close, Help replay, EN/中文 caption defaults, classroom-disabled dialog, malformed numeric feedback, full-width answer acceptance and saved-result reload. At 390 × 844 the updated header/player fit without horizontal overflow; the desktop lesson card's dimensions/position matched in both languages at 1280 px. Screenshot: `outputs/matlab-classroom-integration-preview.jpg` outside the repo.
- Accounts remain disabled; no Supabase project/schema/roster deployment or real account test occurred. Live Auth/RLS/Storage/gateway/advisor checks, cross-browser/accessibility checks, teacher/student classroom trials and school MATLAB execution remain pending. See `docs/CLASSROOM_INTEGRATION.md` for provenance, conflict decisions and full gates.

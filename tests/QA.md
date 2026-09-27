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

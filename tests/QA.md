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

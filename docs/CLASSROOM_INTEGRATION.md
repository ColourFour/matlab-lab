# Classroom integration — ready for review, not deployed

Branch: `integration/classroom-v2-20261007`.

Base: current published repository commit `693f388380f156ef140d74105b1a7b9871505c42` (October 5). All 54 base files matched the existing local project before integration. The original checkout and its working files were retained. No branch reset, merge, push, Pages change, database application or deployment occurred.

Source: `matlab-lab-classroom-local.zip`, the October 3 archive supplied for version 2, found in Downloads after its attachment-preview path was unavailable. Archive timestamps and classroom/video contents match the requested October 3 version. No alternate release ZIP was used. Library version metadata was not accessible.

Source ZIP SHA-256: `55ac03de4b6a4f2ab7531823a6a26fb2ff853715de0a0d2472a4d5f005995edf`.

## Restored

- Classroom entry and the original classroom dialog styling, adapted to the current header and narrow screens.
- Student class-code/name/password flow, scoped account progress, activity estimates, permanent file revisions and feedback; teacher sign-in, assigned-class summaries, submission pagination, downloads and feedback forms. All remain behind disabled configuration.
- Backend draft: bounded requests, trusted-IP sign-in throttling, live membership/session checks, student-only private drafts, teacher summaries, atomic version-checked saves, immutable submissions, private storage and short-lived authorized downloads. Password-reset access controls remain in the draft API; there is no new browser provisioning/reset UI.
- Original 30-second MP4, poster, English/Chinese captions, transcript, metadata and illustrative wave script. The MP4 is byte-identical to the ZIP; its movie header and browser playback both report 30 seconds.
- Optional introduction on the first home visit, plus Help replay. It never autoplays or gates learning. Closing pauses; replay resets to the beginning. Initial captions follow EN/中文. Continue remains visible at the tested desktop and phone sizes.
- Full account backup export for unsaved/conflicting drafts, without persistent tokens or account records in device storage.

## Conflicts resolved

| Conflict | Integration decision |
| --- | --- |
| October 3 account adapter read/wrote three whole-record keys; October 5 uses changed-field storage | Keep the current `assets/storage.js` unchanged. Anonymous fields still use browser storage; signed-in fields use isolated account/class memory. Sanitized `{app,guide,notebook}` snapshots retain the backend contract and optimistic version check. |
| Importing earlier work would read stale legacy snapshots | Explicit import reads current canonical fields using read-only channels. It includes completed lessons, answers, stable step IDs, notes and full preserved conflict copies. No automatic anonymous fallback occurs at login. |
| Guide cleanup strips ID annotations from its temporary runtime objects | Annotate cloud/export snapshots with the current IDs before saving. Preserve the existing cleaner and its old numeric-cursor migration. |
| Account changes could reuse channels or private export previews | Recreate all channels from the selected account's own snapshot, clear feedback, return home and revoke private download-preview URLs on close/navigation/account change. Ignore anonymous storage events while signed in. |
| Older lesson, script, diagram and numeric-validation implementations | Keep every current lesson file, starter/reference download, diagram, input validator, guide engine and capstone cleaner. Keep current PNG drawing/saving steps, SIR/fractal/target fixes, rounding rules and complete conflicting-note exports. |
| Privileged SQL functions were public endpoints | Keep the same API names, parameters and role grants, but make public wrappers security-invoker only. Privileged implementations now live in non-exposed `classroom_private`; existing ownership, class, role and session checks remain. |
| URL/key presence alone enabled the imported client | Require explicit `enabled=true` and `securityReviewed=true` after review, plus valid public configuration. Shipped values remain false/blank. Edge functions additionally fail closed unless `CLASSROOM_ACCOUNTS_ENABLED=true`. |

The older archive's lesson engines, global stylesheet, downloads and historical audit claims were not copied over the current release. No current course content or student save keys were replaced. Account cloud conflicts retain the local draft and stop retries rather than silently merging across devices; export a backup before signing out. Account tokens and unsaved work remain in memory, so reload requires sign-in and can lose unsaved edits.

## Verification (October 7)

- Existing baseline: 60/60 test groups passed before changes.
- Combined site/account suite: **88/88** passed, including the original 60, account isolation, canonical device import, full note-conflict preservation, stable-ID migration, cloud round-trip, reset, preview/teacher practice, stale 401/409 responses and conflict retention.
- Backend tests: **8/8** passed, including the disabled server gate, bounded streaming bodies and permission guards.
- Simulated DOM: student sign-in, escaping, scoped sync, private export revocation, logout cleanup, second-student isolation and teacher dashboard passed. No real service was contacted.
- Local PostgreSQL WASM: actual draft schema execution, student/teacher read restrictions, private drafts, cross-class/role denial, version conflict atomicity, combined snapshot round-trip, complete conflicting notes, immutable rows, feedback scope, heartbeat deduplication, revocation cutoff and anonymous denial passed with minimal Auth/Storage stubs.
- Both Edge modules parse under Node's TypeScript transform. This does not establish Deno typing/runtime compatibility.
- Real local browser: first-visit video entry, complete 30-second playback, pause on close, Help replay, initial EN/中文 captions, disabled classroom dialog, fresh result checking, malformed-input feedback, full-width MATLAB-header answer and save/reload passed. At 390 × 844 the header and player fit without horizontal overflow; at 1280 the checked lesson card has identical geometry in both languages. Temporary viewport settings were restored.

Reproduce the checks using the README commands. Runtime test dependencies are pinned and locked; the teaching website has no added runtime library.

## Configuration and manual checks still required

Keep accounts disabled. No Supabase project, secrets, real roster, accounts or database was configured during this integration. Before activation, complete the [backend configuration and live security gates](CLASSROOM_BACKEND.md) and [security review checklist](../tests/CLASSROOM_SECURITY_REVIEW.md), especially actual Auth session/revocation behavior, Data API exposure/grants, trusted gateway IP handling, RLS/advisors, concurrent real accounts, private upload validation, signed-download expiry and teacher/student shared-computer tests. Agree school provisioning, data location, retention and deletion arrangements first.

Run the unchanged assembled lesson scripts in the school's MATLAB release. Review the Chinese instructions, captions, pacing and first-visit flow with students. Other browsers, assistive technologies and real account workflows still need manual testing. Local mocks and PostgreSQL stubs are useful regressions, not a production security certification.

Review this branch before any merge or deployment. The published course remains unchanged.

# Classroom progress rollout — October 22, 2026

The separate **MATLAB Lab** Supabase project is in C4 Projects, Singapore. Other projects were not changed. Students can enroll with a teacher-issued class code; teachers need a separate private, single-use invitation. The invitation code is not in this repository. The public teacher entry is `https://colourfour.github.io/matlab-lab/?teacher=1`.

## Existing work

- A complete source backup was made before editing, including earlier unfinished changes. No branch was reset and the ZIP was not copied over the repository.
- All 33 protected lesson/content files, MATLAB reference downloads, lesson/save engines and original intro video match the pre-change SHA-256 manifest. The newer changed-field saves, numeric-input handling and stable lesson IDs remain intact.
- The website cannot inspect or change MATLAB folders. Only a student-selected submission file is uploaded. Generated JSON backups have dated filenames.
- Anonymous device saves remain in their original localStorage keys. Signing in uses a separate account/class state; signing out restores the anonymous view.
- Copying device progress reads the current canonical fields without modifying them, including stable cursor IDs and complete conflicting notes. The existing account draft downloads as a JSON backup before replacement. Import requires an explicit student action and confirmation.

## Account recovery and access

- Unsaved account work has a per-tab sessionStorage recovery copy, keyed by the verified account, class and server base version. No password, access token or refresh token is stored there.
- After refresh, the student signs in again. A matching server version restores the unsaved copy; an older conflicting copy is offered for export and never overwrites newer online work automatically.
- Explicit sign-out clears that account/class recovery copies after saving or confirming discard. Expiry preserves unsaved work for re-sign-in. Closing a tab or unavailable/full storage can still lose unsaved work: export a backup before leaving. This is ordinary unencrypted browser storage; sign out on shared computers.
- Normal logout ends only the current session. Password reset retains the independent account-wide revocation mechanism.
- Teachers see their assigned roster, current lesson, completed count, last saved time, estimated activity and submitted revisions. Private draft notes remain student-only. Website progress and activity are self-reported, not evidence of MATLAB execution or attention.
- The course layout, English default, Chinese preference and first-visit video are shared across entry points. Teacher/direct-lesson links are not covered by the welcome video. Student signup/sign-in shows the account screen first, then the first-visit video when that panel closes. Help keeps replay access.

## Verification

The local checks include 97 site tests, 9 welcome DOM tests, 15 backend tests, the account DOM workflow and the SQL access/concurrency suite. They cover old saves, explicit import, account switching, complete notes, refresh recovery, conflicts, logout, input parsing and all 48 guided lessons.

The teacher sign-in and progress dashboard were also exercised in a real browser using the identical local release and the live backend, with synthetic test students. This verified readable lesson names, saved completion counts, timestamps, submissions and sign-out. The temporary loopback test origin was removed afterward. The public GitHub Pages deployment and its served index/configuration/player assets were checked separately; direct public-page browser navigation timed out in the test browser. The teacher's own first setup and real classroom use remain manual checks.

Thirty-one live Supabase checks passed with synthetic integration accounts in separate test classes: registration, unforgeable roles, private one-time teacher invitations, public-signup denial, student/teacher/class isolation, private drafts, atomic saves, two concurrent saves, activity bounds, immutable upload revisions, feedback scope, protected downloads, actual signed-link expiry and immediate classroom revocation after password reset. Eight additional live checks passed for the current server-key configuration and separate logout sessions (39 live checks in total). No real student roster or teacher password was supplied.

A live concurrency test found Supabase's documented PostgREST retry loop when application conflicts use SQLSTATE `40001`. The generated follow-up migration uses `PT409`; the Edge layer preserves HTTP 409. A stale save now stops promptly and keeps the draft. See [Supabase's troubleshooting note](https://supabase.com/docs/guides/troubleshooting/high-cpu-and-infinite-transaction-retries-when-using-custom-error-codes-in-rpc-functions-77326b).

The trusted gateway IP header was tested against spoofed headers before configuring throttling. Both functions authenticate explicitly, validate current memberships and use RLS. Modern publishable/secret keys stay in `apikey`; only user session JWTs go in `Authorization`.

Security advisors found no database access-control errors. Seven informational RLS-without-policy notices refer to deliberately client-inaccessible private tables. The remaining Auth warning is leaked-password checking, which [requires Supabase Pro](https://supabase.com/docs/guides/auth/password-security#password-strength-and-leaked-password-protection). No paid plan was purchased. The configured baseline retains 12-character passwords, class codes, throttling, 15-minute access tokens and explicit verified teacher membership.

## Classroom use and operational limits

1. The verified teacher uses the private setup link to choose their own email/password, then opens **Student registration** in the dashboard and creates a class code.
2. Students open the course's Classroom button or `?signup=1`, use that code and create their own username/password.
3. A new account with existing device work visibly offers **Copy saved device progress**. Only copy work belonging to that student. Teachers can refresh their dashboard after a student's account save completes.

Registration remains capped at 40 new accounts per class per hour; sign-in is throttled by tested client IP, class and username. These existing protections were not weakened. Submissions are limited to 5 MiB and allowlisted formats. Uploaded files are never executed. Basic file checks are not antivirus scanning. Recovery after reload requires sign-in again; there is no persistent login token. Native MATLAB itself and real classroom pacing still need teacher observation. Retention/deletion scheduling and mandatory teacher MFA are not implemented.

The frontend configuration contains only the project URL and publishable key. Server secrets are stored in Supabase. Temporary verification credentials and private teacher invitation links are excluded from the repository and release archive.

## Teacher setup repair — October 22

The reported failure was a sign-in request for an account that did not yet exist. No teacher registration reached the backend; the real invitation remained unused. The public teacher page previously offered sign-in without a setup action. It now visibly offers **First time? Set up teacher account**, accepting the private invitation URL or code. The original private link still opens setup directly. Invitations remain single-use and are never committed or saved in browser storage. Refreshing removes the in-memory invitation; the setup page explains reopening or pasting the original link.

Registration now validates required fields, email, password length and confirmation with visible bilingual messages. Pending buttons show a busy state, prevent duplicate requests, and recover after a 30-second connection timeout. An uncertain registration response tells the user to try the same sign-in before registering again. Successful enrollment followed by failed automatic sign-in reports an existing account and offers sign-in; it never deletes the enrolled account or reuses its invitation. Registration errors are no longer mislabeled as progress-save conflicts.

Verification: 97 site tests, 20 welcome/setup DOM tests (11 new teacher setup cases), 16 backend tests, the existing account DOM workflow and SQL suite pass. A separate disposable live teacher invitation successfully created its account and returned a session; replay was refused with HTTP 403. The real classroom and its private invitation were preserved. No passwords, service keys or invitations are part of the release.

## Single-class student entry — October 22

The existing classroom is retained; no second class was created. The authenticated shared staff account configured `pbl-1022` through the teacher-only registration endpoint. Student signup and username sign-in use this prefilled public class label. Existing accounts, membership IDs, cloud progress, anonymous saves, recovery copies and local files are preserved. Teacher invitations still require their original strong random codes. Short readable codes cannot access the old unauthenticated roster/name picker. Password and request throttles remain unchanged.

Sign in and Create account are visible beside EN/中文 on the normal course header. After authentication they become the account name, cloud save status for students, and Sign out. Header sign-out waits for an active save and saves the latest pending change; if saving fails or conflicting drafts remain, cancelling discard keeps the account work available. Teacher controls reopen registration with the configured code instead of replacing it with a random code. The teacher panel displays the code and student signup link.

Validation: 97 site tests, 27 welcome/account-entry DOM tests, 23 backend tests, the existing account DOM workflow and SQL suite pass. Seven new header tests cover both languages, prefilled signup, latest and in-flight saves during logout, restored progress, failed saves and fixed-code teacher controls. Ten live checks passed using the shared teacher login and a disposable student in this single class: signup, username login, save/reload, visible teacher progress, hidden drafts, registration access controls and no unauthenticated roster. The disposable student and its credentials were removed. Real-browser checks of the local release covered the visible signup form and phone layouts down to 320 pixels, with no horizontal overflow. The published files are checked against this tested release. Accounts are served from the public GitHub Pages origin; localhost is a preview.

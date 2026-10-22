# Learning saves, recovery and assessment

Students use **Sign in / Create account** beside EN/中文. The one class code remains **pbl-1022**. No new account is needed when changing device. Wait for **Saved**, sign out on shared computers, then sign in with the same details elsewhere. **Save now** retries a pending save; **Refresh** loads the latest account snapshot after saving this device's work. A stale device cannot overwrite a newer cloud version. Export its draft, sign in again, then recover the exported snapshot.

## Recover existing work

Open the account menu (or Help → Recover or back up progress). **Copy this device’s progress to my account** reads the existing anonymous save without changing it. **Download device snapshot** exports a portable JSON file; the account's **Export a backup** exports signed-in work. **Recover snapshot file** accepts these files and older raw `{app,guide,notebook}` account backups. It asks for ownership confirmation and downloads the current snapshot before combining work. It adds completed lessons, fills empty answers, revalidates passed checkpoints against current questions, and keeps current nonempty answers. Different imported answers remain in the source file. Conflicting Project 6 notes are preserved in full, within the existing 6,000-character per-note limit, and appear in note exports. Keep both files.

Anonymous work can also be recovered without an account. This changes the local save through the existing field-level storage engine and keeps a downloaded before-recovery snapshot. Account recovery remains isolated from other students and never silently copies anonymous records on login. Teacher preview cannot restore local work.

Browser storage belongs to an exact address and browser profile. Work on a previous localhost address must be opened/exported there using this version of the site, then recovered on the live site. The live page cannot read another origin, browser profile, deleted browser data, or MATLAB files. No reliable historical completion dates, old incorrect attempts, MATLAB execution logs or attention measures can be reconstructed from a snapshot.

## What teachers see

The assigned teacher sees a student's latest saved checkpoint answers, validated passes, completed lessons, last viewed guided step, save time and existing bounded page-activity estimates. Accepted results come from the same current question definitions used by the learner. These are snapshots, not an attempt history or independent proof that MATLAB was used. A save time is not a completion time.

`public.learning_snapshots` is a restricted projection updated in the same transaction as `student_state`. Existing cloud records are backfilled into this projection. It excludes notebook drafts, credentials and unrelated state. Teachers still cannot read `student_state`. Students cannot read other students' records or write evidence tables directly.

## Project 6 final submission

The project brief and final submission form both show the existing **20-mark rubric**: five criteria, 0–4 marks each. The teacher assesses problem/criteria, implementation, experimental evidence, failure/interpretation, and reproducibility/defense. Students submit a project ZIP containing `main.m`, required data, README, comparison table, figures and two-page memo; prepare the existing five-minute demonstration. Small rerunnable data keeps the file under 5 MiB. Existing allowed individual formats also work. The site does not execute or grade MATLAB code, extract ZIPs, or treat checkpoint/self-review ticks as marks.

Before submission students explicitly acknowledge the rubric and sharing of the file plus current Project 6 notes, including preserved note versions. At least one working note is required; completeness/quality is assessed by the teacher. The client must finish saving first. The backend freezes the notes and learning projection from that exact saved account version together with the file record. Each revision is permanent to clients. Subsequent notebook edits do not change submitted work. A retry of the same submission intent and file returns the same receipt instead of duplicating it. Conflicting versions fail rather than submit different notes. Uploaded files remain in the existing private bucket with authenticated, class-scoped downloads.

`project6_submissions` has the same student-owner/assigned-teacher read boundary as submissions. Only the trusted Edge service can finalize rows. The finalization RPC locks membership/progress, checks the expected version and stores a SHA-256 file checksum. On uncertain network results, upload cleanup first checks for a committed submission and never deletes a confirmed submitted file. Unreferenced private objects after interrupted operations still require operator reconciliation; storage and Postgres are not one transaction.

## Backend deployment

Apply migrations in order, including `20261022093306_learning_evidence_and_final_submission.sql`, then deploy `classroom-data`. The equivalent fresh-install SQL is `supabase/schema/learning-evidence.sql`, applied after `classroom.sql` and `enrollment.sql`. Existing auth, origin allowlist, rate limits, revocation checks and configuration gates are retained. Do not expose `classroom_private` or ship service credentials. The original MP4, lesson IDs/answers, MATLAB downloads, numeric handling and cross-tab save engine are unchanged.

Regression checks: CJS suite; five DOM suites including `learning-account-dom.mjs`; standalone `classroom-dom.mjs`; PostgreSQL/RLS test; backend TypeScript test suite. Live verification uses a disposable student only and removes its own records/files afterward. A real teacher must still judge project quality, run submitted MATLAB on school equipment, and perform the five-minute demonstration.

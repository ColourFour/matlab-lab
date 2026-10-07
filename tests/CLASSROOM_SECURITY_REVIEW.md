# Independent classroom security review

Original review 2026-10-03; integration updated 2026-10-07. This is a source/VM review, **not a production security certification**. No real accounts, credentials, deployments, or databases were created or changed by this review.

## Evidence

- `node --test tests/classroom-security-review.test.cjs`: 8/8 VM/static tests pass.
- Node TypeScript transform accepted all three Edge source files; this checks parse syntax, not Deno typing/runtime behavior.
- Accounts default disabled with blank public configuration and two explicit false activation flags. Edge functions also reject requests until their server activation flag is true.
- Six reviewed client/server boundaries: authentication and session isolation; per-class live membership; student-only draft state versus teacher summary; append-only private submissions; scoped feedback; activity and optimistic-save RPCs.

## Findings resolved during review

1. Logout retained `LabClassroom.submissions` and `memberships`. Lead now clears these on logout/class switch.
2. Direct authenticated Storage SELECT let clients mint long-lived signed URLs. Backend now grants no client Storage policy; downloads pass caller-token RLS before service signing.
3. Old-session 401/409 responses could affect a newly established session. Lead added generation/token guards.
4. Remote signout was fire-and-forget despite all-device claim. Lead now checks response and warns if remote invalidation is unconfirmed.
5. Dashboard capped historical submissions/comments. Lead added pagination/scoped comment retrieval.

## Mandatory live deployment gate

Use disposable synthetic fixtures only in the dedicated MATLAB project. Do not enable the public configuration until these pass:

- Apply schema successfully; run Supabase security advisors. Verify `classroom_private` is not exposed and table/function grants match the source.
- Anonymous client: deny every table read/write, privileged RPC, and Storage read/list/upload/sign/update/delete.
- Student A versus student B in the same class: deny cross-student state/progress/submission/comment access; own reads allowed. User-editable metadata must not alter this.
- Teacher A versus teacher B in separate classes: allow only own-class summaries/submissions/comments; deny all student draft states and other-class reads/writes.
- Direct REST writes to all tables denied. Direct RPC caller IDs derived from Auth; ownership/class reassignment impossible.
- Revoked/expired/missing/anonymous sessions fail, even when an old access JWT is retained; reset revokes old sessions and passwords.
- Duplicate event IDs credit once; concurrent unique events cannot credit faster than elapsed time; negative/null/extreme seconds rejected; API/RPC spam remains bounded.
- Optimistic progress conflict preserves newer state. Concurrent submissions produce distinct immutable revisions without overwriting storage.
- Reject oversized/chunked bodies and invalid file content/MIME/extensions. Download only authorized submissions, force safe attachment handling, and prove URL expires after 60 seconds.
- Verify trusted client-IP header is overwritten by the actual gateway; never trust a caller-supplied/appended forwarding header. Auth must fail closed if this setup is missing.
- Provision private class codes from at least 128 random bits. Roster names are intentionally disclosed to anyone holding the code; do not treat it as public. Confirm operational limits and rotate leaked codes.
- Run browser account-switch/shared-PC tests with actual backend. Existing VM/mock tests do not establish database isolation or production compatibility.

## Additional hardening verified in source

Auth/data JSON now use bounded stream reads (8 KB/600 KB). Activity RPC now limits unique events to 12/minute per caller in the database, beyond Edge limits. Signed downloads add an attachment filename query parameter. Operational event retention still needs a bounded policy. Explicit SQL NULL-seconds/lesson/event rejection is now present. Password reset uses a private session-created-at revocation cutoff rather than deleting managed Auth rows; verify old sessions are denied and newly authenticated sessions work in the real deployment. All live gates remain mandatory.

## Integration regression evidence (2026-10-07)

- The current changed-field saver stays intact; account fields use memory isolated by account/class and cloud snapshots preserve stable step IDs.
- Explicit device import reads current fields rather than stale legacy records, including complete conflicting note copies.
- Tests cover reset, logout, account switching, preview/teacher practice, version conflicts and old-session response races.
- Exposed RPC wrappers now use invoker rights, preserving their names and grants. Every privileged implementation is private. Local SQL tests retain the permission matrix, round-trip the combined snapshot and verify version-conflict atomicity and heartbeat deduplication.
- Full account backup export is available before closing or discarding an unsaved draft. Private lesson/note preview download URLs are revoked on close, navigation and account change.
- These checks do not certify the live deployment; every mandatory gate above remains pending.

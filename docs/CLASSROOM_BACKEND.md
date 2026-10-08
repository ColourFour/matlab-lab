# Classroom backend: local draft, not deployed

No Supabase project was created or changed, no account was provisioned, and no real student data or credentials were used. The SQL remains an unapplied schema draft, not a deployment migration. Local PostgreSQL WASM tests execute the schema with minimal Auth/Storage stubs; they are not a Supabase service test. The CLI is available here, but Deno/Docker/native MATLAB are not on PATH. No live Auth/RLS/Storage test or security-advisor run has occurred. Keep both frontend activation flags false and `CLASSROOM_ACCOUNTS_ENABLED` unset until the required checks below pass.

## Architecture and API

Frontend configuration contains only disabled activation flags, project URL and publishable key. Both `enabled` and `securityReviewed` must be explicitly true after security review; URL/key alone cannot enable accounts. Edge owns the service-role secret. There is no browser account creation, self-enrolment, role editing, or teacher promotion route. Teacher email/password signs in directly through Supabase Auth; student name selection uses classroom-auth to resolve a random synthetic Auth identity server-side. Auth itself may return a user's own synthetic email to an authenticated request; it is not a secret or an authorization boundary. Never encode real names/emails in these aliases.

POST `/functions/v1/classroom-auth`:
- `{action:"roster",code}` → `{classroom:{id,name},students:[{id,display_name}]}`
- `{action:"login",code,studentId,password}` → `{session:{access_token,expires_at,expires_in,token_type,user:{id}}}`. No refresh token returned.

POST `/functions/v1/classroom-data`, Authorization Bearer access token:
- `{action:"load-progress",classroomId}` → `{progress:null}` or a snapshot with classroom_id, user_id, lesson_id, state, completed_count, version, updated_at.
- `{action:"progress",classroomId,lessonId,state,completedCount,expectedVersion}` → `{version}`. Initial expectedVersion=0. Conflicts return 409. Snapshot shape is `{app,guide,notebook}` and maximum stored size 512 KiB. Summary and private state are committed/read atomically.
- `{action:"heartbeat",classroomId,seconds,eventId,lessonId}` → `{active_seconds}`. Unique UUID event ID, integer 0–30 seconds; first sample credits zero, subsequent samples clamp to server elapsed time. Deduplication and locking prevent retry and parallel-tab double-credit. Time is self-reported approximate visible/active engagement, not proof of learning or attendance.
- Multipart `action=upload`, `classroomId`, `lessonId`, `file` → `{submission}`.
- `{action:"comment",submissionId,body}` → `{comment}`. Live teacher membership required.
- `{action:"download",submissionId}` → `{url}` valid 60 seconds. Browser should open/download URL immediately. Once signed, a URL remains valid for its short TTL even if membership is revoked.
- `{action:"reset-password",classroomId,studentId,password}` → `{ok:true}`. Teacher must intentionally supply a new password of at least 12 characters; do not generate, store, or log plaintext passwords. Reset invalidates classroom access for prior sessions before and after Auth update using a private per-user revocation cutoff. No direct writes to managed Auth tables are made. Errors must not imply success; retry only after explicit teacher confirmation if outcome is uncertain.

GET Data API is permitted for scoped `classrooms`, `memberships`, `progress`, `engagement`, `submissions`, `comments`. A student sees their own rows; a teacher sees active assigned-class summaries, submissions, comments and roster. `student_state` is student-only, including from teacher accounts. No client direct mutations are granted. No Storage client policies are created, including SELECT; otherwise users could generate signed URLs with arbitrary lifetimes.

## Required local verification before deployment

1. Install current official Supabase CLI after checking its `--help`; initialize a disposable local project (do not link a production project).
2. Inspect `supabase db --help` / `supabase migration --help`. Execute the draft in the local database for iteration, run advisors and the RLS tests below, then use the CLI migration generation workflow. Never treat this draft path as an applied migration.
3. Use actual Auth login-created sessions for RLS tests; policies require a live `auth.sessions` row matching JWT session_id. Test two classes, two students, and two teachers. Assert student A cannot read B's progress/state/submission/comments, teacher A cannot read class B, a teacher cannot read any student's private snapshot, anonymous cannot read any table, and authenticated cannot alter role/membership or client-write data.
4. Test account session reset/revocation: hold an old access token, reset password, verify old token cannot read even if its JWT has not expired. Revoked/deactivated membership must immediately stop Data API and Edge access. Existing Auth tokens/refresh sessions may remain valid for the Auth service itself, but old sessions cannot access classroom data because session creation time must be newer than the private revocation cutoff. Validate Auth session created_at semantics with the deployed version.
5. Test progress concurrency (same expectedVersion yields one success, one 409), cross-device reload, repeat event ID, two concurrent heartbeat tabs, 31 seconds rejection, missing membership, oversized text state.
6. Test private uploads, MIME/magic checks, bad extensions, invalid UTF-8, oversized/chunked requests, duplicate revisions, path traversal filename, and unauthorized downloads/comments. Service upload succeeds with `upsert:false`; no object UPDATE is granted to clients.
7. Test trusted gateway configuration below, platform rate limits, and credential-error responses. Run Supabase security advisors and resolve warnings. Pin and lock any new runtime dependencies if introduced; current functions use only platform APIs.
8. Review school approval, student-data processing terms, retention and deletion policy, teacher access, backup policy and hosting region. Do not load a real roster until authorized. This code supplies no automatic retention/deletion workflow.

## Server configuration and identity provisioning

Use Supabase's injected `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY` only in Edge secret storage. Never put service credentials in a public config, repository, browser bundle or command output. Configure only after review and disposable staging tests:
- `CLASSROOM_ACCOUNTS_ENABLED`: leave unset/false in this draft. Set `true` only after the release gates pass; Edge requests fail closed with 503 otherwise. This guards these functions, not the separate Auth/Data APIs.
- `CLASSROOM_ALLOWED_ORIGINS`: exact comma-separated trusted HTTPS website origins; no wildcard. Missing Origin is rejected.
- `CLASSROOM_RATE_PEPPER`: random server-only string, used to avoid retaining raw IP addresses in rate-limit keys.
- `CLASSROOM_TRUSTED_IP_HEADER`: a request header that the deployed gateway demonstrably **overwrites** with the verified client IP. Do not blindly use arbitrary `X-Forwarded-For` or assume headers are trustworthy. Verify behavior in staging. If unavailable, add a trusted gateway/rate limiter before deployment. Sign-in fails closed without this setting/header.

Disable public signup and anonymous sign-in in Supabase Auth. Disable mail-based reset for synthetic student aliases and do not use a deliverable domain. Apply platform Auth rate limits and require teacher passwords of at least 12 characters; configure project password policy accordingly. Teacher MFA is recommended but not implemented as a mandatory assurance check here. Set a short access-token lifetime (e.g. 15–30 minutes); frontend also signs out after idle expiry.

Student self-registration now uses class code, name, unique class username and a password of at least 12 characters. An Edge function creates a new synthetic Auth identity, then a service-only transaction inserts a literal student membership. Duplicate usernames, a full class, code rotation or closed registration cannot claim an existing account. Failed enrollment removes the newly created identity. Teachers can generate a class code, close registration and reset a student password from the assigned classroom dashboard.

Teacher account setup requires an independently issued, private, single-use invitation in `classroom_private.teacher_invites`. The trusted operator stores its SHA-256 hash, class and expiry; the UI accepts it at `?teacher=1#teacher-setup=CODE` and immediately removes the fragment from the address bar. A student class code never grants teacher access. Teacher invitations must be provided only to verified teachers. Existing accounts may also be provisioned using the official Supabase dashboard/admin tools; no client can promote an existing account. Avoid command-line arguments for passwords because shell history/process listings can expose them. Create student Auth identities with random UUID-based email aliases ending `@classroom.invalid`, confirmed internally, and teacher-issued individual passwords. Distribute credentials privately using a school-approved route; do not put plaintext credentials in this repo or application logs. Enter the resulting UUID and alias in `classroom_private.identities` via a trusted admin session. Insert class/membership rows only through that trusted admin path. Use `role='teacher'` only for independently verified teachers; no user_metadata role claims.

Generate each class code from at least 16 cryptographically random bytes encoded base64url (22+ characters). Store only lowercase SHA-256 hex of its exact case-sensitive value in `classroom_private.class_codes`; distribute the full code to the intended class through an approved channel. Avoid memorable 6-digit codes. Treat roster access code as a bearer secret: rotate if exposed. Class code + student password are both required for name-based sign-in.

For maintenance, trusted operators should prune stale rate-limit windows and activity event IDs under a documented retention period. Pruning activity IDs older than seven days permits replays of old UUIDs, but server-time clamping still prevents time inflation; choose and document the desired event-retention policy. No automated deletion has been installed.

## Security boundaries and remaining caveats

Private schemas are not in Data API exposed schemas. Public RPCs are security-invoker wrappers; service-only wrappers and private implementations explicitly revoke PUBLIC/anon/authenticated execution. Security-definer implementations all stay in the non-exposed `classroom_private` schema. Their existing ownership/role checks and API names remain unchanged. Security-definer helpers use fixed empty search_path; membership checks consult current database membership, live Auth sessions, and a private session revocation cutoff rather than mutable metadata or stale role claims. JWT session expiry is still checked by Auth/API gateway.

File acceptance is an allowlist of UTF-8 `.m/.txt/.csv/.json`, PDF, PNG and JPEG up to 5 MiB. Binary magic/type checks are basic format checks, not malware scanning. MATLAB code is never executed. Files must be downloaded as attachments; the application should never render uploaded HTML/scripts. Deploy scanning if required by the institution. Storage and database transactions are not atomic: an upload whose subsequent insertion fails is deleted best-effort; service operators must reconcile orphaned unreferenced objects after interrupted requests. Existing revision records are append-only to all clients. The service/admin is trusted and can maintain or delete data under institutional policy.

Rechecked official docs/changelog on 2026-10-07:
- https://supabase.com/changelog.md
- https://supabase.com/changelog/postgres-15-19-17-11-breaking-changes
- https://supabase.com/changelog/45329-breaking-change-tables-not-exposed-to-data-and-graphql-api-automatically
- https://supabase.com/docs/guides/api/api-keys
- https://supabase.com/docs/guides/auth/sessions
- https://supabase.com/docs/guides/functions/auth
- https://supabase.com/docs/guides/storage/security/access-control
- https://supabase.com/docs/guides/database/postgres/row-level-security

The Data API now requires explicit table grants; the draft grants only authenticated SELECT and applies RLS. Verify exposed schemas and actual REST/RPC grants in staging; never expose `classroom_private`. The current documentation advises keeping privileged functions out of exposed schemas, so the integration uses public invoker wrappers around private implementations. New gateway behavior does not remove the trusted-IP verification gate.

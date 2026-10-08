# October 8 classroom release

The user authorized publication after reviewing the October 7 integration. The current course remains the source of truth; no lessons or storage engines were replaced.

## Links

- Course: https://colourfour.github.io/matlab-lab/
- Teacher sign-in/dashboard: https://colourfour.github.io/matlab-lab/?teacher=1
- All-lesson preview: https://colourfour.github.io/matlab-lab/?review=1#/map
- Student signup: https://colourfour.github.io/matlab-lab/?signup=1

## Account setup still required

There is no MATLAB Lab Supabase project in the connected organization. The existing projects are unrelated and were not changed. Project creation requires organization/cost confirmation; the connector cost endpoint returned unavailable. Public account configuration therefore remains disabled. The teacher page offers lesson preview while setup is pending.

Once the dedicated project is ready, apply the CLI-generated classroom_accounts migration followed by classroom_self_registration. Configure the Edge secrets described in CLASSROOM_BACKEND.md, disable general public Auth signup, and test a verified gateway IP header. Run live signup/login, concurrency, two-student/cross-class isolation, teacher membership, feedback/files, revocation and advisor checks before switching the client release flags.

A trusted operator creates a classroom and a private single-use teacher invitation (at least 16 random bytes, SHA-256 stored, explicit expiry). The teacher sets their own password at the private invitation link; no teacher password belongs in the repository. The teacher then generates a class code in Student registration and shares it with students. Closing registration preserves existing logins; rotating the class code requires distributing the new code for future logins.

## Validation

88 site regressions, 13 backend checks, DOM signup/account-isolation checks and executable PostgreSQL enrollment/RLS checks pass locally. The additional enrollment tests exercise injected teacher metadata, duplicate usernames, closed registration, password confirmation, account-creation cleanup and single-use teacher invitations. These tests do not substitute for live Supabase verification.

# MATLAB Lab

**[Live course](https://colourfour.github.io/matlab-lab/)** · **[Teacher preview](https://colourfour.github.io/matlab-lab/?review=1)**

**Classroom integration branch: review only. These restored features have not been published to the live course.**

A static English / Simplified Chinese MATLAB course for high-school beginners. Six guided projects with **48 lessons**, followed by an open independent project with eight working sections. Anonymous lessons need no build step, backend, external fonts, runtime libraries or package installation. Optional classroom accounts are an undeployed, disabled Supabase draft.

| Project | Students build | New ideas |
|---|---|---|
| 0 · MATLAB Boot Camp | A first plotted model | Commands, variables, vectors, indexing, element-wise operations, plotting |
| 1 · Projectile Motion | A trajectory that lands in a target zone | Degrees, components, time sampling, range, controlled comparisons |
| 2 · Beat the Casino | A fictional token-game simulation | Random seeds, logical arrays, frequencies, cumulative sums, expected value |
| 3 · Make a Fractal | A Sierpiński carpet | Matrices, two-dimensional indexing, block replacement, loops, scaling |
| 4 · Compress an Image | A block-averaged grayscale image | Nested loops, reconstruction, value counts, mean squared error |
| 5 · Simulate an Epidemic | A fictional SIR system | Simultaneous updates, Euler steps, conservation, sensitivity, numerical resolution |
| 6 · Independent Project | A defended recommendation for a system students choose | Model design, competing alternatives, held-out tests, failure analysis, reproducibility |

The student view shows **one short action at a time**, with one primary next action and one checkpoint question per screen. Explanations and the course map are available when needed. New visitors start in Simplified Chinese; a saved language preference is preserved. English and Chinese share code, diagrams and reserved layout space.

The first lesson teaches desktop setup on Windows or Mac, demonstrates `2 + 2 → 4`, then asks students to run a fresh calculation before drawing and changing a graph. Every guided lesson has one **Your turn / 轮到你了** checkpoint: new inputs or a new measurement, runnable MATLAB code, and one result to enter. Worked examples keep their expected outputs; the new checkpoint does not display its answer. Later lessons build scripts in complete runnable pieces, at most eight lines per displayed block.

Correct submissions play one of **16 CSS celebrations**, selected in shuffled batches without an immediate repeat. Effects last under 2.4 seconds, have no sound, ignore pointer events, and clear on navigation. Reloading or switching language never replays a reward. Reduced-motion preferences suppress particles; written success feedback remains. No extra animation controls clutter the lesson.

Each lesson still uses See → Understand → Do → Compare → Check → Continue, with short repeated practice where useful. Progress records the current step, drafts and successful checks. Existing project completions are preserved. Projects 0–5 unlock in order; Project 6 remains open from the start. Saved Editor lessons include the fresh checkpoint code below the worked example. Final image, fractal and epidemic tasks now include drawing, matching references and PNG-saving steps.

## Audit the course

Open **Teacher preview** to browse every lesson and jump to any step using **Review steps and explanation**. Preview does not write progress, answers, language or notebook changes to storage. It is a teaching convenience, not access control; the static source contains answer keys.

Students confirm what they see in MATLAB. The website cannot verify their MATLAB session. Numeric checks accept full-width digits, Chinese commas, Unicode minus signs, harmless MATLAB headers and documented four-decimal scientific/scaled output. Decimal checkpoints use `format longG` to avoid display confusion. Blank, malformed, wrong-count and wrong-value entries receive different advice. Numeric and choice checks validate entered results; manual “I ran these lines” confirmations are not grades. No student code is executed by the website.

Use **Course map** for projects and lessons. Use **Help** for window arrangement, saving/running scripts, local progress and reset. Each step provides targeted recovery for missing output, errors, missing panels, different results and copy/paste.

Desktop guidance uses clearly labelled schematic diagrams because Windows/Mac layouts and MATLAB versions differ. The teacher should point out the actual Command Window, Editor, Save and Run controls before independent work. MATLAB account/license access must be ready for class.

Allow classroom time for computer setup and practice; the student interface deliberately omits time estimates and initial zero-percent progress. Project 6 suggests 6–10 hours over two weeks. Validate pacing with actual students.

The course reference scripts remain available after completion. The per-lesson **Save the lesson code** control exports the exact assembled guided code. Project 6 includes a [bilingual brief and rubric](downloads/investigation-guide.md), a skeleton and optional testing utilities.

## Run locally

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000`, or `http://127.0.0.1:8000/?review=1` for teacher preview. Stop with Ctrl+C. Directly opening `index.html` also works, but use a local server for reliable storage, clipboard, video and caption loading.

## GitHub Pages deployment

This repository publishes from **main / (root)**. Pushing an update to `main` automatically republishes it. Do not merge this integration branch, change the Pages source, or deploy it before review.

For a fresh repository, upload this folder's contents, including `.nojekyll`. In **Settings → Pages**, select **Deploy from a branch → main → / (root)** and save. Wait for deployment to complete, then share the Pages URL. All assets use relative paths and lesson navigation uses hashes, so refreshing a lesson works under a repository subpath. See [GitHub's publishing-source instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Classroom use and model boundaries

Students run scripts in MATLAB desktop or MATLAB Online beside this guide. The site checks numbers and choices entered on the page; it does **not** execute MATLAB or inspect scripts. With the shipped classroom configuration disabled, it does not upload work or send progress to a teacher. Arrange school MATLAB access and your usual submission method.

- Project 1 assumes no drag, constant gravity and equal launch/landing height.
- Project 2 uses fictional tokens. Random trials estimate probabilities; checkpoints use deterministic results or exact identities instead of requiring particular random digits. A fair expected value does not guarantee a winning run.
- Project 3 shows finite approximations to an ideal fractal. Keep levels at 4 or below in the guided exercise.
- Project 4 teaches lossy spatial downsampling by block means, not JPEG/PNG encoding or SVD. Ratios count equally typed numeric values and exclude metadata. It uses a generated image, so no image files or extra toolbox are required.
- Project 5 uses invented SIR parameters and a closed, uniformly mixed population with lasting immunity. It is a mathematical exercise, not a calibrated forecast. Conservation and step-size checks test the implementation, not real-world predictive validity.
- Project 6 asks students to recommend a change to a system they choose. They define an objective and constraint, compare a baseline with at least two substantive alternatives, test at least three operating conditions including a held-out case, and investigate failure and sensitivity. A well-supported negative finding can earn full marks. Submit reproducible code/data, a comparison table, at least two purposeful figures, a two-page decision memo and a five-minute demonstration. Teachers assess these using the 20-mark rubric.

For anonymous use, progress is stored in this browser on this device, separately for each project. Each changed field is saved independently, so a stale tab cannot replace another section’s notes or erase unrelated completed lessons. Tabs synchronize changes; a reset starts a new progress generation and keeps notes/language. If two tabs edit the same note, the other version is preserved separately, shown below the notes, and included in the export. Existing whole-record saves migrate once; new field records then take precedence. Existing Boot Camp and Projectile Motion progress is preserved when the new courses load. Localhost and the public address have separate storage. Guided step position, answer drafts and successful checks survive reload on the same browser. The September 28 checkpoint revision restarts in-progress lesson steps once, so old answers cannot bypass new tasks; completed lessons, language preferences and Project 6 notes are preserved. Project 6 notes autosave separately and survive reload; export them to keep a backup or move devices. Self-review can be recorded in any order after entering notes or file references. **Reset all project progress** removes completion/self-review marks but keeps Project 6 notes. Shared computers share these records: export needed work, then clear this site’s browser data between students to remove notes as well. Private browsing or clearing site data can remove records. When storage is unavailable, the app warns and continues in memory.

## Restored classroom features (disabled draft)

The home page offers the original 30-second video on a first visit. It starts only when the student presses Play; it never blocks Start. Help offers replay. Native controls provide pause, sound and captions; EN/中文 chooses the initial caption language. Closing stops playback, and replay starts at the beginning. Both captions and the transcript are local assets.

Classroom sign-in, student submissions and teacher feedback screens are restored from the October 3 ZIP. They remain unavailable in the shipped configuration. Lessons still work without an account. The backend includes class-scoped permissions, student-only drafts, teacher summaries, append-only file revisions and short-lived downloads.

Signed-in drafts use separate in-memory field storage and version-checked cloud snapshots. They never overwrite anonymous device work or another account's draft. Conflicts stop further saves and retain the local draft; Export a backup downloads the whole account snapshot. Explicit device import reads the current save format, including stable lesson IDs and preserved note conflicts. Account reload requires sign-in again; unsaved account work can be lost on close, so export it first. Teacher preview never syncs lesson practice.

Keep `enabled` and `securityReviewed` **false**, and the URL/key blank, in `assets/classroom-config.js`. Configuring a publishable key alone cannot enable accounts. Edge functions also require `CLASSROOM_ACCOUNTS_ENABLED=true`, which must remain unset until review and staging checks pass. No secrets belong in browser code. See [integration report](docs/CLASSROOM_INTEGRATION.md) and [backend configuration and security gates](docs/CLASSROOM_BACKEND.md).

## Source structure

- `index.html`: entry point and ordered, deferred scripts.
- `content/`: one editable lesson file per project; course metadata, catalog and numeric visual specifications.
- `assets/storage.js`: field-based saves, legacy migration, cross-tab merges and reset generations.
- `content/challenge-visuals.js`: shared reference geometry for the new five-cell fractal and finer SIR simulation.
- `assets/app.js`, `core.js`, `guided.js`, `capstone.js`, `styles.css`: rendering, validation, persistence, routing, setup diagrams and responsive layout.
- `content/guided.js`: the authored short-step sequences and active transfer answer keys for all 48 guided lessons. Original course files and reference downloads retain the worked examples.
- `assets/celebrations.js` and `celebrations.css`: the shuffled reward selection, bounded overlay lifecycle and 16 CSS animations.
- `assets/*diagrams.js`: accessible inline SVGs. Lesson visuals have no external image dependencies; the separate intro includes its original local video/poster.
- `assets/classroom*`: optional classroom client, disabled public configuration and imported interface styling.
- `assets/intro.js` and `assets/intro/`: player, original 30-second MP4, poster, captions and transcript.
- `supabase/`: unapplied schema, Edge function drafts and local tests; no deployed backend.
- `docs/`: integration provenance, conflict decisions and account release gates.
- `downloads/`: MATLAB starters/references and bilingual investigation guide.
- `tests/`: validation, independent numeric checks, migration tests and browser QA record.
- `content/AUTHORING.md`: lesson schema and extension notes.

## Verification and remaining audit

Run `node --test tests/*.test.cjs` with Node 18+. Tests cover all guided checkpoint sets and short-step sequences, bounded instructions, intact MATLAB blocks, resume state, dependency invalidation, open capstone navigation/state, notebook sanitation/export/escaping, bilingual completeness, malformed input, numerical tolerance, dependencies, progress migration, fractal geometry, compression error, projectile physics and SIR updates. See [QA record](tests/QA.md) for browser results.

For the additional classroom checks, use Node 22.14+ and install only the pinned test dependencies (the site itself needs none):

```sh
npm ci --ignore-scripts --prefix tests/runtime
node --test tests/*.test.cjs
node --experimental-transform-types --test supabase/tests/backend.test.mjs
node tests/classroom-dom.mjs
node tests/classroom-sql.mjs
```

DOM tests use a simulated page and mocked backend. SQL tests use local PostgreSQL WASM with minimal Auth/Storage stubs. Neither proves a real Supabase deployment works. All live security checks remain required before enabling accounts.

**MATLAB itself is not installed in the build environment.** Numerical outputs were independently checked in JavaScript/Python, and the site was tested in a browser. Run the supplied `.m` sections in your school MATLAB version during your audit, and review the Chinese teaching language and pacing with your class context in mind.

Reference visuals are instructional SVGs, not MATLAB screenshots. Plot colors, tick spacing and printed number formatting may differ while representing the same results.

## Technical references

MathWorks documentation: [getting started](https://www.mathworks.com/help/matlab/getting-started-with-matlab.htm), [random-number generation](https://www.mathworks.com/help/matlab/random-number-generation.html), [rand](https://www.mathworks.com/help/matlab/ref/double.rand.html), [kron](https://www.mathworks.com/help/matlab/ref/kron.html), [imagesc](https://www.mathworks.com/help/matlab/ref/imagesc.html), [mean](https://www.mathworks.com/help/matlab/ref/double.mean.html), [number display](https://www.mathworks.com/help/matlab/ref/format.html), [saving figures](https://www.mathworks.com/help/matlab/ref/saveas.html), and the SIR example in [MATLAB Mathematics](https://www.mathworks.com/help/pdf_doc/matlab/matlab_math.pdf).

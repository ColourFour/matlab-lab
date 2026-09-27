# MATLAB Lab

**[Live course](https://colourfour.github.io/matlab-lab/)** · **[Teacher preview](https://colourfour.github.io/matlab-lab/?review=1)**

A static English / Simplified Chinese MATLAB course for high-school beginners. Six guided projects with **48 lessons**, followed by an open independent project with eight working sections. No build step, backend, external fonts, libraries or package installation is needed.

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

The first lesson teaches desktop setup on Windows or Mac, checks `2 + 2 → 4`, changes the command to `2 + 5`, then draws and changes a graph. Later lessons build scripts in complete runnable pieces, at most eight lines per displayed block. Necessary transfer tasks are separate steps, not optional notes. The mini challenge offers code only behind a help disclosure.

Each lesson still uses See → Understand → Do → Compare → Check → Continue, with short repeated practice where useful. Progress records the current step, drafts and successful checks. Existing project completions are preserved. Projects 0–5 unlock in order; Project 6 remains open from the start.

## Audit the course

Open **Teacher preview** to browse every lesson and jump to any step using **Review steps and explanation**. Preview does not write progress, answers, language or notebook changes to storage. It is a teaching convenience, not access control; the static source contains answer keys.

Students confirm what they see in MATLAB. The website cannot verify their MATLAB session. Numeric and choice checks validate entered results; manual “I ran these lines” confirmations are not grades. No student code is executed by the website.

Use **Course map** for projects and lessons. Use **Help** for window arrangement, saving/running scripts, local progress and reset. Each step provides targeted recovery for missing output, errors, missing panels, different results and copy/paste.

Desktop guidance uses clearly labelled schematic diagrams because Windows/Mac layouts and MATLAB versions differ. The teacher should point out the actual Command Window, Editor, Save and Run controls before independent work. MATLAB account/license access must be ready for class.

Allow classroom time for computer setup and practice; the student interface deliberately omits time estimates and initial zero-percent progress. Project 6 suggests 6–10 hours over two weeks. Validate pacing with actual students.

The course reference scripts remain available after completion. The per-lesson **Save the lesson code** control exports the exact assembled guided code. Project 6 includes a [bilingual brief and rubric](downloads/investigation-guide.md), a skeleton and optional testing utilities.

## Run locally

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000`, or `http://127.0.0.1:8000/?review=1` for teacher preview. Stop with Ctrl+C. Directly opening `index.html` also works, but a local server gives more reliable browser storage and clipboard behavior.

## GitHub Pages deployment

This repository publishes from **main / (root)**. Pushing an update to `main` automatically republishes it.

For a fresh repository, upload this folder's contents, including `.nojekyll`. In **Settings → Pages**, select **Deploy from a branch → main → / (root)** and save. Wait for deployment to complete, then share the Pages URL. All assets use relative paths and lesson navigation uses hashes, so refreshing a lesson works under a repository subpath. See [GitHub's publishing-source instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Classroom use and model boundaries

Students run scripts in MATLAB desktop or MATLAB Online beside this guide. The site checks numbers and choices entered on the page; it does **not** execute MATLAB, inspect scripts, upload work or send progress to a teacher. Arrange school MATLAB access and your usual submission method.

- Project 1 assumes no drag, constant gravity and equal launch/landing height.
- Project 2 uses fictional tokens. Random trials estimate probabilities; checkpoints use deterministic results or exact identities instead of requiring particular random digits. A fair expected value does not guarantee a winning run.
- Project 3 shows finite approximations to an ideal fractal. Keep levels at 4 or below in the guided exercise.
- Project 4 teaches lossy spatial downsampling by block means, not JPEG/PNG encoding or SVD. Ratios count equally typed numeric values and exclude metadata. It uses a generated image, so no image files or extra toolbox are required.
- Project 5 uses invented SIR parameters and a closed, uniformly mixed population with lasting immunity. It is a mathematical exercise, not a calibrated forecast. Conservation and step-size checks test the implementation, not real-world predictive validity.
- Project 6 asks students to recommend a change to a system they choose. They define an objective and constraint, compare a baseline with at least two substantive alternatives, test at least three operating conditions including a held-out case, and investigate failure and sensitivity. A well-supported negative finding can earn full marks. Submit reproducible code/data, a comparison table, at least two purposeful figures, a two-page decision memo and a five-minute demonstration. Teachers assess these using the 20-mark rubric.

Progress is stored in this browser on this device, separately for each project. Existing Boot Camp and Projectile Motion progress is preserved when the new courses load. Localhost and the public address have separate storage. Guided step position, answer drafts and successful checks survive reload on the same browser. Project 6 notes autosave separately and survive reload; export them to keep a backup or move devices. Self-review can be recorded in any order after entering notes or file references. **Reset all project progress** removes completion/self-review marks but keeps Project 6 notes. Shared computers share these records: export needed work, then clear this site’s browser data between students to remove notes as well. Private browsing or clearing site data can remove records. When storage is unavailable, the app warns and continues in memory.

## Source structure

- `index.html`: entry point and ordered, deferred scripts.
- `content/`: one editable lesson file per project; course metadata, catalog and numeric visual specifications.
- `assets/app.js`, `core.js`, `guided.js`, `capstone.js`, `styles.css`: rendering, validation, persistence, routing, setup diagrams and responsive layout.
- `content/guided.js`: the authored short-step sequences for all 48 guided lessons.
- `assets/*diagrams.js`: accessible inline SVGs. No generated bitmap assets or external image dependencies.
- `downloads/`: MATLAB starters/references and bilingual investigation guide.
- `tests/`: validation, independent numeric checks, migration tests and browser QA record.
- `content/AUTHORING.md`: lesson schema and extension notes.

## Verification and remaining audit

Run `node --test tests/*.test.cjs` with Node 18+. Tests cover all guided checkpoint sets and short-step sequences, bounded instructions, intact MATLAB blocks, resume state, dependency invalidation, open capstone navigation/state, notebook sanitation/export/escaping, bilingual completeness, malformed input, numerical tolerance, dependencies, progress migration, fractal geometry, compression error, projectile physics and SIR updates. See [QA record](tests/QA.md) for browser results.

**MATLAB itself is not installed in the build environment.** Numerical outputs were independently checked in JavaScript/Python, and the site was tested in a browser. Run the supplied `.m` sections in your school MATLAB version during your audit, and review the Chinese teaching language and pacing with your class context in mind.

Reference visuals are instructional SVGs, not MATLAB screenshots. Plot colors, tick spacing and printed number formatting may differ while representing the same results.

## Technical references

MathWorks documentation: [getting started](https://www.mathworks.com/help/matlab/getting-started-with-matlab.htm), [random-number generation](https://www.mathworks.com/help/matlab/random-number-generation.html), [rand](https://www.mathworks.com/help/matlab/ref/double.rand.html), [kron](https://www.mathworks.com/help/matlab/ref/kron.html), [imagesc](https://www.mathworks.com/help/matlab/ref/imagesc.html), [mean](https://www.mathworks.com/help/matlab/ref/double.mean.html), and the SIR example in [MATLAB Mathematics](https://www.mathworks.com/help/pdf_doc/matlab/matlab_math.pdf).

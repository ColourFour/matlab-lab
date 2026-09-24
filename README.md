# MATLAB Lab

A static, bilingual English / Simplified Chinese learning site for high-school students. No build step, backend, external fonts or package installation is required.

- **Project 0 — MATLAB Boot Camp:** eight tiny missions, from first commands to a plotted model; about 40 minutes.
- **Project 1 — Projectile Motion:** eight missions to set launch conditions, split velocity, calculate flight time, build and plot a trajectory, measure range/height, compare angles, and land in a 34–36 m target zone; about 45 minutes.
- Projects 2–6 remain clearly labeled locked placeholders.

Every mission follows **See → Understand → Do → Compare → Check → Continue**. The persistent EN/中文 toggle shares one lesson structure, diagrams and MATLAB source. Project 1 unlocks after Boot Camp, while its course outline can be previewed at any time.

## Use locally

Open `index.html` in a modern browser, or serve this folder for reliable storage and clipboard behavior:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Visit `http://127.0.0.1:8000`. Stop the server with Ctrl+C.

## GitHub Pages

Upload this folder’s contents to a GitHub repository, preserving the hidden `.nojekyll` file. In **Settings → Pages**, choose **Deploy from a branch → main → / (root)** and save. Share the Pages URL once its deployment completes. All assets are relative, so project subpaths work, and hash-based lesson routes survive refreshing.

For updates, edit the source and push to `main`; Pages republishes automatically. See [GitHub’s publishing-source instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Classroom notes

Students run the code in a separate MATLAB desktop or MATLAB Online window. The website checks entered answers; it does **not** execute MATLAB, inspect scripts or collect teacher submissions. Arrange your school’s MATLAB access first. Ask students to show their saved script and graph if you need evidence of their code.

Project 1 is an ideal model: no air resistance, constant gravity, and launch/landing at the same height. Code uses degrees (`sind`/`cosd`). Measurements accept sensible two-decimal rounding. Its final checkpoint accepts either 30° or 60°, checks a landing distance near 35.31 m, and verifies the matching peak height (5.10 m or 15.29 m). The reference graph deliberately shows both choices; each student’s script plots one.

Progress for the two projects and language are stored in this browser on this device. Nothing is sent to a teacher or synced to another device. Old Boot Camp progress migrates on the same site origin. Moving from localhost to the published address uses a different browser storage area. Answer drafts last until reload. Shared computers share progress; use **Setup & help → Reset all project progress** between learners. Private browsing or clearing site data can remove records. If storage is blocked, the page warns students and continues in memory.

Downloadable MATLAB starters and complete references are in `downloads/`. Answer keys are public static source: checkpoints are learning aids, not secure exam grading.

## Structure

```text
index.html                    Static entry point
content/bootcamp.js            Project 0 lessons
content/projectile-motion.js   Project 1 lessons
content/courses.js             Course metadata and prerequisites
content/projects.js            Learning-path catalog
content/AUTHORING.md           Reusable lesson schema and extension guide
assets/app.js                 Shared rendering, routing and interactions
assets/core.js                Parsing, validation and state migration
assets/diagrams.js             Boot Camp SVG diagrams
assets/physics.js              Ideal projectile model for reference diagrams
assets/projectile-diagrams.js  Project 1 diagrams and expected graphs
assets/styles.css             Responsive shared layout and tokens
downloads/                    Four starter/reference MATLAB files
tests/                        Automated checks and browser QA record
```

The site uses native links, buttons, forms and dialogs, accessible SVG descriptions, keyboard focus, reduced-motion support and mobile layouts. Hidden sizing text keeps translated lessons aligned and is excluded from assistive reading.

## Verification

Run `node --test tests/*.test.cjs` with Node 18+. Tests cover all sixteen missions’ answer keys, malformed input, precision tolerances, both target solutions, dependent answers, analytic physics, separate course histories and legacy progress migration. Browser checks are recorded in `tests/QA.md`.

MATLAB itself was not installed in the build environment. Do a teacher walkthrough in your school’s MATLAB environment before class. Concepts use MathWorks’ [getting started guide](https://www.mathworks.com/help/matlab/getting-started-with-matlab.htm), [plot](https://www.mathworks.com/help/matlab/ref/plot.html), [linspace](https://www.mathworks.com/help/matlab/ref/double.linspace.html) and [sind](https://www.mathworks.com/help/matlab/ref/double.sind.html) documentation. Reference figures are generated instructional SVGs, not MATLAB screenshots.

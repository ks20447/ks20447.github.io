# Agent handoff

Read this alongside `AGENTS.md`, current Git status/diffs and recent commit bodies.
Add short dated entries for meaningful tasks, newest first. Include agent name,
changed files, checks, pending work and commit/push status. Keep roughly ten recent
entries; use Git history for older details. Do not infer agent identity from the
human commit author.

## 2026-11-11 — Codex — Publication requested

- User requested publication of the pending cluster card/image and shared agent
  guidance. Reviewed the pending files; all were created by Codex in this chat.
- Prior build and visual checks passed. Committed as `71a8c52`, including the
  shared agent guidance, with `Agent: Codex` attribution.
- Publication blocked: HTTPS Git push has no credentials; GitHub CLI is absent.
  The connected GitHub integration also rejected a Git blob write with HTTP 403
  `Resource not accessible by integration`. No remote changes or deployment made.
- Commit this outcome note separately so a normal authenticated `git push origin
  main` can publish all pending commits. Do not recreate the application changes.

## 2026-11-11 — Codex — Three-board cluster image and description

- Per user correction, changed the cluster paragraph to three NVIDIA Jetson Orin
  NX boards, removing the two-running/third-planned wording in `src/pages/index.astro`.
- Removed both original diagrams from the card and public asset folder. Replaced
  them with `public/tools/jetson-gpu-cluster/three-j40-cluster.png`, generated with
  built-in image_gen. The card and alt text identify it as an AI-generated illustration.
- Saved the full generation prompt in `docs/jetson-cluster-image-prompt.txt`.
  Replaced unused expanded-image CSS with the small image-credit style.
- Validation: build and diff formatting checks passed; inspected the generated
  image and local dark preview, verified three-board text and collapsed default.
  Reloaded the preview after copying the asset to clear its initial failed image load.
- Changes remain uncommitted/unpushed; earlier untracked shared agent docs preserved.
  Light/mobile views were not separately checked for this existing card pattern.

## 2026-11-11 — Codex — Jetson GPU cluster tool

- Added the `jetson-gpu-cluster` placard to `src/pages/index.astro`, preserving
  the supplied export paragraph and tags. Architecture diagram is the thumbnail;
  the second Slurm job-array screenshot appears inside the collapsed description.
- Copied both PNGs into `public/tools/jetson-gpu-cluster/`; added the responsive
  `.tool-detail-image` style in `src/styles/global.css` for expanded media.
- Validation: Astro build and `git diff --check` passed. Inspected the local dark
  preview, both images, default collapsed state, expansion and retraction.
  Mobile/light views were not separately checked for this existing card pattern.
- Local dev server started on port 4321; preview left at `/#jetson-gpu-cluster`.
- Pending: changes are uncommitted and have not been pushed. Existing untracked
  `AGENTS.md`, `CLAUDE.md` and this handoff file were preserved. Six tools now exist.

## 2026-11-05 — Codex — Shared contributor guidance

- Added `AGENTS.md` documenting the Astro structure, slate/teal style, portfolio
  import rules, collapsed tool descriptions, build/preview workflow and deployment.
- Added `CLAUDE.md` to load the shared guidance in Claude Code. Established
  `Agent: Codex` / `Agent: Claude Code` commit trailers and this handoff log.
- Validation: inspected package scripts, Astro config, CI, layout, project data,
  page templates and CSS; documentation diff reviewed. No build needed for docs.
- Git at task start: clean `main`, matching the locally recorded `origin/main`.
  This does not independently confirm the current remote or deployment status.
  Latest recorded commit: `58a5dbf` (Custom Tools showcase, implemented by Codex
  in the preceding chat). Earlier commits lack explicit agent trailers.
- Pending: these documentation files are uncommitted; no push requested for this
  task. No application changes made. All five tool placards currently have supplied
  screenshots; descriptions default to collapsed. Project 01 is still a placeholder.

# Research portfolio

A static Astro portfolio for a robotics / engineering PhD researcher. Includes light and dark themes, a responsive homepage, three project pages, and a printable CV. Built for Adam Morris. Project examples remain clearly labelled placeholders.

## Local development

Use Node.js 24 or later.

```sh
npm ci
npm run dev
```

`npm run build` produces the static website in `dist/`. `npm run preview` previews that output.

## Personalise

- `src/pages/index.astro`: name, introduction, education, experience, publications, email, and professional profiles.
- `src/data/projects.ts`: project titles, summaries, tags, slugs, and case-study prompts.
- `src/pages/projects/[slug].astro`: shared project detail layout.
- `src/pages/cv.astro`: CV page with a download link to `public/Adam-Morris-CV.pdf`.
- `src/layouts/Layout.astro`: site title, description, navigation, initials, and footer.
- `src/styles/global.css`: colours, typography, and layout.
- `public/`: add your portrait and project images; replace the labelled placeholder blocks with images using descriptive alt text. Prefix local asset links with `import.meta.env.BASE_URL` to support repository subpaths.
- `public/favicon.svg`: replace the placeholder initials.

The portrait, contact information, education, experience and publication are populated. Project artwork and case studies remain placeholders. Fonts are loaded from Google Fonts with system fallbacks; self-host them if desired.

## GitHub Pages

1. Create your GitHub repository and push this project to its `main` branch.
2. In repository **Settings → Pages**, select **GitHub Actions** as the build source.
3. The included workflow builds and deploys on pushes to `main`, or manually from the Actions tab.

The workflow reads the site origin and base path from GitHub Pages, supporting both `username.github.io` and `username.github.io/repository-name` without hard-coded repository names. If your default branch differs, update the workflow branch.

For a local build that simulates a repository subpath:

```sh
SITE_URL=https://example.github.io BASE_PATH=/my-portfolio npm run build
```

Set a custom domain in GitHub Pages settings when needed. No backend or paid hosting service is required. The contact action opens the visitor's email application.

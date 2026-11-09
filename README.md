# Alfie Deligero — Portfolio

Personal portfolio site built with **Next.js 16**, **React 19**, **TypeScript** and **Tailwind CSS 4**.
It exports as a static site, so it can be hosted for free on Vercel, Netlify or GitHub Pages.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit the content

All text lives in **`lib/data.ts`**: profile, links, skills, projects and experience.
To add a project, copy one of the objects in the `projects` array and change the fields.
Each project automatically gets its own case-study page at `/projects/<slug>/`.

- `pattern` picks the generated cover art: `grid`, `rings`, `reels`, `bars` or `qr`.
- `accent` sets the cover colour.
- `links` adds buttons like "Live demo" or "Source on GitHub".

Replace `public/Alfredo-Deligero-Jr-Resume.pdf` to update the resume download.

## Build

```bash
npm run build
```

This writes a static site to `out/`.

## Deploy (free)

**Vercel (easiest):** push this folder to a GitHub repo, then import it at vercel.com/new. No settings needed.

**GitHub Pages:** run `npm run build`, then publish the contents of `out/`.
If the site lives at `username.github.io/repo-name`, add `basePath: "/repo-name"` to `next.config.ts` first.

## Project structure

```
app/
  layout.tsx              Fonts, header, footer, page metadata
  page.tsx                Home: hero, work, about, experience, contact
  projects/[slug]/page.tsx Case-study page for each project
components/
  Header.tsx              Sticky nav with mobile menu
  Footer.tsx
  ProjectCover.tsx        Generated cover art for project cards
lib/data.ts               All site content
public/                   Resume PDF
```

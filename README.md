# yash-bhanushali.vercel.app — v2 “Engineering Broadsheet”

Personal portfolio of Yash Bhanushali. Next.js 14 (App Router), TypeScript, Tailwind CSS, Motion, MDX + Shiki. Fully static apart from a daily revalidation of the home page.

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npx tsc --noEmit
npm run build
```

**Environment variables:** none required. `VERCEL_GIT_COMMIT_SHA` (set automatically by Vercel) is shown in the colophon if present. The v1 `MONGODB_URI` is no longer used.

## Editing content

All copy and data live in `src/content`. Components never hardcode facts.

| File | What it holds |
| --- | --- |
| `site.ts` | name, positioning line, status bar (role / availability), email, résumé, socials, Medium feed |
| `about.ts` | bio paragraphs, stack grouped by layer (spec sheet) |
| `timeline.ts` | education + experience changelog (`start`/`end` as `YYYY-MM`; version tags derive from `start`) |
| `projects.ts` | work index + case studies: summary, year, role, links, problem, architecture graph, decisions, screenshots, metrics |
| `posts.ts` | Medium posts (external links, dates, reading time) |
| `writing/*.mdx` | local long-form articles at `/writing/<slug>`; copy `_template.mdx` to start one |
| `sections.ts` | section numbers/headings, nav, contact statement, colophon |

Search for `TODO(yash)` to find missing content. In `npm run dev`, gaps also show as dashed TODO boxes on the page; production builds hide them and skip empty case-study sections.

### Architecture schematics

Each project's `architecture` is a small graph: nodes with a `tier` (`client`, `edge`, `service`, `external`, `data`) and directed `edges` (`duplex: true` draws a realtime channel in the accent colour). `components/project/schematic-layout.ts` lays tiers out as columns (rows on phones), and `Schematic.tsx` draws the result on scroll.

## Structure

```
src/
  app/                    routes, metadata, OG images, sitemap, robots
  content/                typed content layer (see above)
  lib/                    writing index, Medium RSS, palette items, theme, OG renderer
  components/
    ui/                   primitives: SectionHead, RevealLines, ThemeToggle, Toast, …
    layout/               header, slash nav, command palette, colophon
    sections/             masthead, work index, about, changelog, writing TOC, contact
    project/              case-study sections and the schematic
    writing/              MDX component map
  assets/fonts/           OFL fonts used only by the OG image renderer
```

## Notes

- Theme: `data-theme` on `<html>`, falling back to `prefers-color-scheme`; tokens in `src/app/globals.css`.
- ⌘K / Ctrl+K opens the command palette (loaded on first use).
- `prefers-reduced-motion` disables the heading reveals and schematic drawing (shown complete) and reduces page transitions to a plain fade.
- `/blog` and `/projects` permanently redirect to `/writing` and `/work`.

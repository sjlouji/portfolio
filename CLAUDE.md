# Portfolio – AI onboarding

This file gives structure, conventions, and context so an AI can work in this repo without guessing.

## What this repo is

- **Personal portfolio site** for Joan Louji (Software Engineer).
- **Stack:** Next.js 15 (App Router), React 18, TypeScript, Tailwind CSS, Framer Motion.
- **Package manager:** pnpm (see `.npmrc`; do not use npm/yarn for installs).
- **Dev server:** `pnpm dev` (Turbopack, port **9002**).

## Important: where data lives

**All portfolio data must live in `src/lib/data.ts`.** Do not put content (hero text, about, experience, works, contact, nav items, resume data, section order, etc.) in component files, env vars, or other modules. Add or edit data only in `portfolioData` (and related exports like `sectionIds`, `PAGE_SIZE`) in `src/lib/data.ts`. Components receive data via props from the single source in `data.ts`.

## File and folder structure

```
src/
├── app/                    # Next.js App Router + page composition only
│   ├── page.tsx             # Single route; fetches data, renders <LandingPage />
│   ├── layout.tsx           # Root layout (metadata, fonts, body, theme script, ThemeProvider)
│   ├── landing-page.tsx     # Only “parent” page component in app/ root
│   ├── components/          # App-specific UI (header, footer, section-wrapper)
│   ├── providers/           # ThemeProvider (light/dark; reads localStorage + prefers-color-scheme)
│   └── sections/            # Full-page sections (hero, about, experience, works, posts, contact, resume)
├── components/              # Shared UI (buttons, dialogs, pagination, etc.; many from shadcn/radix)
├── hooks/                   # Shared hooks (use-toast, use-mobile, use-scroll-hash)
├── lib/                     # Data, API, utils
│   ├── data.ts              # Main content: portfolioData, sectionIds, PAGE_SIZE, PortfolioData type
│   ├── fetchMedium.ts       # Fetches blog posts from Medium RSS (username: sjlouji10)
│   ├── actions.ts           # Server actions (if any)
│   └── utils.ts             # cn() and small helpers
├── types/                   # TypeScript interfaces for each domain
│   ├── landing.ts           # LandingPageProps, PortfolioData
│   ├── hero.ts, header.ts, about.ts, contact.ts, section.ts, project.ts, experience.ts, resume.ts
└── assets/styles/
    └── globals.css
```

**Conventions:**

- **`app/` root:** Only route files (`page.tsx`, `layout.tsx`) and the single parent component (`landing-page.tsx`). No other page components or sections at the root.
- **Sections** live in `app/sections/` and are composed by `landing-page.tsx`. Each section gets its data via props from `initialData` or `blogs`.
- **Reusable UI** lives in `src/components/`. App-specific layout (header, footer, section wrapper) lives in `app/components/`.
- **Types** live in `src/types/`; one file per domain (e.g. `experience.ts` → `ExperienceItemData`, `ExperienceSectionProps`). Do not define domain types inside section or page files.
- **All content and config** for the portfolio (hero, about, works, experience, contact, nav, resume, section order) live in `src/lib/data.ts` as `portfolioData`. Type is exported as `PortfolioData` (`typeof portfolioData`). Do not add new data sources elsewhere; keep everything in `data.ts`.

## Data flow

1. **`app/page.tsx`** (server): Imports `portfolioData` from `@/lib/data` and `fetchMediumPosts` from `@/lib/fetchMedium`. Fetches blogs (Medium RSS for `sjlouji10`), then renders `<LandingPage initialData={portfolioData} blogs={blogs} />`.
2. **`landing-page.tsx`**: Receives `initialData` (PortfolioData) and `blogs`. Builds `sectionComponents` by section id (`hero`, `about`, `experience`, `works`, `posts`, `contact`) and renders them inside `sectionIds`-driven wrappers. Also renders `<Header />` and `<Footer />`.
3. **`sectionIds`**: Comes from `data.ts`: `["hero", ...portfolioData.sections.map(s => s.href.replace("#", ""))]`. Order of `portfolioData.sections` defines both nav order and scroll/section order. Do not hardcode section order elsewhere.
4. **Sections** receive only what they need (e.g. `initialData.about`, `initialData.experience`, `blogs`). They do not import `portfolioData` directly except where needed (e.g. resume section for print data).

## Things an AI must know before coding

- **Adding a new section:** Add an entry to `portfolioData.sections` in `data.ts` (name + `#id`), create the section in `app/sections/<name>-section.tsx`, add the component to `sectionComponents` in `landing-page.tsx` with the same id. Section id must match `sectionIds` (derived from `sections[].href`).
- **Changing nav or section order:** Edit only `portfolioData.sections` in `data.ts`. Do not reorder sections in `landing-page.tsx` without keeping `sectionIds` in sync; `sectionIds` is derived from `sections`, so changing `sections` is enough.
- **Content edits:** All editable content lives in `src/lib/data.ts` only. Hero, about, experience, works, contact, nav labels/links, resume/print data—everything goes in `portfolioData` (or related exports in that file). Never put portfolio content in section components or other files.
- **Blog posts:** Fetched at build/request time in `page.tsx` via `fetchMediumPosts("sjlouji10")`. Fallback array used on failure. Limit and shape are defined in `lib/fetchMedium.ts`.
- **Styling:** Tailwind. Global styles and CSS variables in `src/assets/styles/globals.css`. Config in `tailwind.config.ts`. Use existing utility patterns (e.g. section list styling in works/posts/experience is aligned: `divide-y`, left date/period column, same font sizes).
- **Theme (light/dark):** Tailwind `darkMode: ["class"]`. Root layout runs an inline script before paint (from `localStorage.theme` or `prefers-color-scheme`) and wraps the app in `ThemeProvider` (`app/providers/theme-provider.tsx`). Toggle lives in the header (`components/theme-toggle.tsx`; sun/moon icon). Preference is persisted in `localStorage` under key `theme`. Use semantic tokens (`bg-background`, `text-foreground`, `text-muted-foreground`, `bg-secondary`, etc.) so sections adapt to dark; avoid hardcoded grays or `bg-white` in section UIs.
- **Contact section:** Uses `!py-0` on SectionWrapper and custom padding (`pt-24 pb-20`). Contact section wrapper in `landing-page.tsx` does **not** use `min-h-screen` so the footer sits close below it.
- **Experience section:** Supports optional `highlights` (string[]) per role; when present, “View full role” expands to show bullet list. Types in `types/experience.ts`.
- **Pando & Freehand:** Both under same org; `organization: "Quaking Aspen Pvt Ltd"` is set on those experience entries and shown in the UI as “Company · Organization”.

## Commands

| Command        | Purpose                |
|----------------|------------------------|
| `pnpm dev`     | Dev server (port 9002) |
| `pnpm build`   | Production build       |
| `pnpm start`   | Run production server  |
| `pnpm lint`    | Next.js lint           |
| `pnpm typecheck` | `tsc --noEmit`       |

## Design / product context

- Single-page feel: sections stacked vertically; header is fixed; nav highlights by scroll position and updates URL hash.
- Typography and list layout are kept consistent across Works, Posts, and Experience (same font sizes and list/table-style layout where applicable).
- More detail in `docs/blueprint.md` (features, style guidelines, colors/fonts).

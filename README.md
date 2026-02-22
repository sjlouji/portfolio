# Portfolio

A personal website. It has an intro, my experience, projects, blog posts from Medium, and a way to get in touch.

Built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.

**Found a bug or want to suggest something?** When you open a new issue on GitHub, use the [issue template](.github/ISSUE_TEMPLATE/issue.md).

**Want to contribute?** See [CONTRIBUTING.md](CONTRIBUTING.md).

---

## How to run it

You need Node.js and pnpm on your computer.

```bash
pnpm install    # Get the code the project needs
pnpm dev        # Start the site. Open http://localhost:9002 in your browser
pnpm build      # Make a version you can put online
pnpm start      # Run that version on your machine
```

---

## How to change what's on the site

Everything you see (text, links, list of jobs, projects, contact info) comes from one file: **`src/lib/data.ts`**.

Edit that file to change:

- The intro (name, title, short line under it)
- The about section (bio, skills, links)
- Experience (jobs, companies, what you did, tags)
- Works (projects)
- Contact (heading, email, address, social links)
- The menu at the top and the order of the sections

Blog posts are pulled from Medium when someone opens the site. That is set up in `src/lib/fetchMedium.ts`.

---

## Where things are in the code

- **`src/app/page.tsx`** — Where the app starts. It loads the data and shows the main page.
- **`src/app/landing-page.tsx`** — Puts all the sections together (hero, about, experience, and so on).
- **`src/app/sections/`** — One folder per big part of the page (hero, about, experience, works, posts, contact).
- **`src/app/components/`** — The top bar, bottom bar, and the wrapper around each section.
- **`src/lib/data.ts`** — All the content. Change this to change what appears on the site.
- **`src/types/`** — TypeScript types. One file per section.

---

## Commands

- `pnpm dev` — Start the site for local use (port 9002).
- `pnpm build` — Build for production.
- `pnpm start` — Run the built site.
- `pnpm lint` — Check code style.
- `pnpm typecheck` — Check that TypeScript is happy.

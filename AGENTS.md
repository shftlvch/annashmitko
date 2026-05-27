# AGENTS.md

## Project

- Astro static site for `annashmitko.com`.
- TypeScript uses ES modules.
- Styling is Tailwind CSS v4 through `src/styles/global.css`.
- Package manager is Bun. Prefer `bun install` and `bun run <script>`.

## Commands

- Install dependencies: `bun install`
- Start local dev server: `bun run dev`
- Run production checks and build: `bun run build`
- Preview the production build: `bun run preview`

## Structure

- `src/pages/` contains route pages.
- `src/layouts/` contains page layout templates.
- `src/components/` contains reusable Astro components.
- `src/content/` contains Markdown content.
- `public/` contains static assets copied as-is.
- `dist/` is build output. Do not hand-edit it unless explicitly asked.

## Code Style

- Use 2-space indentation, LF line endings, and UTF-8.
- Use single quotes and semicolons in TypeScript and JavaScript.
- Use PascalCase for component files and component names.
- Define Astro component props with a `Props` interface when props are non-trivial.
- Keep the Astro frontmatter block at the top of `.astro` files.
- Use double quotes for HTML attributes.
- Prefer semantic HTML and include accessibility attributes where relevant.
- Use existing Tailwind theme tokens and local component patterns before adding new ones.
- Keep changes scoped to the requested behavior; avoid unrelated refactors.

## Verification

- Run `bun run build` before finishing functional, style, or route changes.
- For content-only edits, at least inspect the affected page/component and run a build when practical.

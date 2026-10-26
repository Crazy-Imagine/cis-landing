# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing/landing site for Crazy Imagine Software (crazyimagine.com), built with Astro 4 + Tailwind, with React islands for interactive forms. Content (articles, projects, services, reviews, team members, FAQs, SEO, heroes) comes from a separate Strapi CMS instance, which must be reachable for dev and build.

## Commands

Package manager is **pnpm** (enforced via `preinstall`). Node 18.20.2 (`.nvmrc`).

- `pnpm dev` — dev server at `localhost:4321`
- `pnpm build` — runs `astro check` (type check) then `astro build`; fails on type errors
- `pnpm check` — `astro check && tsc --noEmit`
- `pnpm lint` / `pnpm lint:fix` — ESLint (antfu config + astro + jsx-a11y)
- `pnpm format` / `pnpm format:check` — Prettier over `src`
- `pnpm hybrid-build` — run the built standalone Node server from `dist/server/entry.mjs`

There is no test suite. CI (`.github/workflows/build.yml`, on PRs to `dev`) runs `lint`, `format:check`, and `build` — run all three before considering a change done. A Husky pre-commit hook runs lint-staged (ESLint + `prettier --check` on staged `src` files).

## Browser testing (ask before using)

`playwright-cli` (global npm package `@playwright/cli`) drives a real browser from the terminal to test the site: open pages, click, hover, navigate with the keyboard, read the console, and take element screenshots. Its guide is the `SKILL.md` bundled with the package (`playwright-cli --help` prints the path).

**Whenever a task would benefit from it, ask the user if you can use it before running it.** Not having asked yet is not a reason to skip browser testing: ask, and use it if the user agrees. Never submit real forms (e.g. the Clientify contact form) without separate permission, since that creates real leads.

When authorized: run it from a scratch directory (it writes `.playwright-cli/` logs to the cwd), with `pnpm dev` and the local Strapi running. Console errors from third-party trackers (Metricool, Facebook Pixel, gtag, DoubleClick, ipify) on localhost are expected noise.

## Environment

Copy `.env.template` to `.env`. `PUBLIC_STRAPI_URL` is required (Strapi base URL; `/api/` is appended in `src/lib/strapi.ts`). CI also provides `WHATSAPP_NUMBER`.

## Architecture

- **Rendering:** `output: 'hybrid'` with the `@astrojs/node` standalone adapter. Pages are prerendered by default; dynamic routes use `getStaticPaths()` that query Strapi at build time, so CMS content changes require a rebuild. Only pages with `export const prerender = false` (e.g. `blog/all.astro`) render on request.
- **Strapi access:** all CMS calls go through `fetchApi<T>()` / `postApi<T>()` in `src/lib/strapi.ts`, which serialize Strapi v4 REST params (`populate`, `filters`, `locale`, `fields`, `sort`, `publicationState`) with `qs`. Response types live in `src/types/strapi/` and follow the Strapi v4 `{ data: { id, attributes } }` shape.
- **i18n:** locales `en` (default, unprefixed) and `es` (under `/es/`). Routes are **duplicated as files**: every page in `src/pages/` has a counterpart in `src/pages/es/` that fetches with `locale: 'es'`. When changing a page, update both versions. Some ES-only pages exist (`agentes-ia`, `agendamiento`, `gracias`).
  - UI strings live in `src/i18n/ui.ts` (`en` and `es` dictionaries); use `getLangFromUrl(Astro.url)` + `useTranslations(lang)` and `useTranslatedPath(lang)` from `src/i18n/utils.ts`.
  - Cross-locale linking (hreflang, language switcher) is done by matching entries across locales via a shared Strapi field (`Key` on articles, `key` on services), e.g. `hrefLangSlug` in `blog/[slug].astro` and `src/utils/serviceNavSlugs.ts`.
- **Layout:** `src/layouts/Layout.astro` wraps every page (SEO meta, analytics scripts, header/footer). It takes an `isNew` prop that switches between the legacy `Header`/`Footer` and the redesigned `HeaderNew`/`FooterNew`. The site is mid-redesign: several components have `*New` variants (`ArticleCardNew`, `ServicesNew`, `LatestProjectsNew`, `CarouselSectionNew`, `NavLinksNew`) — check which variant a page uses before editing.
- **Hero:** redesigned pages use `src/sections/HeroNew.astro` (home, projects). Pass the Strapi hero (`{...page.hero}`), plus optional `showClutch`, `cta={{ text, href }}`, and `align="center"` (centered text, no image, as on the blog). Children go inside the hero below the text (the blog puts the featured article there). The image is drawn at its natural height, right-aligned under the header, and its left edge fades into the background. The hero height follows the content, with a minimum. Use it for every redesigned page instead of adding options to the legacy `src/sections/Hero.astro`, which stays for pages not yet redesigned.
- **Code organization:** `src/sections/` holds page-level sections, `src/components/` reusable Astro components, `src/components/react/` React islands (forms built with react-hook-form + yup, posting to Strapi via `postApi`), `src/consts/` and `src/utils/` hardcoded content/data, `src/icons/` SVG icons as Astro components. Cross-island state uses nanostores (`src/store/`).
- **Imports:** use the `@/*` alias for `src/*`.
- **Images:** remote images come from Strapi's S3 bucket (allowed in `astro.config.mjs` `image.domains`); use helpers in `src/utils/imageUrl.ts`. New remote image hosts must be added to the Astro config.
- **Styling:** Tailwind with custom theme in `tailwind.config.mjs`; global CSS variables (brand colors) are defined in `Layout.astro`. PostCSS uses `postcss-import` and `postcss-nesting`.
  - Theme colors are defined as `var(--color-...)`, so Tailwind opacity modifiers like `bg-primary-blue/70` or `from-primary-blue/50` generate **no CSS**. For a translucent color use the solid class plus `opacity-*` on its own element, or one of the `*-with-transparency` tokens.
  - Pages with a Clientify form embed (`ReachOut`, `CTOManual`) load Clientify's global CSS, which sets `p { color: #666 }` and `body { color: #555 !important; font-family: Poppins !important; font-size: 14px !important }`. Give every text element an explicit color and font class. For HTML from Strapi rendered with `set:html`/`marked`, also style the inner tags (e.g. `[&_p]:text-white`). It also overrides the Tailwind class `.inline-block` with `width: auto !important`, so an `inline-block` element with a fixed width collapses on those pages: use `block` or `flex` instead.
  - There is no gradient text anymore (the old `bg-gradinet-font` / `--color-gradinet-font` was removed). Titles use a solid color: white on dark backgrounds, `text-primary-blue` on light ones. Accent words go green through the `**` marker below; do not reintroduce gradient text.

## Remove dead code as you go

When a change leaves a component, section, asset, icon, type, prop or i18n key with no remaining references, delete it in the same change. Check `@/` alias imports, relative imports, `import.meta.glob` string keys and `/img/...` URLs before deciding something is unused. Routes in `src/pages` are the exception: confirm before deleting a page.

## Every change goes to both languages

Any page change (redesign, new section, prop, copy key) must be applied to **both** the English page in `src/pages/` and its Spanish counterpart in `src/pages/es/`, and every new UI string needs an `en` and an `es` entry in `src/i18n/ui.ts`. Never hardcode visible text in a page or component: it comes from Strapi or from `t('...')`. The only exceptions are the ES-only pages listed above.

## Highlighted text with `**`

Wrapping text in double asterisks turns it green (`text-primary-new`, #B1D600). Only the text inside the markers changes color; the rest keeps the element's normal color.

- **Where it works:** everywhere text is rendered through `Typography` (`src/components/Typography.astro`), which covers every hero title and subtitle, section title, and paragraph on the site. `Typography` renders its slot and passes it through `highlightHtml()` from `src/utils/highlight.ts`. Content from Strapi and from `src/i18n/ui.ts` both work, with no extra code.
- **How to use it (CMS editors and copy keys):** `Ayudamos a empresas a escalar con **Inteligencia Artificial**`. Several markers in one text are fine (`**uno** y **dos**`). An unclosed `**` is left as is. Strapi text is still HTML-escaped, so the marker cannot be used to inject markup.
- **When to use it:** for the one key phrase of a title or hero, as the redesign shows (one accent per heading, not every heading). Use it only on dark backgrounds (`primary-blue`, hero images): the green on white/light gray fails WCAG contrast.
- **Text rendered outside `Typography`** (alt, `aria-label`, `<title>`/meta, Swiper data, any raw `{text}`): pass it through `stripHighlight()` from `src/utils/highlight.ts` so the asterisks do not show. When adding a new heading or text element, use `Typography` instead of a raw tag so the marker keeps working.

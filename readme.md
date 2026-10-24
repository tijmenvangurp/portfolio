# tijmenvangurp.nl

Personal site of Tijmen van Gurp: a small static React app that runs on
[Cloudflare Pages](https://pages.cloudflare.com/).

## Stack

| Piece | Choice |
| --- | --- |
| Build | Vite 8 |
| UI | React 18 + TypeScript |
| Styling | styled-components 6 with a light/dark theme |
| Routing | React Router 7 (`/`, `/portfolio`, 404) |
| Animation | framer-motion |
| Hosting | Cloudflare Pages (static build in `dist/`) |

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
npm run typecheck
npm run build      # -> dist/
npm run preview
```

Node 20.19 or newer is required (see `engines`).

## Deploy

Cloudflare Pages builds from `main`:

- Build command: `npm run build`
- Build output directory: `dist`
- Node version: the default image (24 at the time of writing)

No environment variables are needed. The SPA fallback (`/* -> /index.html`) is
configured on the Pages project; unknown paths render the 404 route.

`firebase.json` and `npm run deploy` are kept only as a transitional escape
hatch while Firebase Hosting still serves the site. Remove them once the
Cloudflare custom domain has been verified.

## Structure

```text
index.html            static head: title, description, theme bootstrap
src/main.tsx          React root + router
src/App.tsx           routes
src/pages/            Home, Portfolio, NotFound
src/components/       layout, header, footer, hero, timeline, repositories
src/hooks/            dark mode, per-route page metadata
src/styles/           reset.css, themes, global style
src/data/siteConfig.ts  all site content
public/images/        photos and covers
```

Content lives in `src/data/siteConfig.ts`; components read from it, so text
changes do not require touching JSX.

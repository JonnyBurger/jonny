# My website

My website, available at https://jonny.io. Built with React and Vite.

## Development

Use Node.js 24.15+ (recommended; `nvm use`), 22.22.2+, or 26+ to support
both Vite and the test tools.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. `npm start` also starts the dev server.

## Checks and production

- `npm test` runs the component smoke test with Vitest and jsdom.
- `npm run test:watch` runs tests in watch mode.
- `npm run build` creates the production site in `build/`.
- `npm run preview` serves that production build locally.
- `npm run deploy` builds and publishes `build/` with gh-pages.

Vite copies `public/` assets, including `CNAME` and the SPA `_redirects` rule,
into the build. Hosts must serve `index.html` for client routes such as
`/privacy`; hosts supporting `_redirects` use the included rule.

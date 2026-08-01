# coyo

Personal portfolio — https://coyo.dev

Built with [SvelteKit](https://svelte.dev/docs/kit) (static adapter), Svelte 5, Tailwind CSS 4 and TypeScript.

> The previous Nuxt 2 implementation is kept in [`legacy-nuxt2/`](legacy-nuxt2/) for reference.

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:5173
$ yarn dev

# build static production site into build/
$ yarn build

# preview the production build
$ yarn preview
```

## Deployment

Deployment is currently **manual** (the GitHub Actions auto-deploy is disabled in
`.github/workflows/deploy.yml`). The static output in `build/` is synced to the
server and served behind nginx.

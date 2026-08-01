# coyo

Personal portfolio — https://coyo.dev

Built with [SvelteKit](https://svelte.dev/docs/kit) (static adapter), Svelte 5, Tailwind CSS 4 and TypeScript.

> The previous Nuxt 2 implementation is kept in [`legacy-nuxt2/`](legacy-nuxt2/) for reference.

## Build Setup

```bash
# install dependencies
$ pnpm install

# serve with hot reload at localhost:5173
$ pnpm dev

# build static production site into build/
$ pnpm build

# preview the production build
$ pnpm preview
```

## Deployment

Deployment is **manual** (the GitHub Actions auto-deploy is disabled in
`.github/workflows/deploy.yml`).

```bash
$ pnpm deploy
```

This builds the site, uploads `build/` to the server (`ssh coyo`), swaps it
into `/home/coyo/site` (keeping a timestamped backup), and verifies that
https://coyo.dev/ responds. The files are served by pm2 as the `coyo` user
(`serve /home/coyo/site` on `127.0.0.1:3010`) behind nginx.

To roll back: `ssh coyo 'sudo cp -a /home/coyo/site.bak.<timestamp>/. /home/coyo/site/'`.

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

## Sub-projects hosted on the same server

These were previously on the (now-emptied) S3 bucket and are now built from
their repos and served the same way (pm2 + `serve` as the `coyo` user, behind nginx):

| Host                    | Source repo                                        | pm2 app | Port | Served from            |
| ----------------------- | -------------------------------------------------- | ------- | ---- | ---------------------- |
| https://bpm.coyo.dev        | [coyotte508/bpm](https://github.com/coyotte508/bpm)             | `bpm`       | 3011 | `/home/coyo/bpm`       |
| https://colorizer.coyo.dev  | [coyotte508/colorizer](https://github.com/coyotte508/colorizer) | `colorizer` | 3012 | `/home/coyo/colorizer` |

Both are 2018-era Vue 2 + `vue-cli-service` apps. To rebuild:

```bash
git clone <repo> && cd <repo> && yarn install
# era-correct deps are pinned in each repo's package.json
NODE_OPTIONS=--openssl-legacy-provider npx vue-cli-service build
# then upload dist/ and extract into /home/coyo/<app> as the coyo user
```

`bergere.coyo.dev` is still proxied to the Scaleway bucket (see
`/etc/nginx/sites-enabled/coyo`).

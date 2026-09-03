import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			fallback: "404.html",
		}),
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// Slide decks in /static/talks/ are linked with a trailing slash
				// (e.g. /talks/hooks-everywhere/), which the crawler normalizes
				// to the parent path — not a real 404.
				if (path === "/talks/hooks-everywhere" || path === "/talks/dev-in-ai-era") {
					return;
				}
				throw new Error(`${message} (${path}${referrer ? ` (linked from ${referrer})` : ""})`);
			},
		},
	},
};

export default config;

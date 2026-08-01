import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// The Slidev deck lives in /static/talks/hooks-everywhere/ and links
				// to its parent without a trailing slash — not a real 404.
				if (path === '/talks/hooks-everywhere') {
					return;
				}
				throw new Error(`${message} (${path}${referrer ? ` (linked from ${referrer})` : ''})`);
			}
		}
	}
};

export default config;

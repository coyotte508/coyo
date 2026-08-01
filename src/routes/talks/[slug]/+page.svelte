<script lang="ts">
	import { marked } from 'marked';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const html = $derived(marked.parse(data.markdown, { async: false }) as string);
</script>

<svelte:head>
	<title>{data.talk.title} — coyo</title>
	<meta name="description" content={data.talk.text} />
</svelte:head>

<div class="mx-auto w-full max-w-3xl px-4 py-10">
	<a href="/" class="text-sm text-blue-600 hover:underline dark:text-blue-400">&larr; Back</a>

	<header class="mt-4 mb-8">
		<h1 class="text-3xl font-semibold">{data.talk.title}</h1>
		<p class="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
			{data.talk.years}
			{#if data.talk.source}
				· originally published on
				<a
					href={data.talk.source}
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-600 hover:underline dark:text-blue-400">{data.talk.sourceLabel}</a
				>
			{/if}
		</p>
	</header>

	<article
		class="prose max-w-none text-neutral-800 [&_a]:text-blue-600 [&_a]:underline [&_blockquote]:border-l-4 [&_blockquote]:border-neutral-300 [&_blockquote]:pl-4 [&_blockquote]:italic [&_code]:rounded [&_code]:bg-neutral-200 [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-sm [&_h1]:mt-8 [&_h1]:mb-4 [&_h1]:text-2xl [&_h1]:font-semibold [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-lg [&_h3]:font-semibold [&_li]:mb-1 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mb-4 [&_pre]:mb-4 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:bg-neutral-800 [&_pre]:p-4 [&_pre]:text-sm [&_pre]:text-neutral-100 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 dark:text-neutral-200 dark:[&_a]:text-blue-400 dark:[&_blockquote]:border-neutral-600 dark:[&_code]:bg-neutral-700"
	>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html html}
	</article>
</div>

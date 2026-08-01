<script lang="ts">
	import { marked } from 'marked';
	import type { Project, Technology } from './projects';

	interface Props {
		project: Project;
		minHeight?: number;
	}

	let { project, minHeight }: Props = $props();

	const html = $derived(marked.parse(project.text, { async: false }) as string);

	function formatTech(tech: Technology): string {
		switch (tech) {
			case 'vue':
				return 'VueJS';
			case 'svg':
				return 'SVG';
			case 'node':
				return 'Node.js';
			case 'opengl':
				return 'OpenGL';
			case 'mongo':
				return 'MongoDB';
			case 'pwa':
				return 'PWA';
			case 'graphql':
				return 'GraphQL';
			case 'nest':
				return 'NestJS';
			case 'svelte':
				return 'Svelte';
			default:
				return tech[0].toUpperCase() + tech.slice(1);
		}
	}

	const technologies = $derived(project.technologies?.map(formatTech));
</script>

<svelte:element
	this={project.link ? 'a' : 'div'}
	href={project.link}
	target={project.link ? '_blank' : undefined}
	rel={project.link ? 'noopener noreferrer' : undefined}
	class="group block overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-blue-600"
	style={minHeight ? `min-height: ${minHeight}px` : undefined}
>
	<div class="flex items-center gap-4 px-5 pt-5">
		{#if project.avatar || project.icon}
			<div
				class="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-neutral-50 text-2xl ring-1 ring-neutral-200 dark:bg-neutral-700 dark:ring-neutral-600"
			>
				{#if project.avatar}
					{project.avatar}
				{:else if project.icon}
					<img src={project.icon} alt="" class="h-full w-full object-contain" />
				{/if}
			</div>
		{/if}
		<div class="min-w-0">
			<h2
				class="flex items-center gap-2 text-lg font-semibold leading-snug transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400"
			>
				{project.title}
				{#if project.current}
					<span
						class="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-semibold text-blue-600 ring-1 ring-blue-200 dark:bg-blue-950 dark:text-blue-400 dark:ring-blue-800"
						>Current</span
					>
				{/if}
			</h2>
			<p class="text-sm text-neutral-500 dark:text-neutral-400">{project.years}</p>
		</div>
		{#if project.link}
			<svg
				class="ml-auto h-4 w-4 shrink-0 text-neutral-300 transition-colors group-hover:text-blue-500 dark:text-neutral-600 dark:group-hover:text-blue-400"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				aria-hidden="true"
			>
				<path d="M7 17L17 7M17 7H8M17 7v9" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
		{/if}
	</div>

	{#if project.image}
		<img
			src={project.image}
			alt={project.title}
			class="mt-4 h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
		/>
	{/if}

	<div
		class="prose-sm px-5 py-4 text-neutral-600 [&_a]:font-medium [&_a]:text-blue-600 [&_a]:hover:underline [&_h4]:mt-4 [&_h4]:mb-1.5 [&_h4]:text-xs [&_h4]:font-semibold [&_h4]:uppercase [&_h4]:tracking-wider [&_h4]:text-neutral-500 [&_li]:mb-1 [&_ol]:mb-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:mb-2 [&_ul]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 dark:text-neutral-300 dark:[&_a]:text-blue-400 dark:[&_h4]:text-neutral-400"
	>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html html}
		{#if technologies}
			<div class="mt-3 flex flex-wrap gap-1.5">
				{#each technologies as tech (tech)}
					<span
						class="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-600 ring-1 ring-neutral-200 dark:bg-neutral-700 dark:text-neutral-300 dark:ring-neutral-600"
						>{tech}</span
					>
				{/each}
			</div>
		{/if}
	</div>
</svelte:element>

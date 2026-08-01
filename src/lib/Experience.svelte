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
			default:
				return tech[0].toUpperCase() + tech.slice(1);
		}
	}

	const technologies = $derived(project.technologies?.map(formatTech).join(', '));
</script>

<svelte:element
	this={project.link ? 'a' : 'div'}
	href={project.link}
	target={project.link ? '_blank' : undefined}
	rel={project.link ? 'noopener noreferrer' : undefined}
	class="block overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800"
	style={minHeight ? `min-height: ${minHeight}px` : undefined}
>
	<div class="flex items-center gap-4 px-4 pt-4">
		{#if project.avatar || project.icon}
			<div
				class="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-neutral-50 text-2xl dark:bg-neutral-700"
			>
				{#if project.avatar}
					{project.avatar}
				{:else if project.icon}
					<img src={project.icon} alt="" class="h-full w-full object-contain" />
				{/if}
			</div>
		{/if}
		<div>
			<h2 class="text-xl font-medium leading-snug">{project.title}</h2>
			<p class="text-sm text-neutral-500 dark:text-neutral-400">{project.years}</p>
		</div>
	</div>

	{#if project.image}
		<img src={project.image} alt={project.title} class="mt-4 h-48 w-full object-cover" />
	{/if}

	<div class="prose-sm px-4 py-4 text-neutral-700 [&_p]:mb-2 dark:text-neutral-300">
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html html}
		{#if technologies}
			<p class="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
				Technologies: {technologies}
			</p>
		{/if}
	</div>
</svelte:element>

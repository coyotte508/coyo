<script lang="ts">
	import { marked } from "marked";
	import type { Project } from "./projects";
	import { formatTech } from "./format";

	interface Props {
		project: Project;
		minHeight?: number;
		/** Render as a collapsed chip that expands into the full card. */
		collapsible?: boolean;
	}

	let { project, minHeight, collapsible = false }: Props = $props();

	let expanded = $state(false);

	const html = $derived(marked.parse(project.text, { async: false }) as string);
	const technologies = $derived(project.technologies?.map(formatTech));

	// When collapsible, the whole card is a <button>/<div> (never an <a>); the link lives inside.
	const tag = $derived(collapsible ? "div" : project.link ? "a" : "div");
</script>

{#if collapsible && !expanded}
	<!-- Collapsed chip: icon + title + years + tech pills, expands on click -->
	<button
		type="button"
		onclick={() => (expanded = true)}
		aria-expanded="false"
		class="group flex w-full flex-wrap items-center gap-x-2.5 gap-y-1 overflow-hidden rounded-xl border border-neutral-200 bg-white px-4 py-3 text-left shadow-sm transition-colors hover:border-blue-300 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-blue-600"
	>
		{#if project.avatar || project.icon}
			<span
				class="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full bg-neutral-50 text-base ring-1 ring-neutral-200 dark:bg-neutral-700 dark:ring-neutral-600"
			>
				{#if project.avatar}
					{project.avatar}
				{:else if project.icon}
					<img src={project.icon} alt="" class="h-full w-full object-contain" />
				{/if}
			</span>
		{/if}
		<span
			class="text-sm font-semibold text-neutral-800 transition-colors group-hover:text-blue-600 dark:text-neutral-100 dark:group-hover:text-blue-400"
			>{project.title}</span
		>
		<span class="text-xs text-neutral-400 dark:text-neutral-500">{project.years}</span>
		{#if technologies}
			<span class="flex flex-wrap gap-1">
				{#each technologies as tech (tech)}
					<span
						class="rounded-full bg-neutral-100 px-2 py-px text-[11px] font-medium text-neutral-500 ring-1 ring-neutral-200 dark:bg-neutral-700 dark:text-neutral-300 dark:ring-neutral-600"
						>{tech}</span
					>
				{/each}
			</span>
		{/if}
		<svg
			class="ml-auto h-4 w-4 shrink-0 text-neutral-400"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			aria-hidden="true"><path d="M12 5v14M5 12l7 7 7-7" stroke-linecap="round" stroke-linejoin="round" /></svg
		>
	</button>
{:else}
	<!-- Full card (majors always; minors once expanded) -->
	<svelte:element
		this={tag}
		href={!collapsible && project.link ? project.link : undefined}
		target={!collapsible && project.link ? "_blank" : undefined}
		rel={!collapsible && project.link ? "noopener noreferrer" : undefined}
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
				{#if collapsible}
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Open {project.title}"
						class="ml-auto shrink-0 text-neutral-300 transition-colors hover:text-blue-500 dark:text-neutral-600 dark:hover:text-blue-400"
					>
						<svg
							class="h-4 w-4"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							aria-hidden="true"
							><path d="M7 17L17 7M17 7H8M17 7v9" stroke-linecap="round" stroke-linejoin="round" /></svg
						>
					</a>
				{:else}
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

			{#if collapsible}
				<button
					type="button"
					onclick={() => (expanded = false)}
					class="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
				>
					<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"
						><path d="M12 19V5M5 12l7-7 7 7" stroke-linecap="round" stroke-linejoin="round" /></svg
					>
					Collapse
				</button>
			{/if}
		</div>
	</svelte:element>
{/if}

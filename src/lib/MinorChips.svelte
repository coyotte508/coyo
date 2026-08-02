<script lang="ts">
	import { marked } from "marked";
	import type { Project } from "./projects";
	import { formatTech } from "./format";

	interface Props {
		items: Project[];
	}

	let { items }: Props = $props();

	let openId = $state<string | null>(null);

	function toggle(id: string) {
		openId = openId === id ? null : id;
	}
</script>

<div class="flex flex-col gap-2">
	{#each items as item (item.id)}
		{@const open = openId === item.id}
		<div
			class="overflow-hidden rounded-lg border transition-colors {open
				? 'border-blue-300 bg-blue-50/50 dark:border-blue-700 dark:bg-blue-950/30'
				: 'border-neutral-200 bg-white hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-neutral-600'}"
		>
			<button
				type="button"
				onclick={() => toggle(item.id)}
				aria-expanded={open}
				class="flex w-full flex-wrap items-center gap-x-2.5 gap-y-1 px-3.5 py-2.5 text-left"
			>
				<span class="text-sm font-semibold text-neutral-800 dark:text-neutral-100">{item.title}</span>
				<span class="text-xs text-neutral-400 dark:text-neutral-500">{item.years}</span>
				{#if item.technologies}
					<span class="flex flex-wrap gap-1">
						{#each item.technologies.map(formatTech) as tech (tech)}
							<span
								class="rounded-full bg-neutral-100 px-2 py-px text-[11px] font-medium text-neutral-500 ring-1 ring-neutral-200 dark:bg-neutral-700 dark:text-neutral-300 dark:ring-neutral-600"
								>{tech}</span
							>
						{/each}
					</span>
				{/if}
				<svg
					class="ml-auto h-4 w-4 shrink-0 text-neutral-400 transition-transform duration-200 {open ? 'rotate-180' : ''}"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					aria-hidden="true"
				>
					<path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</button>
			{#if open}
				<div
					class="prose-sm border-t border-neutral-200/70 px-3.5 py-3 text-neutral-600 [&_a]:font-medium [&_a]:text-blue-600 [&_a]:hover:underline [&_p]:mb-2 [&_p:last-child]:mb-0 [&_ul]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 dark:border-neutral-700/70 dark:text-neutral-300 dark:[&_a]:text-blue-400"
				>
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html marked.parse(item.text, { async: false })}
					{#if item.link}
						<a
							href={item.link}
							target="_blank"
							rel="noopener noreferrer"
							class="mt-1 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
						>
							View
							<svg
								class="h-3.5 w-3.5"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								aria-hidden="true"
								><path d="M7 17L17 7M17 7H8M17 7v9" stroke-linecap="round" stroke-linejoin="round" /></svg
							>
						</a>
					{/if}
				</div>
			{/if}
		</div>
	{/each}
</div>

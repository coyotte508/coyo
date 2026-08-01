<script lang="ts">
	import Experience from '$lib/Experience.svelte';
	import { projects, experiences } from '$lib/projects';
	import { talks } from '$lib/talks';

	const talksByDateDesc = [...talks].sort((a, b) => Number(b.years) - Number(a.years));

	const nav = [
		{ href: '#projects', label: 'Projects' },
		{ href: '#experience', label: 'Experience' },
		{ href: '#talks', label: 'Talks' },
		{ href: '#contact', label: 'Contact' }
	];
</script>

<svelte:head>
	<title>Eliott Coyac — Full-stack engineer</title>
</svelte:head>

<!-- Sticky nav -->
<header
	class="sticky top-0 z-20 border-b border-neutral-200/70 bg-white/80 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/80"
>
	<div class="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-3 sm:gap-6">
		<a href="#top" class="flex shrink-0 items-center gap-2 font-semibold tracking-tight">
			<img src="/icons/logo.png" alt="coyo.dev" class="h-6 w-6" />
			<span class="hidden sm:inline">coyo<span class="text-blue-600 dark:text-blue-400">.dev</span></span>
		</a>
		<nav class="ml-auto flex items-center gap-0.5 overflow-x-auto text-sm sm:gap-1">
			{#each nav as item (item.href)}
				<a
					href={item.href}
					class="whitespace-nowrap rounded-md px-2 py-1.5 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 sm:px-3 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white"
					>{item.label}</a
				>
			{/each}
		</nav>
	</div>
</header>

<!-- Hero band -->
<section id="top" class="border-b border-neutral-200 dark:border-neutral-800">
	<div
		class="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:py-24"
	>
		<div class="flex-1">
			<div class="flex items-center gap-5">
				<img
					src="/me.jpeg"
					alt="Eliott Coyac"
					class="h-24 w-24 shrink-0 rounded-full object-cover ring-4 ring-white md:hidden dark:ring-neutral-800"
				/>
				<div>
					<p class="text-sm font-medium uppercase tracking-widest text-blue-600 dark:text-blue-400">
						Full-stack software engineer
					</p>
					<h1 class="mt-1 text-4xl font-bold tracking-tight sm:mt-3 sm:text-5xl">Eliott Coyac</h1>
				</div>
			</div>
      <p class="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
				I design complex projects fully end to end. I am proficient in <b
					class="font-semibold text-neutral-900 dark:text-white">Node.js</b
				> / <b class="font-semibold text-neutral-900 dark:text-white">Typescript</b> / <b
					class="font-semibold text-neutral-900 dark:text-white">Svelte</b
				>, and formerly
				<b class="font-semibold text-neutral-900 dark:text-white">C++</b>.
			</p>
      <p class="mt-4 max-w-xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
    		Taking full advantage of
				<b class="font-semibold text-neutral-900 dark:text-white">Kimi K3</b> and other open-weight LLMs for old & new projects. I like sovereign platforms — ones that own their IT and are not vendor-locked-in to hyperscalers.
			</p>
			<p class="mt-4 max-w-xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
				Right now I'm helping scale
				<a
					href="https://huggingface.co"
					target="_blank"
					rel="noopener noreferrer"
					class="font-semibold text-neutral-900 underline decoration-blue-400 decoration-2 underline-offset-2 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
					>Hugging Face</a
				>.
			</p>
			<p class="mt-4 text-neutral-600 md:hidden dark:text-neutral-300">
				I also <a href="#talks" class="font-medium text-blue-600 hover:underline dark:text-blue-400">write and talk</a>
				about what I build.
			</p>
			<div id="contact" class="mt-8 flex flex-wrap gap-3 scroll-mt-24">
				<a
					href="mailto:contact@coyo.dev"
					class="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow"
				>
					<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
						<path
							d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"
						/>
					</svg>
					Email
				</a>
				<a
					href="https://github.com/coyotte508"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-neutral-700 hover:shadow dark:bg-neutral-700 dark:hover:bg-neutral-600"
				>
					<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
						<path
							d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
						/>
					</svg>
					GitHub
				</a>
				<a
					href="https://stackoverflow.com/users/835629/coyotte508"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-orange-600 hover:shadow"
				>
					<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
						<path
							d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092L6.785 12.743zM4.665 15.53v4.93h14.695v-4.93h-2.067v2.862H6.732V15.53H4.665zm2.067 1.345v3.348h10.33v-3.348H6.732z"
						/>
					</svg>
					Stack Overflow
				</a>
				<a
					href="#talks"
					class="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-4 py-2.5 text-sm font-medium text-neutral-700 transition-all hover:border-blue-400 hover:text-blue-600 dark:border-neutral-600 dark:text-neutral-200 dark:hover:border-blue-500 dark:hover:text-blue-400"
				>
					Talks &amp; Articles ↓
				</a>
			</div>
		</div>
		<div class="hidden shrink-0 md:block md:self-center">
			<img
				src="/me.jpeg"
				alt="Eliott Coyac"
				class="h-40 w-40 rounded-full object-cover ring-4 ring-white md:h-56 md:w-56 dark:ring-neutral-800"
			/>
		</div>
	</div>
</section>

<main class="mx-auto w-full max-w-6xl px-4">
	<!-- Projects + Experience -->
	<div class="grid gap-16 py-16 lg:grid-cols-5">
		<section id="projects" class="scroll-mt-24 lg:col-span-3">
			<h2 class="text-2xl font-bold tracking-tight">Projects</h2>
			<div class="mt-6 space-y-6">
				{#each projects as project (project.id)}
					<Experience {project} />
				{/each}
			</div>
			<a
				href="#talks"
				class="mt-8 flex items-center justify-between rounded-xl border border-dashed border-neutral-300 px-5 py-4 text-sm font-medium text-neutral-600 transition-colors hover:border-blue-400 hover:text-blue-600 dark:border-neutral-600 dark:text-neutral-300 dark:hover:border-blue-500 dark:hover:text-blue-400"
			>
				<span>I also write articles and give talks about this stuff</span>
				<span class="text-blue-600 dark:text-blue-400">See them →</span>
			</a>
		</section>
		<section id="experience" class="scroll-mt-24 lg:col-span-2">
			<h2 class="text-2xl font-bold tracking-tight">Experience</h2>
			<div class="mt-6 space-y-5">
				{#each experiences as experience (experience.id)}
					<Experience project={experience} />
				{/each}
			</div>
		</section>
	</div>

	<!-- Talks & Articles -->
	<section id="talks" class="scroll-mt-24 border-t border-neutral-200 py-16 dark:border-neutral-800">
		<h2 class="text-2xl font-bold tracking-tight">Talks &amp; Articles</h2>
		<div class="mt-6 grid gap-5 sm:grid-cols-2">
			{#each talksByDateDesc as talk (talk.id)}
				{@const primary = talk.source ?? talk.href}
				<div
					class="flex flex-col rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-blue-600"
				>
					<div class="flex items-baseline justify-between gap-4">
						<h3 class="font-semibold leading-snug">
							<a
								href={primary}
								target={primary.startsWith('http') ? '_blank' : undefined}
								rel={primary.startsWith('http') ? 'noopener noreferrer' : undefined}
								class="transition-colors hover:text-blue-600 dark:hover:text-blue-400">{talk.title}</a
							>
						</h3>
						<span class="shrink-0 text-sm text-neutral-400 dark:text-neutral-500">{talk.years}</span>
					</div>
					<p class="mt-2 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
						{talk.text}
					</p>
					<div class="mt-4 flex items-center gap-x-4 gap-y-1 text-sm">
						<a
							href={primary}
							target={primary.startsWith('http') ? '_blank' : undefined}
							rel={primary.startsWith('http') ? 'noopener noreferrer' : undefined}
							class="font-medium text-blue-600 hover:underline dark:text-blue-400"
						>
							{talk.kind === 'slides' ? 'View slides' : 'Read article'}
							{#if talk.source}
								on {talk.sourceLabel}{/if} →
						</a>
						{#if talk.source}
							<a
								href={talk.href}
								class="text-neutral-500 hover:underline dark:text-neutral-400"
								title="Archived copy on this site"
							>
								Archived copy
							</a>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</section>
</main>

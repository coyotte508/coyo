<script lang="ts">
	import Experience from '$lib/Experience.svelte';
	import { projects, experiences } from '$lib/projects';
</script>

<svelte:head>
	<title>coyo</title>
</svelte:head>

<div class="mx-auto w-full max-w-6xl px-4">
	<div class="flex min-h-[70vh] items-center justify-center py-10">
		<div
			class="w-full max-w-2xl rounded-lg border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-700 dark:bg-neutral-800"
		>
			<div>
				<img src="/icons/logo.png" alt="logo" class="float-left mr-4 mb-4 h-20" />
				<div class="space-y-3">
					<p>
						I have a lot of experience designing complex projects from end to end, and handling
						every separate aspect: server configuration, database, deployment, frontend. Nowadays
						I specialize towards SaaS web software with <b>Node.js</b>, but I have ample
						<b>C++</b> / <b>Qt</b> experience as well.
					</p>
					<p>I like well designed code, up-to-date framework, new technologies and clean git repos.</p>
					<p>I am currently interested in <b>Rust</b> and <b>Svelte</b></p>
				</div>
				<div class="clear-both"></div>
			</div>

			<div class="mt-6 flex flex-wrap gap-3">
				<a
					href="mailto:contact@coyo.dev"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
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
					class="inline-flex items-center gap-2 rounded-md bg-neutral-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-900 dark:bg-neutral-700 dark:hover:bg-neutral-600"
				>
					<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
						<path
							d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
						/>
					</svg>
					Github
				</a>
				<a
					href="https://stackoverflow.com/users/835629/coyotte508"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-600"
				>
					<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
						<path
							d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092L6.785 12.743zM4.665 15.53v4.93h14.695v-4.93h-2.067v2.862H6.732V15.53H4.665zm2.067 1.345v3.348h10.33v-3.348H6.732z"
						/>
					</svg>
					Stackoverflow
				</a>
			</div>
		</div>
	</div>

	<div class="grid gap-10 pb-16 md:grid-cols-2">
		<section>
			<h1 class="text-center text-3xl font-semibold">Projects</h1>
			<div class="mt-6 space-y-6">
				{#each projects as project (project.id)}
					<Experience {project} minHeight={180} />
				{/each}
			</div>
		</section>
		<section>
			<h1 class="mb-3 text-center text-3xl font-semibold">Experiences</h1>
			<div class="mt-6 space-y-6">
				{#each experiences as experience (experience.id)}
					<Experience project={experience} />
				{/each}
			</div>
		</section>
	</div>
</div>

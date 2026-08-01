<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col">
	<main class="flex-1">
		{@render children()}
	</main>
	<footer class="border-t border-neutral-200 py-4 text-center text-sm text-neutral-500">
		&copy; {new Date().getFullYear()} Eliott Coyac
	</footer>
</div>

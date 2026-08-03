<script lang="ts">
	import { marked } from "marked";

	const markdown = `**Effective date: August 2, 2025**

Cutting Fabric ("the app") is a tool that helps upholsterers and DIYers work out how much fabric to buy and how to lay out each piece. This policy explains, in plain terms, what the app does with your information.

## The short version

**The app collects nothing.** It runs entirely on your device. Your projects, measurements, and settings never leave your device unless you choose to export or share them yourself.

## Data the app stores

Everything the app saves stays **locally on your device**:

- **Projects and measurements** — the pieces, dimensions, fabric widths, and cutting plans you enter.
- **Settings** — preferences such as units and language.

This data is stored using the operating system's standard app storage. It is **not** transmitted to us, to any server, or to any third party. We have no access to it.

## Data you choose to share

The app lets you export or share your own work — for example saving a cutting plan as a file, or sending an image of a layout. This happens **only when you tap a share/export button**, and the file goes wherever *you* send it (another app, email, cloud drive, etc.). That transfer is between you and the destination you pick; it does not come to us.

## What the app does NOT do

The app does **not**:

- collect, store, or transmit personal data to us or anyone else
- use analytics or tracking
- show advertising
- use third-party SDKs that collect data (no analytics, ads, or crash-reporting SDKs)
- require an account or sign-in
- access your contacts, camera, photos, location, or other device data
- make network requests — it works fully offline

## Internet permission

The app does not need an internet connection to function and makes no requests of its own. Any connectivity that occurs is only the result of an action you take yourself (such as sharing a file through another app).

## Children's privacy

Because the app collects no data from anyone, it collects no data from children.

## Changes to this policy

If the app's behavior ever changes in a way that affects privacy, this policy will be updated and the "Effective date" above revised. Since the app currently collects nothing, any future introduction of data collection would be reflected here before or at the time it ships.

## Contact

If you have questions about this policy, you can reach the developer via the contact information on [coyo.dev](https://coyo.dev/).`;

	const html = marked.parse(markdown, { async: false }) as string;
</script>

<svelte:head>
	<title>Cutting Fabric — Privacy Policy: coyo</title>
	<meta
		name="description"
		content="Privacy policy for the Cutting Fabric app. The app collects no data: everything stays on your device."
	/>
</svelte:head>

<div class="mx-auto w-full max-w-3xl px-4 py-10">
	<header class="mb-8">
		<h1 class="text-3xl font-semibold">Cutting Fabric — Privacy Policy</h1>
		<p class="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
			The app collects no data. Everything stays on your device.
		</p>
	</header>

	<article
		class="prose max-w-none text-neutral-800 [&_a]:text-blue-600 [&_a]:underline [&_blockquote]:border-l-4 [&_blockquote]:border-neutral-300 [&_blockquote]:pl-4 [&_blockquote]:italic [&_code]:rounded [&_code]:bg-neutral-200 [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-sm [&_h1]:mt-8 [&_h1]:mb-4 [&_h1]:text-2xl [&_h1]:font-semibold [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-lg [&_h3]:font-semibold [&_li]:mb-1 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mb-4 [&_pre]:mb-4 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:bg-neutral-800 [&_pre]:p-4 [&_pre]:text-sm [&_pre]:text-neutral-100 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 dark:text-neutral-200 dark:[&_a]:text-blue-400 dark:[&_blockquote]:border-neutral-600 dark:[&_code]:bg-neutral-700"
	>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html html}
	</article>
</div>

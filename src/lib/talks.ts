export interface Talk {
	id: string;
	title: string;
	years: string;
	/** Local copy served from this site (backup) */
	href: string;
	/** Original publication URL, if any */
	source?: string;
	sourceLabel?: string;
	/** Backup of the source content kept in the repo (src/lib/talks/) */
	backup?: string;
	text: string;
	kind: "slides" | "article";
}

export const talks: Talk[] = [
	{
		id: "hooks-everywhere",
		title: "Hooks Everywhere",
		years: "2023",
		href: "/talks/hooks-everywhere/",
		text: "Slides (in French) about SvelteKit hooks: server hooks, universal hooks and client hooks — what they are and how to use them.",
		kind: "slides",
	},
	{
		id: "oss",
		title: "L'Open Source",
		years: "2020",
		href: "/talks/oss.pdf",
		text: "Slides (in French) about open source: why and how to contribute. Talk given while at Zenika.",
		kind: "slides",
	},
	{
		id: "sveltekit-stores",
		title: "Per-user global stores in SvelteKit",
		years: "2022",
		href: "/talks/sveltekit-stores/",
		source: "https://dev.to/coyotte508/per-user-global-stores-in-sveltekit-k94",
		sourceLabel: "dev.to",
		backup: "sveltekit-stores.md",
		text: "Global stores are shared between all users during SSR. A pattern for per-user global stores in SvelteKit using a root layout load and context.",
		kind: "article",
	},
	{
		id: "moon-bot",
		title: "Building Moon Bot: a Slack-native coding agent backed by Hugging Face Buckets",
		years: "2026",
		href: "/talks/moon-bot/",
		source: "https://huggingface.co/blog/huggingface/moon-bot",
		sourceLabel: "huggingface.co",
		backup: "moon-bot.md",
		text: "How we built an always-on engineering assistant that lives in Slack, remembers everything, and uses Hugging Face infrastructure to do it.",
		kind: "article",
	},
];

export type Technology =
	| "vue"
	| "mongo"
	| "c++"
	| "qt"
	| "opengl"
	| "node"
	| "angular"
	| "svg"
	| "electron"
	| "pwa"
	| "SFML"
	| "react"
	| "nest"
	| "graphql"
	| "SQL"
	| "svelte"
	| "flutter"
	| "android"
	| "dart"
	| "agents";

export interface Project {
	id: string;
	technologies?: Technology[];
	years: string;
	/** First year of the project/job: used to sort entries chronologically. */
	startYear: number;
	title: string;
	image?: string;
	link?: string;
	text: string;
	avatar?: string;
	icon?: string;
	current?: boolean;
	/** Less prominent entries: rendered as compact expandable chips instead of full cards. */
	minor?: boolean;
}

export const projects: Project[] = sortByStartYearDesc([
	{
		id: "mongoku",
		technologies: ["svelte", "node", "mongo"],
		years: "2025",
		startYear: 2025,
		title: "Mongoku",
		link: "//github.com/huggingface/Mongoku",
		image: "/mongoku.png",
		text: "The web-scale GUI for MongoDB. It also has OAuth authentication, sharding & schema-auditing insights, aggregation pipeline support, user/role management, relational graphs, and a lot of query and deployment polish. Used internally at <a href='https://huggingface.co'>Hugging Face</a>.",
	},
	{
		id: "bergere",
		years: "2022-now",
		startYear: 2022,
		title: "Bergère Enchantée",
		link: "https://bergereenchantee.fr/",
		image: "/bergere.webp",
		icon: "/icons/bergere.png",
		technologies: ["svelte", "node", "mongo"],
		text: "The online presence for my wife's upholstery business. A full storefront ([source](https://github.com/coyotte508/bergere-enchantee)): catalog and made-to-measure armchairs, fabrics & finishes, pricing, an appointment/contact flow. See also the companion [Cutting Fabric app](#project-cutting-fabric) for upholsterers.",
	},
	{
		id: "cutting-fabric",
		years: "2023-now",
		startYear: 2023,
		title: "Cutting Fabric",
		link: "https://play.google.com/store/apps/details?id=com.coyotte508.cutting_fabric",
		image: "/cutting-fabric.webp",
		icon: "/icons/cutting-fabric.png",
		technologies: ["flutter", "dart", "android"],
		text: `A Flutter app for upholsterers that computes optimal fabric cutting plans. Enter the pieces to cut and it packs them into the fabric with a bottom-left heuristic, minimizing waste. Instant, offline and precise. Available on the [Play Store](https://play.google.com/store/apps/details?id=com.coyotte508.cutting_fabric). Born from [Bergère Enchantée](#project-bergere).`,
	},
	{
		id: "bgs",
		technologies: ["vue", "mongo", "node", "svg"],
		years: "2018-2020",
		startYear: 2018,
		title: "Boardgamers",
		link: "//boardgamers.space",
		image: "/bgs.png",
		text: `A platform to play boardgames online. Boardgames can be added, updated and removed dynamically. Features include game creation, spectating, ELO rankings, a variety of options and integration with a NodeBB forum.

There are currently four boardgames on the platform: Gaia Project, Powergrid, Container and 6nimmt.`,
		avatar: "🌌",
	},
	{
		id: "bpm",
		technologies: ["vue", "pwa"],
		years: "2018",
		startYear: 2018,
		minor: true,
		title: "Pulsometer",
		link: "//bpm.coyo.dev",
		image: "/bpm.png",
		icon: "/icons/bpm.png",
		text: "A simple web application to estimate BPM (beats per minute). It is a progressive web app, so it can be installed on iOS and Android.",
	},
	{
		id: "colorizer",
		title: "Colorizer POC",
		technologies: ["vue", "svg"],
		years: "2018",
		startYear: 2018,
		minor: true,
		link: "//colorizer.coyo.dev",
		image: "/colorizer.png",
		text: "A simple web app images are uploaded on a grid and can be colored at will. Uses SVG filters and matrixes to achieve the effect.",
	},
	{
		id: "odrive",
		technologies: ["electron", "node"],
		years: "2017",
		startYear: 2017,
		title: "Open Drive",
		link: "//github.com/liberodark/ODrive",
		icon: "/icons/odrive.png",
		text: "A cross platform Google Drive client, originally made due to the lack of alternatives on Linux. It monitors local file changes to sync with the remote Google Drive folder.",
	},
	{
		id: "locks",
		technologies: ["node", "mongo"],
		years: "2017",
		startYear: 2017,
		minor: true,
		title: "mongo-locks",
		link: "//github.com/coyotte508/mongo-locks",
		icon: "/icons/mongodb.png",
		text: "A Node.JS module to lock a resource using MongoDB as a mutex. Useful when deploying a NodeJS application as a cloud, to prevent race conditions.",
	},
	{
		id: "limiter",
		technologies: ["node", "mongo"],
		years: "2017",
		startYear: 2017,
		minor: true,
		title: "mongo-limiter",
		link: "//github.com/coyotte508/mongo-limiter",
		icon: "/icons/mongodb.png",
		text: "A Node.JS module to rate limit actions per IP or user. Useful to prevent spam, and collect basic analytics.",
	},
	{
		id: "po-craft",
		technologies: ["c++", "opengl", "SFML"],
		years: "2014",
		startYear: 2014,
		link: "//github.com/coyotte508/po-craft",
		text: "A simple OpenGL program with a ball rolling on generated terrain, with friction and gravity",
		image: "/po-craft.png",
		title: "Monkeyball POC",
	},
	{
		id: "pokemon",
		technologies: ["qt", "c++"],
		years: "2009-2014",
		startYear: 2009,
		link: "//github.com/po-devs/pokemon-online",
		text: "A Pokémon battle simulator, fully made in Qt and then a web client and android application were added. Had over 1000 concurrent players for a few years.",
		title: "Pokémon Online",
	},
]);

export const experiences: Project[] = sortByEndYearDesc([
	{
		id: "huggingface",
		technologies: ["node", "react", "mongo", "SQL", "agents"],
		years: "2022 - now",
		startYear: 2022,
		title: "Hugging Face",
		link: "//huggingface.co",
		avatar: "🤗",
		current: true,
		text: `Hugging Face is the platform where the ML community uploads hundreds of thousands of Models, Datasets and Spaces (demos). I help evolve the platform so it scales and meets its growing challenges.

#### Scaling the platform

- Switched from a FS-based git backend to Gitaly
- Moved a lot of "source of truth" into the DB: list of all uploaded S3 storage files, repo configuration
- Made Hugging Face an OAuth identity provider, added fine-grained tokens
- Various security and performance improvements
- Made the backend scale horizontally: removed the reliance on "Process 0", made long operations instantaneous (renaming a model) and resilient to pod restarts (uploading thousands of GB of files at once)
- And much more: webhooks support, a notification center, one-click email-unsubscribing, implementing the LFS protocol from the browser, DX & CI improvements...

#### Offshoot projects

- [Moonbot](https://huggingface.co/blog/huggingface/moon-bot), a Slack/GitHub agent linking everything together at the company
- [Hugging Chat](https://github.com/huggingface/chat-ui/), an open-source ChatGPT alternative: see it on [hf.co/chat](https://hf.co/chat)
- [huggingface.js](https://github.com/huggingface/huggingface.js), a collection of libraries to interact with the platform
- The [documentation instrumentation](https://github.com/huggingface/doc-builder/) for the Hugging Face ecosystem: see the results on [hf.co/docs](https://hf.co/docs)`,
	},
	{
		id: "bebop",
		technologies: ["svelte", "node", "mongo"],
		years: "2023-2025",
		startYear: 2023,
		title: "be-BOP",
		link: "//github.com/be-BOP-io-SA/be-BOP",
		icon: "/icons/bebop.png",
		text: `Core developer on an open-source, crypto-native monetization platform for communities and creators: e-commerce, point-of-sale, subscriptions, crowdfunding, ticketing, donations and pay-what-you-want under one roof.

- Native Bitcoin & Lightning payments: trustless on-chain setup (BIP84 xpub, multisig) plus Lightning via LND or phoenixd — no payment processor or private key needed on the server
- Peer-to-peer protocols: Nostr integration for notifications and discovery
- Built with SvelteKit and MongoDB; self-hosted and sovereign, no third-party dependency`,
	},
	{
		id: "treckea",
		technologies: ["node", "react", "nest", "graphql", "SQL"],
		years: "2020-2021",
		startYear: 2020,
		minor: true,
		title: "Treckea",
		text: "Work on a secure platform to make buying and building houses more efficient, by automating a lot of the communication between the different parties.",
		icon: "/icons/arkea.png",
	},
	{
		id: "hachette",
		technologies: ["c++", "qt"],
		years: "2020",
		startYear: 2020,
		minor: true,
		title: "Hachette",
		text: "Work on a software application for Hachette Livre.",
		icon: "/icons/hachette.png",
	},
	{
		id: "capfi",
		technologies: ["vue", "node", "mongo"],
		years: "2019-2020",
		startYear: 2019,
		image: "/capfi.png",
		icon: "/icons/capfi.png",
		title: "Cap Financials",
		link: "//capfinancials.com/",
		text: "Architecture design and implementation of a SaaS application to aggregate all public data as well as private data from multiple sources on French companies, for risk analysis, marketing, portfolio management purposes.",
	},
	{
		id: "teractys",
		technologies: ["angular", "node"],
		years: "2017 - 2020",
		startYear: 2017,
		title: "Teractys",
		text: "Work on several SaaS applications for professional photographers",
		link: "//teractys.fr",
		icon: "/icons/teractys.png",
	},
	{
		id: "stoneraise",
		years: "2017",
		startYear: 2017,
		minor: true,
		title: "Stoneraise",
		link: "//stoneraise.com",
		technologies: ["angular", "node"],
		text: "Work on a crowdfunding website for investment in real estate",
		image: "/stoneraise.png",
	},
	{
		id: "imt",
		years: "2014",
		startYear: 2014,
		title: "Engineering Degree",
		link: "//www.imt.fr/",
		text: `Engineering diploma obtained! 🚀

Geared toward IT and Computer science.
`,
		icon: "/icons/IMT.jpg",
	},
	{
		id: "asobo",
		years: "2014",
		startYear: 2014,
		title: "Internship at Asobo Studio",
		link: "//asobostudio.com",
		icon: "/icons/asobo.png",
		text: "Implementation of the network engine layer for PS4 and Xbox One. Other work on Monopoly Plus",
		technologies: ["c++"],
		image: "/monopoly.png",
	},
]);

/** Sort entries by start year, most recent first. Ties keep their authored order. */
function sortByStartYearDesc(entries: Project[]): Project[] {
	return entries
		.map((entry, index) => ({ entry, index }))
		.sort((a, b) => b.entry.startYear - a.entry.startYear || a.index - b.index)
		.map(({ entry }) => entry);
}

/** Last 4-digit year in a `years` string ("2020-2021" -> 2021); "now"/current counts as the current year. */
function endYear(entry: Project): number {
	if (entry.current || /now/i.test(entry.years)) return new Date().getFullYear() + 1;
	const matches = entry.years.match(/\d{4}/g);
	return matches ? Number(matches[matches.length - 1]) : entry.startYear;
}

/** Sort experiences by end year, most recent first (current roles first). Ties keep their authored order. */
function sortByEndYearDesc(entries: Project[]): Project[] {
	return entries
		.map((entry, index) => ({ entry, index }))
		.sort((a, b) => endYear(b.entry) - endYear(a.entry) || a.index - b.index)
		.map(({ entry }) => entry);
}

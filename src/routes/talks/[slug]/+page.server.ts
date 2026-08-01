import { error } from "@sveltejs/kit";
import { readFile } from "node:fs/promises";
import { talks } from "$lib/talks";
import type { EntryGenerator, PageServerLoad } from "./$types";

export const entries: EntryGenerator = () => {
	return talks.filter((t) => t.backup).map((t) => ({ slug: t.id }));
};

export const load: PageServerLoad = async ({ params }) => {
	const talk = talks.find((t) => t.id === params.slug);
	if (!talk?.backup) {
		error(404, "Not found");
	}

	const markdown = await readFile(`src/lib/talks/${talk.backup}`, "utf8");

	return {
		talk,
		markdown,
	};
};

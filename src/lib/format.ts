import type { Technology } from "./projects";

export function formatTech(tech: Technology): string {
	switch (tech) {
		case "vue":
			return "VueJS";
		case "svg":
			return "SVG";
		case "node":
			return "Node.js";
		case "opengl":
			return "OpenGL";
		case "mongo":
			return "MongoDB";
		case "pwa":
			return "PWA";
		case "graphql":
			return "GraphQL";
		case "nest":
			return "NestJS";
		case "svelte":
			return "Svelte";
		case "flutter":
			return "Flutter";
		case "agents":
			return "Agents";
		default:
			return tech[0].toUpperCase() + tech.slice(1);
	}
}

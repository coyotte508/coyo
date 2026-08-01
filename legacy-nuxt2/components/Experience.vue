<template>
  <v-card :href="project.link" target="blank">
    <v-list-item>
      <v-list-item-avatar v-if="project.avatar || project.icon" color="white">
        <template v-if="project.avatar">
          {{ project.avatar }}
        </template>
        <img v-else :src="project.icon" />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">
          {{ project.title }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ project.years }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-img v-if="project.image" :src="project.image" height="194" />
    <v-card-text>
      <p v-html="marked(project.text)" />
      <template v-if="project.technologies">
        Technologies:
        {{ project.technologies.map((tech) => formatTech(tech)).join(", ") }}
      </template>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import marked from "marked";
import { Project, Technology } from "../data/projects";

@Component
export default class Experience extends Vue {
  @Prop()
  project!: Project;

  formatTech(tech: Technology) {
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
      default:
        return tech[0].toUpperCase() + tech.slice(1);
    }
  }

  marked = marked;
}
</script>

<template>
  <v-container fluid>
    <v-row justify="center" style="margin-top: 180px; margin-bottom: 150px;">
      <v-col cols="12" md="8">
        <v-card>
          <v-card-text>
            <p>
              I have a lot of experience designing complex projects from end to end, and handling every separate aspect: server configuration, database, deployment, frontend. Nowadays I specialize towards SaaS web software with Node.js, but I have ample C++ / Qt experience as well.
            </p>
            <p class="mb-0">
              I like well designed code, up-to-date framework, new technologies and clean git repos. I can help you update your codebase to current standards, design a project from the ground up, or give you a helping hand in a bind.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <h1 class="text-center">
          Projects
        </h1>

        <Experience v-for="project in projects" :key="project.id" :project="project" min-height="180" class="mt-6" />
      </v-col>
      <v-col cols="12" md="6">
        <h1 class="text-center mb-3">
          Experiences
        </h1>

        <Experience v-for="project in works" :key="project.id" :project="project" class="mt-6" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Experience from '../components/Experience.vue';
import { projects, experiences } from '~/data/projects';

@Component({
  components: {
    Experience
  }
})
export default class Index extends Vue {
  projects = projects;
  works = experiences;
}
</script>

<template>
  <v-container fluid>
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

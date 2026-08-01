<template>
  <v-container fluid>
    <v-row justify="center" align-content="center" style="min-height: 80vh">
      <v-col cols="12" md="8" lg="6">
        <v-card>
          <v-card-text class="pb-2">
            <img
              style="float: left; height: 80px"
              src="/icons/logo.png"
              class="mr-4 mb-4"
            />
            <div>
              <p>
                I have a lot of experience designing complex projects from end
                to end, and handling every separate aspect: server
                configuration, database, deployment, frontend. Nowadays I
                specialize towards SaaS web software with <b>Node.js</b>, but I
                have ample <b>C++</b> / <b>Qt</b> experience as well.
              </p>
              <p>
                I like well designed code, up-to-date framework, new
                technologies and clean git repos.
              </p>
              <p class="mb-0 pb-0">
                I am currently interested in <b>Rust</b> and <b>Svelte</b>
              </p>
            </div>
            <div style="clear: both" />
          </v-card-text>
          <v-card-actions>
            <v-btn href="mailto:contact@coyo.dev" target="blank">
              <v-icon class="mr-2"> mdi-email </v-icon>
              Email
            </v-btn>
            <v-btn href="//github.com/coyotte508" target="blank">
              <v-icon class="mr-2"> mdi-github </v-icon>
              Github
            </v-btn>
            <v-btn
              href="https://stackoverflow.com/users/835629/coyotte508"
              target="blank"
            >
              <v-icon class="mr-2"> mdi-stack-overflow </v-icon>
              Stackoverflow
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <h1 class="text-center">Projects</h1>

        <Experience
          v-for="project in projects"
          :key="project.id"
          :project="project"
          min-height="180"
          class="mt-6"
        />
      </v-col>
      <v-col cols="12" md="6">
        <h1 class="text-center mb-3">Experiences</h1>

        <Experience
          v-for="project in works"
          :key="project.id"
          :project="project"
          class="mt-6"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Experience from "../components/Experience.vue";
import { projects, experiences } from "~/data/projects";

@Component({
  components: {
    Experience,
  },
})
export default class Index extends Vue {
  projects = projects;
  works = experiences;
}
</script>

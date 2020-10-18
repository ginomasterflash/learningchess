<template>
  <v-app-bar :clipped-left="clipped" app>
    <v-app-bar-nav-icon
      v-if="type !== 'permanent'"
      @click.stop="model = !model"
    ></v-app-bar-nav-icon>
    <v-toolbar-title>Vuetify</v-toolbar-title>
  </v-app-bar>
</template>

<script lang="ts">
import { mapState } from "vuex";
import Vue from "vue";

export default Vue.extend({
  name: "TopBar",
  data: () => ({
    clipped: false,
    permanent: false,
    type: "",
    model: ""
  }),
  computed: {
    ...mapState({
      settings: (state: any) => state.application.settings
    })
  },
  watch: {
    "settings.clipped"(value) {
      this.clipped = value;
    },
    "settings.model"(value) {
      this.model = value;
    },
    "settings.permanent"(value) {
      this.permanent = value;
    },
    "settings.type"(value) {
      this.type = value;
    }
  },
  created() {
    if (this.settings) {
      this.clipped = this.settings.clipped;
      this.permanent = this.settings.permanent;
      this.model = this.settings.model;
      this.type = this.settings.type;
    }
  }
});
</script>

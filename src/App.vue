<template>
  <v-app id="sandbox">
    <NavMenu />
    <top-bar />
    <router-view />
    <app-footer />
  </v-app>
</template>

<script lang="ts">
import { mapActions, mapState } from "vuex";
import appFooter from "@/components/shared/Footer.vue";
import NavMenu from "@/components/shared/NavMenu.vue";
import topBar from "@/components/shared/TopBar.vue";

import Vue from "vue";
export default Vue.extend({
  name: "App",
  components: { appFooter, NavMenu, topBar },
  computed: {
    ...mapState({
      settings: (state: any) => state.application.layout
    })
  },
  watch: {
    "settings.darkMode"(value) {
      /* eslint-disable no-debugger */
      // debugger;
      this.$vuetify.theme.dark = value;
    }
  },
  mounted() {
    if (location.hash) {
      location.replace(location.hash.replace("#", ""));
    }
  },
  created() {
    if (this.settings && this.settings.darkMode) {
      this.$vuetify.theme.dark = this.settings.darkMode;
    }
  }
});
</script>

<template>
  <v-app id="sandbox">
    <NavMenu />
    <top-bar />
    <router-view />
    <app-footer />
  </v-app>
</template>
<script>
import appFooter from "@/components/shared/Footer";
import NavMenu from "@/components/shared/NavMenu.vue";
import topBar from "@/components/shared/TopBar";
import { mapState } from "vuex";
export default {
  name: "App",
  components: { appFooter, NavMenu, topBar },
  mounted() {
    if (location.hash) {
      location.replace(location.hash.replace("#", ""));
    }
  },
  watch: {
    "layout.darkMode"(value) {
      /* eslint-disable no-debugger */
      // debugger;
      this.$vuetify.theme.dark = value;
    }
  },
  created() {
    if (this.layout && this.layout.darkMode) {
      this.$vuetify.theme.dark = this.layout.darkMode;
    }
  },
  computed: {
    ...mapState({
      layout: store => store.layout
    })
  }
};
</script>

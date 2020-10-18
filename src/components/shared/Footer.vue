<template>
  <v-footer :inset="inset" app>
    <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
  </v-footer>
</template>

<script lang="ts">
import { mapState } from "vuex";
import Vue from "vue";
export default Vue.extend({
  name: "Footer",
  data: () => ({
    inset: false
  }),
  computed: {
    ...mapState({
      settings: (state: any) => state.application.layout
    })
  },
  watch: {
    "settings.inset"(value) {
      this.inset = value;
    }
  },
  created() {
    this.inset = this.settings.inset;
  }
});
</script>

<style></style>

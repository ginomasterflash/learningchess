<template>
  <v-footer :inset="inset" app>
    <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
  </v-footer>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Footer",
  data: () => ({
    inset: false
  }),
  watch: {
    "layout.inset"(value) {
      this.inset = value;
    }
  },
  computed: {
    ...mapState({
      layout: store => store.application
    })
  },
  created() {
    this.inset = this.layout.inset;
  }
};
</script>

<style></style>

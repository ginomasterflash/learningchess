<template>
  <v-app-bar :clipped-left="clipped" app>
    <v-app-bar-nav-icon
      v-if="type !== 'permanent'"
      @click.stop="model = !model"
    ></v-app-bar-nav-icon>
    <v-toolbar-title>Vuetify</v-toolbar-title>
  </v-app-bar>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "TopBar",
  data: () => ({
    clipped: false,
    permanent: false,
    type: "",
    model: ""
  }),
  watch: {
    "layout.clipped"(value) {
      this.clipped = value;
    },
    "layout.model"(value) {
      this.model = value;
    },
    "layout.permanent"(value) {
      this.permanent = value;
    },
    "layout.type"(value) {
      this.type = value;
    }
  },
  computed: {
    ...mapState({
      layout: store => store.layout
    })
  },
  created() {
    this.clipped = this.layout.clipped;
    this.permanent = this.layout.permanent;
    this.model = this.layout.model;
    this.type = this.layout.type;
  }
};
</script>

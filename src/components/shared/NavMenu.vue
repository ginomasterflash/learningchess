<template>
  <v-navigation-drawer
    v-model="model"
    :clipped="clipped"
    :floating="floating"
    :mini-variant="mini"
    :permanent="type === 'permanent'"
    :temporary="type === 'temporary'"
    app
    overflow
  >
    <v-list dense>
      <v-list-item
        link
        v-for="item in navigationMenu"
        :key="item.id"
        dense
        router
        :to="item.route"
      >
        <v-list-item-action>
          <i :class="item.icon"></i>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link>
        <v-list-item-action>
          <i :class="$vuetify.icons.values.user"></i>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Profilo</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link>
        <v-list-item-action>
          <span>
            <i :class="$vuetify.icons.values.settings"></i>
          </span>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Impostazioni</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { mapState } from "vuex";
import { IApplicationModel } from "@/models/ApplicationModel";
import Vue from "vue";
export default Vue.extend({
  name: "NavMenu",
  data() {
    return {
      clipped: false,
      floating: false,
      mini: false,
      model: "",
      type: ""
    };
  },
  methods: {},
  computed: {
    ...mapState({
      layout: (state: IApplicationModel) => state,
      navigationMenu: state => (state as IApplicationModel).navigationMenu
    })
  },
  watch: {
    // "layout.clipped"(value) {
    //   this.clipped = value;
    // },
    // "layout.floating"(value) {
    //   this.floating = value;
    // },
    // "layout.mini"(value) {
    //   this.mini = value;
    // },
    // "layout.model"(value) {
    //   this.model = value;
    // }
  },
  created() {
    if (this.layout) {
      this.mini = this.layout.mini;
      this.floating = this.layout.floating;
      this.clipped = this.layout.clipped;
      this.model = this.layout.model;
    }
    this.$store.dispatch("application/setNavigationMenu");
    console.log(this.navigationMenu);
  }
});
</script>

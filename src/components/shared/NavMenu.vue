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
        v-for="item in navigationMenu"
        :key="item.id"
        link
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
import { mapActions, mapState } from "vuex";
import { IApplicationModel } from "@/models/ApplicationModel";
// import { NavigationMenuModel } from "@/models/NavigationMenuModel";
import { SET_NAVIGATION_MENU } from "@/store/actions";
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
  computed: {
    ...mapState({
      navigationMenu: (state: any) => state.application.navigationMenu,
      settings: (state: any) => state.application.settings
    })
  },
  watch: {
    "settings.clipped"(value) {
      this.clipped = value;
    },
    "settings.floating"(value) {
      this.floating = value;
    },
    "settings.mini"(value) {
      this.mini = value;
    },
    "settings.model"(value) {
      this.model = value;
    }
  },
  created() {
    if (this.settings) {
      this.mini = this.settings.mini;
      this.floating = this.settings.floating;
      this.clipped = this.settings.clipped;
      this.model = this.settings.model;
    }
    this[SET_NAVIGATION_MENU]();
  },
  methods: {
    ...mapActions([SET_NAVIGATION_MENU])
  }
});
</script>

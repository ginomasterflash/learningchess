<template>
  <v-app id="sandbox">
    <v-main>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="10">
            <v-card>
              <v-card-text>
                <v-row>
                  <v-col cols="12" md="6">
                    <span>Scheme</span>
                    <v-switch
                      v-model="darkMode"
                      primary
                      label="Dark"
                    ></v-switch>
                  </v-col>
                  <v-col cols="12" md="6">
                    <span>Drawer:</span>
                    <v-radio-group v-model="type" column>
                      <v-radio
                        v-for="drawer in drawers"
                        :key="drawer"
                        :label="drawer"
                        :value="drawer.toLowerCase()"
                        primary
                      ></v-radio>
                    </v-radio-group>
                    <v-switch
                      v-model="clipped"
                      label="Clipped"
                      primary
                    ></v-switch>
                    <v-switch
                      v-model="floating"
                      label="Floating"
                      primary
                    ></v-switch>
                    <v-switch v-model="mini" label="Mini" primary></v-switch>
                  </v-col>
                  <v-col cols="12" md="6">
                    <span>Footer</span>
                    <v-switch v-model="inset" label="Inset" primary></v-switch>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text>Cancel</v-btn>
                <v-btn text color="primary">Submit</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { mapActions, mapState } from "vuex";
import {
  SET_FLOATING,
  SET_MINI_DRAWER_MENU,
  SET_FOOTER_INSET,
  SET_TYPE_TOOLBAR,
  SET_CLIPPED_TOOLBAR,
  SET_DARKMODE,
  SET_NAVIGATION_MENU,
  SAVE_SETTINGS
} from "@/store/actions";

import Vue from "vue";
export default Vue.extend({
  name: "Settings",
  data: () => ({
    drawers: ["Default (no property)", "Permanent", "Temporary"],
    darkMode: false,
    clipped: false,
    type: "",
    inset: false,
    floating: false,
    mini: false,
    model: ""
  }),
  watch: {
    darkMode(value: boolean) {
      this.$store.dispatch(SET_DARKMODE, value);
      // this[SET_DARKMODE](value);
    },
    clipped(value: boolean) {
      this.$store.dispatch(SET_CLIPPED_TOOLBAR, value);
      // this[SET_CLIPPED_TOOLBAR](value);
    },
    type(value: string) {
      this.$store.dispatch(SET_TYPE_TOOLBAR, value);
      // this[SET_TYPE_TOOLBAR](value);
    },
    inset(value: boolean) {
      this.$store.dispatch(SET_FOOTER_INSET, value);
      // this[SET_FOOTER_INSET](value);
    },
    mini(value: boolean) {
      this.$store.dispatch(SET_MINI_DRAWER_MENU, value);
      // this[SET_MINI_DRAWER_MENU](value);
    },
    floating(value: boolean) {
      this.$store.dispatch(SET_FLOATING, value);
      // this[SET_FLOATING](value);
    }
  },
  // computed: {
  //   ...mapState({
  //     settings: store => store.app
  //   })
  // },
  // created() {
  //   this.model = this.settings;
  // },
  methods: {
    ...mapActions([
      SET_FLOATING,
      SET_MINI_DRAWER_MENU,
      SET_FOOTER_INSET,
      SET_TYPE_TOOLBAR,
      SET_CLIPPED_TOOLBAR,
      SET_DARKMODE,
      SET_NAVIGATION_MENU,
      SAVE_SETTINGS
    ]),
    saveSettings() {
      let settings = {};
      this.$store.dispatch(SAVE_SETTINGS, settings);

      // this[SAVE_SETTINGS](settings);
    }
  }
});
</script>

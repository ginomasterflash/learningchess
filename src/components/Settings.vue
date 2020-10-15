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

<script>
export default {
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
    darkMode(value) {
      // eslint-disable-next-line no-debugger
      debugger;
      this.$store.dispatch("application/setDarkMode", value);
    },
    clipped(value) {
      this.$store.dispatch("application/setClippedToolbar", value);
    },
    type(value) {
      this.$store.dispatch("application/setTypeToolbar", value);
    },
    inset(value) {
      this.$store.dispatch("application/setFooterInset", value);
    },
    mini(value) {
      this.$store.dispatch("application/setMiniDrawerMenu", value);
    },
    floating(value) {
      this.$store.dispatch("application/setFloating", value);
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
  actions: {
    saveSettings() {
      this.$store.dispatch("application/saveSetting", this.settings);
    }
  }
};
</script>

import * as MUT from "./mutation-types";
import { ActionTree } from "vuex";
import { RootState } from "../types";
import { NavigationMenuState } from "./types";
import { SettingsService } from "@/common/api.service";
import { LayoutModel } from "@/models/LayoutModel";
import { NavigationMenuModel } from "@/models/NavigationMenuModel";
import Vue from "vue";

export const actions: ActionTree<NavigationMenuState, RootState> = {
  setNavigationMenu() {
    debugger;
    var navigationMenu: Array<NavigationMenuState> = [
      {
        id: 1,
        icon: Vue.prototype.$vuetify.icons.values.homePage,
        title: "Home",
        route: "Home"
      },
      {
        id: 2,
        icon: Vue.prototype.$vuetify.icons.values.user,
        title: "Profilo",
        route: "Profile"
      },
      {
        id: 3,
        icon: Vue.prototype.$vuetify.icons.values.settings,
        title: "Impostazioni",
        route: "Settings"
      }
    ];
    return navigationMenu;
  }
};

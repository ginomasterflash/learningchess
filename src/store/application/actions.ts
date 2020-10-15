import * as MUT from "./mutation-types";
import { ActionTree } from "vuex";
import { RootState } from "../types";
import { LayoutState } from "./types";
import { SettingsService } from "@/common/api.service";
import { IApplicationModel } from "@/models/ApplicationModel";
import { LayoutModel } from "@/models/LayoutModel";

import { NavigationMenuModel } from "@/models/NavigationMenuModel";

import Vue from "vue";

export const actions: ActionTree<IApplicationModel, RootState> = {
  saveSetting({ commit }, model: LayoutModel): any {
    commit(MUT.SETTINGS_LOAD_START);
    return SettingsService.save(model);
    // .then(response => {
    //   // context.commit(MUT.CLUB_SET_INFO, response.data);
    //   commit(MUT.CLUB_SET_CLUB_NAME, response.data.clubName);
    //   commit(MUT.CLUB_SET_CLUB_SCORE, response.data.clubScore);
    //   return response.data;
    // })
    // .finally(() => commit(MUT.SETTINGS_LOAD_END));
  },
  setClippedToolbar({ commit }, value: boolean) {
    commit(MUT.SETTINGS_SET_CLIPPED_TOOLBAR, value);
  },
  setDarkMode({ commit }, value: boolean) {
    commit(MUT.SETTINGS_SET_DARK_MODE, value);
  },
  setTypeToolbar({ commit }, value: string) {
    commit(MUT.SETTINGS_SET_TYPE, value);
  },
  setFooterInset({ commit }, value: boolean) {
    commit(MUT.SETTINGS_SET_FOOTER_INSET, value);
  },
  setMiniDrawerMenu({ commit }, value: boolean) {
    commit(MUT.SETTINGS_SET_MINI_DRAWER_MENU, value);
  },
  setFloating({ commit }, value: boolean) {
    commit(MUT.SETTINGS_SET_FLOATING, value);
  },
  setNavigationMenu() {
    /* eslint-disable no-debugger */
    // debugger;
    const navigationMenu: Array<NavigationMenuModel> = [
      {
        icon: "fas fa-home",
        title: "Home",
        route: "Home"
      },
      {
        icon: "fas fa-user",
        title: "Profilo",
        route: "Profile"
      },
      {
        icon: "fas fa-cog",
        title: "Impostazioni",
        route: "Settings"
      }
    ];
    return navigationMenu;
  }
};

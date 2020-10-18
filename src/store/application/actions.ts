import * as MUT from "./mutation-types";
import { ActionTree } from "vuex";
import { RootState } from "../types";
import { LayoutState } from "./types";
import { SettingsService } from "@/common/api.service";
import { IApplicationModel } from "@/models/ApplicationModel";
import { LayoutModel } from "@/models/LayoutModel";

import { NavigationMenuModel } from "@/models/NavigationMenuModel";
import {
  SET_NAVIGATION_MENU,
  SET_FLOATING,
  SET_MINI_DRAWER_MENU,
  SET_FOOTER_INSET,
  SET_TYPE_TOOLBAR,
  SET_DARKMODE,
  SET_CLIPPED_TOOLBAR,
  SAVE_SETTINGS
} from "@/store/actions";
import Vue from "vue";

export const actions: ActionTree<IApplicationModel, RootState> = {
  [SAVE_SETTINGS]({ commit }, model: LayoutModel): any {
    commit(MUT.APPLICATION_LOAD_START);
    return SettingsService.save(model);
    // .then(response => {
    //   // context.commit(MUT.CLUB_SET_INFO, response.data);
    //   commit(MUT.CLUB_SET_CLUB_NAME, response.data.clubName);
    //   commit(MUT.CLUB_SET_CLUB_SCORE, response.data.clubScore);
    //   return response.data;
    // })
    // .finally(() => commit(MUT.SETTINGS_LOAD_END));
  },
  [SET_CLIPPED_TOOLBAR]({ commit }, value: boolean) {
    commit(MUT.APPLICATION_SET_CLIPPED_TOOLBAR, value);
  },
  [SET_DARKMODE]({ commit }, value: boolean) {
    commit(MUT.APPLICATION_SET_DARK_MODE, value);
  },
  [SET_TYPE_TOOLBAR]({ commit }, value: string) {
    commit(MUT.APPLICATION_SET_TYPE, value);
  },
  [SET_FOOTER_INSET]({ commit }, value: boolean) {
    commit(MUT.APPLICATION_SET_FOOTER_INSET, value);
  },
  [SET_MINI_DRAWER_MENU]({ commit }, value: boolean) {
    commit(MUT.APPLICATION_SET_MINI_DRAWER_MENU, value);
  },
  [SET_FLOATING]({ commit }, value: boolean) {
    commit(MUT.APPLICATION_SET_FLOATING, value);
  },
  [SET_NAVIGATION_MENU]({ commit }) {
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
    // return navigationMenu;
    commit(MUT.APPLICATION_SET_NAVIGATION_MENU, navigationMenu);
  }
};

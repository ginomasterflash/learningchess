import * as MUT from "./mutation-types";
import { ActionTree } from "vuex";
import { RootState } from "../types";
import { LayoutState } from "./types";
import { SettingsService } from "@/common/api.service";
import { LayoutModel } from "@/models/LayoutModel";

export const actions: ActionTree<LayoutState, RootState> = {
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
  }
};

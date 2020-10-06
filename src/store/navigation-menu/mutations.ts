import * as MUT from "./mutation-types";
// import { LayoutState } from "./types";
import { MutationTree } from "vuex";
import { LayoutModel } from "@/models/LayoutModel";

export const mutations: MutationTree<LayoutModel> = {
  [MUT.SETTINGS_SET_DARK_MODE](state, value) {
    state.darkMode = value;
  },
  [MUT.SETTINGS_SET_CLIPPED_TOOLBAR](state, value) {
    state.clipped = value;
  },
  [MUT.SETTINGS_SET_TYPE](state, value) {
    state.type = value;
  },
  [MUT.SETTINGS_SET_FOOTER_INSET](state, value) {
    state.inset = value;
  },
  [MUT.SETTINGS_SET_FLOATING](state, value) {
    state.floating = value;
  },
  [MUT.SETTINGS_SET_MINI_DRAWER_MENU](state, value) {
    state.mini = value;
  }
};

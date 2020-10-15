import * as MUT from "./mutation-types";
// import { LayoutState } from "./types";
import { MutationTree } from "vuex";
import { IApplicationModel } from "@/models/ApplicationModel";

export const mutations: MutationTree<IApplicationModel> = {
  [MUT.SETTINGS_SET_DARK_MODE](state: IApplicationModel, value: boolean) {
    state.layout.darkMode = value;
  },
  [MUT.SETTINGS_SET_CLIPPED_TOOLBAR](state: IApplicationModel, value: boolean) {
    state.layout.clipped = value;
  },
  [MUT.SETTINGS_SET_TYPE](state: IApplicationModel, value: string) {
    state.layout.type = value;
  },
  [MUT.SETTINGS_SET_FOOTER_INSET](state: IApplicationModel, value: boolean) {
    state.layout.inset = value;
  },
  [MUT.SETTINGS_SET_FLOATING](state: IApplicationModel, value: boolean) {
    state.layout.floating = value;
  },
  [MUT.SETTINGS_SET_MINI_DRAWER_MENU](state: IApplicationModel, value: boolean) {
    state.layout.mini = value;
  }
};

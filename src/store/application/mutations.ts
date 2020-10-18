import * as MUT from "./mutation-types";
// import { LayoutState } from "./types";
import { MutationTree } from "vuex";
import { IApplicationModel } from "@/models/ApplicationModel";
import { NavigationMenuModel } from "@/models/NavigationMenuModel";

export const mutations: MutationTree<IApplicationModel> = {
  [MUT.APPLICATION_SET_DARK_MODE](state: IApplicationModel, value: boolean) {
    state.layout.darkMode = value;
  },
  [MUT.APPLICATION_SET_CLIPPED_TOOLBAR](
    state: IApplicationModel,
    value: boolean
  ) {
    state.layout.clipped = value;
  },
  [MUT.APPLICATION_SET_TYPE](state: IApplicationModel, value: string) {
    state.layout.type = value;
  },
  [MUT.APPLICATION_SET_FOOTER_INSET](state: IApplicationModel, value: boolean) {
    state.layout.inset = value;
  },
  [MUT.APPLICATION_SET_FLOATING](state: IApplicationModel, value: boolean) {
    state.layout.floating = value;
  },
  [MUT.APPLICATION_SET_MINI_DRAWER_MENU](
    state: IApplicationModel,
    value: boolean
  ) {
    state.layout.mini = value;
  },
  [MUT.APPLICATION_SET_NAVIGATION_MENU](
    state: IApplicationModel,
    value: Array<NavigationMenuModel>
  ) {
    state.navigationMenu = value;
  }
};

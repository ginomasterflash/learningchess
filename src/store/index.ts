import Vue from "vue";
import Vuex from "vuex";
import { RootState } from "./types";

import { layout } from "./layout/index";
import { navigationMenu } from "./navigation-menu/index";

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  state: {
    version: "1.0.0" // a simple property
  },
  mutations: {},
  actions: {},
  modules: { layout, navigationMenu }
});

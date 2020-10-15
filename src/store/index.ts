import Vue from "vue";
import Vuex from "vuex";
import { RootState } from "./types";

import { application } from "./application/index";

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
// export default new Vuex.Store({
  state: {
    version: "1.0.0" // a simple property
  },
  modules: { application }
});

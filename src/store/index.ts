import Vue from "vue";
import Vuex from "vuex";

import { application } from "./application/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { application }
});

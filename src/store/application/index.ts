import { Module } from "vuex";

import { actions } from "./actions";
import { IApplicationModel } from "@/models/ApplicationModel";
import { RootState } from "../types";
import { mutations } from "./mutations";

import { applicationState } from "./state";

const namespaced = true;
export const application: Module<IApplicationModel, RootState> = {
  // namespaced,
  state: applicationState,
  // // getters,
  actions,
  mutations
};

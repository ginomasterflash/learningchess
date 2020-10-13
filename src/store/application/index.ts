import { Module } from "vuex";

import { actions } from "./actions";
import { LayoutModel } from "@/models/LayoutModel";
import { RootState } from "../types";
import { mutations } from "./mutations";

export const state: LayoutModel = {
  darkMode: true,
  clipped: true,
  model: "",
  type: "permanent",
  mini: false,
  floating: false,
  inset: false
};

const namespaced = true;
export const application: Module<LayoutModel, RootState> = {
  namespaced,
  state,
  // getters,
  actions,
  mutations
};

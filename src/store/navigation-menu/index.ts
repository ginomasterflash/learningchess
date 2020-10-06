import { Module } from "vuex";

// import { actions } from "./actions";
import { NavigationMenuState } from "./types";
import { RootState } from "../types";
import { state } from "./state";

// export const state: Array<NavigationMenuState> = [
//   { icon: "", title: "", route: "" }
// ];
// const state: Array<NavigationMenuState> = [
//   // { icon: `${$vuetify.icons.values.homePage}`, title: "Home", route: "Home" }
//   { icon: `homePage`, title: "Home", route: "Home" },
//   { icon: `user`, title: "Profilo", route: "Profile" },
//   { icon: `settings`, title: "Impostazioni", route: "Settings" }
// ];
const namespaced = true;
export const navigationMenu: Module<Array<NavigationMenuState>, RootState> = {
  namespaced,
  state
  // getters,
  // actions
  // mutations
};

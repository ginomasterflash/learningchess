import { LayoutModel } from "@/models/LayoutModel";
export interface LayoutState {
  model: string;
  type: string;
  mini: Boolean;
  darkMode: Boolean;
  floating: Boolean;
  clipped: Boolean;
  inset: Boolean;
  //primaryDrawer: PrimaryDrawer;
}

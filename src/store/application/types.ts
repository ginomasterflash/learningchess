import { LayoutModel } from "@/models/LayoutModel";
import { NavigationMenuModel } from "@/models/NavigationMenuModel";
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
export interface NavigationMenuState {
  id: number;
  icon: string;
  title: string;
  route: string;
}

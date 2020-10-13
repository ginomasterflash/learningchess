import { LayoutModel } from "@/models/LayoutModel";
import { NavigationMenuModel } from "@/models/NavigationMenuModel";

export interface IApplicationModel {
  layout: LayoutModel;
  navigationMenu: NavigationMenuModel;
}

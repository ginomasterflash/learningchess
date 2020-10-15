import { IApplicationModel } from "@/models/ApplicationModel";
import { LayoutModel } from "@/models/LayoutModel";
import { NavigationMenuModel } from "@/models/NavigationMenuModel";

const layout: LayoutModel = {
  darkMode: true,
  model: "",
  type: "",
  mini: true,
  clipped: true,
  inset: true,
  floating: true
};
const navigationMenu = [
  {
    icon: "",
    title: "",
    route: ""
  }
];
export const applicationState: IApplicationModel = {
  layout: layout,
  navigationMenu: navigationMenu
};
// export default applicationState;

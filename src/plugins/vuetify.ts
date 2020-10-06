import "@fortawesome/fontawesome-free/css/all.css"; // Ensure you are using css-loader
import Vue from "vue";
import Vuetify from "vuetify/lib";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "fa",
    values: {
      camera: "fas fa-camera",
      cancel: "fas fa-ban",
      homePage: "fas fa-home",
      menu: "fas fa-bars",
      user: "fas fa-user",
      settings: "fas fa-cog"
    }
  }
});

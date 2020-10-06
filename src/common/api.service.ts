import Vue from "vue";
import { LayoutModel } from "@/models/LayoutModel";

const ApiService = {
  setHeader(token: string) {
    // tslint:disable-next-line:no-string-literal
    Vue.axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  },

  setPropertyHeader(activePropertyID: number) {
    Vue.axios.defaults.headers.common["CDS-PROP"] = activePropertyID;
  },

  setOrganizationHeader(activeOrganizationID: number) {
    Vue.axios.defaults.headers.common["CDS-ORG"] = activeOrganizationID;
  },

  query(resource: string, params: object) {
    return Vue.axios.get(resource, params);
  },

  get(resource: string, slug = "") {
    return Vue.axios.get(`api/${resource}/${slug}`);
  },

  post(resource: string, params: object) {
    return Vue.axios.post(`api/${resource}`, params);
  },

  update(resource: string, slug: string, params: object) {
    return Vue.axios.put(`${resource}/${slug}`, params);
  },

  put(resource: string, params: object) {
    return Vue.axios.put(`${resource}`, params);
  },

  patch(resource: string, slug: string, params: object) {
    return Vue.axios.patch(`${resource}/${slug}`, params);
  },

  delete(resource: string) {
    return Vue.axios.delete(resource);
  }
};

export const SettingsService = {
  save(model: LayoutModel) {
    return model;
  }
};

export default ApiService;

import { SET_APP_CONFIG } from "../types";

/*
 * @Author: cola
 * @LastEditors: cola
 * @Description:
 * @Date: 2022-03-20 21:04:54
 * @LastEditTime: 2022-03-20 21:35:17
 */
export default {
  state: {
    config: {},
  },
  mutations: {
    [SET_APP_CONFIG](state, config) {
      state.config = config;
    },
  },
  actions: {
    setAppConfig({ commit }, config) {
      commit(SET_APP_CONFIG, config);
    },
  },
  getters: {
    config: (state) => state.config,
  },
};

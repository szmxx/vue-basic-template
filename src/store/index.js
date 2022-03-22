/*
 * @Author: weicong
 * @LastEditors: weicong
 * @Description:
 * @Date: 2022-03-20 10:44:14
 * @LastEditTime: 2022-03-20 15:35:52
 */
import Vue from "vue";
import Vuex from "vuex";
import modules from "./modules";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: modules,
});

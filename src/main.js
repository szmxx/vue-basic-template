/*
 * @Author: cola
 * @LastEditors: cola
 * @Description:
 * @Date: 2022-03-20 10:44:14
 * @LastEditTime: 2022-03-22 23:20:04
 */
import "core-js/stable";
import "regenerator-runtime/runtime";

import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import initAppConfig from "@/initAppConfig";
import { Notification } from "element-ui";
import "element-ui/lib/theme-chalk/icon.css";
import "element-ui/lib/theme-chalk/notification.css";
import "@/register";
Vue.config.productionTip = false;

(async () => {
  try {
    await initAppConfig();
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  } catch (error) {
    Notification({
      title: "系统错误",
      message: "加载配置文件失败！",
      type: "error",
    });
    console.error(error);
  }
})();

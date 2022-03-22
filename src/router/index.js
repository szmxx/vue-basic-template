/*
 * @Author: weicong
 * @LastEditors: cola
 * @Description:
 * @Date: 2022-03-20 10:44:14
 * @LastEditTime: 2022-03-23 00:22:23
 */
import Vue from "vue";
import VueRouter from "vue-router";
import RouteList from "./routes";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Root",
    redirect: "/home",
  },
  ...RouteList,
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes,
});

export default router;

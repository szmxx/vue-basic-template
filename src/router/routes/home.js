/*
 * @Author: cola
 * @LastEditors: cola
 * @Description:
 * @Date: 2022-03-20 20:17:15
 * @LastEditTime: 2022-03-20 21:03:59
 */
export default {
  name: "Home",
  path: "/home",
  redirect: "/home/index",
  children: [
    {
      name: "HomeIndex",
      path: "index",
      component: () =>
        import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
    },
  ],
};

/*
 * @Author: cola
 * @LastEditors: cola
 * @Description:
 * @Date: 2022-03-20 20:57:50
 * @LastEditTime: 2022-03-20 20:58:52
 */
export default {
  name: "About",
  path: "/about",
  redirect: "/about/index",
  children: [
    {
      name: "AboutIndex",
      path: "index",
      component: () => import(/* webpackChunkName: "about" */ "@/views/About"),
    },
  ],
};

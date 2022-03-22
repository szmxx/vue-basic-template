/*
 * @Author: weicong
 * @LastEditors: cola
 * @Description:
 * @Date: 2022-03-20 10:47:11
 * @LastEditTime: 2022-03-20 20:38:51
 */
import Vue from "vue";
const files = require.context(".", true, /\.vue$/);
files.keys().forEach((path) => {
  if (path !== "./index.js") {
    let name = path.replace(/^\.\/(.*\/)?/, "").replace(/\.vue$/, "");
    const component = files(path).default || files(path);
    if (name === "index" && component.name) {
      name = component.name;
    }
    if (/^Global/.test(name)) {
      Vue.component(name, component);
    }
  }
});

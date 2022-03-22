/*
 * @Author: cola
 * @LastEditors: cola
 * @Description:
 * @Date: 2022-03-20 21:04:08
 * @LastEditTime: 2022-03-20 23:09:31
 */
import Vue from "vue";
const files = require.context(".", false, /\.js$/);
files.keys().forEach((path) => {
  if (path !== "./index.js") {
    const name = path.replace(/^\.\/(.*\/)?/, "").replace(/\.js$/, "");
    const module = files(path).default || files(path);
    Vue.directive(name, module);
  }
});

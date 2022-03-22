/*
 * @Author: weicong
 * @LastEditors: cola
 * @Description:
 * @Date: 2022-03-20 15:33:34
 * @LastEditTime: 2022-03-20 21:04:45
 */

const files = require.context(".", false, /\.js$/);
const modules = {};
files.keys().forEach((path) => {
  if (path !== "./index.js") {
    const name = path.replace(/^\.\/(.*\/)?/, "").replace(/\.js$/, "");
    modules[name] = files(path).default || files(path);
    modules[name].namespaced = true;
  }
});
export default modules;

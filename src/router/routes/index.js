/*
 * @Author: weicong
 * @LastEditors: cola
 * @Description:
 * @Date: 2022-03-20 15:29:40
 * @LastEditTime: 2022-03-20 20:40:25
 */
import Layout from "@/Layout";

const files = require.context(".", false, /\.js$/);
const modules = {};
files.keys().forEach((path) => {
  if (path !== "./index.js") {
    const name = path.replace(/^\.\/(.*\/)?/, "").replace(/\.js$/, "");
    modules[name] = files(path).default || files(path);
    modules[name].component = Layout;
  }
});

export default Object.values(modules).flat(1);

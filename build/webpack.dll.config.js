/*
 * @Author: cola
 * @LastEditors: cola
 * @Date: 2022-03-23 00:37:23
 * @LastEditTime: 2022-03-23 00:41:34
 * @Description:
 */
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: {
    vendor: ["vue/dist/vue.runtime.esm.js", "vuex", "vue-router"],
    ui: ["element-ui"],
    util: ["lodash"],
    lib: ["axios"],
  },
  output: {
    filename: "[name].dll.js",
    path: path.resolve(__dirname, "dll"),
    library: "dll_[name]",
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        // origin : https://stackoverflow.com/questions/55989693/warnings-is-not-a-supported-option-error-from-uglifyjs
        // lower Uglifyjs version use compress:{ pass } replace this
        uglifyOptions: {
          warnings: false,
          drop_console: true,
          drop_debugger: true,
        },
        parallel: true,
        sourceMap: true,
      }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      name: "dll_[name]",
      path: path.join(__dirname, "dll", "[name].manifest.json"),
      context: __dirname,
    }),
  ],
};

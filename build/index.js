/*
 * @Author: cola
 * @LastEditors: cola
 * @Date: 2022-03-23 00:49:18
 * @LastEditTime: 2022-03-23 00:53:16
 * @Description:
 */
const webpack = require("webpack");
const path = require("path");
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin");
module.exports = (config) => {
  config.plugin("vendorDll").use(webpack.DllReferencePlugin, [
    {
      context: __dirname,
      manifest: require("./dll/vendor.manifest.json"),
    },
  ]);

  config.plugin("utilDll").use(webpack.DllReferencePlugin, [
    {
      context: __dirname,
      manifest: require("./dll/util.manifest.json"),
    },
  ]);
  config.plugin("libDll").use(webpack.DllReferencePlugin, [
    {
      context: __dirname,
      manifest: require("./dll/lib.manifest.json"),
    },
  ]);
  config.plugin("uiDll").use(webpack.DllReferencePlugin, [
    {
      context: __dirname,
      manifest: require("./dll/ui.manifest.json"),
    },
  ]);

  config
    .plugin("addAssetHtml")
    .use(AddAssetHtmlPlugin, [
      [
        {
          filepath: require.resolve(
            path.resolve(__dirname, "dll/vendor.dll.js")
          ),
          outputPath: "dll",
          publicPath: "dll",
        },
        {
          filepath: require.resolve(path.resolve(__dirname, "dll/util.dll.js")),
          outputPath: "dll",
          publicPath: "dll",
        },
        {
          filepath: require.resolve(path.resolve(__dirname, "dll/lib.dll.js")),
          outputPath: "dll",
          publicPath: "dll",
        },
        {
          filepath: require.resolve(path.resolve(__dirname, "dll/ui.dll.js")),
          outputPath: "dll",
          publicPath: "dll",
        },
      ],
    ])
    .after("html");
};

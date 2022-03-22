/*
 * @Author: Lauxb
 * @Date: 2021-02-22 16:46:56
 * @LastEditTime: 2022-03-23 00:52:50
 * @LastEditors: cola
 * @Description:
 */
const CompressionPlugin = require("compression-webpack-plugin");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");
const path = require("path");
const productionGzipExtensions = ["js", "css"];
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementUiResolver } = require("unplugin-vue-components/resolvers");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin({
  outputFormat: "human",
});
const dllReference = require("./build");
const basePath = process.env.VUE_APP_BASE_PATH;
const port = process.env.VUE_APP_DEV_PORT;
module.exports = {
  publicPath: basePath,
  productionSourceMap: false,
  devServer: {
    port,
    open: true,
    historyApiFallback: true,
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/style/index.scss";`,
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin("SpriteLoaderPlugin").use(SpriteLoaderPlugin, [
      {
        plainSprite: true,
      },
    ]);
    if (process.env.NODE_ENV === "production") {
      config.plugin("CompressionPlugin").use(CompressionPlugin, [
        {
          filename: "[path].gz[query]",
          algorithm: "gzip",
          test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
          threshold: 10240,
          minRatio: 0.8,
        },
      ]);
      config.plugin("BundleAnalyzerPlugin").use(BundleAnalyzerPlugin);
      dllReference(config);
    }
  },
  configureWebpack: smp.wrap({
    plugins: [
      AutoImport({
        resolvers: [ElementUiResolver()],
      }),
      Components({
        resolvers: [ElementUiResolver()],
      }),
      new HardSourceWebpackPlugin(),
    ],
    optimization: {
      splitChunks: {
        chunks: "async",
        // 大于30KB才单独分离成chunk
        minSize: 30000,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        name: true,
        cacheGroups: {
          vendor: {
            chunks: "all",
            test: /node_modules/,
            name: "vendor",
            minChunks: 1,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 100,
          },
          common: {
            chunks: "all",
            test: /[\\/]src[\\/]js[\\/]/,
            name: "common",
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 60,
          },
          styles: {
            name: "styles",
            test: /\.(sa|sc|c)ss$/,
            chunks: "all",
            enforce: true,
          },
          runtimeChunk: {
            name: "manifest",
          },
        },
      },
    },
  }),
  pluginOptions: {
    svgSpriteLoader: {
      dir: path.resolve(__dirname, "src/svg/icons"),
      test: /\.svg$/,
      options: {
        symbolId: "icon-[name]",
        extract: true,
        outputPath: "static/svg/",
        publicPath: "static/svg/",
        spriteFilename: "sprite.svg",
      },
    },
  },
};

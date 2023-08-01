const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = merge(common, {
  devtool: "eval-cheap-module-source-map", // development环境
  devServer: {
    historyApiFallback: true,
    // publicPath: "/dist/",
    open: false,
    compress: true,
    hot: true,
    port: 8080,
  },
  plugins: [new BundleAnalyzerPlugin()],
  mode: "development",
});

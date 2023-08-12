const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// const TerserPlugin = require("terser-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
  devtool: "hidden-source-map",
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  optimization: {
    usedExports: true,
    splitChunks: { chunks: "all" }, // 开启切片，此时输出文件名应该配置成动态的文件名
  },
  plugins: [
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin({ analyzerMode: "static", analyzerPort: "auto" }),
    new MiniCssExtractPlugin({
      filename: "[name]-[contenthash:8].css",
      chunkFilename: "[id].css",
    }),
    new CssMinimizerPlugin(), // 这个也可以去掉，直接用webpack自带的terser压缩插件
    // new TerserPlugin(), // 可以不用配置，因为mode是production时，它会主动使用terser插件压缩的
  ],
  mode: "production",
});

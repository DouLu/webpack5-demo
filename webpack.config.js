const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWbepackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");
console.log("process env-----", process.env.NODE_ENV);

module.exports = {
  // 基础目录，不配置则默认项目的根目录。绝对路径
  context: path.resolve(__dirname, "src"),
  //   相对路径
  entry: "./a.js",
  output: {
    // __dirname 当前文件的路径，node的一个全局变量
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    // filename: "[fullhash]-bundle.js",
    // 动态资源名 - 仅限asset/resource和asset两种type
    // assetModuleFilename: "static/[hash:8][ext][query]",
  },
  devtool: "eval-cheap-module-source-map", // development环境
  // devtool: "hidden-source-map", // production环境
  devServer: {
    historyApiFallback: true,
    publicPath: "/dist/",
    open: true,
    compress: true,
    hot: true,
    port: 8089,
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: ["style-loader", "css-loader"],
      // },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          // "post-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env"] },
        },
      },
      //   {
      //     test: /\.(png|jpg)$/,
      //     use: "file-loader",
      //   },
      // {
      //   test: /\.(png|jpg)$/,
      //   use: {
      //     loader: "url-loader",
      //     options: {
      //       limit: 1024 * 20,
      //       name: "[name]-[contenthash:8].[ext]",
      //       publicPath: "./dist/",
      //     },
      //   },
      // },
      {
        test: /\.(png|jpg)/,
        type: "asset/resource",
        // 动态资源名 - 仅限asset/resource和asset两种type
        generator: {
          filename: "static/[hash:8][ext][query]",
        },
      },
    ],
  },
  plugins: [
    // 如果"development"不用json stringify转换，插件会将其看成是一个变量名
    new webpack.DefinePlugin({ NODE_ENV: JSON.stringify("development") }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/img/"),
          to: path.resolve(__dirname, "dist/image/"),
        },
      ],
    }),
    new HtmlWbepackPlugin({
      title: "webpack-demo",
      // filename:'home.html',
      template: path.resolve(__dirname, "src/index.ejs"),
    }),
    // 已废弃
    // autoprefixer({
    //   browsers: ["chrome>=18"],
    // }),
    new MiniCssExtractPlugin({
      filename: "[name]-[contenthash:8].css",
      chunkFilename: "[id].css",
    }),
  ],
  mode: "none",
};

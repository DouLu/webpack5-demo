const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWbepackPlugin = require("html-webpack-plugin");
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
  devtool: "hidden-source-map", // production环境
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
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
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
      // template: path.resolve(__dirname, "src/index.ejs"),
    }),
  ],
  mode: "none",
};

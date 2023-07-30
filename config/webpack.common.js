const path = require("path");
const HtmlWbepackPlugin = require("html-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "../src"),
  entry: "./a.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js",
  },
  // performance: {
  //   hints: "error",
  //   maxEntrypointSize: 1000,
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env"] },
        },
      },
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
    new HtmlWbepackPlugin({
      title: "webpack demo",
      template: "./index.ejs",
    }),
  ],
  mode: "none",
};

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "../src/index"),
  output: {
    path: path.resolve(__dirname, "../dist/"),
    // filename: "bundle.js",
    filename: "[name]-[fullhash:8].js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
        // use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      // {
      //   test: /\.css$/,
      //   include: /node_modules/,
      //   use: ["style-loader", "css-loader", "postcss-loader"],
      // },
      // {
      //   test: /\.m?js/,
      //   resolve: {
      //     // 不需要强制编写扩展名
      //     fullySpecified: false, // https://webpack.docschina.org/api/module-methods/#root
      //   },
      // },
      {
        test: /\.(js|mjs|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        // include: path.resolve(__dirname, "../src"),
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              [
                "@babel/preset-react",
                {
                  runtime: "automatic", // 给jsx/tsx文件自动引入React
                },
              ],
              "@babel/preset-typescript",
            ],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
    }),
  ],
};

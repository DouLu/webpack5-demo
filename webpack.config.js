const path = require("path");

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
  },
  mode: "none",
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
      {
        test: /\.(png|jpg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1024 * 20,
            name: "[name]-[contenthash:8].[ext]",
            publicPath: "./dist",
          },
        },
      },
    ],
  },
};

const path = require("path");
const CopyPlugin = require("./plugins/copy-plugin");
module.exports = {
  entry: "./a.js",
  output: {
    path: path.resolve(__dirname, ""),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.hi$/,
        // use: ["./add-loader.js", "./mul-loader.js"],
        use: [
          {
            loader: "./add-loader.js",
            options: { add: true },
          },
          "./mul-loader.js",
        ],
      },
    ],
  },
  plugins: [new CopyPlugin()],
  mode: "none",
};

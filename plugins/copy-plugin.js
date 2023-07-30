const path = require("path");
const copy = require("./copy");

class CopyPlugin {
  constructor(options) {
    console.log(
      "%c [ options ]-6",
      "font-size:13px; background:pink; color:#bf2c9f;",
      options
    );
  }

  apply(compiler) {
    compiler.hooks.afterEmit.tap("CopyPlugin", (compilation) => {
      //   console.log(
      //     "%c [ compilation ]-15",
      //     "font-size:13px; background:pink; color:#bf2c9f;",
      //     compilation
      //   );
      const from = path.resolve(__dirname, "pic");
      const to = path.resolve(__dirname, "img");
      copy(from, to);
    });
  }
}

module.exports = CopyPlugin;

const fs = require("fs");
const path = require("path");
const stat = fs.stat;
let copy;
const copyFn = function (src, dest) {
  fs.readdir(src, function (err, paths) {
    if (err) {
      throw err;
    }

    paths.forEach(function (path) {
      let from = src + "/" + path;
      let to = dest + "/" + path;
      let readStream;
      let writeStream;
      stat(from, function (err, s) {
        if (err) {
          throw err;
        }

        if (s.isFile()) {
          readStream = fs.createReadStream(from);
          writeStream = fs.createWriteStream(to);
          readStream.pipe(writeStream);
        } else if (s.isDirectory()) {
          copy(from, to);
        }
      });
    });
  });
};

copy = function (src, dest) {
  fs.exists(dest, function (exist) {
    if (exist) {
      copyFn(src, dest);
    } else {
      fs.mkdir(dest, function () {
        copyFn(src, dest);
      });
    }
  });
};

module.exports = copy;

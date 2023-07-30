module.exports = function (src) {
  let result = parseInt(src);
  if (src) {
    if (this.query?.add == true) {
      result += 100;
    }
    return `module.exports = ${result}`;
  } else {
    this.callback(Error("not src value"), result);
  }
};

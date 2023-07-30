module.exports = function (src) {
  let result = 1;
  if (src) {
    const nums = src.split("");
    const length = src.length;
    for (let i = 0; i < length; i++) {
      result *= nums[i];
    }
    // return `module.exports = ${result}`;
  }
  this.callback(null, result);
};

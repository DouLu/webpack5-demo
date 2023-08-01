module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: "3",
        modules: false,
      },
    ],
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    [
      "./plugins/animalToDog.js",
      {
        ES5: false,
      },
    ],
  ],
};

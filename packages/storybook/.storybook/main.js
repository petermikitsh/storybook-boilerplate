const path = require("path");
// const util = require("util");

module.exports = {
  stories: ["../stories/**/*.stories.tsx"],
  addons: [
    "storybook-addon-jsx/register",
    "@storybook/addon-actions",
    "storybook-dark-mode/register",
    "@panosvoudouris/addon-versions",
    "@storybook/addon-links"
  ],
  webpackFinal: async config => {
    config.devtool = "source-map";
    delete config.optimization.minimizer;
    config.mode = "development";
    const tsRule = {
      test: /\.tsx?$/,
      use: ["babel-loader"],
      include: path.resolve(__dirname, "../")
    };
    config.module.rules = [tsRule];
    // console.log(util.inspect(config, { showHidden: false, depth: null }));
    return config;
  }
};

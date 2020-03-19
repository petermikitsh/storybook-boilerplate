const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  stories: ["../stories/**/*.stories.js"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@panosvoudouris/addon-versions"
  ],
  webpackFinal: async (config, { configType }) => {
    if (configType === "PRODUCTION") {
      config.plugins.push(
        new CopyPlugin([
          {
            from: path.resolve(__dirname, "./storybook-config.json"),
            to: path.resolve(__dirname, "../dist/storybook-config.json")
          }
        ])
      );
    }
    // Return the altered config
    return config;
  }
};

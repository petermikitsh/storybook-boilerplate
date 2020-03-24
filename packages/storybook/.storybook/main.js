const path = require("path");

module.exports = {
  stories: ["../stories/**/*.stories.tsx"],
  addons: [
    "storybook-addon-react-docgen/register",
    "@storybook/addon-knobs/register",
    "storybook-addon-jsx/register",
    "@storybook/addon-actions",
    "storybook-dark-mode/register",
    "@panosvoudouris/addon-versions",
    "@storybook/addon-links"
  ],
  webpackFinal: async config => {
    config.devtool = "source-map";
    config.mode = "development";
    config.module.rules = [
      {
        test: /\.tsx?$/,
        include: [path.resolve(__dirname, "../")],
        loader: "babel-loader",
        options: {
          cacheDirectory: false
        }
      }
    ];
    config.resolve.extensions = [".tsx", ...config.resolve.extensions];

    // config.devServer = {
    //   watchOptions: {
    //     ignored: [/node_modules([\\]+|\/)+(?!@demo\/components)/]
    //   }
    // };

    // config.watchOptions = {
    //   ignored: [/node_modules([\\]+|\/)+(?!@demo\/components)/]
    // };

    return config;
  }
};

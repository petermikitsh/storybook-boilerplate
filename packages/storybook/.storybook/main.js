const path = require("path");
const get = require("lodash.get");

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
        test: /\.(tsx|ts)?$/,
        include: path.resolve(__dirname, "../"),
        use: [
          "ts-loader",
          {
            loader: require.resolve("react-docgen-typescript-loader"),
            options: {
              tsconfigPath: path.resolve(__dirname, "../tsconfig.json"),
              shouldExtractLiteralValuesFromEnum: true,
              propFilter: prop => {
                const isAria = prop.name.startsWith("aria");
                const isNative =
                  [
                    "DOMAttributes",
                    "ButtonHTMLAttributes",
                    "HTMLAttributes"
                  ].indexOf(get(prop, "parent.name")) > -1;
                if (isAria || isNative) {
                  return false;
                }
                return true;
              }
            }
          }
        ]
      }
    ];
    delete config.optimization.minimizer;
    config.resolve.extensions = [".tsx", ...config.resolve.extensions];
    return config;
  }
};

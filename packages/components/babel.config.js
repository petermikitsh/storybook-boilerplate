const get = require("lodash.get");

module.exports = function(api) {
  api.cache(true);

  return {
    presets: ["@babel/preset-typescript"],
    plugins: [
      "@babel/plugin-transform-react-jsx",
      [
        "babel-plugin-react-docgen-typescript",
        {
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
      ],
      "@babel/plugin-transform-runtime",
      "@babel/plugin-transform-modules-commonjs"
    ]
  };
};

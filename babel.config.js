module.exports = function( api ) {
  api.cache.forever();

  return {
    presets: [
      "@babel/preset-react",
      "@babel/preset-typescript",
      "minify"
    ],
    plugins: [
      "@babel/plugin-syntax-dynamic-import",
      "@babel/plugin-proposal-object-rest-spread",
      "@babel/plugin-proposal-class-properties",
      "react-hot-loader/babel"
    ]
  };
};

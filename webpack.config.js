const path = require( "path" );
const webpack = require( "webpack" );
const CopyWebpackPlugin = require( "copy-webpack-plugin" );

const PRODUCTION = false;

module.exports = {
  mode: PRODUCTION ? "production" : "development",
  entry: "./src/index.tsx",
  output: {
    path: PRODUCTION ? path.join( __dirname, "docs" ) : path.join( __dirname, "dist" ),
    filename: "index.js",
    publicPath: "/"
  },
  resolve: {
    extensions: [ ".ts", ".tsx", ".js", ".jsx" ]
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin( [
      { from: "src/index.html", to: "index.html" },
      { from: "src/404.html", to: "404.html" },
      { from: "src/images", to: "images" }
    ] ),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join( __dirname, "dist" ),
    port: 9000,
    hot: true,
    historyApiFallback: true
  }
};

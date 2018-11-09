const path = require( "path" );
const CopyWebpackPlugin = require( "copy-webpack-plugin" );

module.exports = {
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    path: path.join( __dirname, "dist" ),
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
      { from: "src/images", to: "images" }
    ] )
  ],
  devServer: {
    contentBase: path.join( __dirname, "dist" ),
    port: 9000
  }
};

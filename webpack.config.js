const path = require( "path" );
const webpack = require( "webpack" );
const CopyWebpackPlugin = require( "copy-webpack-plugin" );

function Replace( { test, callback } ) {
  return {
    apply( compiler ) {
      const dirname = path.resolve( __dirname );
      compiler.plugin( "emit", ( compilation, done ) => {
        for ( const basename in compilation.assets ) {
          const filepath = path.resolve( dirname, basename );
          if ( test.test( filepath ) ) {
            const asset = compilation.assets[ basename ];
            const origFn = asset.source();
            asset.source = () => callback( origFn );
            asset.size = () => asset.source().length;
          }
        }
        done();
      } );
    }
  };
}

const DEPLOY = false;

module.exports = {
  mode: DEPLOY ? "production" : "development",
  entry: "./src/index.tsx",
  output: {
    path: DEPLOY ? path.join( __dirname, "docs" ) : path.join( __dirname, "dist" ),
    filename: "index.js",
    publicPath: DEPLOY ? "/ipm-project/" : "/"
  },
  resolve: {
    extensions: [ ".ts", ".tsx", ".js", ".jsx" ]
  },
  devtool: DEPLOY ? false : "source-map",
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
    DEPLOY && new Replace( {
      test: /\.html$/,
      callback( source ) {
        return Buffer.from( source.toString().replace( /\/index\.js/g, "/ipm-project/index.js" ) );
      }
    } ),
    new webpack.HotModuleReplacementPlugin()
  ].filter( Boolean ),
  devServer: {
    contentBase: path.join( __dirname, "dist" ),
    port: 9000,
    hot: true,
    historyApiFallback: true
  }
};


//Need use npm to install:
// npm install babel-preset-es2015
// npm install babel-loader
//
//  Also:
//  Make sure to create a .babelrc file with appropriate preset

module.exports = {
  devtool: 'eval-source-map',
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /(\.js|\.jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}

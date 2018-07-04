const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'sourcemap',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './public/build'),
    filename: 'index.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader?modules=true', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    contentBase: './public',
    publicPath: '/build'
  }
}

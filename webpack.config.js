const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    index: './app/entry_point.js',
    seller: './app/seller_entry_point.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './app/')
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  }
};
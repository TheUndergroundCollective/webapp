const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    index: './components/entry_point.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './components/')
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
};
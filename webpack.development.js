const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  // Enable sourcemaps for debugging webpack's output.
  devtool: 'inline-source-map',
  devServer: {
    port: 8001,
    open: true,
    historyApiFallback: true
  },
})


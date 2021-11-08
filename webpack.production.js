const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const SentryWebpackPlugin = require("@sentry/webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: 'source-map',
  output: {
    path: path.resolve('public/build/'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    publicPath: '/',
  },
  plugins: [
    new SentryWebpackPlugin({
      // sentry-cli configuration
      authToken: process.env.SENTRY_AUTH_TOKEN,
      org: "porter-a7",
      project: "pfe-frontend",  
      // webpack specific configuration
      include: "public/build",
      ignore: ["node_modules"],
    }),
  ]
})

  
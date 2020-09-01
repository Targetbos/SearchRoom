"use strict";

var webpack = require('webpack');

var _require = require('webpack-merge'),
    merge = _require.merge;

var baseWebpackConfig = require('./webpack.base.conf');

var devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: baseWebpackConfig.externals.paths.dist,
    port: 8081,
    overlay: {
      warnings: true,
      errors: true
    },
    openPage: "cards.html",
    open: true
  },
  plugins: [new webpack.SourceMapDevToolPlugin({
    filename: '[file].map'
  })]
});
module.exports = new Promise(function (resolve, reject) {
  resolve(devWebpackConfig);
});
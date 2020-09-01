"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var path = require('path');

var fs = require('fs');

var MiniCssExtractPlugin = require('mini-css-extract-plugin');

var CopyWebpackPlugin = require('copy-webpack-plugin');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  build: path.join(__dirname, '../build'),
  assets: 'assets/'
};
var PAGES_DIR = "".concat(PATHS.src, "/pug/pages/");
var PAGES = fs.readdirSync(PAGES_DIR).filter(function (fileName) {
  return fileName.endsWith('.pug');
});
module.exports = {
  externals: {
    paths: PATHS
  },
  entry: {
    colorstypes: ["".concat(PATHS.src, "/colorstypes.js"), "".concat(PATHS.src, "/assets/scss/pages/colorstypes.scss")],
    formelements: ["".concat(PATHS.src, "/formelements.js"), "".concat(PATHS.src, "/assets/scss/pages/formelements.scss")],
    cards: ["".concat(PATHS.src, "/cards.js"), "".concat(PATHS.src, "/assets/scss/pages/cards.scss")]
  },
  output: {
    filename: "".concat(PATHS.assets, "js/[name].js"),
    path: PATHS.build
  },
  resolve: {
    alias: {
      images: path.resolve(__dirname, '../src/assets/images/')
    }
  },
  module: {
    rules: [{
      test: /\.pug$/,
      loader: ['pug-loader', 'pug-html-loader']
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    }, {
      test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: "".concat(PATHS.assets, "fonts/"),
        publicPath: "../fonts/"
      }
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: "file-loader",
      exclude: "/assets/fonts/",
      options: {
        name: "[name].[ext]",
        outputPath: "".concat(PATHS.assets, "images/"),
        publicPath: "../images/"
      }
    }, {
      test: /\.scss$/,
      use: ["style-loader", MiniCssExtractPlugin.loader, {
        loader: "css-loader",
        options: {
          sourceMap: true
        }
      }, {
        loader: "postcss-loader",
        options: {
          sourceMap: true,
          config: {
            path: 'postcss.config.js'
          }
        }
      }, {
        loader: 'resolve-url-loader'
      }, {
        loader: "sass-loader",
        options: {
          sourceMap: true
        }
      }]
    }, {
      test: /\.css$/,
      use: ["style-loader", MiniCssExtractPlugin.loader, {
        loader: "css-loader",
        options: {
          sourceMap: true
        }
      }, {
        loader: "postcss-loader",
        options: {
          sourceMap: true,
          config: {
            path: 'postcss.config.js'
          }
        }
      }]
    }]
  },
  plugins: [new MiniCssExtractPlugin({
    filename: "".concat(PATHS.assets, "css/[name].css")
  }), new CopyWebpackPlugin({
    patterns: [{
      from: "".concat(PATHS.src, "/assets/images"),
      to: "".concat(PATHS.assets, "images")
    }, {
      from: "".concat(PATHS.src, "/assets/fonts"),
      to: "".concat(PATHS.assets, "fonts")
    }, {
      from: "".concat(PATHS.src, "/static"),
      to: ""
    }]
  })].concat(_toConsumableArray(PAGES.map(function (page) {
    return new HtmlWebpackPlugin({
      template: "".concat(PAGES_DIR, "/").concat(page),
      filename: "./".concat(page.replace(/\.pug/, '.html'))
    });
  })))
};
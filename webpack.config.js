'use strict';

const NODE_ENV = process.env.NODE_ENV || 'dev';
const webpack = require('webpack');

module.exports = {
  entry: "./home",
  output: {
    filename: "build.js",
    library: "home"
  },
  watch: NODE_ENV === 'dev',

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: NODE_ENV === 'dev' ? "cheap-inline-module-source-map": null,

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    })

  ],

  module: {

    rules: [{
      test: /\.js$/,
      loader: 'babel'
    }]

  }
};

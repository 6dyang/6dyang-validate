/*
 * Copyright © 2020-present LiuDanYang. All rights Reserved.
 */

'use strict'
const { resolve } = require('path')

module.exports = {
  mode: 'production',
  entry: './lib/validate.js',
  output: {
    path: resolve(__dirname, './dist'),
    filename: 'validate.min.js', // package.json 下面的 main 需要一致 "dist/validate.min.js"
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};

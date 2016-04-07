var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackDevServer = require("webpack-dev-server");
var path = require('path');
var basePath = process.cwd() + '/';

module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        inject: false,
        template: basePath + 'index.tmpl.html'
      })
    ],
    devServer: {
      colors: true,
      hot: true
    }
};
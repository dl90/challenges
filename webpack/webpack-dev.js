const path = require("path");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin'); // https://webpack.js.org/plugins/html-webpack-plugin/
const conf = require("./webpack-conf.js");

module.exports = merge(conf, {
  mode: "development",
  devtool: "none",
  plugins: [new HtmlWebpackPlugin({ template: "./src/template.html" })],
  module: {
    rules: [
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] }
    ]
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
});

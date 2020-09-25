const path = require("path");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin'); // https://webpack.js.org/plugins/html-webpack-plugin/
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const conf = require("./webpack-conf");

module.exports = merge(conf, {
  mode: "production",
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/template.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      })
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
  ],
  module: {
    rules: [
      { test: /\.scss$/, use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"] }
    ]
  },
  output: {
    filename: "[name].[contentHash].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
});

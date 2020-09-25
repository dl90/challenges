# Webpack

## Loader

**[List of loaders](https://webpack.js.org/loaders/)**

* css-loader: compiles CSS to JS

* style-loader: add compiled CSS to DOM

order matters, but the array is read in reverse, so style-loader goes before css-loader

```js
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  }
```

* scss-loader: compiles scss to css

```js
  module: {
    rules: [
      { test: /\.scss$/, use: ["style-loader", "css-loader", "scss-loader"] }
    ]
  }
```

* html-loader: matches src with correct reference after build (in dist)

```js
  module: {
    rules: [
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      { test: /\.html$/, use: ["html-loader"] }.
      { test: /\.(svg|png|jpg|gif)$/, use: { loader: "file-loader", options: { name: "[name].[hash].[ext]", outputPath: "img" } } }
    ]
  }
```

---

## Content hash

updates filenames based on hash to prevent problems with caching

* html-webpack-plugin: automatically updates the hashed js filename

```js
  const HtmlWebpackPlugin = require('html-webpack-plugin'); // https://webpack.js.org/plugins/html-webpack-plugin/

  output: {
    filename: "main.[contentHash].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/template.html" })],
```

* clean-webpack-plugin: clears dist folder after each build

```js
  plugins: [new CleanWebpackPlugin()],
```

* mini-css-extract-plugin: separates CSS to individual file, replaces style-loader (injects CSS to DOM)

```js
  plugins: [new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }), new CleanWebpackPlugin()],
  module: {
    rules: [
      { test: /\.scss$/, use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"] }
    ]
  },
```

* optimize-css-assets-webpack-plugin: minifies CSS

note: adding this overwrites default JS minimizer used in production build. Need to reintroduce it with terser-webpack-plugin

```js
  const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
  const TerserPlugin = require("terser-webpack-plugin");

  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()]
  },
```

## webpack-merge

merges webpack config settings

## webpack-dev-server

runs webpack, saves output in memory and hosts it live. used in package.json

```json
"scripts": {
  "dev": "webpack-dev-server --config webpack-dev.js --open"
}
```

## multiple entries

output file name needs to be changed filename: "[name].bundle.js",

```js
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js"
  }
```

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlConfig = {
  title: "Potato-web",
  template: "./src/index.ejs",
  appMountId: "root"
};
module.exports = {
  output: {
    filename: "[name].[hash].js",
    path: path.resolve("./dist/"),
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin(htmlConfig),
    new HtmlWebpackPlugin(Object.assign({}, htmlConfig, { filename: '200.html' }))
  ],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          fix: true
        }
      },
      {
        test: /\.js$/,
        use: [
          "babel-loader",
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          "file-loader?name=images/[name].[ext]",
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modules/,
        use: [
          "file-loader?name=assets/fonts/[name].[ext]",
        ],
      },
    ],
  }
};

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const Chunks2JsonPlugin = require("chunks-2-json-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  context: __dirname,
  entry: ["./src/Home.bs.js"],
  output: {
    path: path.resolve("public/build/"),
    filename: "[name].[hash].js",
    chunkFilename: "[name].[hash].js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".mjs", ".js", ".bs.js", ".json", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" },
        ],
      },
      {
        test: /\.(png|jp(e*)g|svg|webp)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8000,
            },
          },
        ],
      },
      {
        test: /favicon\.ico$/,
        loader: "url-loader",
      },
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    new Chunks2JsonPlugin({
      outputDir: "public/",
      publicPath: "/",
      chunkGroupName: (filename, chunk) => String(chunk),
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
    }),
    new CleanWebpackPlugin({
      verbose: true,
    }),
    new Dotenv(),
    new CompressionPlugin(),
  ],
};

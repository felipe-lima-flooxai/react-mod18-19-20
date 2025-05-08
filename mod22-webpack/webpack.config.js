const webpack = require("webpack")
const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/principal.js",
    output: {
        filename: "principal.js",
        path: __dirname + "/public"
    },
    devServer: {
        static: {
          directory: path.join(__dirname, "public"),
        },
        port: 9000,
        hot: true,
        open: true,
    },
    module: {
        rules: [
          {
            test: /\.js$/, // Para arquivos .js
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader', // Requer babel-loader e presets
            },
          },
          {
            test: /\.css$/, // Para arquivos .css
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
}
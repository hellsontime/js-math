const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    index: {
      import: './src/index.js',
      dependOn: 'shared',
    },
    print: {
      import: "./src/print.js",
      dependOn: 'shared',
    },
    shared: 'lodash',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
        terserOptions: {
            format: {
                comments: false,
            },
        },
        extractComments: false,
    })],
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  mode: 'development',
};
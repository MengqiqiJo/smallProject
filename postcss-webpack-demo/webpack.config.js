// webpack v4
const path = require('path');// update from 23.12.2018
const nodeExternals = require('webpack-node-externals');const ExtractTextPlugin = require('extract-text-webpack-plugin');module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  target: 'node', // update from 23.12.2018
  externals: [nodeExternals()], // update from 23.12.2018
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
       test: /\.css$/,
      exclude: /node_modules/,
       use: [
         'style-loader',
         'css-loader',
       ],
      }
    ]
  }
};
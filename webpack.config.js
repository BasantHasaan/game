const path = require('path');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 8080,
     //server: { baseDir: ['./dist'],}
     proxy: 'http://localhost:8080/'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      // chunkFilename: "[id].css"
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
    
  ],
  mode: 'development',
  entry: {
    cards:'./src/scripts/cards.js',
    pacman: './src/scripts/pacman.js'

  },
    
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist'
  },
  module: {
    rules: [
     
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader','sass-loader'
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|png|jpg|gif)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: './assets'
            }
        }]
    },
    {
      test: /\.(png|jpg)$/,
      loader: 'url-loader'
    }

    ]
  }
}
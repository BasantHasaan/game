const path = require('path');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var extractPlugin = new ExtractTextPlugin({
//   filename: 'main.css'
// });
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "main.css",
      // chunkFilename: "[id].css"
    })
  ],
  mode: 'development',
  entry: [
    './src/scripts/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   use: [
      //     {
      //       loader: 'babel-loader',
      //       options: {
      //         presets: ['es2015']
      //       }
      //    }
      //   ]
      // },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // options: {
            //   // you can specify a publicPath here
            //   // by default it use publicPath in webpackOptions.output
            //   publicPath: '../'
            // }
          },
          'css-loader','sass-loader'
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
            }
        }]
    }
      // {
      //   test: /\.scss$/,
      //   use: extractPlugin.extract({
      //     use: ['css-loader', 'sass-loader']
      //   })    
      // }
    ]
  }
}
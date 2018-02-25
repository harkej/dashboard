const autoprefixer = require('autoprefixer')
const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin('css/App.css');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    './dev/js/index'
  ],
  output: {
    path: path.join(__dirname, 'prod'),
    publicPath: '/assets/',
    filename: 'js/bundle.js'
  },
  plugins: [
    extractCSS,
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production'),
          'API_HOST': JSON.stringify('https://bpl48-ar-api-l48rgarprod.azurewebsites.net'),
          'CHART_REFRESH_INTERVAL': JSON.stringify('10000')
        }
      })
  ],
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      include: path.join(__dirname, 'dev/js'),
      loader: 'babel',
      query: {
        "presets": ["react", "es2015", "stage-0", "stage-1", "stage-2"],
        "plugins": ["transform-decorators-legacy"]
      },
    },
    {
      test: /\.s?css$/,
      loader: extractCSS.extract(['css', 'sass'])
    },
    {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'file?name=public/fonts/[name].[ext]'
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: "file-loader?name=/images/[name].[ext]"
    }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.scss'],
    root: [path.join(__dirname, './prod')]
  }
};
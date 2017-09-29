const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/public/',
    filename: 'js/bundle.js'
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new ExtractTextPlugin({filename: 'css/main.css'}),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins() {
                  return [
                    autoprefixer({
                      browsers: ['last 2 versions'],
                    }),
                  ];
                },
              },
            },
            {
              loader: 'resolve-url-loader',
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ]
        })
      },
    ]
  }
};

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const PrettierPlugin = require('prettier-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
            test: /\.(js|jsx)?$/,
            loader: 'stylelint-custom-processor-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.html$/,
            use: [
                {
                    loader: 'html-loader',
                    options: { minimize: true }
                }
            ]
        }
      ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new PrettierPlugin({
            tabWidth: 4,
            useTabs: true,
            semi: false,
            singleQuote: true
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: './src/index.html',
            filename: './index.html'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
  };
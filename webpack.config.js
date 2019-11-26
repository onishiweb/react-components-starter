const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const PrettierPlugin = require('prettier-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
      rules: [

        // changed from { test: /\.jsx?$/, use: { loader: 'babel-loader' } },
        { 
            test: /\.(t|j)(s|sx)?$/,
            use: { 
                loader: 'awesome-typescript-loader' 
            } 
        },
        // addition - add source-map support
        { 
            enforce: "pre", 
            test: /\.js$/, 
            loader: "source-map-loader" 
        },
        {
            test: /\.(t|j)(s|sx)?$/,
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
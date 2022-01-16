
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: 'main.js'
    },
    contex: path.resolve(__dirname, '../src'),
    plugin: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            meta: {
                viewport: 'width=device-with, initial-scale=1'
            },
        }),
    ],
    module:{
        rules: [
            {
                test: /\.(jpg|jpeg|png|svg|gif)$/i,
                loader: 'file-loader',
                type: 'asset/resource',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/imgs',
                    publicPath: 'assets/imgs'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                loader: 'file-loader',
                type: 'asset/resource',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/fonts',
                    publicPath: 'assets/fonts'
                }
            }
        ]
    }
};

module.exports = config;
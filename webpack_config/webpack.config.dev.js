const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

const devConfig = merge(commonConfig, {
    mode: 'development',
    devtool: 'eval',
    module:{
        rules:[
            {
                test: /\.(c|sa|sc)ss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            url: true,
                            sourceMap: true,
                            importLoaders: 2,
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
});

module.exports = devConfig;
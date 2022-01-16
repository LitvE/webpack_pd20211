const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const prodConfig = merge(commonConfig, {
    mode: 'production',
    //plugins: [new MiniCssExtractPlugin(),],
    module: {
        rules: [
            {
                test: /\.(css|sss|scss)$/i,
                use: [
                    // {
                    //     loader: MiniCssExtractPlugin.loader,
                    //     options: {
                    //         esModule: true,
                    //     },
                    // },
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: "css-loader",
                        options: {
                            url: true,
                            sourceMap: true,
                        },
                    },
                    {
                        loader:'sass-loader',
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: (loaderContext) => {
                              if (/\.sss$/.test(loaderContext.resourcePath)) {
                                return {
                                  parser: "sugarss",
                                  plugins: [
                                    ["postcss-short", { prefix: "x" }],
                                    "postcss-preset-env",
                                  ],
                                };
                              }
                              return {
                                plugins: [
                                  ["postcss-short", { prefix: "x" }],
                                  "postcss-preset-env",
                                ],
                              };
                            },
                        },
                    },  
                ],
            },
        ],
    },
});

module.exports = prodConfig;

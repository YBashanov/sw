const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'prod';
const appDirectory = fs.realpathSync(process.cwd());
const buildDir = path.resolve(appDirectory, 'build');
const isProductionMode = NODE_ENV !== 'development';
const webpackMode = isProductionMode ? 'production' : 'development';

module.exports = {
    entry: './src/index.tsx',
    target: 'web',
    mode: webpackMode,
    devtool: isProductionMode ? undefined : 'inline-source-map',
    output: {
        filename: isProductionMode ? 'static/js/[name].[contenthash:8].js' : 'static/js/bundle.[contenthash:8].js',
        path: buildDir,
        publicPath: 'auto',
    },
    performance: {
        hints: false,
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                    },
                },
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: isProductionMode ? MiniCssExtractPlugin.loader : 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                    },
                ]
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': path.resolve(appDirectory, './src'),
        },
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/template.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[fullhash:8].css',
            ignoreOrder: true,
        }),
    ],
};

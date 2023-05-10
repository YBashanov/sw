'use strict';

process.env.NODE_ENV = 'development';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const configFactory = require('../webpack.config.js');

const compiler = webpack(configFactory);
const port = 8080;

const devServer = new WebpackDevServer(
    {
        port: parseInt(process.env.PORT, 10) || port,
        hot: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
        historyApiFallback: true,
    },
    compiler
);

const runServer = async () => {
    console.log('Starting server...');
    await devServer.start();
};

void runServer();

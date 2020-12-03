const webpackClientConfig = require('./webpack.client.config');
const webpackServerConfig = require('./webpack.server.config');
//test

module.exports = [
    webpackClientConfig,
    webpackServerConfig
]
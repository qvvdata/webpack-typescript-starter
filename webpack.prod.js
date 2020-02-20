const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const config = {
    mode: 'production',
    devtool: 'source-map'
};

module.exports = merge(common, config);

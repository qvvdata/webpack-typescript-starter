const path = require('path');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');

const config = {
    mode: 'development',
    output: {
        // Fixes a bug with source maps for firefox.
        // https://github.com/webpack/webpack/issues/1194#issuecomment-565960948
        devtoolNamespace: 'firefoxSourceMapFix'
    },
    devServer: {
        // Change the port to have less conflicts with other servers.
        port: 8090,

        // Write the file to the disk so we can inspect it if necessary.
        writeToDisk: true,

        // Reload on change of src files.
        liveReload: true,

        // Do not use hot modules.
        hot: false
    },
    devtool: 'cheap-module-eval-source-map',
};

module.exports = merge(common, config);

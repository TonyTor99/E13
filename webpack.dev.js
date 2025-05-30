const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        static: './dist',
        hot: true,
    },
    devtool: 'inline-source-map',
});

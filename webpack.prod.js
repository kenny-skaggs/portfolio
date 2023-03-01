const { merge } = require('webpack-merge');
const webpack = require('webpack');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'production',
    cache: {
        type: 'filesystem',
    },
    optimization: {
        minimizer: [
            '...',
            new CssMinimizerPlugin()
        ]
    }
});
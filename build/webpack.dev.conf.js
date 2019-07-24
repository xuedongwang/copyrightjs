const baseWebpackConfig = require('./webpack.base.conf.js');
const webpackMerge = require('webpack-merge');
const packageInfo = require('../package.json');

const config = webpackMerge(baseWebpackConfig, {
  mode: 'development',
  output: {
    filename: `copyrightjs-${packageInfo.version}.js`
  }
});

module.exports = config;
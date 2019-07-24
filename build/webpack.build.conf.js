const baseWebpackConfig = require('./webpack.base.conf.js');
const webpackMerge = require('webpack-merge');
const packageInfo = require('../package.json');

const config = webpackMerge(baseWebpackConfig, {
  mode: 'production',
  output: {
    filename: `copyrightjs-${packageInfo.version}.min.js`
  }
});

module.exports = config;
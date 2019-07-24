const path = require('path');

const resolve = dir => path.join(__dirname, dir);

const config = {
  entry: {
    copyright: resolve('../src/main.js')
  },
  output: {
    path: resolve('../dist'),
    libraryTarget: "umd",
    library: "Copyrightjs",
    libraryExport: "default",
    filename: `[name].js`
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  }
};

module.exports = config;
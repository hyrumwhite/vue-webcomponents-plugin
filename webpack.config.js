var path = require('path');

module.exports = {
  entry: './src/vue-webcomponents-plugin.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vue-webcomponents-plugin.js',
    library: 'VueWebcomponentsPlugin',
    libraryTarget: 'window'
  },
  module: {
    rules: [
      { test: /\.js$/, include: [/src/], use: ['babel-loader']}
    ]
  }
};

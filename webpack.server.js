const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  entry: ['@babel/polyfill', './src/server.js'],
  externals: [webpackNodeExternals()],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
  },
  
  /* module 的部分沒變就省略 */
}
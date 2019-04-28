const path = require('path')

module.exports = {
  css: {
    sourceMap: true
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
  lintOnSave: false
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@': path.resolve(__dirname, './src')
  //     }
  //   }
  // }
}

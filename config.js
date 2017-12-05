module.exports = {
  build: {
    assetsPublicPath: __dirname + '/dist',
    assetsSubDirectory: 'static'
  },
  dev: {
    port: 8888,
    assetsPublicPath: '/',
    assetsSubDirectory: 'static',
    proxyTable: {
      '/member': {
        target: 'http://localhost:9999',
        changeOrigin: true
      }
    }
  }
}
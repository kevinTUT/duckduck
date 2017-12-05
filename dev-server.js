var express = require('express')
var webpack = require('webpack')
var app = express()
var path = require('path')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.config')
var config = require('./config')
var port = process.env.port || config.dev.port
var proxyTable = config.dev.proxyTable
var compiler = webpack(webpackConfig)
var hotMiddleware = require('webpack-hot-middleware')(compiler)
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: { colors: true, chunk: false }
})

Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  } else {
    options[context] = proxyTable[context]
  }
  app.use(proxyMiddleware(context, options))
})

app.use(devMiddleware)
app.use(hotMiddleware)
app.use(path.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory), express.static('./static'))

compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})

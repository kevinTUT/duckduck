var jsonServer = require('json-server')
var server = jsonServer.create()
var middlewares = jsonServer.defaults()
var data = jsonServer.router(require('./index'))

server.use(middlewares)
server.use(data)
server.listen(9999, function () {
  console.log('JSON SERVER IS RUNNING at http://localhost:9999.\n')
})
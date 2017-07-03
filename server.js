var jsonServer = require('json-server');
var path = require('path');
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults({ static: './' });

var port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port, function () {
  console.log('\x1b[36mjson-server is running!');
});
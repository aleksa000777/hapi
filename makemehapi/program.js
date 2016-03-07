var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
});

server.route({path: '/{name*}', method: 'GET', handler: handler});

function handler(request, reply) {
  reply('Hello '+ encodeURIComponent(request.params.name));
}

//start server
server.start(function(){
  console.log('Server running at:', server.info.uri);
});

var Hapi = require('hapi');
var Inert = require('inert');
var Path = require('path');
var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
});
server.register(Inert, function(){
  server.route({path: '/{name*}', method: 'GET', handler: {
   file: Path.join(__dirname, 'index.html')
  }
});

});


// function handler(request, reply) {
//   reply('Hello '+ encodeURIComponent(request.params.name));
// }

// server.register(Inert, function(err){
//   if(err) throw err;
// })
//start server
server.start(function(){
  console.log('Server running at:', server.info.uri);
});

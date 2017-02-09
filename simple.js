var http = require('http');

http.createServer(function(request, response) {
  request.on('error', function(err) {
    console.error(err);
    response.statusCode = 400;
    response.end();
  });
  response.on('error', function(err) {
    console.error(err);
  });
  if (request.method === 'GET' && request.url === '/echo') {
    request.pipe(response);
    console.log('handling a request');
  } else {
    response.statusCode = 404;
    response.end();
    console.log('handling a 404');
  }
}).listen(8080);
console.log('Server is up and running');
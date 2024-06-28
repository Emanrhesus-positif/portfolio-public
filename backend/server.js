const http = require('http');
const app = require('./app');


const server = http.createServer(app);

// Normalize a port into a number, string, or false.
const normalizePort = val =>{
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};
const port = normalizePort(process.env.PORT || '4000');
app.set('port', port);

// Event listener for HTTP server "error" event.
const errorHandler = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code){
    case 'EACCES':
      console.error(bind + 'requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + 'is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

server.on('error', errorHandler);

// Event listener for HTTP server "listening" event.
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
});

server.listen(port);

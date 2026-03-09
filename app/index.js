const http = require('http');
const server = http.createServer((_req, res) => {
  res.writeHead(200);
  res.end('Hello from custom app v1\n');
});
server.listen(3000, () => console.log('App listening on port 3000'));

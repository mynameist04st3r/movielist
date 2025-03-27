const http = require('http');

const server = http.createServer((req, res) => {
  let url = req.url.split('/');
  if (url[1] === '' ) {
    if (req.method === 'GET') {
      res.end("Hello, World");
    }
  }
  res.statusCode = 404;
  res.end();
});

server.listen(3000, "localhost", () => {
  const addr = server.address();
  console.log(`Server running at http://${addr.address}:${addr.port}`)
});
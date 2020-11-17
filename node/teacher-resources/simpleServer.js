const http = require('http');

const hostname = '127.0.0.1';
const port = 3120;

const server = http.createServer(function(req, res) {
  console.log("Our server was HIT!")
  console.log(req.url)

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  if (req.url === '/dog') {
    res.end(`
      <h1> dawg route </h1>
      <a href='/cat'> cat </a>
    `);
  }
  else if (req.url === '/cat') {
    res.end(`
      <h1> crazy cat route </h1>
      <a href='/dog'> dog </a>
    `);
  }
  else {
    res.end(`
      <h1> any other route </h1>
      <a href='/cat'> cat </a>
      <a href='/dog'> dog </a>
    `);
  }
  // res.end('Hello world here I am')

});

server.listen(port, hostname, function() {
  console.log(`Server running at http://${hostname}:${port}/`);
});
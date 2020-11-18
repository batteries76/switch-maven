// Simple Server Challenge:
// Modify the simple server code below so that your server responds to at least three more paths.
// If you have time, build up the response sent from the path so that it is more interesting (using html tags).
// Take this as far as you like, and see how complex you can make this.
// Bonus challenge: 
// See if you can respond to the query strings sent by the browser. You can enter those query strings manually on the end of the browser, and then wrote some logic in your server to respond differently to various query strings. You will need to look at the format or URLs and how query strings are sent, and also how the http module parses the request object (where is this incoming data stored on the req object). This will involve looking at several docs. 

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

// const http = {
//   createServer: function(cb) {
//     const request = null
//     // request built up
//     const response = {
//       setHeader: function(contentType, format) {
//         // some stuff happens
//       },
//       end: function(content) {
//         // some stuff
//       }
//     }
//     // Do some code to build up the request and response objects
//     cb(request, response)
//   }
// }

// const server = {
//   listen: function(portNum, hostNameStr, cb) {

//   }
// }












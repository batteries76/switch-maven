## Node Servers

### Intro
As we have discussed, a server is at its most basic just a computer that is set up to listen to the internet, and that will send a response when it receives an incoming request.

It's really important not to overcomplicate things here. This is the most basic function of the internet. We have various computers running programs that can send requests (often a browser on a personal computer), and other computers that will be listening, and will send a response (a web server).

Here we are going to make a really basic server:

server.js:
```js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

Let's get this server going, and then run through this code and see if we can make sense of it.

`> node server.js`

We can see that we have logged out that the server is running. Let's first go to this address and see what we find there. We have our server, and now we are opening our client. Start up a browser, and then we can have a look at what we find.

You have made your first server! 

Note that we can also go to the alias for this IP, localhost. We will more regularly be doing that. That makes the URL `http://localhost:3000`

Talk through the code above in some detail
*****

### Express
We have our nice little simple server, but as with much that goes on in development of any kind, if we want things to get more sophisticated, then rolling our own code for all the elements that we need to make a complicated server


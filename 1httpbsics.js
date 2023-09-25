const http = require('http');
const path = require('path');

const server = http
  .createServer((req, res) => {
    console.log(req.method);
    const url = req.url;
    if (url == '/') {
      res.writeHead(200, { 'content-type': 'text/html' });
      res.write('<h1>Home</h1>');
      res.end();
    } else if (url == '/about') {
      res.writeHead(200, { 'content-type': 'text/html' });
      res.write('<h1>About</h1>');
      res.end();
    } else {
      res.writeHead(404, { 'content-type': 'text/html' });
      res.write('<h1>Err</h1>');
      res.end();
    }
  })
  .listen(6000);

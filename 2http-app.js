const http = require('http');
const path = require('path');
const { readFileSync } = require('fs');

const homePage = readFileSync(path.join(__dirname, '/public/index.html'));
const homeStyles = readFileSync(path.join(__dirname, '/public/styles.css'));

const homeImage = readFileSync(path.join(__dirname, '/public/logo.png'));

const homeLogic = readFileSync(path.join(__dirname, '/public/browserapp.js'));

const server = http
  .createServer((req, res) => {
    const url = req.url;
    console.log(url);
    if (url == '/') {
      res.writeHead(200, { 'content-type': 'text/html' });
      res.write(homePage);
      res.end();
    } else if (url == '/about') {
      res.writeHead(200, { 'content-type': 'text/html' });
      res.write('<h1>About</h1>');
      res.end();
    } else if (url == '/styles.css') {
      res.writeHead(404, { 'content-type': 'text/css' });
      res.write(homeStyles);
      res.end();
    } else if (url == '/logo.png') {
      res.writeHead(404, { 'content-type': 'image/svg+xml' });
      res.write(homeImage);
      res.end();
    } else if (url == '/browserapp.js') {
      res.writeHead(404, { 'content-type': 'text/javascript' });
      res.write(homeLogic);
      res.end();
    } else {
      res.writeHead(404, { 'content-type': 'text/html' });
      res.write('<h1>Err</h1>');
      res.end();
    }
  })
  .listen(6000);

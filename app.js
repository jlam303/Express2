const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  console.log(req.url);
  res.sendFile(path.resolve(__dirname, '/public/index.html'));
});
app.get('*', (req, res) => {
  res.status(404).send('404 not found');
});
app.listen(5000, () => {
  console.log('Listening on port 5000');
});
//Setup static middleware - handler with access to the res and req objects to modify them
//Reponse object - writeable stream back to the client
//res.end last thing
//Request object is a request to server to access resources.
//A request line has 3 main aspects GET,Update,and delete
//path identifies which resource
//HTTP headers: are written on a message to provides the recipient info about the request,sender,and how the sender wants to communicate with the server.
//{ 'content-type': 'text/html' }

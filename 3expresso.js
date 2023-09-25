const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log('resource');
  res.status(200).send('home found');
});
app.get('/about', (req, res) => {
  res.status(200).send('about found');
});
app.all('*', (req, res) => {
  res.status(404).send('<h1>not foundo<h1>');
});
app.listen(5000, () => {
  console.log('Listening on http://localhost/5000');
});

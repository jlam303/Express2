const express = require('express');
const app = express();
const morgan = require('morgan');

// app.use(express.static("./public"))

app.use(morgan('short'));

app.get('/', (req, res) => {
  res.send('Welcome Home!');
});

app.get('/about', (req, res) => {
  res.send('ab');
});

app.get('/api/products', (req, res) => {
  res.send('Prod');
});
app.get('/api/items', (req, res) => {
  res.send('items');
});
app.all('*', (req, res) => {
  res.send('Not real');
});
app.listen(6000, () => {
  console.log('E');
});

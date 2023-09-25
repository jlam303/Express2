const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const authorize = require('./middleware/authorize');
const { products } = require('./data');

//order matters app.use goes before home get
//you can have multiple middleware functions

app.get('/', (req, res) => {
  res.send('Home');
});
app.get('/about', (req, res) => {
  res.send('about');
});
app.use('/api', [logger, authorize]);
app.get('/api/products', (req, res) => {
  res.send(products);
});

app.get('/api/items', (req, res) => {
  console.log(res.user);
  res.send('Items');
});
app.listen(6000, () => {
  console.log('e');
});

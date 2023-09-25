const express = require('express');

const app = express();

const { products } = require('./data');

app
  .get('/', (req, res) => {
    res.json(products);
  })
  .listen(6000, () => {
    console.log('running on port 6000');
  });

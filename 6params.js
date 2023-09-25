const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
  res.send("<h1>Home page</h1> <a href='/api/products'>Products</a>");
});

app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, age } = product;
    return { id, name, age };
  });
  res.json(newProducts);
});

app.get('/api/products/:productID', (req, res) => {
  console.log(req.params);
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    return res.status(404).send('wrongo bongo');
  }
  return res.json(singleProduct);
});

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  console.log(req.params);
  res.send('10/10');
});

app.get('/api/v1/query', (req, res) => {
  console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.splice(0, Number(limit));
  }
  if (sortedProducts.length < 2) {
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(sortedProducts);
});
app.listen(6000, () => {
  console.log('running on port 6000');
});

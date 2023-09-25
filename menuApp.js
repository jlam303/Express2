const express = require('express');
const { menu } = require('./menu');
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  res.send(menu);
});
app.get('/:id', (req, res, next) => {
  for (let i in menu) {
    let { id } = menu[i];
    if (id == req.params.id) {
      res.send(menu[i]);
    }
  }
  next();
});
app.get('/categories', (req, res, next) => {
  let items = [];
  for (let i in menu) {
    if (req.query.search == menu[i].category) {
      items.push(menu[i]);
    }
  }
  if (items.length > 0) {
    res.send(items);
  }
  next();
});
app.get('/sort/:sort', (req, res, next) => {
  if (req.params.sort == 'asc') {
    res.send(menu);
  } else if (req.params.sort == 'dec') {
    let men = [];
    for (let i in menu) {
      men.unshift(menu[i]);
    }
    res.send(men);
  } else if (req.params.sort == 'price') {
    men2 = [];
    menu.map((x) => {
      men2.push(x);
    });
    men2 = men2.sort((a, b) => {
      return a.price - b.price;
    });
    res.send(men2);
  }
  next();
});
app.get('*', (req, res) => {
  res.status(404).send('This page doesnt exist');
});
app.listen(5000, () => {
  console.log('Working');
});

const express = require('express');
const app = express();

let { people } = require('./data');
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/api/people', (req, res) => {
  res.json({ success: true, data: people });
});

app.post('/api/people', (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (name) {
    return res.status(201).json({ success: true, person: name });
  }
  res.status(404).json({ success: false, msg: 'wrong' });
});

app.post('/login', (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (name) {
    return res.status(200).json({ status: 200, data: name });
  }
  res.send('e');
});

// brings in public folder and handles html/js versions js for the form in other file test with /api/people url call data in JS with async await the get req is for testing
app.post('/api/postman/people', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, data: [], msg: 'Please enter a name' });
  } // gets id based off previous id

  const ids = people[people.length - 1].id + 1; // makes a new object using the name and id

  const newPerson = { id: ids, name: `${name}` };

  res.status(201).json({ success: true, data: [...people, newPerson] });
});
app.put('/api/postman/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => {
    return person.id === Number(id);
  });
  if (!person) {
    return express.json({ success: false, data: [] });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(202).json({ data: newPeople, success: true });
});
app.delete('/api/people/:id', (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => {
    return person.id === Number(id);
  });
  if (!person) {
    return res.status(404).json({ success: false, msg: 'e' });
  }
  people = people.filter((person) => {
    return person.id != Number(id);
  });
  res.status(202).json({ data: people, success: true });
});
app.listen(6000, () => {
  console.log('Listening');
});

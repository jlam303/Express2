const express = require('express');
const router = express.Router();

let { people } = require('../data');

router.get('/', (req, res) => {
  res.json({ success: true, data: people });
});

router.post('/', (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (name) {
    return res.status(201).json({ success: true, person: name });
  }
  res.status(404).json({ success: false, msg: 'provide name' });
});
router.put('/:id', (req, res) => {
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
router.delete('/:id', (req, res) => {
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
module.exports = router;

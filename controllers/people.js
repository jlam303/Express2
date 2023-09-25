let { people } = require('../data');

const readPeople = (req, res) => {
  res.json({ success: true, data: people });
};
let length = people.length + 1;
const createPeople = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(404).json({ success: false, msg: 'Provide name' });
  }
  let person = { id: length++, name: name };
  people.push(person);
  res.status(201).json({ success: true, data: [people] });
};

const updatePeople = (req, res) => {
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
};

const deletePerson = (req, res) => {
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
};

module.exports = { readPeople, createPeople, updatePeople, deletePerson };

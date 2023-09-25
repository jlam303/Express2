const result = document.querySelector('.result');
const input = document.querySelector('.form-input');
const btn = document.querySelector('.submit-btn');
let x = false;
let editId = -1;
let name2;
const formAlert = document.querySelector('.form-alert');
const fetchPeople = async () => {
  try {
    const { data } = await axios.get('/api/people');
    console.log(data);
    const people = data.data.map((person) => {
      return `<h5 class = "names"> ${person.name} <br><button class="edit" data-id="${person.id}">Edit</button><br><button class="delete1" data-id="${person.id}">Delete</button></h5>`;
    });
    result.innerHTML = people.join('');
    const edit = document.querySelectorAll('.edit');
    edit.forEach((element) => {
      element.addEventListener('click', async (e) => {
        e.preventDefault();
        try {
          const { data } = await axios.get('/api/people');
          name2 = data.data.filter(
            (x) => x.id == Number(element.getAttribute('data-id'))
          );
          console.log(name2);
          input.value = name2[0].name;
          editId = element.getAttribute('data-id');
          x = true;
          fetchPeople();
        } catch (error) {}
      });
    });
    const delete1 = document.querySelectorAll('.delete1');
    delete1.forEach((element) => {
      element.addEventListener('click', async (e) => {
        e.preventDefault();

        try {
          const { data } = await axios.delete(
            '/api/people/' + element.getAttribute('data-id')
          );
          fetchPeople();
        } catch (error) {
          formAlert.textContent = error.response.data.msg;
        }
      });
    });
  } catch (error) {
    console.log(error);
    formAlert.textContent = error.response.data.msg;
  }
};
fetchPeople();

btn.addEventListener('click', async (e) => {
  e.preventDefault();
  const nameValue = input.value;
  try {
    if (x) {
      x = false;
      const { data } = await axios.put('/api/people/' + editId, {
        name: nameValue,
      });
    } else {
      const { data } = await axios.post('/api/people', { name: nameValue });
      const h5 = document.createElement('h5');
      h5.textContent = data.person;
      result.appendChild(h5);
    }
    fetchPeople();
  } catch (error) {
    formAlert.textContent = error;
  }
  input.value = '';
});

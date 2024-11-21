import { data, setData } from './data';

const btn = document.getElementById('btn');
const form = document.getElementById('form');

btn.addEventListener('click', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const pass = document.getElementById('pass').value;

  setData(name, email, pass);

  console.log(data);

  form.reset();
});

import './css/main.css';
import './css/style.css';

const form_Cadastro = document.querySelector('#form_cadastro')

form_Cadastro.addEventListener('submit', e =>{
  e.preventDefault();

  const formData = new FormData(form_Cadastro)
  const data = Object.fromEntries(formData)
  const dateCreateUser = new Date().toISOString()
  const statusAtivo = true

  const totalData = {...data, dateCreateUser, statusAtivo}

  fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: new Headers(
      {
        'Content-type': 'application/json'
      }
    ),
    body: JSON.stringify(totalData)
  })
  .then(res => res.json())
  .then(totalData => console.log(totalData))
  .catch(error => console.log('erro', error))

  console.log(totalData)
})

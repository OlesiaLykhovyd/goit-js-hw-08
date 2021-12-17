import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');

formEl.addEventListener('input', throttle(handleInput, 500));
formEl.addEventListener('submit', handleSubmit);

let formInputs = {};
const formData = JSON.parse(localStorage.getItem('feedback-form-state'));

updateForm();

function handleInput(e) {
  formInputs[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formInputs));
}

function updateForm() {
  if (formData) {
    inputEl.value = formData.email;
    textareaEl.value = formData.message;
  }
}

function handleSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
}

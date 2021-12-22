import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');

formEl.addEventListener('input', throttle(handleInput, 500));
formEl.addEventListener('submit', handleSubmit);

let formInputs = {};

updateForm();

function handleInput(e) {
  formInputs[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formInputs));
}

function handleSubmit(e) {
  e.preventDefault();
  const formData = getFormData();
  console.log(formData);
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function updateForm() {
  const formData = getFormData();
  if (formData) {
    inputEl.value = formData.email;
    textareaEl.value = formData.message;
  }
}

function getFormData() {
  return JSON.parse(localStorage.getItem('feedback-form-state'));
}

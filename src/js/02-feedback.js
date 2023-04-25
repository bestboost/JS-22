import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/feedback-form.css';

const STORAGE_KEY = 'feedback-data';

const formData = {};

const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form  textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 300));

refs.form.addEventListener('input', throttle(onFormInput, 300));

// populateTextarea();
populateForm();

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log('Send form');

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(evt){
  // console.log(e.target.name)
  // console.log(e.target.value)
  formData[evt.target.name] = evt.target.value;
  // console.log("formData:", formData)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// function onTextareaInput(evt) { 
//   const message = evt.target.value;
  
//   localStorage.setItem(STORAGE_KEY, message);
// }

// function populateTextarea() {
//   const savedMessage = 
//   localStorage.getItem(STORAGE_KEY);
  
//   if (savedMessage){  
//      refs.textarea.value = savedMessage;
//   };
// };

function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  const parsed = JSON.parse(savedData);

  if (parsed){  
     refs.form.value = parsed;
  };
};

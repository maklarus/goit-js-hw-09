const feedbackForm = document.querySelector('.feedback-form');
const submitButton = document.querySelector('button');

function saveFromData() {
  const formData = {};

  for (const element of feedbackForm.elements) {
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA')
      formData[element.name] = element.value.trim();
  }

  const formDataJSON = JSON.stringify(formData);

  localStorage.setItem('feedback-form-state', formDataJSON);
}

function clearForm() {
  for (const element of feedbackForm.elements) {
    if (element.type !== 'submit' && element.name) {
      element.value = '';
    }
  }
}

function formHandler(event) {
  saveFromData();
}

function buttonHandler(event) {
  event.preventDefault();

  const emailValue = feedbackForm.email.value.trim();
  const messageValue = feedbackForm.message.value.trim();

  if (emailValue && messageValue) {
    console.log({ email: emailValue, message: messageValue });

    localStorage.clear();
    clearForm();
  } else {
    alert('Заповніть всі поля форми перед відправкою.');
  }
}

function inputDataPreload() {
  const localStorageData = localStorage.getItem('feedback-form-state');

  if (localStorageData !== null) {
    const formData = JSON.parse(localStorageData);
    feedbackForm.email.value = formData.email || '';
    feedbackForm.message.value = formData.message || '';
  }
}

submitButton.addEventListener('click', buttonHandler);
feedbackForm.addEventListener('input', formHandler);
document.addEventListener('DOMContentLoaded', inputDataPreload);

import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const keyStorage = "feedback-form-state";
let currentData = {
  email: "",
  message: "",
};

form.addEventListener('input', throttle(onInput, 500));

const currentLocalData = JSON.parse(localStorage.getItem(keyStorage));

if (currentLocalData) {
  form.email.value = currentLocalData.email;
  form.message.value = currentLocalData.message;
  currentData = currentLocalData;
}

function onInput() {
  currentData = {
    email: form.email.value,
    message: form.message.value,
  };

  localStorage.setItem(keyStorage, JSON.stringify(currentData));
}

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  console.log(currentData);
  localStorage.removeItem(keyStorage);
  form.reset();
}
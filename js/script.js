var link = document.querySelector('.button-feedback');
var popup = document.querySelector('.modal-feedback');
var overlay = document.querySelector('.overlay');
var close = popup.querySelector('.modal-close');
var form = popup.querySelector('.feedback-form');
var nameField = popup.querySelector('#feedback-name-field');
var emailField = popup.querySelector('#feedback-email-field');
var textField = popup.querySelector('#feedback-text-field');
var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem('name');
  storageEmail = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener('click', function(evt) {
  evt.preventDefault();
  overlay.classList.remove('hidden');
  popup.classList.remove('hidden');

  if (storageName && storageEmail) {
    nameField.value = storageName;
    emailField.value = storageEmail;
    textField.focus();
  }
});

close.addEventListener('click', function(evt) {
  evt.preventDefault();
  overlay.classList.add('hidden');
  popup.classList.add('hidden');
  popup.classList.remove('modal-error');
});

form.addEventListener('submit', function(evt) {
  if (!nameField.value || !emailField.value || !textField.value) {
    evt.preventDefault();
    popup.classList.remove('modal-error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', nameField.value);
      localStorage.setItem('email', emailField.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    overlay.classList.add('hidden');
    popup.classList.add("hidden");
    popup.classList.remove('modal-error');
  }
});

overlay.addEventListener('click', function (evt) {
  evt.preventDefault();
  overlay.classList.add('hidden');
  popup.classList.add("hidden");
  popup.classList.remove('modal-error');
});

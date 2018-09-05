// Modal Feedback

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

// Yandex map

ymaps.ready(init);
var myMap;
var myPlacemark;

function init() {
  myMap = new ymaps.Map('map', {
    center: [59.93871825429445,30.32953080565307],
      zoom: 16,
      controls: []
    }),
  myPlacemark = new ymaps.Placemark([59.93864288602791,30.323028281395565], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/pin-with-shadow.png',
    iconImageSize: [218, 142],
    iconImageOffset: [-45, -135]
  });

  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('scrollZoom');
}

//Slides

var body = document.querySelector('body');

var slideControl1 = document.querySelector('#slide-1');
var slideControl2 = document.querySelector('#slide-2');
var slideControl3 = document.querySelector('#slide-3');

var slide1 = document.querySelector('.slide-first');
var slide2 = document.querySelector('.slide-second');
var slide3 = document.querySelector('.slide-third');

slideControl1.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (!slideControl1.classList.contains('button-checked')) {
    slideControl1.classList.add('button-checked');
    slideControl2.classList.remove('button-checked');
    slideControl3.classList.remove('button-checked');
    slide1.classList.remove('hidden');
    slide2.classList.add('hidden');
    slide3.classList.add('hidden');
    body.classList.add('bg-first');
    body.classList.remove('bg-second');
    body.classList.remove('bg-third');
  }
});

slideControl2.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (!slideControl2.classList.contains('button-checked')) {
    slideControl1.classList.remove('button-checked');
    slideControl3.classList.remove('button-checked');
    slideControl2.classList.add('button-checked');
    slide1.classList.add('hidden');
    slide2.classList.remove('hidden');
    slide3.classList.add('hidden');
    body.classList.remove('bg-third');
    body.classList.remove('bg-first');
    body.classList.add('bg-second');
  }
});

slideControl3.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (!slideControl3.classList.contains('button-checked')) {
    slideControl1.classList.remove('button-checked');
    slideControl2.classList.remove('button-checked');
    slideControl3.classList.add('button-checked');
    slide1.classList.add('hidden');
    slide2.classList.add('hidden');
    slide3.classList.remove('hidden');
    body.classList.remove('bg-first');
    body.classList.remove('bg-second');
    body.classList.add('bg-third');
  }
});

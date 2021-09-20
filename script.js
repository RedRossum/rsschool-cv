const hb = document.querySelector('.nav__hamburger');
const menu = document.querySelector('.nav');
const body = document.querySelector('body');

hb.addEventListener('click', function() {
  menu.classList.toggle('active');
  body.classList.toggle('lock');
})

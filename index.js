/* navbar menu */

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');

hamburger.addEventListener('click', () => {
  menu.style.display ="block";
  hamburger.style.display="none";
  close.style.display ="block";
});

close.addEventListener('click', () => {
  menu.style.display="none";
  hamburger.style.display ="block";
  close.style.display ="none";
});


// hides the menu when anything on menu is clicked.

menu.addEventListener('click', () => {
  menu.style.display="none";
  close.style.display="none";
  hamburger.style.display ="block";
})
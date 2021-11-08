const hamburger = document.querySelector('.menu');
let mobileMenu = document.querySelector('#mobile-menu');
const cross = document.querySelector('#close-menu');

function displayMenu() {
  mobileMenu.classList.replace('hidden', 'mobile-menu');
}

function hideMenu() {
  mobileMenu.classList.replace('mobile-menu', 'hidden');
}

hamburger.addEventListener('click', displayMenu);
cross.addEventListener('click', hideMenu);
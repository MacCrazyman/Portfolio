const hamburger = document.querySelector('.menu');
const mobileMenu = document.querySelector('#mobile_menu');
const cross = document.querySelectorAll('.close_menu');

function displayMenu() {
  mobileMenu.classList.replace('hidden', 'mobile_menu');
}

function hideMenu() {
  mobileMenu.classList.replace('mobile_menu', 'hidden');
}

hamburger.addEventListener('click', displayMenu);
cross.forEach((item) => item.addEventListener('click', hideMenu));
const projects = [
  {
    name: 'project1',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    featured_image: 'images/Card_background.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: '#',
    source: 'https://github.com/MacCrazyman',
  },
];

const hamburger = document.querySelector('.menu');
const mobileMenu = document.querySelector('#mobile_menu');
const cross = document.querySelectorAll('.close_menu');
const modalWindow = document.querySelector('.modal-container');
const modalcross = document.querySelector('.modal-closer');
const webPage = document.querySelector('body');
const form = document.querySelector('#contact_form');
const email = document.querySelector('#email');
const warning = document.querySelector('small');

function createCard(project) {
  const articleContainer = document.createElement('article');
  const card = document.createElement('div');
  const cardTitle = document.createElement('h3');
  const description = document.createElement('p');
  const techlist = document.createElement('ul');
  const button = document.createElement('a');
  card.classList = 'card card02';
  cardTitle.classList = 'title subtitle';
  description.classList = 'text items';
  techlist.classList = 'languages items';
  button.classList = 'button btn items';
  articleContainer.appendChild(card);
  card.appendChild(cardTitle);
  card.appendChild(description);
  card.appendChild(techlist);
  articleContainer.appendChild(button);
  cardTitle.textContent = project.name;
  description.textContent = project.description;
  button.setAttribute('onclick', `showPopup(projects[${projects.indexOf(project)}])`);
  project.technologies.forEach((value) => {
    const techitem = document.createElement('li');
    techitem.className = 'lang_item';
    techitem.textContent = value;
    techlist.appendChild(techitem);
  });
  button.textContent = 'See Project';
  const projectHolder = document.querySelector('#work_cards');
  projectHolder.appendChild(articleContainer);
}

function showPopup(project) { // eslint-disable-line no-unused-vars
  modalWindow.classList.replace('hidden', 'show_popup');
  const title = document.querySelector('.modal-title');
  const image = document.querySelector('.modal-img');
  const description = document.querySelector('.modal-description');
  const techlist = document.querySelector('.modal-tech');
  const livelink = document.querySelector('#modal-live');
  const sourcelink = document.querySelector('#modal-source');
  title.textContent = project.name;
  image.srcset = project.featured_image;
  description.textContent = project.description;
  livelink.setAttribute('href', project.link);
  sourcelink.setAttribute('href', project.source);

  project.technologies.forEach((value) => {
    const techitem = document.createElement('li');
    techitem.className = 'skill';
    techitem.textContent = value;
    techlist.appendChild(techitem);
  });
  webPage.classList.add('static');
}

function hidePopup() {
  modalWindow.classList.replace('show_popup', 'hidden');
  const techlist = document.querySelector('.modal-tech');
  while (techlist.firstChild) {
    techlist.removeChild(techlist.firstChild);
  }
  webPage.classList.remove('static');
}

function displayMenu() {
  mobileMenu.classList.replace('hidden', 'mobile_menu');
  webPage.classList.add('static');
}

function hideMenu() {
  mobileMenu.classList.replace('mobile_menu', 'hidden');
  webPage.classList.remove('static');
}

function validateForm(e) {
  e.preventDefault();
  const emailValue = email.value.trim();

  const regex = /[A-Z]/g;
  if (!regex.test(emailValue)) {
    form.submit();
    email.classList.remove('invalid');
    warning.textContent = '';
  } else {
    email.classList.add('invalid');
    warning.textContent = 'Email should be in lowercase!!!';
  }
}

hamburger.addEventListener('click', displayMenu);
cross.forEach((item) => item.addEventListener('click', hideMenu));
createCard(projects[0]);
modalcross.addEventListener('click', hidePopup);
form.addEventListener('submit', (event) => validateForm(event));
const hamburger = document.querySelector('.menu-btn .burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav-item');
const navLink = document.querySelectorAll('.menu-nav-link');
const menuBtn = document.querySelector('.menu-btn');

let showMenu = false;

const toggleMenu = () => {
  if (!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach(item => item.classList.add('open'));
    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(item => item.classList.remove('open'));
    showMenu = false;
  }
}


navItems.forEach(item => item.addEventListener('click', e => {
  hamburger.classList.remove('open');
  nav.classList.remove('open');
  menuNav.classList.remove('open');
  navItems.forEach(item => item.classList.remove('open'));
  navItems.forEach(item => item.classList.remove('active'));
  e.toElement.offsetParent.classList.add('active');
  showMenu = false;

}));

menuBtn.addEventListener('click', toggleMenu);


export {toggleMenu};
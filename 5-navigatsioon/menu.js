document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('.menu');
  const nav = document.querySelector('header.navigation nav');

  menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
});
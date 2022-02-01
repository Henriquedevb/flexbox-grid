const menuButton = document.querySelector('.cabecalho___menu');
const menu = document.querySelector('.menu-lateral');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('menu-lateral-active');
})


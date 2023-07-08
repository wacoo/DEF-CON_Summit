const burger = document.querySelector('.burger');
const close = document.querySelector('.close');
const modalMenu = document.querySelector('.modal_menu');

burger.addEventListener('click', () => {
  modalMenu.show();
});

close.addEventListener('click', () => {
  modalMenu.close();
});
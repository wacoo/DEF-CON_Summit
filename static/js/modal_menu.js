const burger = document.querySelector('.burger');
const close = document.querySelector('.close');
const modal_menu = document.querySelector('.modal_menu');

burger.addEventListener('click', () => {
    modal_menu.show();
});

close.addEventListener('click', () => {
    modal_menu.close();
});
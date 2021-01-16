let hamburgerButton = document.querySelectorAll('.hamburger');
let exitButton = document.querySelectorAll('.exit > img');
let mobileMenu = document.querySelector('.mobile-menu-wrapper');

function open() {
    mobileMenu.style.display = 'block';
}

function close() {
    mobileMenu.style.display = 'none';
}

hamburgerButton.addEventListener('click', open);

let button = document.querySelectorAll('.buttonn');

button.addEventListener('click', open());



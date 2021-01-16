'use strict';

let menu = document.querySelector('.mobile-menu-wrapper');

document.getElementById('hamburger').onclick = function() {
    menu.style.display = 'block';
};

document.getElementById('exit').onclick = function() {
    menu.style.display = 'none';
};



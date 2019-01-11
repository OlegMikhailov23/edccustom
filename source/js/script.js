document
var navLink = document.querySelector(".page-header__open-btn");

var navBar = document.querySelector(".main-nav");

var navClose = navBar.querySelector(".page-header__close-btn");

var navCloseByLink = document.querySelector('.main-nav__list');

navBar.classList.remove("main-nav--nojs");

navLink.addEventListener("click", function (event) {
        if (navBar.classList.contains('main-nav--closed')) {
            navBar.classList.remove('main-nav--closed');
            navBar.classList.add("main-nav--open");
        } else {
            navBar.classList.add('main-nav--closed');
            navBar.classList.remove('main-nav--opened');
        }
    }
);

navClose.addEventListener("click", function (event) {
    event.preventDefault();
    navBar.classList.remove("main-nav--open");
    navBar.classList.add('main-nav--closed');
});

navCloseByLink.addEventListener("click", function (event) {
    event.preventDefault();
    navBar.classList.remove("main-nav--open");
    navBar.classList.add('main-nav--closed');
})

document
var navlink = document.querySelector(".page-header__open-btn");

var navpopup = document.querySelector(".main-nav");

var navclose = navpopup.querySelector(".page-header__close-btn");

navpopup.classList.remove("main-nav--nojs");

navlink.addEventListener("click", function(event) {
    event.preventDefault();
    navpopup.classList.add("main-nav--open");
});

navclose.addEventListener("click", function(event) {
    event.preventDefault();
    navpopup.classList.remove("main-nav--open");
});
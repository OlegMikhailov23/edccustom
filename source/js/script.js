document
var link = document.querySelector(".page-header__open-btn");

var popup = document.querySelector(".main-nav");

var close = popup.querySelector(".page-header__close-btn");

popup.classList.remove("main-nav--nojs");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("main-nav--open");
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("main-nav--open");
});
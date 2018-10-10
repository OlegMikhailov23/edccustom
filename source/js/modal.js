document
var link1 = document.querySelector(".btn-hit");

var link2 = document.querySelector(".btn-item-1");

var popup = document.querySelector(".modal-content");

var modalback = document.querySelector(".modal-background");

var close = popup.querySelector(".modal-content-close");

var feedbackname = popup.querySelector(".name");

var form = popup.querySelector(".feedback-form");

var phone = popup.querySelector("[name=phone]");

var storage = localStorage.getItem("feedbackname");

link1.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    modalback.classList.add("modal-background-show");
    if (storage) {
        feedbackname.value = storage;
        phone.focus();
    } else {
        feedbackname.focus()
    };
});

link2.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    modalback.classList.add("modal-background-show");
    if (storage) {
        feedbackname.value = storage;
        phone.focus();
    } else {
        feedbackname.focus()
    };
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    $(".success-message").css('display', 'none');
    $(".modal-background").css('display', 'none');
    modalback.classList.remove("modal-background-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
    if (!feedbackname.value || !phone.value) {
        event.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
        localStorage.setItem("feedbackname", name.value);
    }
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
            modalback.classList.remove("modal-background-show");
            popup.classList.remove("modal-error");
        }
    }
});
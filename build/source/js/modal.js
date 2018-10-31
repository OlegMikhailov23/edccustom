document
var link1 = document.querySelector(".btn-hit");

var link2 = document.querySelector(".btn-item-1");

var link3 = document.querySelector(".btn-item-2");

var link4 = document.querySelector(".btn-item-3");

var link5 = document.querySelector(".btn-item-4");

var link6 = document.querySelector(".btn-item-5");

var link7 = document.querySelector(".btn-item-6");

var link8 = document.querySelector(".btn-item-7");

var link9 = document.querySelector(".btn-item-8");

var link10 = document.querySelector(".btn-item-9");

var link11 = document.querySelector(".btn-item-10");

var link12 = document.querySelector(".btn-item-11");

var link13 = document.querySelector(".btn-item-12");

var link14 = document.querySelector(".btn-item-13");

var link15 = document.querySelector(".btn-item-14");

var link16 = document.querySelector(".advantages__btn");

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

link3.addEventListener("click", function(event) {
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

link4.addEventListener("click", function(event) {
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

link5.addEventListener("click", function(event) {
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

link6.addEventListener("click", function(event) {
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

link7.addEventListener("click", function(event) {
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

link8.addEventListener("click", function(event) {
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

link9.addEventListener("click", function(event) {
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

link10.addEventListener("click", function(event) {
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

link11.addEventListener("click", function(event) {
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

link12.addEventListener("click", function(event) {
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

link13.addEventListener("click", function(event) {
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

link14.addEventListener("click", function(event) {
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

link15.addEventListener("click", function(event) {
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

link16.addEventListener("click", function(event) {
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

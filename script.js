'use strict';

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeButton = document.querySelector(".close-modal");
const showButtons = document.querySelectorAll(".show-modal");

// open modal
const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

for (let i = 0; i < showButtons.length; i++) {
    showButtons[i].addEventListener("click", openModal);
}

// close modal
const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

closeButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Esc key bord event
document.addEventListener("keydown", function (event) {
    console.log(event.key);

    if (event.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});


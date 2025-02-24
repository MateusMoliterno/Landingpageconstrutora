document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu-list");

    hamburger.addEventListener("click", function () {
        menu.classList.toggle("open");
    });
});

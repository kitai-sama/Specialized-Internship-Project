
/*===================================================
====================== HEADER MENU TOGGLE ===========
=====================================================*/

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("main-menu");

// Nhấn nút 3 gạch
menuToggle.addEventListener("click", function () {

    menu.classList.toggle("show");
    menuToggle.classList.toggle("active");

    const isOpen = menu.classList.contains("show");
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute("aria-label", isOpen ? "Đóng menu" : "Mở menu");

});

// Nhấn vào mục trong menu thì tự đóng
const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("show");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Mở menu");

    });

});
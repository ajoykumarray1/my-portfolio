document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        menuIcon.classList.toggle("active");
    });

    // Close the menu when clicking outside of it
    document.addEventListener("click", function (event) {
        if (!navLinks.contains(event.target) && !menuIcon.contains(event.target)) {
            navLinks.classList.remove("active");
            menuIcon.classList.remove("active");
        }
    });
});
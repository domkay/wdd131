// let headernav = document.querySelector('header');
// window.onscroll = function () {
//     if (window.scrollY > 0) {
//         headernav.style.background = 'rgb(248, 9, 228);';
//     } else {
//         headernav.style.background = 'transparent';
//     }
// }

function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    const menuIcon = document.querySelector(".menu-icon");
    const closeIcon = document.querySelector(".close-icon");

    if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
    } else {
        navMenu.classList.add("active");
        menuIcon.style.display = "none";
        closeIcon.style.display = "block";
    }
}
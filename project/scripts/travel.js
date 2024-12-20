// Display the current year and last modified in the footer

document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModifiedDate').textContent = document.lastModified;

//Display hamburger menu
document.addEventListener('DOMContentLoaded', (event) => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('header nav ul');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
});

//Lazy loading images
document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll("img[loading='lazy']");

    lazyImages.forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute('loading');
    });
});
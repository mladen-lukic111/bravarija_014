// Hamburger menu navigation
const hamburgerIcon = document.querySelector('.hamburger-menu-wrapper');
const hamburgerMenu = document.querySelector('.mobile-navigation-links');
const bars = hamburgerIcon.querySelectorAll('span');
hamburgerIcon.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    bars.forEach(e => {
        e.classList.toggle('active');
    });
});
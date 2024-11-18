// Hamburger menu navigation
const hamburgerIcon = document.querySelector('.hamburger-menu-wrapper');
const hamburgerMenu = document.querySelector('.mobile-navigation-links');
const bars = hamburgerIcon.querySelectorAll('span');
const mobileLinks= document.querySelectorAll('.mobile-navigation-links li');

// Function for menu closing
const closeMenu = () => {
    hamburgerMenu.classList.toggle('active');
    bars.forEach(e => {
        e.classList.toggle('active');
    });
};

hamburgerIcon.addEventListener('click', ()=> {
    hamburgerMenu.classList.toggle('active');
        bars.forEach(b => {
            b.classList.toggle('active');
        });
});

mobileLinks.forEach(ml => {
    ml.addEventListener('click', closeMenu);
});
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

// Hero section text and image animation while scrolling into viewport
const elementsToShow = document.querySelectorAll('.fade-in, .text-part');

const showElementsOnScroll = () => {
    elementsToShow.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 200) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', showElementsOnScroll);
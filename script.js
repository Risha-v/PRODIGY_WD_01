const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.querySelector('form');
const contactLink = document.querySelector('.nav-link[href="#contact"]');
const body = document.querySelector('body');



navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); 

        navLinks.forEach(link => link.classList.remove('active'));

        event.target.classList.add('active');

        const targetPageId = event.target.getAttribute('href').substring(1);

        const pages = document.querySelectorAll('.page');
        pages.forEach(page => page.classList.remove('active'));

        const targetPage = document.getElementById(targetPageId);
        targetPage.classList.add('active');
    });
});

window.addEventListener('scroll', handleScroll);
navLinks.forEach(link => link.addEventListener('mouseover', handleHover));
navLinks.forEach(link => link.addEventListener('mouseout', handleHoverOut));

function handleScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    navLinks.forEach(link => {
        if (scrollPosition > 0) {
            link.style.backgroundColor = 'wheat';
        } else {
            link.style.backgroundColor = 'transparent';
        }
    });
}

function handleHover(event) {
    event.target.style.backgroundColor = '#777';
}

function handleHoverOut(event) {
    event.target.style.backgroundColor = 'transparent';
}

contactLink.addEventListener('click', (event) => {
    event.preventDefault(); 

    contactForm.classList.add('show');
});






const homeLink = document.querySelector('.nav-link[href="#home"]');
homeLink.addEventListener('click', () => {

    const animateTextElements = document.querySelectorAll('.animate-text');

    animateTextElements.forEach(element => {
        element.style.animationName = 'none';
        setTimeout(() => {
            element.style.animationName = 'typing';
        }, 100);
    });
});



const aboutLink = document.querySelector('.nav-link[href="#about"]');
aboutLink.addEventListener('click', () => {

    const animateTextElements = document.querySelectorAll('.animate-text');

    animateTextElements.forEach(element => {
        element.style.animationName = 'none';
        setTimeout(() => {
            element.style.animationName = 'typing';
        }, 100); 
    });
});

const serviceLink = document.querySelector('.nav-link[href="#services"]');
serviceLink.addEventListener('click', () => {

    const animateTextElements = document.querySelectorAll('.animate-text');

    animateTextElements.forEach(element => {
        element.style.animationName = 'none';
        setTimeout(() => {
            element.style.animationName = 'typing';
        }, 100); 
    });
});


let slideIndex = 0;
const AUTO_SLIDE_DELAY = 6000;
let autoSlideTimer = null;

function showSlides(index) {
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');

    if (slides.length === 0) {
        return;
    }

    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[slideIndex].style.display = 'block';
    if (dots[slideIndex]) {
        dots[slideIndex].className += ' active';
    }
}

function nextSlide() {
    showSlides(slideIndex + 1);
    resetAutoSlide();
}

function previousSlide() {
    showSlides(slideIndex - 1);
    resetAutoSlide();
}

function currentSlide(n) {
    showSlides(n);
    resetAutoSlide();
}

function startAutoSlide() {
    stopAutoSlide();
    autoSlideTimer = setInterval(() => {
        showSlides(slideIndex + 1);
    }, AUTO_SLIDE_DELAY);
}

function stopAutoSlide() {
    if (autoSlideTimer !== null) {
        clearInterval(autoSlideTimer);
        autoSlideTimer = null;
    }
}

function resetAutoSlide() {
    startAutoSlide();
}

function initSlider() {
    showSlides(slideIndex);
    startAutoSlide();
}

window.addEventListener('load', initSlider);

// Expose the simple control names used by HTML
function plusSlides(n) {
    if (n === 1) {
        nextSlide();
    } else if (n === -1) {
        previousSlide();
    } else {
        showSlides(slideIndex + n);
        resetAutoSlide();
    }
}

// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const navlinks = document.getElementById('navlinks');
const submenuToggles = document.querySelectorAll('.submenu-toggle');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navlinks.classList.toggle('open');
});

submenuToggles.forEach(toggle => {
    toggle.addEventListener('click', event => {
        if (window.innerWidth <= 768) {
            event.preventDefault();
            const submenu = toggle.nextElementSibling;
            if (submenu && submenu.classList.contains('submenu')) {
                submenu.classList.toggle('open');
            }
        }
    });
});
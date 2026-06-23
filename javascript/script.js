let slideindex = 1;
showSlides(slideindex);

// Next or previous controls
function plusSlides(n)
{
    showSlides(slideindex += n);
}

// Thumbnail image controls
function currentSlide(n)
{
    showSlides(slideindex = n);
}

function showSlides(n)
{
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length)
        {
            slideindex = 1;
    }

    if (n < 1)
        {
            slideindex = slides.length;
    }
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideindex-1].style.display = "block";
    dots[slideindex-1].className += " active";
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
        if(window.innerWidth <= 768){
            event.preventDefault();
            const submenu = toggle.nextElementSibling;
            if (submenu && submenu.classList.contains('submenu')) {
                submenu.classList.toggle('open');
            }
        }
    });
});
let hamburgerMenu = document.getElementsByClassName("hamburger");

function menuOpen(){

    let menu = document.getElementById("nav_mob_links");

    if (menu.style.display === "block"){
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}


ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});

// Home page 

ScrollReveal().reveal('.logo', {
    delay: 500
});
ScrollReveal().reveal('.card', {
    delay: 600,
    origin: 'left'
});

ScrollReveal().reveal('.hero_title', {
    delay: 600,
    origin: 'left'
});

ScrollReveal().reveal('.hero_text', {
    delay: 600,
    origin: 'right'
});

ScrollReveal().reveal('.car_logo', {
    delay: 600,
    origin: 'bottom',
    interval: 200
});

ScrollReveal().reveal('.cta_intro_title', {
    delay: 600,
    origin: 'bottom'
});

ScrollReveal().reveal('.cta_heading', {
    delay: 700,
    origin: 'right'
});

ScrollReveal().reveal('.contact_heading', {
    delay: 700,
    origin: 'right'
});


// Aflever pakket page 

ScrollReveal().reveal('.repair_image', {
    delay: 600,
    origin: 'right'
});
ScrollReveal().reveal('.repair_image_2', {
    delay: 600,
    origin: 'left'
});

// over ons page 

ScrollReveal().reveal('.img_aboutus', {
    delay: 600,
    origin: 'right'
});


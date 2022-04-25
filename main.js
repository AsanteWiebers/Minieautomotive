let hamburgerMenu = document.getElementsByClassName("hamburger");

function menuOpen(){

    let menu = document.getElementById("nav_mob_links");

    if (menu.style.display === "block"){
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
console.log(hamburgerMenu);


const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

sr.reveal('.logo', { delay: 50 });

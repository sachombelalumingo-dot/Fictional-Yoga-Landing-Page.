// Mobile Navigation Toggle
const menuBtn = document.getElementById("menu-btn");
const navlinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
    navlinks.classList.toggle("open");
    const isOpen = navlinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-4-line"
    );
});

navlinks.addEventListener("click", () => {
    navlinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-4-line");
});

// ScrollReveal Configuration
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// Reveal Header Image
ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
});

// Reveal Header Content Elements (Staggered)
ScrollReveal().reveal(".header__content h2", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".header__btn", {
    ...scrollRevealOption,
    delay: 2000,
});

ScrollReveal().reveal(".header__socials", {
    ...scrollRevealOption,
    delay: 2500,
});
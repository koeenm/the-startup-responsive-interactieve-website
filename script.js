const hamburger = document.querySelector('.burger-menu')
const navMenu = document.querySelector('.burger-menu-dropdown')

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});
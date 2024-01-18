const hamburger = document.querySelector('.burger-menu')
console.log('1')
const navMenu = document.querySelector('.burger-menu-dropdown')
console.log('2')

hamburger.addEventListener("click", function() {
    console.log('3')
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    console.log('4')
});
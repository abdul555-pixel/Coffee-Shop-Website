let hamburger = document.querySelector('.hamburger');
let navMenu1 = document.querySelector('.left-nav');
let navMenu2 = document.querySelector('right-nav');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu1.classList.toggle("active");
    navMenu2.classList.toggle("active");
})

document.querySelector("")
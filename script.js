const slides = document.querySelectorAll('.slide');
let count = 0;

slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
);

const goNext = () => {
    if(count < (slides.length - 1)) {
        count++;
        slideImage();
    }
}

const goPrev = () => {
    if(count > 0) {
        count--;
        slideImage();
    }
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${count * 100}%)`;
        }
    )
}

const resetImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(${count * 100}%)`;
        }
    )
}


setInterval(() => {
    if (count < slides.length - 1) {
        count++;
        slideImage();
    } else {
        count--;
        resetImage();
    }
}, 8000); // Adjust the time interval as needed
 
const menu = document.querySelector(".nav-menu");
const menuItems = document.querySelectorAll(".nav-link");
const hamburger= document.querySelector(".hamburger");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    hamburger.classList.remove("active");
  } else {
    menu.classList.add("showMenu");
    hamburger.classList.add("active");
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }
  )

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Function to animate elements when they are in the viewport
function animateOnScroll(targetClass) {
    const elements = document.querySelectorAll(`.${targetClass}`);

    elements.forEach((element) => {
        if (isInViewport(element) && !element.hasAttribute('data-scroll')) {
            element.setAttribute('data-scroll', 'in'); // Trigger the animation
        }
    });
}

// Attach the function to the scroll event
window.addEventListener('scroll', () => {
    animateOnScroll('origin-main--heading');
    animateOnScroll('origin-sub--heading');
    animateOnScroll('offer-1');
    animateOnScroll('offer-2');
    animateOnScroll('offer-3');
    animateOnScroll('offer-4');
    animateOnScroll('offer-5');
    animateOnScroll('offer-6');
    animateOnScroll('menu-main--heading');
    animateOnScroll('menu-sub--heading');
});

// Call the function initially to animate elements already in the viewport
animateOnScroll('origin-main--heading');
animateOnScroll('origin-sub--heading');
animateOnScroll('offer-1');
animateOnScroll('offer-2');
animateOnScroll('offer-3');
animateOnScroll('offer-4');
animateOnScroll('offer-5');
animateOnScroll('offer-6');
animateOnScroll('menu-main--heading');
animateOnScroll('menu-sub--heading');
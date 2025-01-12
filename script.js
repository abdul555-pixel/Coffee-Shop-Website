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
    animateOnScroll('menu-things');
    animateOnScroll('menu-things-2');
    animateOnScroll('view-menu-1');
    animateOnScroll('view-menu-2');
    animateOnScroll('actual-review');
    animateOnScroll('footer1-main--heading');
    animateOnScroll('footer1-sub--heading');
    animateOnScroll('timings');
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
animateOnScroll('menu-things');
animateOnScroll('menu-things-2');
animateOnScroll('view-menu-1');
animateOnScroll('view-menu-2');
animateOnScroll('actual-review');
animateOnScroll('footer1-main--heading');
animateOnScroll('footer1-sub--heading');
animateOnScroll('timings');


document.querySelectorAll('a[href^="contact"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetElement = document.querySelector('.actual-review');

        const navHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = targetElement.offsetTop - navHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

const navappear = () => {
    const navBar = document.querySelector('.navbar');
    const navLogo = document.querySelector('.logo');
    const navHeight = 10; // Scroll threshold for the navbar to appear

    if (!navBar) {
        console.warn('Navbar element not found');
        return;
    }

    if (window.scrollY > navHeight) {
        // Add the 'scrolled' class when the user scrolls past the threshold
        navBar.classList.add('scrolled');
        navLogo.classList.add('shrink');
    } else {
        // Remove the 'scrolled' class when at the top
        navBar.classList.remove('scrolled');
        navLogo.classList.remove('shrink');
    }
};

// Attach the scroll event listener to the window
window.addEventListener('scroll', navappear);

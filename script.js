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

  
// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }
  
  // Function to animate elements when they are in the viewport
  function animateOnScroll() {
    const headings = document.querySelectorAll('.origin-main--heading');
  
    headings.forEach((heading) => {
      if (isInViewport(heading) && !heading.hasAttribute('data-scroll')) {
        heading.setAttribute('data-scroll', 'in');
        
        const chars = heading.querySelectorAll('.char');
        chars.forEach((char, index) => {
          chars.style.animationDelay = `${0.5 + (-0.1 * index)}s`;
        });
      }
    });
  }
  
  // Attach the function to the scroll event
  window.addEventListener('scroll', animateOnScroll);
  
  // Call the function initially to animate elements already in the viewport
  animateOnScroll();
  


// Function to check if an element is in the viewport
function isInViewport1(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }
  
  // Reusable function to animate elements
  function animateOnScroll1(targetClass, itemClass) {
    const elements = document.querySelectorAll(`.${targetClass}`);
  
    elements.forEach((element) => {
      if (isInViewport1(element) && !element.hasAttribute('data-scroll')) {
        element.setAttribute('data-scroll', 'in');
  
        const items = element.querySelectorAll(`.${itemClass}`);
        items.forEach((item, index) => {
          item.style.animationDelay = `${0.5 + (-0.1 * index)}s`;
        });
      }
    });
  }
  
  // Attach the function to the scroll event and make it reusable
  window.addEventListener('scroll', () => {
    animateOnScroll1('origin-sub--heading', 'word');
  });
  
  // Call the function initially to animate elements already in the viewport
  animateOnScroll1('origin-sub--heading', 'word');
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
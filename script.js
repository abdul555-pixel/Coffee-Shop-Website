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


anime.timeline()
  .add({
    targets: '.main--heading',
    translateY: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 100 + 50 * i
  });

anime.timeline()
  .add({
    targets: '.sub--heading',
    translateY: [70,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 100 + 50 * i
  });

// Animate the menu button as a whole
anime.timeline()
  .add({
    targets: '.menu--btn',
    translateY: [70, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 3000, // Adjust duration as needed
  });

// Animate the shop description as a whole
anime.timeline()
  .add({
    targets: '.shop--description',
    translateY: [50, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 3000, // Adjust duration as needed
  });

// Function to animate elements when they appear in the viewport
function animateOnScroll(target, animation) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime.timeline().add(animation);
            observer.unobserve(entry.target); // Stop observing once the animation is triggered
          }
        });
      },
      { threshold: 0.2 } // Adjust visibility threshold as needed
    );
  
    observer.observe(document.querySelector(target));
  }
  
  // Animation for origin-main--heading
  animateOnScroll('.origin-main--heading', {
    targets: '.origin-main--heading',
    translateY: [50, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 3000,
  });
  
  // Animation for origin-sub--heading
  animateOnScroll('.origin-sub--heading', {
    targets: '.origin-sub--heading',
    translateY: [50, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 4000,
  });
  

anime.timeline()
.add({
targets: '.offer-main--heading',
translateX: [50, 0],
opacity: [0, 1],
easing: "easeOutExpo",
duration: 3000, // Adjust duration as needed
});

anime.timeline()
.add({
targets: '.offer-sub--heading',
translateX: [50, 0],
opacity: [0, 1],
easing: "easeOutExpo",
duration: 3000, // Adjust duration as needed
});

anime.timeline()
.add({
targets: '.offer--detail',
translateX: [50, 0],
opacity: [0, 1],
easing: "easeOutExpo",
duration: 3000, // Adjust duration as needed
});
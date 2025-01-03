const slides = document.querySelectorAll('.slide');
let count = 0;

slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
);

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
    if(count <= 0) {
        count++;
        slideImage();
    }
}, 1000);

setInterval(() => {
    if(count == (slides.length - 1)) {
        count--;
        resetImage();
    }
}, 2000)
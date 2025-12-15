const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;
let interval;
const totalSlides = dots.length;

function updateSlider() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

function nextSlide() {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    updateSlider();
}

function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }
    updateSlider();
}

function startAutoSlide() {
    interval = setInterval(nextSlide, 3000);
}

function resetAutoSlide() {
    clearInterval(interval);
    startAutoSlide();
}

nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
        resetAutoSlide();
    });
});

updateSlider();
startAutoSlide();

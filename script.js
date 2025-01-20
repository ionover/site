// JavaScript can be added here for interactivity
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');

function changeImage(direction) {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + direction + images.length) % images.length;
    images[currentIndex].style.display = 'block';
}
// For now, it's just a placeholder
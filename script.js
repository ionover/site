let currentIndex = 0; // Текущий индекс фотографии
const images = document.querySelectorAll('.carousel-image'); // Все изображения
const dots = document.querySelectorAll('.dot'); // Все индикаторы

// Функция для смены изображения
function changeImage(direction) {
    // Скрываем текущее изображение и убираем активный индикатор
    images[currentIndex].style.display = 'none';
    dots[currentIndex].classList.remove('active');

    // Обновляем индекс (с учётом цикличности)
    currentIndex = (currentIndex + direction + images.length) % images.length;

    // Показываем новое изображение и добавляем активный индикатор
    images[currentIndex].style.display = 'block';
    dots[currentIndex].classList.add('active');
}

// Функция для прямого перехода к определённой фотографии
function setImage(index) {
    // Скрываем текущее изображение и убираем активный индикатор
    images[currentIndex].style.display = 'none';
    dots[currentIndex].classList.remove('active');

    // Обновляем индекс
    currentIndex = index;

    // Показываем новое изображение и добавляем активный индикатор
    images[currentIndex].style.display = 'block';
    dots[currentIndex].classList.add('active');
}

// Устанавливаем начальное состояние (показываем первую фотографию и активный индикатор)
images[currentIndex].style.display = 'block';
dots[currentIndex].classList.add('active');

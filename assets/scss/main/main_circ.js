// Получаем элементы
const leftArrow = document.querySelector('.leftArrow');
const rightArrow = document.querySelector('.rightArrow');
const slides = document.querySelectorAll('.section-cases__photo');

// Количество видимых слайдов
let visibleSlides = 4; // По умолчанию 4
let currentStartIndex = 0; // Индекс первого видимого слайда

// Функция для обновления количества видимых слайдов в зависимости от ширины экрана
function updateVisibleSlides() {
    if (window.matchMedia('(max-width: 600px)').matches) {
        visibleSlides = 2; // Если ширина экрана <= 600px
    } else {
        visibleSlides = 4; // Если ширина экрана больше 600px
    }
    updateSlides(); // Обновляем видимость слайдов
}

// Функция для обновления видимости слайдов
function updateSlides() {
    slides.forEach((slide, index) => {
        if (index >= currentStartIndex && index < currentStartIndex + visibleSlides) {
            slide.hidden = false; // Показываем слайд
        } else {
            slide.hidden = true; // Скрываем слайд
        }
    });
}

// Обработчик для кнопки "вправо"
function nextSlide() {
    if (currentStartIndex + visibleSlides < slides.length) {
        currentStartIndex++;
    } else {
        currentStartIndex = 0; // Возвращаемся в начало
    }
    updateSlides();
}

// Обработчик для кнопки "влево"
function previousSlide() {
    if (currentStartIndex > 0) {
        currentStartIndex--;
    } else {
        currentStartIndex = slides.length - visibleSlides; // Переход к последним слайдам
    }
    updateSlides();
}

// Привязываем обработчики к стрелкам
rightArrow.addEventListener('click', nextSlide);
leftArrow.addEventListener('click', previousSlide);

// Обновляем количество видимых слайдов при загрузке страницы
updateVisibleSlides();

// Добавляем слушатель на изменение размера окна
window.addEventListener('resize', updateVisibleSlides);

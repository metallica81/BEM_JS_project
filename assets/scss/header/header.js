// Меню nav
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuList = document.querySelector('.menu-list');

    menuToggle.addEventListener('click', () => {
        // Переключаем класс для показа/скрытия меню
        menuList.classList.toggle('menu-visible');
        });
    });
function changeBackgroundDark(color) {
    document.body.style.background = color;
}

document.addEventListener('DOMContentLoaded', () => {
    const darkTheme = document.querySelector('.dark');
    const lightTheme = document.querySelector('.light');

    // Сохранение начальных стилей
    const initialLogoColor = getComputedStyle(document.body).getPropertyValue('.logo__span');
    const initialNavButtonColor = getComputedStyle(document.body).getPropertyValue('.header__div-buttons button');
    const initialNavAnchorColor = getComputedStyle(document.body).getPropertyValue('.header__div-buttons button a');
    const initialSectionColor = getComputedStyle(document.body).getPropertyValue('.section');
    const initialMainTextColor = getComputedStyle(document.body).getPropertyValue('.main .h2');


    //header
    const logoSpan = document.querySelectorAll('.logo__span');
    const navButtons = document.querySelectorAll('.header__div-buttons button');
    const navAnchors = document.querySelectorAll('.header__div-buttons button a');

    //main
    const sectionMain = document.querySelectorAll('.section');
    const h2Main = document.querySelectorAll('.main .h2');
    const buttonMain = document.querySelectorAll('.button');
    const pDecriptionMain = document.querySelectorAll('.section-company__p');
    const pWorkMain = document.querySelectorAll('.step p')
    const arrowMain = document.querySelectorAll('.section-cases__arrow');

    darkTheme.addEventListener('click', () => {

        //dark header
        {
            changeBackgroundDark('#4C5772');
            darkTheme.hidden = true;
            lightTheme.hidden = false;
            Array.from(logoSpan).forEach(element => {
                element.style.color = 'white';
            })
            for (let element of navButtons) {
                element.style.background = '#4C5772';
                element.style.color = 'white';
            }   
            for (let element of navAnchors) {
                element.style.color = 'white';
            }   
        }

        

        //dark main

        {
            Array.from(sectionMain).forEach(element => {
                element.style.background = 'rgba(26, 29, 37, 0.14)';
            })

            Array.from(h2Main).forEach(element => {
                element.style.color = 'white';
            })

            Array.from(buttonMain).forEach(element => {
                element.style.color = 'white';
            })

            Array.from(pDecriptionMain).forEach(element => {
                element.style.color = 'white';
            })
            
            Array.from(pWorkMain).forEach(element => {
                element.style.color = 'white';
            })

            Array.from(arrowMain).forEach(element => {
                element.style.filter = 'invert(1)';
            })
        }
    });


    //footer
    const footerH2 = document.querySelector('h2.footer__h2');
    footerH2.style.color = 'black';


    // Восстановление светлой темы
    lightTheme.addEventListener('click', () => {
        changeBackgroundDark('#F2F2F2');
        lightTheme.hidden = true;
        darkTheme.hidden = false;

        // Восстановление начальных стилей для lightTheme

        document.body.style.background = '#F2F2F2';
        Array.from(logoSpan).forEach(element => {
            element.style.color = ''; // Восстанавливаем исходный цвет
        });

        for (let element of navButtons) {
            element.style.background = ''; // Восстанавливаем исходный фон
            element.style.color = 'initialNavAnchorColor'; // Восстанавливаем исходный цвет текста
        }

        for (let element of navAnchors) {
            element.style.color = ''; // Восстанавливаем исходный цвет
        }

        Array.from(sectionMain).forEach(element => {
            element.style.background = 'white'; 
        });

        Array.from(h2Main).forEach(element => {
            element.style.color = ''; // 
        });

        Array.from(buttonMain).forEach(element => {
            element.style.color = ''; 
        });

        Array.from(pDecriptionMain).forEach(element => {
            element.style.color = ''; // Восстанавливаем исходный цвет текста
        });

        Array.from(pWorkMain).forEach(element => {
            element.style.color = ''; // Восстанавливаем исходный цвет текста
        });

        Array.from(arrowMain).forEach(element => {
            element.style.filter = ''; // Восстанавливаем исходное состояние фильтра
        });
    });
})
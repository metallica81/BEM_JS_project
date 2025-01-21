function highlightButton(event) {
    let button_previous = document.querySelector('.button_selected');
    button_previous.classList.toggle('button_selected');

    let target = event.currentTarget;
    target.classList.toggle('button_selected');
}

//company buttons
function workWayCompany(event) {
    let openedPage = document.querySelector('.opened');
    openedPage.hidden = true;
    openedPage.classList.toggle('opened');

    openedPage.addEventListener("click", highlightButton(event))

    let nextPage = document.querySelector('.workWayCompany');
    nextPage.hidden = false;
    nextPage.classList.toggle('opened');

    let wrapper = document.querySelector('.section-company');
    wrapper.style.height = "auto";
}

function feedbackCompany(event) {
    let openedPage = document.querySelector('.opened');
    openedPage.hidden = true;
    openedPage.classList.toggle('opened');

    openedPage.addEventListener("click", highlightButton(event))

    let nextPage = document.querySelector('.feedbackCompany');
    nextPage.hidden = false;
    nextPage.classList.toggle('opened');

    let wrapper = document.querySelector('.section-company');
    wrapper.style.height = "auto";
}

function descriptionCompany(event) {
    let openedPage = document.querySelector('.opened');
    openedPage.hidden = true;
    openedPage.classList.toggle('opened');

    openedPage.addEventListener("click", highlightButton(event))

    let nextPage = document.querySelector('.descriptionCompany');
    nextPage.hidden = false;
    nextPage.classList.toggle('opened');

    let wrapper = document.querySelector('.section-company');
    wrapper.style.height = "621px";
}
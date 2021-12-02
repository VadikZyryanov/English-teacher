const headerButton = document.querySelector('.header__button');
const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal__overlay');
const modalClose = document.querySelector('.modal__close');
let flag = false;

const openModal = () => {
    flag = true;
    modal.classList.toggle('go');
    modalOverlay.classList.toggle('go');
    document.body.classList.toggle('hidden')
}

headerButton.addEventListener('click', () => {
    openModal();
})

modalClose.addEventListener('click', () => {
    modalOverlay.classList.toggle('go');
    setTimeout(() => {
        modal.classList.toggle('go');
        document.body.classList.toggle('hidden')
    }, 500)
})

setTimeout(() => {
    if (modal.classList.contains('go') || flag) return
    openModal();
}, 30000)

const btnSocial = document.querySelector("#btn");
const itemSocial = document.querySelectorAll(".menu__item");
const btnModal = document.querySelector(".modal__button");

let showCard = (event) => {
    event.stopPropagation();
    btnSocial.classList.toggle("is-rotate");
    for (var i = 0; i < itemSocial.length; i++) {
        itemSocial[i].classList.toggle(`item-${i}`);
    }
}

btn.addEventListener("click", showCard);
btnModal.addEventListener("click", showCard);


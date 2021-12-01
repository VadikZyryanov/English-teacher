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


const navList = document.querySelectorAll('.navigation__item');
const bannerButton = document.querySelector('.banner__button-link');

navList.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector(event.target.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    })
})

bannerButton.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector(bannerButton.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
})

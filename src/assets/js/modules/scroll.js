$('a[href^="#"]').bind('click.smoothscroll', function (e) {
    e.preventDefault();

    const target = this.hash,
    $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
});

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.menu-aside');
const lineOne = document.querySelector('nav .menu-btn .line--1');
const lineTwo = document.querySelector('nav .menu-btn .line--2');
const lineThree = document.querySelector('nav .menu-btn .line--3');
const link = document.querySelector('nav .nav-links');
const navListAside = document.querySelectorAll('.link.navigation__item');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    lineOne.classList.toggle('line-cross');
    lineTwo.classList.toggle('line-fade-out');
    lineThree.classList.toggle('line-cross');
    link.classList.toggle('fade-in');
    document.body.classList.toggle('hidden');
})

navListAside.forEach(item => {
    item.addEventListener('click', () => {
        nav.classList.toggle('nav-open');
        lineOne.classList.toggle('line-cross');
        lineTwo.classList.toggle('line-fade-out');
        lineThree.classList.toggle('line-cross');
        link.classList.toggle('fade-in');
        document.body.classList.toggle('hidden');
    })
})
try {
    const loader = document.querySelector('.loader');

setTimeout(() => {
    loader.classList.add('active');
    document.body.classList.remove('hidden');
}, 3900)
} catch {}

const animate = document.querySelectorAll('.animate-go');

const animOnScroll = () => {
    animate.forEach(animItem => {
        const animItemHeigth = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeigth / animStart;

        if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeigth)) {
            animItem.classList.add('go');
            
            if (animItem.classList.contains('title')) {
                let svg = animItem.querySelector('.animate-go');
                svg.classList.add('go');
            }
        }
    })
}

window.addEventListener('scroll', animOnScroll);

const offset = (el) => {
    const rect = el.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    return {top: rect.top + scrollTop}
} 
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
const buttons = document.querySelectorAll('.lesson__button');
const tabs = document.querySelectorAll('.lesson__tab');

const skipActive = (elem) => {
    elem.forEach(item => {
        if (item.closest('.active')) {
            item.classList.remove('active')
        }
    })
}

buttons.forEach(button => {
    button.addEventListener('click', event => {
        const target = event.target;
        
        if (!target.closest('.active')) {
            skipActive(buttons)
            button.classList.add('active')

            tabs.forEach(tab => {
                tab.classList.toggle('active')
            })
        }
    })
})

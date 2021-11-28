// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
// }

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

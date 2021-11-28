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
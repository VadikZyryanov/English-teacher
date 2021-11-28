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
try {
    const loader = document.querySelector('.loader');

setTimeout(() => {
    loader.classList.add('active');
    document.body.classList.remove('hidden');
}, 3900)
} catch {}

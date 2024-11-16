let lastScrollTop = 0;
const header = document.querySelector('header');
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Hide header with any downward scroll
    if (scrollTop > lastScrollTop && scrollTop > 10) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

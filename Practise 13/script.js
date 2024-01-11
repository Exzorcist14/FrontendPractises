document.addEventListener('DOMContentLoaded', function () {
    const parallaxBg = document.querySelector('.parallax-bg');

    window.addEventListener('scroll', function () {
        let scrolled = window.scrollY;
        parallaxBg.style.transform = 'translateY(' + scrolled * 0.4 + 'px)';
    });

    parallaxBg.style.transform = 'translateY(' + window.scrollY * 0.4 + 'px)';
});


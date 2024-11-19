document.querySelectorAll('a[href^="#"]').forEach(Anchor => {
    Anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollintoview({
            behavior: 'smooth'
        });
    
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    burger.addEventListener('click', function() {
        nav.classList.toggle('nav-active');
        
        burger.classList.toggle('toggle');
        
        document.body.classList.toggle('menu-open');
    });
    
    document.addEventListener('click', function(event) {
        if (nav.classList.contains('nav-active') && 
            !event.target.closest('.nav-links') && 
            !event.target.closest('.burger')) {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            document.body.classList.remove('menu-open');
        }
    });
    
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            document.body.classList.remove('menu-open');
        }
    });
    
    const navLinks = document.querySelectorAll('.nav-links li');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 992) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
                document.body.classList.remove('menu-open');
            }
        });
    });
});
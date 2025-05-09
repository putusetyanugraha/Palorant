document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', function () {
        nav.classList.toggle('nav-active');

        burger.classList.toggle('toggle');

        document.body.classList.toggle('menu-open');
    });

    document.addEventListener('click', function (event) {
        if (nav.classList.contains('nav-active') &&
            !event.target.closest('.nav-links') &&
            !event.target.closest('.burger')) {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            document.body.classList.remove('menu-open');
        }
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 992) {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            document.body.classList.remove('menu-open');
        }
    });

    const navLinks = document.querySelectorAll('.nav-links li');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 992) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
                document.body.classList.remove('menu-open');
            }
        });
    });

    const mapAnimations = () => {
        const mapItems = document.querySelectorAll('.map-item');

        const options = {
            threshold: 0.15,
            rootMargin: "0px 0px -100px 0px"
        };

        const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add('appear');
                    appearOnScroll.unobserve(entry.target);
                }
            });
        }, options);

        mapItems.forEach(mapItem => {
            mapItem.classList.add('fade-in');
            appearOnScroll.observe(mapItem);
        });
    };

    const setupMapGallery = () => {
        const mapImages = document.querySelectorAll('.map-image img');

        mapImages.forEach(img => {
            img.addEventListener('click', function () {
                const modal = document.createElement('div');
                modal.classList.add('image-modal');

                const modalImg = document.createElement('img');
                modalImg.src = this.src;

                const closeBtn = document.createElement('span');
                closeBtn.classList.add('close-modal');
                closeBtn.innerHTML = '&times;';

                modal.appendChild(closeBtn);
                modal.appendChild(modalImg);
                document.body.appendChild(modal);

                modal.addEventListener('click', function (e) {
                    if (e.target === modal || e.target === closeBtn) {
                        document.body.removeChild(modal);
                    }
                });
            });
        });
    };

    const mapFeatureEffects = () => {
        const features = document.querySelectorAll('.feature');

        features.forEach(feature => {
            feature.addEventListener('mouseenter', function () {
                this.classList.add('feature-hover');
            });

            feature.addEventListener('mouseleave', function () {
                this.classList.remove('feature-hover');
            });
        });
    };

    navSlide();
    mapAnimations();
    setupMapGallery();
    mapFeatureEffects();
});
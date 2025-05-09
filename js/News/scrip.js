document.addEventListener('DOMContentLoaded', function () {
    // burger
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

    // news filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const newsItems = document.querySelectorAll('.news-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Get selected category
            const category = button.getAttribute('data-category');

            // Filter news items
            newsItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Pagination
    const paginationLinks = document.querySelectorAll('.pagination a');

    paginationLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove active class from all pagination links
            paginationLinks.forEach(paginationLink => {
                paginationLink.classList.remove('active');
            });

            // Add active class to clicked link
            this.classList.add('active');

            // Here you would typically fetch and display the next page of news
            // For now, we'll just scroll to the top of the news section
            document.querySelector('.news-section').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Newsletter Subscription
    const newsletterForm = document.querySelector('.newsletter-form');
    const emailInput = document.querySelector('.newsletter-form input');

    newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Basic email validation
        const email = emailInput.value.trim();
        if (validateEmail(email)) {
            // Success message - in a real application, you would send this to a server
            alert('Thank you for subscribing to our newsletter!');
            emailInput.value = '';
        } else {
            // Error message
            alert('Please enter a valid email address');
        }
    });

    // Newsletter button click handler (since the HTML doesn't have a form submit)
    const subscribeButton = document.querySelector('.newsletter-form .btn');
    subscribeButton.addEventListener('click', function () {
        const email = emailInput.value.trim();
        if (validateEmail(email)) {
            alert('Thank you for subscribing to our newsletter!');
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address');
        }
    });

    // Email validation helper function
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});
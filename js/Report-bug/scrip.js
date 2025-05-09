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

    const form = document.getElementById('bugReportForm');
const successMessage = document.getElementById('form-success');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const server = document.getElementById('server').value;
    const bugCategory = document.getElementById('bugCategory').value;
    const bugDescription = document.getElementById('bugDescription').value.trim();

    if (username === "" || email === "" || server === "" || bugCategory === "" || bugDescription === "") {
        alert("Please fill all fields!");
        return;
    }

    if (username.includes(" ")) {
        alert("Username cannot contain spaces");
        return;
    }

    if (username.length < 8) {
        alert("Username must be at least 8 characters");
        return;
    }

    if (!email.endsWith("@gmail.com")) {
        alert("Email must end with @gmail.com");
        return;
    }

    const words = bugDescription.split(/\s+/);
    if (words.length < 5) {
        alert("Bug description must contain at least 5 words");
        return;
    }

    alert("Bug report submitted successfully!");
    form.style.display = 'none';
    successMessage.style.display = 'flex';
});


});
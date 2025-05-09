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

  const filterButtons = document.querySelectorAll('.filter-btn');
  const agentCards = document.querySelectorAll('.agent-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));

      button.classList.add('active');

      const selectedRole = button.getAttribute('data-role');

      agentCards.forEach(card => {
        if (selectedRole === 'all' || card.getAttribute('data-role') === selectedRole) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.8)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  const agentCardInners = document.querySelectorAll('.agent-card-inner');

  const isTouchDevice = () => {
    return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);
  };

  if (isTouchDevice()) {
    agentCardInners.forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('flipped');
      });
    });
  }

  const preloadImages = () => {
    const agentImages = document.querySelectorAll('.agent-card-front img');
    agentImages.forEach(img => {
      const src = img.getAttribute('src');
      if (src) {
        const newImg = new Image();
        newImg.src = src;
      }
    });
  };

  preloadImages();
});
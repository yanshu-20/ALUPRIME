document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileBtn = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.main-nav');

  if (mobileBtn && nav) {
    mobileBtn.addEventListener('click', () => {
      nav.classList.toggle('active');
      mobileBtn.classList.toggle('open');

      // Minimal animation for burger icon
      const spans = mobileBtn.querySelectorAll('span');
      if (mobileBtn.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.transform = 'none';
      }
    });
  }

  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Close mobile menu if open
        if (nav.classList.contains('active')) {
          nav.classList.remove('active');
          mobileBtn.classList.remove('open');
          const spans = mobileBtn.querySelectorAll('span');
          spans[0].style.transform = 'none';
          spans[1].style.transform = 'none';
        }

        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Header Scroll Effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.padding = '10px 0';
      header.style.backgroundColor = 'rgba(62, 39, 35, 0.98)';
    } else {
      header.style.padding = '20px 0';
      header.style.backgroundColor = 'rgba(62, 39, 35, 0.9)';
    }
  });
});

/* =========================================
   NAV: sticky style on scroll
========================================= */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* =========================================
   MENU TABS
========================================= */
const tabBtns  = document.querySelectorAll('.tab-btn');
const menuGrids = document.querySelectorAll('.menu-grid');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    menuGrids.forEach(g => g.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

/* =========================================
   CONTACT FORM (front-end only demo)
========================================= */

/* =========================================
   "TODAY" SCHEDULE CARD — dynamic day
========================================= */
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const today = days[new Date().getDay()];
const scheduleCards = document.querySelectorAll('.schedule-card');

scheduleCards.forEach(card => {
  const dayEl = card.querySelector('.day');
  if (!dayEl) return;
  const text = dayEl.textContent.trim().toLowerCase();
  // Remove hardcoded today class first
  card.classList.remove('today');
  dayEl.querySelectorAll('.today-badge').forEach(b => b.remove());

  if (text.includes(today.toLowerCase())) {
    card.classList.add('today');
    const badge = document.createElement('span');
    badge.className = 'today-badge';
    badge.textContent = 'Today';
    dayEl.appendChild(badge);
  }
});

/* =========================================
   SCROLL REVEAL (lightweight)
========================================= */
const revealEls = document.querySelectorAll(
  '.menu-card, .schedule-card, .review-card, .about-inner, .contact-grid'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

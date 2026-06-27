'use strict';

const header = document.querySelector('[data-header]');
const nav = document.querySelector('[data-nav]');
const navToggle = document.querySelector('[data-nav-toggle]');

const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 8);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

function closeNav() {
  nav?.classList.remove('open');
  navToggle?.classList.remove('open');
  navToggle?.setAttribute('aria-expanded', 'false');
  navToggle?.setAttribute('aria-label', 'Open navigation');
}

navToggle?.addEventListener('click', () => {
  const isOpen = !nav.classList.contains('open');
  nav.classList.toggle('open', isOpen);
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

nav?.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeNav();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeNav();
});

document.addEventListener('click', (event) => {
  if (nav?.classList.contains('open') && !nav.contains(event.target) && !navToggle.contains(event.target)) closeNav();
});

document.querySelectorAll('.accordion button').forEach((button) => {
  button.addEventListener('click', () => {
    const accordion = button.closest('.accordion');
    const isOpen = accordion.classList.toggle('open');
    button.setAttribute('aria-expanded', String(isOpen));
  });
});

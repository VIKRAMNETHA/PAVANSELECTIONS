// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('mobile-open'));
});

// English / Telugu toggle
const langButtons = document.querySelectorAll('.lang-toggle button');
const translatable = document.querySelectorAll('[data-en][data-te]');

function applyLang(lang) {
  translatable.forEach(el => {
    const text = el.getAttribute('data-' + lang);
    if (text !== null) el.innerHTML = text;
  });
  langButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
  document.documentElement.lang = lang;
  try { localStorage.setItem('pavan_lang', lang); } catch (e) {}
}

langButtons.forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

let savedLang = 'en';
try { savedLang = localStorage.getItem('pavan_lang') || 'en'; } catch (e) {}
if (savedLang === 'te') applyLang('te');

// Header background on scroll
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.25)';
  } else {
    header.style.boxShadow = 'none';
  }
});

// ── i18n ──────────────────────────────────────────────────────────────────────
function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.dataset.i18nAria;
    if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  try { localStorage.setItem('lang', lang); } catch (_) {}
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

const _savedLang = (() => {
  try { return localStorage.getItem('lang'); } catch (_) { return null; }
})();
const _defaultLang = _savedLang ||
  (navigator.language.startsWith('de') ? 'de' :
   navigator.language.startsWith('en') ? 'en' : 'it');
applyLanguage(_defaultLang);
// ──────────────────────────────────────────────────────────────────────────────

const nav = document.getElementById('nav');
window.addEventListener(
  'scroll',
  () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  },
  { passive: true },
);
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 55);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Accordion
document
  .querySelectorAll('.accordion-item.open .accordion-panel')
  .forEach((p) => {
    p.style.height = 'auto';
  });
document.querySelectorAll('.accordion-trigger').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const item = trigger.closest('.accordion-item');
    const panel = item.querySelector('.accordion-panel');
    const opening = !item.classList.contains('open');
    if (opening) {
      item.classList.add('open');
      trigger.setAttribute('aria-expanded', 'true');
      panel.style.height = panel.scrollHeight + 'px';
      panel.addEventListener(
        'transitionend',
        () => {
          panel.style.height = 'auto';
        },
        { once: true },
      );
      panel
        .querySelectorAll('.reveal:not(.visible)')
        .forEach((el) => observer.observe(el));
    } else {
      panel.style.height = panel.scrollHeight + 'px';
      panel.offsetHeight;
      panel.style.height = '0';
      item.classList.remove('open');
      trigger.setAttribute('aria-expanded', 'false');
    }
  });
});

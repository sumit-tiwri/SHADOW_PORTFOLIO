const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));
const revealTargets = document.querySelectorAll('.section-heading, .about-grid, .work-title-row, .project-card, .skills-layout, .timeline-item, .contact-kicker, .contact h2');
revealTargets.forEach(el => el.classList.add('reveal'));
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealTargets.forEach(el => observer.observe(el));

// Short particle-scan intro inspired by the supplied reference reel.
window.addEventListener('load', () => {
  const intro = document.querySelector('.intro-loader');
  if (intro) {
    window.setTimeout(() => intro.classList.add('done'), 1900);
    window.setTimeout(() => intro.remove(), 2800);
  }
});

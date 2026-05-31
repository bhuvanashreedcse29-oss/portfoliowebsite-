const observerOptions = {
  threshold: 0.15,
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal').forEach((section) => {
  revealObserver.observe(section);
});

const logoReveal = document.getElementById('logoReveal');
const hideLogoReveal = () => {
  if (!logoReveal) return;
  logoReveal.classList.add('hide');
  setTimeout(() => {
    logoReveal.remove();
  }, 900);
};

window.addEventListener('load', () => {
  setTimeout(hideLogoReveal, 2200);
});

const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');

const activeSection = () => {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute('id');
    const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach((link) => link.classList.remove('active'));
      navLink?.classList.add('active');
    }
  });
};

window.addEventListener('scroll', activeSection);
window.addEventListener('load', activeSection);

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => {
  nav.classList.toggle('open');
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});

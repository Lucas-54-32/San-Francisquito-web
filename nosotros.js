window.addEventListener('scroll', function () {
    const header = document.querySelector('header.navbar');

    // Activa el cambio de color tras bajar 20px
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Desplegable del menú hamburguesa en dispositivos móviles
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('nav-active');
        });
    }
});
let indiceActual = 0;
const track = document.getElementById('track');
const puntos = document.querySelectorAll('.punto');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const totalImagenes = puntos.length;

document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".fade-in-card, .timeline-item");

  if (!animatedElements.length) return;

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -50px 0px", // Se activa cuando asoma cerca del borde inferior
    threshold: 0.1
  };

  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => scrollObserver.observe(el));
});
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

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".fade-in-card");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2 // Se activa cuando el 20% de la tarjeta ingresa en pantalla
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Detiene la observación una vez mostrada
      }
    });
  }, observerOptions);

  cards.forEach(card => observer.observe(card));
});
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

// Función para actualizar la posición del carrusel y los puntos
function actualizarCarrusel() {
  track.style.transform = `translateX(-${indiceActual * 100}%)`;
  
  puntos.forEach((punto, i) => {
    punto.classList.toggle('activo', i === indiceActual);
  });
}

// Función para cambiar de imagen (1 para adelante, -1 para atrás)
function mover(direccion) {
  indiceActual += direccion;
  
  if (indiceActual >= totalImagenes) indiceActual = 0;
  if (indiceActual < 0) indiceActual = totalImagenes - 1;
  
  actualizarCarrusel();
}

// Event Listeners para las flechas de navegación
btnPrev.addEventListener('click', () => mover(-1));
btnNext.addEventListener('click', () => mover(1));

// Event Listeners para los puntos inferiores
puntos.forEach((punto) => {
  punto.addEventListener('click', (e) => {
    indiceActual = parseInt(e.target.getAttribute('data-indice'));
    actualizarCarrusel();
  });
});

// JavaScript (script.js)

// Función para desplazamiento suave
function smoothScroll(target) {
    const targetSection = document.querySelector(target);
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
}
  
// Agregar eventos de clic a los enlaces del menú de navegación
const navLinks = document.querySelectorAll('.menu a');
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      smoothScroll(link.getAttribute('href'));
    });
});

// Función para alternar la visibilidad de la descripción del proyecto
function toggleProjectDescription(projectId) {
    const projectDescription = document.querySelector(`#${projectId} .texto`);
    projectDescription.classList.toggle('show');
}
// Smooth Scroll - Desplazamiento suave al hacer clic en los enlaces del menú
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});

// Aparece efecto al desplazarse (Scroll Reveal)
const revealElements = document.querySelectorAll('section');

const revealOnScroll = () => {
    revealElements.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (sectionTop < viewportHeight - 100) {
            section.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);

// Iniciar el efecto en la carga inicial
revealOnScroll();

// Toggle de modo oscuro (Dark Mode)
const darkModeToggle = document.createElement('button');
darkModeToggle.innerText = '🌙 Modo Oscuro';
darkModeToggle.style.position = 'fixed';
darkModeToggle.style.bottom = '20px';
darkModeToggle.style.right = '20px';
darkModeToggle.style.padding = '10px 15px';
darkModeToggle.style.border = 'none';
darkModeToggle.style.borderRadius = '5px';
darkModeToggle.style.backgroundColor = '#0074D9';
darkModeToggle.style.color = 'white';
darkModeToggle.style.cursor = 'pointer';
darkModeToggle.style.zIndex = '1000';

document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.innerText = '☀️ Modo Claro';
        darkModeToggle.style.backgroundColor = '#333';
    } else {
        darkModeToggle.innerText = '🌙 Modo Oscuro';
        darkModeToggle.style.backgroundColor = '#0074D9';
    }
});

// Clase para el modo oscuro
const styleDarkMode = document.createElement('style');
styleDarkMode.innerText = `
    body.dark-mode {
        background: #121212;
        color: #f4f4f4;
    }
    body.dark-mode nav {
        background-color: #333;
    }
    body.dark-mode footer {
        background: #222;
    }
    body.dark-mode section {
        background: #1e1e1e;
        color: #f4f4f4;
    }
`;
document.head.appendChild(styleDarkMode);

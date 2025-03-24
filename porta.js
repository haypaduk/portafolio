document.addEventListener("DOMContentLoaded", () => {
    // Animación de desvanecimiento
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });
    elements.forEach(el => observer.observe(el));

    // Scroll suave a secciones
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", function () {
            const sectionId = this.textContent.toLowerCase().replace(" ", "-");
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Redirigir al portafolio al hacer clic en el botón "Ver Portafolio"
    const btnPortfolio = document.getElementById('btn-portfolio');
    if (btnPortfolio) {
        btnPortfolio.addEventListener('click', () => {
            console.log("Redirigiendo a portfolio.html"); // Verifica en la consola
            window.location.href = 'portfolio.html';
        });
    }

    // Animación del botón de contacto
    const contactLink = document.getElementById('contact-link');
    if (contactLink) {
        contactLink.addEventListener('click', function(event) {
            event.preventDefault();
            contactLink.classList.add('active');

            setTimeout(() => {
                contactLink.classList.remove('active');
                contactLink.querySelector('.animation-container').style.display = 'none';
                contactLink.querySelector('.complete-order').style.display = 'block';
            }, 2000); // Duración de la animación

            setTimeout(() => {
                window.location.href = contactLink.href;
            }, 3000); // Redirigir después de 3 segundos
        });
    }
});
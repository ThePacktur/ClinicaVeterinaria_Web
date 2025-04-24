document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para los enlaces del menú
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#citas') {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
                return;
            }
            
            const targetElement = document.querySelector(targetId);
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });

    // Formulario de citas
    const appointmentForm = document.getElementById('appointment-form');
    
    appointmentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validación básica
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const pet = document.getElementById('pet').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        
        if (!name || !email || !phone || !pet || !date || !time) {
            alert('Por favor, complete todos los campos obligatorios.');
            return;
        }
        
        // Simular envío del formulario
        alert(`¡Cita solicitada con éxito!\n\nNombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nMascota: ${pet}\nFecha: ${date}\nHora: ${time}`);
        
        // Resetear formulario
        appointmentForm.reset();
    });

    // Cambiar estilo del header al hacer scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    // Mostrar año actual en el footer
    const currentYear = new Date().getFullYear();
    document.querySelector('.footer-bottom p').textContent = `© ${currentYear} VetCare - Clínica Veterinaria. Todos los derechos reservados.`;
});
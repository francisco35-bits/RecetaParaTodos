document.addEventListener("DOMContentLoaded", () => {
    // Seleccionar todos los elementos con la clase 'animate__animated'
    const elements = document.querySelectorAll('.animate__animated');
  
    // Configuración del IntersectionObserver
    const observerOptions = {
      root: null, // Observar en relación con el viewport
      rootMargin: '0px', // Sin margen adicional
      threshold: 0.5 // El elemento se activará cuando esté al 50% en la vista
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        // Si el elemento es visible
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__visible'); // Hacerlo visible
          observer.unobserve(entry.target); // Dejar de observar una vez que se active
        }
      });
    }, observerOptions);
  
    // Observar los elementos seleccionados
    elements.forEach(element => {
      observer.observe(element);
    });
  });
  
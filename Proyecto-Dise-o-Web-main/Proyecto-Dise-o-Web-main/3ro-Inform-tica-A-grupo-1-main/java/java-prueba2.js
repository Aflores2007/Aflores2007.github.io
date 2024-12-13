window.addEventListener('load', function() {
    // Seleccionamos la imagen del teléfono y el texto
    const phoneImage = document.getElementById('phone-image');
    const heroText = document.getElementById('hero-text');

    // Añadimos las clases que activan las animaciones
    setTimeout(function() {
        phoneImage.parentElement.classList.add('visible');
    }, 500); // La imagen se mueve desde la esquina después de 500ms

    setTimeout(function() {
        heroText.parentElement.classList.add('visible');
    }, 1000); // El texto aparece desde abajo después de 1000ms
});


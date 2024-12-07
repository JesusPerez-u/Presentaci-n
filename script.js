
window.addEventListener('load', function() {
    const imagenesPequenas = document.querySelectorAll('.imagen-pequena');
    
    imagenesPequenas.forEach(function(imagen) {
        imagen.setAttribute('tabindex', '0');
        console.log('Tabindex añadido:', imagen);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const imagenesPequenas = document.querySelectorAll('.imagen-pequena');
    const imagenGrande = document.getElementById('imagen-grande');
    
    imagenesPequenas.forEach(function(imagen) {
        imagen.addEventListener('mouseover', function() {
            imagenGrande.src = this.src;
            imagenGrande.alt = this.alt;
        });
        imagen.addEventListener('focus', function() {
            imagenGrande.src = this.src;
            imagenGrande.alt = this.alt;
        });
        imagen.addEventListener('mouseleave', function() {
            imagenGrande.src = 'imagen1.jpg';  
            imagenGrande.alt = 'Lo veras';
        });
        imagen.addEventListener('blur', function() {
            imagenGrande.src = 'imagen1.jpg';  
            imagenGrande.alt = 'Lo veras';
        });
        imagen.setAttribute('tabindex', '0');
    });
});
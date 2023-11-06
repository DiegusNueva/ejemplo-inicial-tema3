// JavaScript para interactuar con los objetos mencionados
const abrirNuevaVentana = () => {
    window.open('https://www.tuniversformacion.es', '_blank');
}

const abrirMismaVentana = () => {
    window.open('https://www.tuniversformacion.es', '_self');
}

// Acceder a las propiedades de los objetos
document.getElementById('anchoVentana').textContent = window.innerWidth;
document.getElementById('urlActual').textContent = window.location.href;
document.getElementById('navegadorInfo').textContent = window.navigator.userAgent;
document.getElementById('numeroEnlaces').textContent = document.links.length;
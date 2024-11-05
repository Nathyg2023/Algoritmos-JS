// Seleccionar el botón y el párrafo por su ID
const boton = document.getElementById('miBoton');
const parrafo = document.getElementById('miParrafo');

// Agregar un escuchador de eventos para el evento 'click'
boton.addEventListener('click', () => {
    // Cambiar el contenido del párrafo al hacer clic en el botón
    parrafo.textContent = '¡El contenido del párrafo ha sido cambiado!';
});
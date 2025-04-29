//Events and Event Handling
//Manejo de eventos en JavaScript, incluyendo el registro de eventos y la propagación.


// Evento click con alerta
const botonAlerta = document.getElementById('miBoton');

botonAlerta.addEventListener('click', function(){
    alert('Click en el boton')
})

// Evento doble click con mensaje en cosola
const botonDobleClick = document.getElementById('miBotonDobleClick');

botonDobleClick.addEventListener('dblclick', function(){
    console.log('Hola desde el boton doble click')
})

// Evento de captura de formulario

const input = document.getElementById('miInput');

input.addEventListener('input', function(e){
    console.log('Escribiste:', e.target.value)
})


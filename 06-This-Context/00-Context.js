// Cómo funciona `this` según el contexto:

//1. En el contexto global (modo no estricto)

console.log(this); //---> En un navegador, esto mostrará "windows"

//Acá, `this` hace referencia al objeto global (window en navegadores, global en Node.js).


//2. Dentro de una función (modo no estricto)

function miFuncion() {
    console.log(this);
}

miFuncion(); //---> En modo no estricto, imprime "window" (o "global" en Node.js)

//En modo estricto (`'use strict'`), `this` dentro de funciones simples será `undefined`.

//3. Dentro de un método de un objeto

const persona = {
    nombre: 'Ana',
    saludar() {
        console.log(this.nombre);
    }
};

persona.saludar(); // Imprime "Ana"

//Aquí, this apunta al objeto que está invocando el método (persona).

// 4. Con funciones flecha (arrow functions)
// Las funciones flecha no tienen su propio this, sino que heredan el this del contexto donde fueron creadas.

const persona1 = {
    nombre: 'Ana',
    saludar: () => {
        console.log(this.nombre);
    }
};

persona1.saludar(); // `this` no es `persona`, es el contexto externo (probablemente `window`)

// 5. Con bind, call y apply
// Estos métodos permiten controlar manualmente el valor de this.

function saludar() {
    console.log(this.nombre);
}

const persona2 = { nombre: 'Luis' };

saludar.call(persona2); // "Luis"
saludar.apply(persona2); // "Luis"

const nuevaFuncion = saludar.bind(persona2);
nuevaFuncion(); // "Luis"


// 6. En eventos del DOM
// En manejadores de eventos tradicionales, this es el elemento HTML que disparó el evento.

document.getElementById('miBoton').addEventListener('click', function () {
    console.log(this); // El botón
});

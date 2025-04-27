// Funciones en JavaScript

//Definir funciones

function square(number) {
    return number * number;
}

// Llamar a la funcion

const result = square(5);
console.log(result); //---> Respuesta en consola: 25

// Expresiones Function

/*
Si bien la declaración de función anterior sintácticamente es una declaración, las funciones también se pueden crear mediante una expresión function.

Esta función puede ser anónima; no tiene por qué tener un nombre. Por ejemplo, la función square se podría haber definido como:

*/

const square1 = function (number) {
    return number * number;
}

let x = square(10);


// Ámbito en las funciones y la pila de funciones

/*
Una función que se llama a sí misma se conoce como una función recursiva. 
En cierto modo, la recursividad es análoga a un bucle. Ambas ejecutan el mismo código varias veces y ambas requieren una condición (para evitar un bucle infinito, o más bien, una recursividad infinita en este caso).

Por ejemplo, el siguiente bucle:

let x = 0;
while (x < 10) {
  // "x < 10" es la condición del bucle
  // hacer cosas
  x++;
}

Se puede convertir en una declaración de función recursiva como la siguiente:
*/

function loop(x) {
    if (x >= 10) {
        return;
    }
    console.log(x)
    loop(x + 1);
}

loop(0)


// Funciones anidadas y cierres

/*

Se puede anifar funciones dentro de otra función. La función anidada (interna) es privada de su función contenedora.
También forma un cierre. Un cierre es una expresión (comúnmente, una función) que puede tener variables libres junto con un entorno que une esas variables (que "cierra" la expresión).

Dado que una función anidada es un cierre, significa que una función anidada puede "heredar" los argumentos y variables de su función contenedora. En otras palabras, la función interna contiene el ámbito de la función externa.

*/

function addSquares(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}

a = addSquares(2, 3); //---> Devuelve 13
b = addSquares(3, 4); //---> Devuelve 25
c = addSquares(4, 5); //---> Devuelve 41

// -----------------------------------------------------Funciones anónimas-----------------------------------------------------

/*
Una función anónima es una función que no tiene ningún nombre. Estas funciones suelen definirse inline y pueden asignarse a una variable o pasarse como argumento a otra función.

Las funciones anónimas son útiles cuando se necesita una definición rápida de una función y no hay intención de reutilizarla en otra parte del código.

*/

var myFunction = function () {
    console.log("Esto es una función anónima")
}

myFunction(); // "Esto es una función anónima"


// Funciones anónimas para manejar eventos

document.querySelector("Button").addEventListener("click", function () {
    console.log("Button clicked!");
});

// -----------------------------------------------------Arrow Functions o Funciones Flecha-----------------------------------------------------

// Extructura de una arrow function

const add = (a, b) => {
    return a + b;
}

// Si la función es de una sola linea, se puede simplificar

const add1 = (a, b) => a + b;

// Si solo tiene un parámetro, podes sacar los paréntesis 

const square = a => a * a;

// Si no tiene parámetros, es necesario incluir paréntesis vacíos

const randomNumber = () => Math.random();
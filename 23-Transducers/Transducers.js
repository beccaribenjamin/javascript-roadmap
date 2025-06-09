// Tranducers en JavaScript

// Dado un arreglo de números
// 1 - Filtramos los números pares
// 2 - Los resultados obtenidos los multiplicamos por 2
// 3 - Sumamos todos los resultados

const numbers = [1,2,3,4,5,6,7,8,9,10];

console.log("--------------------Enfoque sin Transducers--------------------");

// 1- Filtramos los números pares

const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log('Numeros pares: ', evenNumbers);

// 2 - Los resultados obtenidos los multiplicamos por 2
const doubleEvenNumbers = evenNumbers.map( n => n * 2 );
console.log('El doble de los numeros pares', doubleEvenNumbers);

// 3 - Sumamos todos los resultados
const sumResults = doubleEvenNumbers.reduce((acc, n) => acc + n, 0);
console.log('La suma del doble de todos los números pares',sumResults);

console.log("--------------------Enfoque con Transducers--------------------");


// Primero definimos las funciones de transformación (transducers)
// Cada transducer toma una función de reducción (reducer) y devuelve una nueva función de reducción.

// Transducer para filtrar números pares
const filterEven = (reducer) => (acc, value) => {
    if (value % 2 === 0) {
        return reducer(acc, value);
    }
    return acc; // Si no es par, no se pasa al siguiente paso
};

// Transducer para multiplicar por 2
const mapDouble = (reducer) => (acc, value) => {
    return reducer(acc, value * 2);
};

// Función de composición: f(g(...args))
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

// El transducer compuesto:
// filterEven se aplica al resultado de mapDouble.
// Esto es filterEven(mapDouble(sumReducer))
const composedTransducer = compose(filterEven, mapDouble);

// Nuestra función de reducción final (para sumar)
const sumReducer = (acc, value) => acc + value;

// Aplicamos el transducer compuesto a la función de reducción final
const transducerReducer = composedTransducer(sumReducer);

// Usamos `reduce` con el transducerReducer
const sumWithTransducers = numbers.reduce(transducerReducer, 0);

console.log('La suma del doble de todos los números pares (con Transducers):', sumWithTransducers);

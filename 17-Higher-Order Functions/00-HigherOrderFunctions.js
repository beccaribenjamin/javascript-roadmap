// SUponiendo que tengo una lista número y quiero obtener solo los pares

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Puedo hacer sin HOF con un bucle for

function filtrarParesTradicional(arr) {
    const pares = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) { // Comprueba si es par
            pares.push(arr[i]);
        }
    }
    return pares;
}

const misParesTradicional = filtrarParesTradicional(numeros);
console.log("Pares (Tradicional):", misParesTradicional); // Salida: [2, 4, 6, 8, 10]


// Ahora con Higher Order Functions (HOF)
//JavaScript ya tiene una HOF llamada filter para esto. 
//Le pasamos una función (una "función de callback") que filter usará para decidir qué elementos incluir:

const misParesHOF = numeros.filter((num) => num % 2 === 0);

console.log("Pares (HOF con .filter()):", misParesHOF); // Salida: [2, 4, 6, 8, 10]

/*
¿Qué pasó acá?

- numeros.filter() es la Higher Order Function. Su trabajo principal es recorrer un array.
- filter acepta otra función como argumento: (numero) => numero % 2 === 0. Esta es la "función de callback".
- filter aplica tu función de callback a cada elemento del array.
- La función de callback ((numero) => numero % 2 === 0) le dice a filter si el elemento actual debe ser incluido en el nuevo array (si es true) o no (si es false).
- filter te devuelve un nuevo array con solo los elementos que pasaron tu prueba.


*/

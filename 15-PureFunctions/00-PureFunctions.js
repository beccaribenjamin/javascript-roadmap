// Creamos una purefunction

function multiplicarPorDos(numero){
    return numero * 2;
}

let miNumero = 5;

// Llamo a la función

let resultado1 = multiplicarPorDos(miNumero);
console.log(`El doble de ${miNumero} es ${resultado1}`);

// Si la llamamos otra vez con el mismo número, obtenemos el mismo resultado
let resultado2 = multiplicarPorDos(miNumero);
console.log(`De nuevo, el doble de ${miNumero} es ${resultado2}`); // Salida: De nuevo, el doble de 5 es 10

// Y lo más importante: la variable original 'miNumero' no ha cambiado
console.log(`Mi número original sigue siendo: ${miNumero}`); // Salida: Mi número original sigue siendo: 5
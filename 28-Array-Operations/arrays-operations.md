# Array Operations en JavaScript

## Método map()

El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

```js
let numbers = [1,5,10,15];
let doubles = numbers.map( n => n * 2 ) // Consola ---> [ 2, 10, 20, 30 ]
```

### Sintaxis del método map

var nuevo_array = arr.map(function callback(currentValue, index, array) {
    // Elemento devuelto de nuevo_array
}[, thisArg])

### Parámetros
- Callback
Función que producirá un elemento del nuevo array, recibe tres argumentos:

- CurrentValue
El elemento actual del array que se está procesando.

- Index
El índice del elemento actual dentro del array.

- Array
El array sobre el que se llama map.

- thisArg
Opcional. Valor a usar como this al ejecutar callback.

### Valor devuelto
Un nuevo array en la que cada elemento es el resultado de ejecutar callback.

## Método Filter()

El método `filter()` crea un nuevo array con todos los elementos que cumplan la condición implementada en cada una.

```js
const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result); // Consola --> [ 'exuberant', 'destruction', 'present' ]
```

### Sintaxis del método filter()

var newArray = arr.filter(callback(currentValue[, index[, array]])[, thisArg])

### Parámetros

- callback
Funcion que comprueba cada elemento del array para ver si cumple la condición y retorna `true` si el elemento la cumple o `false` en caso contrario.

Este callback acepta 3 parámetros:

- currentValue : Elemento actual del array que esta siendo procesado.
- index(opcional) : El índice del elemento actual del array que esta siendo procesado.
- array(opcional) : El array sobre el que se ha llamado `filter`.

- thisArg(opcional): Valor a utilizar como `this` cuando se ejecuta el callback.

### Ejemplo Práctico de Filter

Suponiendo que tenemos un listado de calificaciones de exámentes, todos los que sean menores de 60 signigica que no pasaron el examen.
El siguiente ejemplo usa `filter()` para crear un array filtrado que excluye a todo con valores inferiores a 60.

```js
let calificaciones = [45, 55, 27, 80, 65, 92, 75]
let filtrado = calificaciones.filter(c => c < 60)
console.log(filtrado) // Consola ---> [ 45, 55, 27 ]
```

## Método Reduce

EL método `reduce()` ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado de un único valor.

```js
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial); // Consola ---> 10
```

La función reductora recibe 4 argumentos:
1. Acumulador(acc)
2. Valor actual(cur)
3. Índice Actual(idx)
4. Array(src)

El valor devuelto de la función reductora se asigna al acumulador, cuyo valor se recuerda en cada iteración de la matriz y, en última instancia, se convierte en el valor final, único y resultante.

### Sintaxis 

arr.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial])

### Parámetros

- `callback`: Función a ejecutar sobre cada elemento del array (excepto para el primero, si no se proporciona valorInicial), que recibe cuatro parámetros:_ acumulador _ : El acumulador acumula el valor devuelto por la función callback. Es el valor acumulado devuelto en la última invocación de callback, o el valorInicial, si se proveyó. (Ver a continuación).

- `valorActual`: El elemento actual que está siendo procesado en el array.

- `índice`(Opcional): El índice del elemento actual que está siendo procesado en el array. Empieza desde el índice 0 si se provee valorInicial. En caso contrario, comienza desde el índice 1.

- `array`(Opcional): El elemento actual que está siendo procesado en el array.

- `valorInicial`(Opcional): Un valor a usar como primer argumento en la primera llamada de la función callback. Si no se proporciona el valorInicial, el primer elemento del array será utilizado y saltado. Llamando a reduce() sobre un array vacío sin un valorInicial lanzará un TypeError.



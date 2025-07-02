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


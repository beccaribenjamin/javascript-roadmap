# Pure Functions

## Qué son las PURE FUNCTIONS?

Para que una función se considere "pura" tiene que cumplir dos condiciones:

1. Salida Determinada (`Deterministic output`): 
    Para una misma entrada, la función siempre produce la misma salida.
    Si le pasas dos veces los mismos argumentos, obtendrás exactamente el mismo resultado, sin importar cuando o donde la llames.

2. Ausencia de efectos secundarios (`No Side Effects`):
    La función no modifica ningún estado fuera de su propio ámbito(`scope`). 
    Esto incluye:
        - No modificar variables globales.
        - No modificar argumentos de entrada (`mutación de datos`).
        - No realizar operaciones de I/O (`entrada/salida`), como imprimir en consola, hacer peticiones HTTP, interactuar con el DOM, o escribir en una base de datos o sistema de archivos.
        - No depende de datos mutables externos.


## Ventajas de las PURE FUNCTION

1. Facilidad de Pruba
2. Predicibilidad y Comprensión del Código
3. Depuración Simplificada
4. Reutilización del Código
5. Programación Concurrente
6. Memorización

### Ejemplo: 

```javascript
const memo = {};

function sumaLenta(a, b) {
  const key = `<span class="math-inline">\{a\}\-</span>{b}`;
  if (memo[key]) {
    console.log("Desde caché");
    return memo[key];
  }
  console.log("Calculando...");
  const result = a + b; // Simula una operación lenta
  memo[key] = result;
  return result;
}

console.log(sumaLenta(5, 7)); // Calculando... 12
console.log(sumaLenta(5, 7)); // Desde caché 12
```

## ¿Cuándo usar Pure Functions?
Idealmente, debes esforzarte por escribir la mayor cantidad posible de funciones puras en tu código. Esto aplica a:

✅Transformaciones de datos: Filtrar, mapear, reducir arrays; modificar propiedades de objetos sin alterar los originales.
✅Cálculos matemáticos: Sumas, restas, operaciones complejas, etc.
✅Validaciones: Comprobar si un valor cumple con ciertas reglas.

## ¿Cuándo no se pueden usar Pure Functions?
Es importante reconocer que no todo en una aplicación puede ser una pure function. Las aplicaciones necesitan interactuar con el mundo exterior. 
Operaciones como:
❌Hacer peticiones HTTP (AJAX)
❌Interactuar con el DOM (cambiar elementos HTML, escuchar eventos)
❌Guardar o leer de una base de datos
❌Generar números aleatorios
❌Obtener la fecha y hora actual

En resumen, las pure functions son bloques de construcción fundamentales en la programación funcional que promueven un código más confiable, fácil de mantener y de probar. Adoptar este paradigma te permitirá escribir JavaScript más robusto y comprensible.
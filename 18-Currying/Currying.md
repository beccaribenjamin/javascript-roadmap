# Currying en JavaScript

## ¿Qué es el Currying?

Transformar una función que que acepta multiples argumentos en una secuencia de funciones que toman un solo argumento cada una.
Esta tranformación permite una mayor reutilización del código, facilita la composición de funciones y mejora la legibilidad.\

Ejemplo sin currying:\

```javascript
function sumar(a,b){
    return a + b;
}

console.log(sumar(2,3)) // ---> Consola: 5
```

Ejemplo con currying:\

```javascript
function sumar(a){
    return function(b){
        return a + b
    }
}

console.log(sumar(2)(3)); // ---> Consola: 5
```

## 🚀 Ventajas del Currying

✅Permite crear funciones más específicas a partir de funciones más generales.\
✅Facilita la composición de funciones.\
✅Mejora la legibilidad del código cuando se trabaja con operaciones repetitivas.\


## 🧩 Currying vs Partial Application

Currying transforma una función para que tome un argumento a la vez.

Partial Application permite fijar algunos argumentos de una función, pero no necesariamente uno a la vez.

```javascript
function restar(a,b){
    return a - b;
}

function restarCinco(b){
    return restar(5,b)
}

console.log(restarCinco(2)); // ---> Consola: 3
```


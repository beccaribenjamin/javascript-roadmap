# Inmutability 

Principio de no modificar directamente los datos existentes, sino crear nuevas estructuras de datos.

## ¿Qué es la inmutabilidad?

La inmutabilidad se refiere a la propiedad de los datos que no pueden ser modificados una vez creado. Si quieres "cambiar" un dato inmutable, en realidad no lo cambias, sino que creas una nueva versión de ese dato con las modificaciones deseadas, dejando el original intacto.

## Inmutabilidad en JavaScript: Tipos Primitivos vs. Objetos/Arrays

En JavaScript, la inmutabilidad se manifiesta de manera diferente según el tipo de dato:

1. Tipos de Datos Primitivos: Inmutables por Naturaleza

Los tipos de datos primitivos en Javascript(string, number, boolena, null, undefined, symbol, bigint) son inherentemente inmutables. Cuando "modificas" una cadena, en realidad estas creando una nueva cadena.

```javascript
let nombre = "Alice";
nombre = nombre.toUpperCase(); // Crea una nueva cadena "ALICE", no mdofica la original

let edad = 30;
edad = edad + 1;
console.log(edad) 
```

2. Objetos y Arrays: Técnicas para la inmutabilidad

- El uso del `Spread Syntax`: es una forma común para crear copiad superficiales de objetos y arrays.
  - Para Arrays:
    ```javascript
    const originalArray = [1, 2, 3];
    const newArray = [...originalArray, 4]; // Agrega un elemento, creando un nuevo array
    console.log(originalArray); // [1, 2, 3]
    console.log(newArray);    // [1, 2, 3, 4]

    const arraySinDos = originalArray.filter(item => item !== 2); // Crea un nuevo array sin el 2
    console.log(originalArray); // [1, 2, 3]
    console.log(arraySinDos);   // [1, 3]
    ```
  - Para Objetos:
    ```javacript
    const originalObject = { a: 1, b: 2 };
    const newObject = { ...originalObject, c: 3 }; // Agrega una propiedad
    console.log(originalObject); // { a: 1, b: 2 }
    console.log(newObject);    // { a: 1, b: 2, c: 3 }

    const updatedObject = { ...originalObject, b: 20 }; // Actualiza una propiedad
    console.log(originalObject); // { a: 1, b: 2 }
    console.log(updatedObject);  // { a: 1, b: 20 }
    ```

## Conclusión

La inmutabilidad en JavaScript no es una característica forzada por el lenguaje, sino un patrón de diseño muy poderoso. Al adoptar el principio de "no modificar, sino crear nuevas estructuras", puedes construir aplicaciones más robustas, fáciles de razonar, mantener y depurar. Si bien hay una pequeña curva de aprendizaje y consideraciones de rendimiento en casos extremos, los beneficios a largo plazo suelen superar con creces estos inconvenientes, especialmente en el desarrollo de aplicaciones frontend complejas con React, Redux o similares.
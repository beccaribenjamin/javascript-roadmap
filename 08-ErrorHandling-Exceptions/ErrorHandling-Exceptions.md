# Error Handling (Manejo de errores)

El error handling consiste en detectar, controlar y responder adecuadamente cuando ocurre un error en tu código. JavaScript tiene un sistema de manejo de errores basado en excepciones, que se gestionan con las sentencias:

`try`

`catch`

`finally`

`throw`

## Estructura básica: `try...catch`

```javascript
try{
    //Código que puede causar un error
    let resultado = operacionPeligrosa();
    console.log(reultado)
} catch (error){
    //Manejar el error
    console.error("Ocurrio un error:", error.message);
} finally{
    //Siempre se ejecuta, haya o no error
    console.log("Finalizando operación")
}
```

## Lanzar errores personalizados: `throw`

Se pueden generar errores de manera personalizada con el uso del `throw`

```javascript
function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir por cero");
  }
  return a / b;
}

try {
  console.log(dividir(10, 0));
} catch (e) {
  console.error("Error:", e.message);
}
```

## El objeto `ERROR`

Cuando tenemos un error, JavaScript genera un objeto de tipo `Error`, que incluye propiedades como:

`message`: Descripción del error
`name`   : tipo de error (por ejemplo, TypeError, ReferenceError)
`stack`  : Traza de la pila (útil para depuración)

Ejemplo:

```javascript
catch (e) {
  console.log(e.name);    // TypeError, ReferenceError, etc.
  console.log(e.message); // Descripción del error
  console.log(e.stack);   // Stack trace
}
```


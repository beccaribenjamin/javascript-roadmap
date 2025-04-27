# Closures

Un closure es la combinación de una función agrupada (dentro de otra) con referencias a su estado adyacente (el entorno léxico). En otras palabras, un closure te da acceso al alcance de una función externa desde una función interna. En JavaScript, los closure se crean cada vez que se crea una función, en el momento de la creación de la función.

Ámbito léxico

Considerando el siguiente ejemplo:

```javascript
function init(){
    var name = "Mozilla"; 
    function displayName(){
        console.log(name)
    }
    displayName()
}

init()
```

init() crea una variable local llamada name y una función llamada displayName(). La función displayName() es una función interna que se define dentro de init() y está disponible solo dentro del cuerpo de la función init(). Tenga en cuenta que la función displayName() no tiene variables locales propias. Sin embargo, dado que las funciones internas tienen acceso a las variables de las funciones externas, displayName() puede acceder a la variable name declarada en la función principal, init().

En este ejemplo particular, el ámbito se denomina ámbito de función o alcance de la función, porque la variable es accesible y solo es accesible dentro del cuerpo de la función donde se declara.

Alcance con let y const

Tradicionalmente (antes de ES6), JavaScript solo tenía dos tipos de ámbitos: ámbito de la función y ámbito global. Las variables declaradas con var tienen un alcance de función o un alcance global, dependiendo de si se declaran dentro de una función o fuera de una función. Esto puede ser complicado, porque los bloques con llaves rizadas no crean ámbitos:

```javascript
if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
console.log(x);
```

En otros lenguajes como C o JAVA, donde los bloques crean ámbitos, el código anterior debería arrojar error en la linea del `console.log`, porque estamos fuera del alcance de X en cualquiera de los bloques. Pero en JavaScript, los bloques no crean ámbitos para `var`, las instrucciones var aquí en realidad crean una variable global. 

En ES6, JavaScript introdujo las declaraciones `let` y `const`, que, entre otras cosas, como zonas muertas temporales, le permiten crear variables de alcance de bloque

```JAVASCRIPT
if (Math.random() > 0.5) {
  const x = 1;
} else {
  const x = 2;
}
console.log(x); //ReferenceError: x no está definido
```


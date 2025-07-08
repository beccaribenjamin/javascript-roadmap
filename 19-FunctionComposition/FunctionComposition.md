# Function Composition

**Function Composition** es una técnica funcional que permite combinar funciones simples para construir operaciones más complejas. La idea es que el **output** de una función se convierta en el **input** de la siguiente, formando una cadena de ejecución.

## ¿Qué es la composición de funciones?

Componer funciones es como encadenarlas: el resultado de una función es pasado como argumento a otra función.  
Esto fomenta un código **modular**, **reutilizable** y **legible**.

### 📐 Definición clásica:
Dadas dos funciones `f` y `g`, la composición `f(g(x))` significa aplicar `g` a `x` y luego aplicar `f` al resultado.

### Ejemplo Básico:

```js
const sumar = x => x + 2;
const multiplicar = x => x * 3;

// Sin composition
const resultado = multipicar(sumar(5);) // 21

// f(g(x)) → multiplicar(sumar(5))

```

## 🔧 Función de composición (manual)

Creamos una función `compose` que recibe múltiples funciones y devuelve una función compuesta que las ejecuta de derecha a izquierda:

```js
const compose = (...fns) => x => {
    fns.reduceRight((valor, fn) => fn(valor), x);
}

// Uso

const resultado = compose(multiplicar, sumar)(5); // Consola ---> 21
```
⚠️ `reduceRight` aplica las funciones de derecha a izquierda: `sumar` luego `multiplicar`.


## 🔄 También podemos hacerlo con pipe (izquierda a derecha)

```js
const pipe = (...fns) => x =>
    fns.reduce((valor, fn) => fn(valor), x);

// Uso
const resultado = pipe(sumar, multiplicar)(5); // 21
```

## 🎯 Caso práctico

Supongamos que tenemos varias funciones para formatear un nombre:
```js
const trim = str => str.trim();
const toLower = str => str.toLowerCase();
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
```

Compisición para limpiar y formatear un nombre:

```js
const limpiarNombre = comspose(capitalize, toLower, trim)

console.log(limpiarNombre("   aNDRÉS  ")); // "Andrés"
```

## ✅ Beneficios
- Reutilización de código
- Funciones pequeñas y testeables
- Separación clara de responsabilidades
- Facilita la lectura cuando se usa con funciones puras

## 🧠 Nota final
Aunque JavaScript no tiene composición de funciones nativa como en lenguajes funcionales puros, podemos implementarla fácilmente usando reduceRight o reduce.
Bibliotecas como Lodash o Ramda también incluyen utilidades como _.flow() o R.compose() para este propósito.
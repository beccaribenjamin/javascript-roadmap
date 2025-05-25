# 🧱 ¿Qué es una Monad?
Una monad es un patrón de diseño funcional que permite encadenar operaciones dentro de un contexto, como:

- Posibles errores
- Valores faltantes
- Valores asincrónicos
- Efectos secundarios

Es una estructura envolvente (como un contenedor) que sigue reglas específicas y expone una interfaz (`map`, `flatMap` o `chain`) que facilita la composición sin perder el control del contexto.

## 📦 ¿Cómo se ve una monad en JS?
Una monad es una estructura que:

1. Encapsula un valor (of o return)

2. Permite aplicar funciones con .map() (como un functor)

3. Permite aplanar contextos anidados con .flatMap() o .chain()

```js
// Sintaxis típica
monad.of(valor)
    .map(fn1)
    .flatMap(fn2)
    .map(fn3);
```

## ¿Para qué sirve ?

- Encadenar funciones sin preocuparse de errores, nulls o promesas
- Representar flujos de datos complejos sin estructuras de control explícitas
- Mejorar la composición y modularidad del código
- Trabajar con efectos secundarios controlados

## Mondas VS Funtor

| Concepto                    | Functor  | Monad    |
| --------------------------- | -------- | -------- |
| `.map()`                    | ✅        | ✅        |
| `.flatMap()` / `.chain()`   | ❌        | ✅        |
| Aplana estructuras anidadas | ❌        | ✅        |
| Composición avanzada        | Limitada | Poderosa |


## 🧨 ¿Y qué pasa con Promises?
¡Las Promise en JavaScript son monads! Tienen .then() como equivalente a .flatMap(), permitiendo encadenamiento de operaciones asincrónicas:

```js
Promise.resolve(5)
    .then(x => x + 1)
    .then(x => x * 2)
    .then(console.log); // 12
```
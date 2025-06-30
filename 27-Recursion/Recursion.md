# Recursividad en JavaScript

## 🧠 ¿Qué es la recursividad?

La **recursividad** es una técnica de programación en la que la una función se llama a si misma para resolver subproblemas más pequeños de un problema original.

Una función resuriva tiene:
1. **Caso Base**: Cuando deja de llamarse a si misma.
2. **Caso Recursivo**: La llamada a si misma con una entrada simple.

## El famoso caso de Fibonacci

La secuencia de Fibonacci es una serie de números en la que cada número en la suma de los dos anteriores.
Se ve tal que asi:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
fib(0) = 0
fib(1) = 1
fib(n) = fib(n-1) + fib(n-2) // para n > 1

## 🧪 Implementación recursiva en JavaScript

```js
function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // 8
```

## ⚠️ Desventaja: ¡Cuidado con el rendimiento!
La versión recursiva simple de Fibonacci es muy intuitiva, pero ineficiente. Calcula muchas veces los mismos valores.

Por ejemplo, fibonacci(40) puede tomar varios segundos sin optimización, porque hace miles de llamadas.

## Soluciones para mejorar el rendimiento de la recursividad

1. Memorización (Almacenar resultados intermedios)

```js
function fibonacciMemo(n, memo = {}){
    if(n in memo) return memo[n];
    if( n === 0 ) return 0;
    if( n === 1 ) return 1;

    memo[n] = fibonacciMemo(n-1, memo) + fibonacciMemo(n-2, memo);
    return meomo[n];
}
```
2. Versión iterativa(sin recusividad)

```js
function fibonacciIterativo(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let prev = 0, curr = 1;
    for (let i = 2; i <= n; i++) {
        [prev, curr] = [curr, prev + curr];
    }
    return curr;
}
```

// Currying

// ---------------------------------------------------Caso práctico 1: Calcular el Área de un Rectángulo---------------------------------------------------
// Area de un Rectángulo = base * altura

function area(base){
    return function(altura){
        return base * altura
    }
}

const areaConBase15 = area(15)
console.log(areaConBase15(5)) // Consola ---> 75
console.log(area(20)(10));    // Consola ---> 200

// ✅ Ventaja: podemos reutilizar areaConBase10 si siempre usamos una base de 10, y solo cambiamos la altura.

// ----------------------------------------------- Caso Práctico 2: Currificar una función de 4 argumentos -----------------------------------------------

// Teniendo una función que recibe 4 argumentos, podemos currificarla para que reciba uno a la vez.
// En este caso, la función representa un pedido.

function crearPedido(cliente, producto, cantidad, precio){
    return `El cliente ${cliente}, compró ${cantidad} unidades de ${producto} a un precio de ${precio} cada una.`
}

// 🔁 Currificación automática (genérica)
// Podemos crear una función genérica que tome cualquier función y la currifique automáticamente:

function curry(fn){
    return function curried(...args){
        if(args.length >= fn.length){
            return fn.apply(this, args);
        } else {
            return function(...nextArgs){
                return curried.apply(this, args.concat(nextArgs));
            }
        }
    }
}

// Aplicamos currificación a la función crearPedido

const crearPedidoCurriedAuto = curry(crearPedido)

// Ejemplo de uso
const pedido = crearPedidoCurriedAuto('Juan')('Cafe')('3')('4.50');
console.log(pedido)  // Consola ---> El cliente Juan, compró 3 unidades de Cafe a un precio de 4.50 cada una.



// 🛠️ Currificación manual
// Convertimos la función crearPedido en una versión currificada manualmente:

function crearPedidoCurriManual(cliente){
    return function(producto){
        return function(cantidad){
            return function(precio){
                return `El cliente ${cliente}, compró ${cantidad} unidades de ${producto} a un precio de ${precio} cada una.`;
            }
        }
    }
}

// Ejmeplo de uso

const pedido2 = crearPedidoCurriManual("Lucía")("Café")("3")("2.50");
console.log(pedido2); // Consola ---> El cliente Lucía, compró 3 unidades de Café a un precio de 2.50 cada una.




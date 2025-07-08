//Exception Handling
//Manejo de errores

/*
¿Qué es el Exception Handling?

Es la forma en la que manejamos errores en tiempo de ejecución, para que el programa no se detenga y pueda continuar ejecutándose.
*/

//Bloques Básicos de Excepciones TRY - CATCH - FINALLY

/*
Estructura de un bloque try-catch-finally

try {
    //Código que puede lanzar una excepción o error
} catch (error){
    //Código que se ejecuta si se produce una excepción
} finally{
    //Código que se ejecuta siempre, ya sea que se produzca una excepción o no
}

*/

try {
    let resultado = 10 / 0; //No dara error, pero si un warning
    console.log(resultado);
    noExiste() // ---> Esta funcion no existe y lanzará un error 
} catch (error) {
    console.error("Ocurrio un error:", error.message); // ---> Ocurrio un error: noExiste is not defined
} finally {
    console.log("Fin del bloque try-catch");
}

/*
¿Qué es un error en JavaScript?
En JS los errores son objetos. Todos heredan de Error. Los más comunes:

--->    Error – genérico

--->    TypeError – tipo inválido

--->    ReferenceError – variable no definida

--->    SyntaxError – error de sintaxis (usualmente en eval o dinámico)
*/

/*

Utilizarlo con async/await
Cuando usás async/await, los errores también deben manejarse con try/catch:

*/

const obtenerDatos = async(url) => {
    try{
        const res = await fetch(url)
        if(!res.ok){
            throw new Error("No se pudo obtener los datos")
        }
        const data = await res.json();
        console.log(data);
    }catch(error){
        console.error("Error al obtener datos:", error.message);
    }
}

//Caso de éxito
obtenerDatos("https://jsonplaceholder.typicode.com/todos/1"); 
// ---> En este caso como se logro obtener los datos, no se ejecuta el catch ---> 
// Respuesta: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }

//Caso de error
obtenerDatos("https://jsonplaceholder.typicode.com/todos/450"); 
//---> Intenta primero traer el dato, pero como no existe, lanza un error y se ejecuta el catch
// Respuesta: {}


/**
 * NOTAS: Timpos de ejecucion
 * Descubrí que el error del caso de error se ejecuta antes que el caso de éxito.
 * Motivos:
 * 1 - Estoy ejecutando ambas funciones asincronicas al mismo tiempo.
 * 2 - El caso de error se ejecuta antes porque no tiene que buscar ni que contruir nada. Simplemente devuelve un objeto vacio.
 * 3 - El caso de éxito se ejecuta despues porque tiene que buscar, construir y devolver un objeto.
 * 4 - Puedo forzar que se ejecute primero una y luego la otra usando async/await
 */

// Forzando el orden de ejecucion

const forzarOrden = async() => {
    await obtenerDatos("https://jsonplaceholder.typicode.com/todos/1");
    await obtenerDatos("https://jsonplaceholder.typicode.com/todos/450");
}

forzarOrden();

// Esto funciona igual, la diferencia es que si o si se va a ejecutar primero el caso de éxito y luego el de error.



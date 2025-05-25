/*🎯 Caso práctico: Validar datos de usuario (nombre y edad) de forma segura
Objetivo
Procesar datos que pueden venir incompletos o inválidos.

Encapsularlos en una estructura segura (Maybe).

Encadenar validaciones sin romper el flujo.

Evitar null, undefined, try/catch, etc.

*/

//  Crear el functor Maybe

class Maybe {
    constructor(valor){
        this.valor = valor;
    }

    static of(valor){
        return new Maybe(valor)
    }

    isNothing(){
        return this.valor === null || this.valor === undefined;
    }

    map(fn){
        return this.isNothing() ? this : Maybe.of(fn(this.valor));
    }

    toString(){
        return this.isNothing() ? 'Maybe(null)' : `Maybe(${this.valor})`;
    }

}

// Crear funciones de validación

const trim = str => str.trim();
const toTitleCase = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
const isAdult = age => age >= 18;

// Caso Real -- Usuario

const usuarioCrudo = {
    nombre: "   aNDReA  ",
    edad: 21
};

const nombreValidado = Maybe.of(usuarioCrudo.nombre)
    .map(trim)
    .map(toTitleCase);

const edadValidada = Maybe.of(usuarioCrudo.edad)
    .map(edad => edad + 1) // imaginemos que es un usuario que cumple años mañana
    .map(isAdult);

console.log("Nombre limpio:", nombreValidado.toString()); // Maybe(Andrea)
console.log("¿Es adulta?", edadValidada.toString());      // Maybe(true)

// ¿Que apsa si los datos vienne mal?
const usuarioIncompleto = {
    nombre: null,
    edad: undefined
};

const nombreFallo = Maybe.of(usuarioIncompleto.nombre)
    .map(trim)
    .map(toTitleCase);

const edadFallo = Maybe.of(usuarioIncompleto.edad)
    .map(isAdult);

console.log("Nombre limpio:", nombreFallo.toString()); // Maybe(null)
console.log("¿Es adulta?", edadFallo.toString());      // Maybe(null)

/*
🧠 Conclusión
Maybe evita errores cuando los datos no existen.

No usamos if ni try/catch, solo encadenamos funciones.

Podemos transformar valores con .map() solo si existen.

Muy útil en pipelines de procesamiento de formularios, inputs, JSONs de APIs, etc.
*/
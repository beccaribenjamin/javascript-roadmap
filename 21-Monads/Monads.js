/*🎯 Caso práctico: Procesar datos de usuario desde una API
💡 Escenario
Supongamos que una API devuelve datos de un usuario, pero no todos los campos son seguros (pueden venir como null, undefined, vacíos, etc.).

Queremos:

Leer los datos

Normalizar (ej: limpiar el nombre, validar edad)

Encadenar transformaciones

Evitar errores si algo falta

No usar if, try/catch, ni ?. en cada paso

*/

// Implementación con Maybe

class Maybe {
    constructor(valor) {
        this.valor = valor;
    }

    static of(valor) {
        return new Maybe(valor);
    }

    isNothing() {
        return this.valor === null || this.valor === undefined;
    }

    map(fn) {
        return this.isNothing() ? this : Maybe.of(fn(this.valor));
    }

    flatMap(fn) {
        return this.isNothing() ? this : fn(this.valor);
    }

    getOrElse(defaultValue) {
        return this.isNothing() ? defaultValue : this.valor;
    }

    toString() {
        return this.isNothing() ? 'Maybe(null)' : `Maybe(${this.valor})`;
    }
}

// Ejemplo de respuesta de la API

const apiResponse = {
    user: {
        name: "   soFIA   ",
        age: 17,
        email: null
    }
};

// Funciones auxiliares para normalizar datos
const trim = str => str.trim();
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
const isAdult = age => age >= 18;

// Procesamos los datos

const usuario = Maybe.of(apiResponse.user);

// Nombre limpio
const nombre = usuario
    .map(user => user.name)
    .map(trim)
    .map(capitalize)
    .getOrElse("Nombre desconocido");

console.log("Nombre:", nombre); // Sofia

// Edad válida
const esMayor = usuario
    .map(user => user.age)
    .map(isAdult)
    .getOrElse(false);

console.log("¿Es mayor de edad?", esMayor); // false

// Email si existe
const email = usuario
    .map(user => user.email)
    .map(trim)
    .getOrElse("Sin email");

console.log("Email:", email); // Sin email

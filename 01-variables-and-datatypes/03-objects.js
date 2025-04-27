// Objetos ---> Coleccion de varios datos y entidades más complejas.

// Declarar un objeto vacio:
// let user = new Object();
// let user2 = {}

// Literales y propiedades de los objetos:

let user = {
    name: 'Carlos',
    age: 27,
    isAdmin: true,
}

// Puedo añadir propiedades a los objetos:

user.lastName = 'Sanchez'

console.log(user) //{ name: 'Carlos', age: 27, isAdmin: true, lastName: 'Sanchez' }

// Puedo eliminar propiedades de los objetos:

delete user.isAdmin

console.log(user) //{ name: 'Carlos', age: 27, lastName: 'Sanchez' }


// ------------------------------------------------Cosas a tener en cuenta con los objetos:------------------------------------------------
// Manejo de propiedades de mas de una palabra:
//Vamos añadir si a Carlos le gustan videojuegos:

//user.likesVideoGames = true; // ❌ Esto no funciona
user["likes video games"] = true; // ✅ Esto si funciona

console.log(user) //{ name: 'Carlos', age: 27, lastName: 'Sanchez', "likes video games": true }

// Limitaciones con los nombres de las propiedades:
//Como ya sabemos, una variable no puede tener un nombre igual a una de las palabras reservadas por el lenguaje como “for”, “let”, “return” etc.
//Pero para una propiedad de objeto, no existe tal restricción:

//Ejemplo:
let obj = {
    for: 1,
    let: 2,
    return: 3
};

// Operador In para verificar si una propiedad existe en un objeto:

console.log("name" in user) // ---> True
console.log("altura" in user) // ---> False

// For in para recorrer las propiedades de un objeto:

for( let key in user ){
    console.log(`${key}: ${user[key]}`)
}


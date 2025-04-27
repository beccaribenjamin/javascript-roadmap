//----------------------------- Tipos de datos primitivos -----------------------------
// Si yo quiero saber el tipo de dato de una variable, puedo hacer uso del operador typeof
// typeof --> Devuelve el tipo de dato de una variable

// Number ---> Numeros enteros y decimales

let edad = 30
let altura = 1.72
let ingresos = 10000

console.log(typeof edad)      //--->Respuesta por consola: number
console.log(typeof altura)    //--->Respuesta por consola: number
console.log(typeof ingresos)  //--->Respuesta por consola: number

// String ---> Cadenas de texto

let pais = "Argentina"
let estado = "Trabajando"

console.log(typeof pais) // string
console.log(typeof estado) // string

// Boolean ---> Valores booleanos (true o false) - (0 y 1) - (verdadero o falso)

let estaTrabajando = true
let estaEstudiando = false

console.log(typeof estaTrabajando) // boolean
console.log(typeof estaEstudiando) // boolean


// Null ---> Valores nulos
// Los valores nulos para una variable son valores que no tienen un valor definido


let variableNula = null

console.log(typeof variableNula) // object

// Undefined
// Los valores undefined se dan cuando una variable esta declarada pero no tiene un valor definido
// Scope o Ámbito
//Si tengo una función con una variable no puedo acceder a dicha variable desde fuera de la función

function exampleFunction(){
    let valor = "Declarada dentro de la función";
    console.log("Función Interna", valor);
}

//console.log(valor) //---> ❌ReferenceError: valor is not defined

// Pero si yo declaro la variable en el ámbito global, puedo acceder a ella desde cualquier parte del código

let saludo = "Hola soy una variable global";

function exampleFunction2(){
    console.log("Función Interna", saludo);
}

exampleFunction2(); //---> Hola soy una variable global

// Hoisting

// "Mueve" las declaraciones al principio del scope antes de ejecutar el código

console.log(a) //---> undefined (No da error)
var a = 5;

// JavaScrip lo interpreta de la siguente manera;

var a;
console.log(a) //undefined
a = 5;


// Hoisting en funciones

saluda(); // ✅ "Hola"

function saluda() {
    console.log("Hola");
}

//Pero con las funciones flechas o asignadas a una variable, esto no funciona

saluda2(); // ❌ Error: Cannot access 'saluda2' before initialization
const saluda2 = () => console.log("Hola funcion flecha");
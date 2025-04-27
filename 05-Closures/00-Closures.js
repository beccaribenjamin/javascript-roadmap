// -----------------------------------------------------Closures-----------------------------------------------------
// Closure te da acceso al alcance de una función externa desde una función interna.

function init(){
    var name = "Mozilla";   //variable local
    function displayName(){ //función interna que forma el closure
        console.log(name)   // usa la variable declarada en la función podre
    }
    displayName()
}

init()

//Ejemplo básico:

function crearContador(){
    let contador = 0;
    return function(){
        contador ++;
        console.log(contador)
    };
}

const contar = crearContador();

contar();
contar();
contar();
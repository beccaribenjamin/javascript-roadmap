// Control de Flujo: es una estructura de control que permite ejecutar un bloque de código en función de una condición.

// If Else

let edad = 18;

if(edad >= 18){
    console.log("Eres mayor de edad")
}else{
    console.log("Eres menor de edad")
}

// If Else If

let dinero = 5000;

if( dinero >= 10000){
    console.log("Puedes comprar un coche")
}else if(dinero >= 5000){
    console.log("Puedes comprar una moto")
}else{
    console.log("No tienes dinero")
}

// Switch

let dia = 1;

switch(dia){
    case 1:
        console.log("Lunes")
        break;
    case 2:
        console.log("Martes")
        break;
    case 3:
        console.log("Miercoles")
        break;
    case 4:
        console.log("Jueves")
        break;
    case 5:
        console.log("Viernes")
        break;
    case 6:
        console.log("Sabado")
        break;
    case 7:
        console.log("Domingo")
        break;
    default:
        console.log("No es un dia valido")
}
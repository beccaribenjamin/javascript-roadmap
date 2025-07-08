// Loop: es una estructura de control que permite ejecutar un bloque de código repetidamente.

// Bucle FOR: 
//Estructura: for(valor inicial; condicion; incremento){codigo a ejecutar}
//Ejemplo: Contar del 0 al 10 inclusive 
for(let i = 0; i <=10 ; i++){
    console.log("Bucle For contador i:" + i)
}
//Ejemplo: Hacer una cuenta regresiva del 10 al 0
for(let i = 10; i >= 0 ; i--){
    console.log("Bucle For cuenta regresiva i:" + i)
}

//Bucle While
//Estructura: while(condicion){codigo a ejecutar}

let contador = 0;

while(contador <= 10){
    console.log("Bucle While Contador:" + contador)
    contador++;
}

//Bucle Do While
//Estructura: do{codigo a ejecutar}while(condicion)

let contador2 = 0;

do{
    console.log("Bucle Do While Conteo:" + contador2);
    contador2++;
}while(contador2 <= 10)

//Bucle For of
//Estructura: for(variable of iterable){codigo a ejecutar}

let array = [1,2,3,4,5];

for(let i of array){
    console.log("Bucle For of:" + i)
}

//Bucle For in
//Estructura: for(variable in objeto){codigo a ejecutar}

let array2 = [1,2,3,4,5];

for(let i in array2){
    console.log("Bucle For in:" + i)
}

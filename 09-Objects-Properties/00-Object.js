class Persona {
    constructor(nombre, edad, altura, peso, ingresos, ocupacion){
        this.nombre = nombre;
        this.edad = edad;
        this.altura = altura;
        this.peso = peso;
        this.ingresos = ingresos;
        this.ocupacion = ocupacion;
    }
    calcularIMC(){
        return this.peso / (this.altura * 2);
    }
    esMayorDeEdad(){
        return this.edad >= 18;
    }
    tieneOcupacion(){
        return this.ocupacion !== undefined;
    }
    gananciasAnuales(){
        return this.ingresos * 12;
    }
}

const juan = new Persona("Juan", 35, 1.82, 80, 1500, "Desarrollador");

console.log(juan.calcularIMC());
console.log(juan.esMayorDeEdad());
console.log(juan.tieneOcupacion());
console.log(juan.gananciasAnuales());


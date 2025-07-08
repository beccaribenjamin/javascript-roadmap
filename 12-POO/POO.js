// Caso Práctico: Sistema de Gestión de Vehículos

/*
Imaginemos que estamos desarrollando un sistema que gestiona distintos tipos de vehículos. 
Cada vehículo tiene características comunes, pero también comportamientos específicos según su tipo (Auto, Moto, Camión, etc.)
*/

// 📦 Encapsulación
// Encapsulamos las propiedades como marca, modelo y año para que solo sean accesibles a través de métodos públicos.

class Vehiculo {
    #marca;
    #modelo;
    #ano;

    constructor(marca, modelo, ano) {
        this.#marca = marca;
        this.#modelo = modelo;
        this.#ano = ano;
    }

    getInfo() {
        return `Marca: ${this.#marca}, Modelo: ${this.#modelo}, Año: ${this.#ano}`;
    }


}

// 🧬 Herencia
// Creamos subclases como Auto y Moto que extienden de Vehiculo.

class Auto extends Vehiculo {
    constructor(marca, modelo, ano, puertas) {
        super(marca, modelo, ano);
        this.puertas = puertas;
    }

    getInfo() {
        return `${super.getInfo()} - Puertas: ${this.puertas}`;
    }
}

class Moto extends Vehiculo {
    constructor(marca, modelo, ano, tipo) {
        super(marca, modelo, ano);
        this.tipo = tipo;
    }

    getInfo() {
        return `${super.getInfo()} - Moto tipo: ${this.tipo}`;
    }
}

// 🧩 Polimorfismo

// Usamos polimorfismo para tratar todos los vehículos de forma uniforme y permitir que cada uno responda a getInfo() de manera distinta.

const vehiculos = [
    new Auto("Toyota", "Corolla", 2020, 4),
    new Moto("Yamaha", "MT-07", 2021, "Deportiva"),
    new Auto("Ford", "Focus", 2018, 5),
]

vehiculos.forEach(vehiculo => { 
    console.log(vehiculo.getInfo());
})

/*
Salida:
Marca: Toyota, Modelo: Corolla, Año: 2020 - Puertas: 4
Marca: Yamaha, Modelo: MT-07, Año: 2021 - Moto tipo: Deportiva
Marca: Ford, Modelo: Focus, Año: 2018 - Puertas: 5
*/
/*
✅ Beneficios de aplicar OOP aquí
Reutilización de código: gracias a la herencia.

Mantenibilidad: al encapsular los datos, protegemos la integridad del objeto.

Flexibilidad: el polimorfismo nos permite trabajar con múltiples tipos de vehículos sin cambiar la lógica principal.
*/
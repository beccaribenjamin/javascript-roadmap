// Prototypes y Herencia en JavaScript

// Herencia con funciones constructoras

function Animal(nombre) {
    this.nombre = nombre;
}

Animal.prototype.hacerSonido = function () {
    console.log(`${this.nombre} hace un sonido`);
}

function Perro(nombre) {
    Animal.call(this, nombre); // Hereda las propiedades de Animal
}

// Hereda Métodos

Perro.prototype = Object.create(Animal.prototype);
Perro.prototype.constructor = Perro;

Perro.prototype.ladrar = function () {
    console.log(`${this.nombre} dice guau guau!`)
}

const miPerro = new Perro('Rex');
miPerro.hacerSonido(); // Rex hace un sonido
miPerro.ladrar();      // Rex dice guau guau!


// Herencia con clases (syntactic sugar)
// Desde ES6, se puede usar class y extends para una sintaxis más clara, pero debajo sigue siendo prototípica.

class AnimalClass {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hacerSonido() {
        console.log(this.nombre + " hace un sonido");
    }
}

class PerroClass extends AnimalClass {
    ladrar() {
        console.log(this.nombre + " dice guau!");
    }
}

const dog = new Perro("Luna");
dog.hacerSonido(); // "Luna hace un sonido"
dog.ladrar();      // "Luna dice guau!"


// Visualizando la cadena de prototipos

console.log(dog instanceof Perro);  //---> true
console.log(dog instanceof Animal); //---> true

console.log(Object.getPrototypeOf(dog) === Perro.prototype); //---> true
console.log(Object.getPrototypeOf(Perro.prototype) === Animal.prototype); // true
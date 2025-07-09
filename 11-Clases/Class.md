# Clases en JavaScript (ES6+)
- ## 📌 ¿Qué es una clase?
  
  Una clase es una plantilla para crear objetos. Define las propiedades (atributos) y métodos que tendrán los objetos creados a partir de ella.
  
  Es azúcar sintáctico (syntactic sugar) sobre el sistema de herencia prototípica de JavaScript.
- ## 🔑 Palabras clave importantes
- `class` : Define una clase
- `constructor` : Método especial para inicializar el objeto.
- `extends` : Permite que una clase herede de otra.
- `super` : Llama al constructor o métodos de la clase padre.
- ## Ejemplo Básico de Clase
  
  ```javascript
  class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad   = edad;
    }
  
    saludar(){
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`).
    }
  }
  
  const juan = new Persona("Juan", 30);
  juan.saludar(); //Hola, soy Juan y tengo 30 años.
  ```
- ## Herencia con `extends` y `super`
  
  ```javascript
  class Empleado extends Persona {
  constructor(nombre, edad, puesto) {
    super(nombre, edad); // Llama al constructor de Persona
    this.puesto = puesto;
  }
  
  trabajar() {
    console.log(`${this.nombre} está trabajando como ${this.puesto}.`);
  }
  }
  
  const ana = new Empleado("Ana", 25, "Desarrolladora");
  ana.saludar();  // Heredado de Persona
  ana.trabajar(); // Método propio
  ```
- ## Características de las clases
- Los métodos definidos en una clase se agregan al prototipo (prototype) de la clase, no al objeto directamente.
- Las clases pueden tener solo un constructor.
- Puedes usar getters, setters y métodos estáticos.
- ## 🔧 Getters, Setters y Métodos Estáticos
  
  ```javascript
  class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this._precio = precio;
  }
  
  get precio() {
    return `$${this._precio}`;
  }
  
  set precio(nuevoPrecio) {
    if (nuevoPrecio > 0) this._precio = nuevoPrecio;
  }
  
  static info() {
    console.log("Esta es la clase Producto");
  }
  }
  
  const libro = new Producto("JavaScript Pro", 40);
  console.log(libro.precio); // $40
  libro.precio = 50;
  console.log(libro.precio); // $50
  
  Producto.info(); // Método estático
  ```
- ## 🔍 instanceof y prototype con clases
  
  ```javascript
  console.log(libro instanceof Producto); // true
  console.log(Object.getPrototypeOf(libro) === Producto.prototype); // true
  ```
- # ✅ Resumen
- Usa class para definir una clase.
- Usa extends para heredar de otra clase.
- Usa super() para llamar al constructor o métodos de la clase padre.
- Los métodos van al prototipo automáticamente.
- Puedes usar get, set y static para comportamientos avanzados.
-
- [[Object]]
# Programación Orientada a Objetos en JavaScript

Este documento es una guía práctica para entender los tres pilares fundamentales de la Programación Orientada a Objetos (OOP) aplicados en JavaScript: **Encapsulación**, **Herencia** y **Polimorfismo**.

---
- ## 🔐 Encapsulación
  
  La encapsulación es el proceso de ocultar detalles internos de un objeto y exponer solo lo necesario. En JavaScript, se puede lograr usando clases y modificadores de acceso como `#` para campos privados.
  
  ```javascript
  class Persona {
  #nombre;
  
  constructor(nombre) {
    this.#nombre = nombre;
  }
  
  getNombre() {
    return this.#nombre;
  }
  
  setNombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }
  }
  
  const p1 = new Persona("Carlos");
  console.log(p1.getNombre()); // Carlos
  p1.setNombre("Ana");
  console.log(p1.getNombre()); // Ana
  ```
- # 🧬 Herencia
  
  La herencia permite que una clase herede propiedades y métodos de otra, reutilizando código y promoviendo la jerarquía de clases.
  
  ```javascript
  class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }
  
  hacerSonido() {
    console.log("Algún sonido genérico");
  }
  }
  
  class Perro extends Animal {
  hacerSonido() {
    console.log("Guau guau");
  }
  }
  
  const miPerro = new Perro("Fido");
  miPerro.hacerSonido(); // Guau guau
  ```
- # 🧩 Polimorfismo
  
  El polimorfismo permite que objetos de diferentes clases respondan al mismo método de distintas maneras. Se logra usualmente con herencia y sobreescritura de métodos.
  
  ```javascript
  class Gato extends Animal {
  hacerSonido() {
    console.log("Miau");
  }
  }
  
  const animales = [
  new Perro("Boby"),
  new Gato("Misu"),
  ];
  
  animales.forEach(animal => animal.hacerSonido());
  // Guau guau
  // Miau
  ```
- # 🗒️ Conclusión
  
  JavaScript, aunque no es un lenguaje puramente orientado a objetos, permite implementar los principios de OOP de forma efectiva utilizando clases (class) introducidas en ES6.
  Estos tres pilares te ayudarán a escribir código más limpio, mantenible y escalable.
-
- [[Object]]
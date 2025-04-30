# Objetos en Javascript

## 📌 ¿Qué es un objeto?

En JavaScript, un objeto es una estructura que permite almacenar pares clave-valor. Es uno de los tipos de datos más importantes del lenguaje, ya que casi todo en JavaScript se basa en objetos.

Los objetos se utilizan para representar entidades del mundo real con sus características (propiedades) y acciones (métodos).

Por ejemplo, una persona tiene un nombre, una edad (propiedades) y puede saludar (método).

## 🛠️ ¿Para qué se usan los objetos?

Los objetos se usan para:

- Organizar y agrupar datos relacionados.

- Modelar entidades complejas del mundo real.

- Reutilizar código a través de métodos y herencia.

- Encapsular datos y lógica de una manera estructurada.

# Estructura básica de un objeto

- `Propiedad`: clave que almacena un valor.
- `Método`: una función que pertenece al objeto
- `this`: hace referencia al objeto actual

```javascript
const persona = {
    nombre :  "Laura", //---> Propiedad
    edad   :    38,    //---> Propiedad
    saludar: function(){console.log(`Hola, soy ${this.nombre}`)} //---> Método
}
```

## Cómo crear un objeto:

Para crear objetos en javascript hay diferentes maneras 

### 1. Notación literal

```javascript
const auto = {
    marca : "Toyota",
    modelo: "Corolla",
    encender : function() {console.log('El auto esta encencdido')},
}
```

## 2. Con `new Object()`

```javascript
const perro = new Object();
perro.nombre= "Firu"
perro.ladrar = function(){console.log("Guau!")}
```
## 3. Con funciones constructoras:

```javascript
function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad
}

const juan = new Persona("Juan", 35)
```

## 4. Usando Clases (ES6+)

```javascript
class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(){
        console.log(`Hola, soy ${this.nombre}`)
    }
}

const maria = new Persona("María", 28)
```

# Acceso a las propiedades de un objeto

- Notación de Punto

```javascript
console.log(persona.nombre);
```

- Notación de Corchetes

```javascript
console.log(persona["edad"]);
```

# Agregar, modificar y Eliminar propiedades

Suponiendo que tenemos una clase persona de la siguiente manera

```javascript
const persona = {
    nombre : "Juan"
    edad : 35
}

// Si quiero modificar la edad puedo hacer
persona.edad = 36;

// Si quiero por ejemplo añadir la altura de la persona 
persona.altura = 1.82

// SI quiero eliminar la altura
delete persona.altura;
```

# Recorrer un objeto en JavaScript

Haciendo uso del bucle `for in`

```javascript
for(let clave in persona){
    console.log(clave + " : " + persona[clave])
}
```

# Método útiles con objetos

```javascript
Object.keys(persona);   // Devuelve un array con las claves
Object.values(persona); // Devuelve un array con los valores
Object.entries(persona); // Devuelve pares clave-valor en arrays
```
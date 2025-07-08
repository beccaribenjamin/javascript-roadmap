# Prototypes y Herencia Prototípica en JavaScript

## ¿Qué es un prototype?

En JavaScript, cada objeto tiene una propiedad interna llamada [[Prototype]] (puede accederse con __proto__ en algunos entornos) que apunta a otro objeto: su prototipo.

Este prototipo es un objeto del cual hereda propiedades y métodos. Es una forma de compartir funcionalidades entre objetos sin duplicar código.

En resumen: si un objeto no tiene una propiedad o método, JS la buscará en su prototipo.

## ¿Cómo funciona la herencia prototípica?

Cuando accedes a una propiedad o método de un objeto:

1. JavaScript lo busca en el propio objeto.
2. Si no lo encuentra, lo busca en su `[[Prototype]]`
3. Y así sucesivamente, hasta llegar al final de la cadena de prototipos (`null`).

Esto se llama la cadena de prototipos (`prototype chain`)

### Ejemplo básico de prototype

```javascript
const animal = {
    hacerSonido: function(){console.log("Hace un sonido")}
};

const perrro = {
    nombre: "Firulais"
};

perro.__proto__ = animal;

perro.hacerSonido(); // Hace un sonido
```

Aunque `perro` no tiene el método `hacerSonido`, lo hereda de `animal`.


# 📌 Resumen
Cada objeto en JavaScript hereda de otro objeto: su prototipo.

La herencia prototípica permite compartir métodos y propiedades.

Puedes crear herencia manualmente con funciones constructoras y Object.create.

La sintaxis class y extends facilita la creación de jerarquías de herencia, pero internamente sigue usando prototipos.
# 🏭 Factory Functions

## ¿Qué son las factory functions?

Una factory function es simplemente una función que retorna un nuevo objeto. A diferencia de las clases, no requiere el uso de `new`, y puedes encapsular la lógica dentro de ella para personalizar los objetos creados.

## Ejemplo Básico

```javascript
function crearUsuario(nombre, edad) {
  return {
    nombre,
    edad,
    saludar() {
      console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
  };
}

const usuario1 = crearUsuario("Juan", 30);
const usuario2 = crearUsuario("Ana", 25);

usuario1.saludar(); // Hola, soy Juan y tengo 30 años.
usuario2.saludar(); // Hola, soy Ana y tengo 25 años.
```
# Object Composition

## 🧱 ¿Qué es Object Composition?
Object Composition es la práctica de construir objetos complejos combinando comportamientos reutilizables, en lugar de crear jerarquías con herencia. En lugar de decir "Un Perro es un Animal", se piensa como "Un Perro tiene la habilidad de hacer sonido, moverse, y ser entrenado".

Esto se alinea con el principio de diseño:

"Preferir la composición sobre la herencia"

## 🔧 Ventajas de la Composición
- Elimina el problema del acoplamiento en jerarquías rígidas.
- Permite combinar comportamientos como bloques LEGO.
- Facilita el testing y la reutilización.
- Compatible con programación funcional.

## 🧪 Ejemplo práctico: Composición de comportamientos
Supongamos que queremos modelar entidades que pueden hablar, moverse, y comer, pero no todos los objetos necesitan todas esas habilidades.

1. Definimos los comportamientos como funciones.

```javascript
const puedeHablar = (nombre) => ({
  hablar: () => console.log(`${nombre} dice: ¡Hola!`)
});

const puedeMoverse = (nombre) => ({
  moverse: () => console.log(`${nombre} se está moviendo`)
});

const puedeComer = (nombre) => ({
  comer: () => console.log(`${nombre} está comiendo`)
});
```

2. Componemos Objetos con las habilidades necesarias

```javascript
function crearHumano(nombre) {
  return {
    nombre,
    ...puedeHablar(nombre),
    ...puedeMoverse(nombre),
    ...puedeComer(nombre),
  };
}

function crearRobot(nombre) {
  return {
    nombre,
    ...puedeHablar(nombre),
    ...puedeMoverse(nombre),
    // No come
  };
}
```

3. Usamos los objetos

```javascript
const juan = crearHumano("Juan");
juan.hablar();  // Juan dice: ¡Hola!
juan.comer();   // Juan está comiendo

const bot = crearRobot("R2-D2");
bot.hablar();   // R2-D2 dice: ¡Hola!
bot.comer?.();  // undefined, porque no tiene esa habilidad
```
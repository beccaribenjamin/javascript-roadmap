# Sets en JavaScript

Los **SETS** son un tipo de objeto incorporado en JavaScript que te permite almacenar colecciones de **valores únicos**. A diferencia de los Arrays, donde se pueden tener elementos duplicado, unSet garantiza que cada valor que agregues solo aparecerá una vez.

## ✨Características de los Sets
- **Valores Únicos**: La característica más importante de un Set es que no permite valores duplicados. Si intentas añadir un elemento que ya existe, simplemente se ignorará sin generar un error.
- **Orden de Inserción**: Los elementos en un Set mantienen el orden en que fueron insertados, aunque no puedes acceder a ellos por un índice como en un Array.
- **Puede contener cualquier tipo de valor**: Los Sets pueden almacenar cualquier tipo de dato, desde números y cadenas hasta objetos y `null`.
- **Iterables**: Los Sets son objetos iterables, lo que significa que puedes recorrer sus elementos utilizando bucles `for...of` o métodos como `forEach()`.

## 🛠️ Crear un Set

Se puede crear un Set vació de la siguiente manera:

```js
const miSet = new Set();
console.log(miSet); // Consola: --> Set(0){}
```

Inicializar con un Iterable(Arrays, String, etc)

```js
const numArr = [1,2,3,4,5];
const setNums = new Set(numArr);
console.log(setNums); // Consola --> Set(5){1,2,3,4,5}

const string = "Hola";
const setString = new Set(string)
console.log(setString); //Consola ---> Set(4){'H','o','l','a'}
```

## Métodos Comunes de Set

Los Sets vienen con una serie de método útiles para manipular sus elementos

- `add`: Añadir un elemento:

Añade un nuevo elemento al Set. Si el elemento ya existe no hace nada.

```js
const frutas = new Set();
frutas.add('Manzana')
frutas.add('Pera')
frutas.add('Banana')
console.log(frutas): // Consola ---> Set(3){"Manzana", "Pera", "Banana"}
```

- `delete()`: Elimina un elemento
Elimina un elemento específico del Set. Retorna `true` si el elemento existió y fue eliminado, `false` en caso contrario.

```js
const colores = new Set(['Rojo', 'Verde', 'Azul']);
console.log(colores.delete('Verde'));    // Consola ---> true
console.log(colores.delete('Amarillo')); // Consola ---> false
console.log(colores) // Consola --> Set(2){'Rojo', 'Azul'}
```

- `has()`: Comporbar la existencia de un elemento.
Retorna `true` si un elemento existe en el Set, `false` en caso contrario.

```js
const animales = new Set(["Perro", "Gato", "Pájaro"]);
console.log(animales.has("Perro")); // Consola ---> True
console.log(animales.has("Tortuga")); // Consola ---> False
```

- `clear()`: Limpia por completo el Set.
Elimina todos los elementos del set.

```js
const paises = new Set(["Argentina", "Brasil", "Chile"]);
paises.clear();
console.log(paises); // Set(0) {}
```
- `size`: Obtener el número de elementos
Esta propiedad retorna el número de elementos únicos en el Set.

```js
const ciudades = new Set(["Buenos Aires", "Madrid", "París"]);
console.log(ciudades.size); // 3
```

## 🔄 Iteración de Sets
Como los Sets son iterables, poremos recorrer sus elementos:

- **Usando for...of**
Es la forma más común y sencilla de iterar sobre un Set.

```js
const misNumeros = new Set([10, 20, 30]);
for (const numero of misNumeros) {
  console.log(numero);
}
// Salida:
// 10
// 20
// 30
```
- **Usando forEach()**
Similar al método forEach() de los Arrays.

```js
const nombres = new Set(["Ana", "Juan", "Maria"]);
nombres.forEach(nombre => {
  console.log(`Hola, ${nombre}`);
});
// Salida:
// Hola, Ana
// Hola, Juan
// Hola, Maria
```

## Usos Comunes de los Sets

Los Sets son útiles en varias situaciones:

- Eliminar duplicados de un Array: Es una de las aplicaciones más frecuentes.

```js
const arrayConDuplicados = [1, 2, 2, 3, 4, 4, 5];
const arraySinDuplicados = [...new Set(arrayConDuplicados)];
console.log(arraySinDuplicados); // [1, 2, 3, 4, 5]
```

- Comprobar la existencia de elementos rápidamente: Debido a su implementación hash, la operación `has()` es muy eficiente, incluso en Sets grandes.

- Operaciones de conjuntos (Unión, Intersección, Diferencia): Aunque no tienen métodos incorporados para esto, puedes implementarlas fácilmente usando Sets.

  - Unión:

```js
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);
const union = new Set([...setA, ...setB]);
console.log(union); // Consola ---> Set(5) { 1, 2, 3, 4, 5 }
```
  - Intersección:

```js
const setC = new Set([1, 2, 3, 4]);
const setD = new Set([3, 4, 5, 6]);
const interseccion = new Set([...setC].filter(item => setD.has(item)));
console.log(interseccion); // Set(2) { 3, 4 }
```

  - Diferencia:

```js
const setE = new Set([1, 2, 3, 4]);
const setF = new Set([3, 4, 5, 6]);
const diferencia = new Set([...setE].filter(item => !setF.has(item)));
console.log(diferencia); // Set(2) { 1, 2 }
```


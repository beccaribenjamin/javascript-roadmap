# Arrays en JavaScript

Los Arrays o Arreglos en JavaScript son un objeto global que se utiliza para almancenar múltiples valores en una sola variable.
- ## ¿Para que sirven los arrays?
- **Almacenar colecciones de datos**: Es su propósito principal. Permiten agrupar datos relacionados de una manera organizada.
- **Organizar información**: Facilitan el manejo y la manipulación de conjuntos de datos.
- **Iterar sobre elementos**: Puedes recorrer fácilmente todos los elementos de un array para realizar operaciones en cada uno de ellos.
- **Implementar estructuras de datos**: Son la base para construir estructuras de datos más complejas como pilas, colas, listas enlazadas, etc.
- **Simplificar el código**: En lugar de crear múltiples variables para datos similares, puedes usar un solo array.
- ## Métodos comunes de los arrays en JavaScript
  
  JavaScript proporciona una gran cantidad de métodos para trabajar con arrays, que te permiten añadir, eliminar, buscar, ordenar y transformar elementos. Aquí te presento algunos de los más utilizados:
- ### Añadir elementos a un array
- `push()`: Añade uno o más elementos al final de un array.
  
  ```js
  const nums = [1,2,3,4,5]
  nums.push(6,7,8,9,10)
  console.log(nums)
  ```
- `unshift()`: Añade uno o más elementos al inicio del array.
  
  ```js
  const nums = [4,5]
  nums.unshift(1,2,3)
  console.log(nums)
  ```
- ### Eliminar elementos de un array
- `pop()`: Elimina el último valor de un array y lo devuelve
  ```js
  const colors = ['rojo', 'verde', 'amarillo'];
  colors.pop();
  console.log(colors);
  ```
- `shift()`: Elimina el primer elemento del array
  ```js
  const paises = ['España', 'Francia', 'Alemania'];
  paises.shift();
  console.log(paises);
  ```
- ### Encontrar el índice de un elemento del array
  
  `indexOf()`: Devuelve el primer índice en que se puede encontrar un elemento dado en el array, o -1 si no esta dicho elemento.
  
  ```js
  const nums = [1,2,3,4,5]
  console.log(nums.indexOf(3))    //---> Consola: 2
  console.log(nums.indexOf(1032)) //---> Consola: -1
  ```
- ### Saber si un elemento esta o no en un array
- `includes()`: Determina si un valor esta o no dentro del array devolviendo `true` o `false`.
  
  ```js
  const ciudades = ["Madrid","Buenos Aires", "Paris"]
  console.log(ciudades.includes("Entre Ríos")) //---> Consola: false
  console.log(ciudades.includes("Paris")) //---> Consola: true
  ```
- ### Métodos que recorren todo el arrays
- `forEach()`: Ejecuta una función proporcionada una vez para cada elemento del array.
  
  ```js
  const nombres = ["Ana", "Juan", "Maria"];
  nombres.forEach(nombre => {console.log(`Hola, ${nombre}`)})
  
  // EN consola: 
  // Hola, Ana
  // Hola, Juan
  // Hola, Maria
  ```
- `map()`: Crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de los elementos.
  
  ```js
  const precios = [10, 20,30];
  const preciosIVA = precios.map(precio => precio * 1.21);
  console.log(preciosIVA); // Consola---> [12.21, 24.2, 36.3]
  ```
- `filter`: Crea un nuevo array con todos los elementos que pasan la prueba implementada por la función proporcionada.
  
  ```js
  const edades = [15,22,18,30,16];
  const mayores18 = edades.filter(edad => edad >= 18);
  console.log(mayores18);
  ```
- `reduce()`: Ejecuta una función "reductora" sobre cada elemento de un array, que resulta en único valor de retorno.
  
  ```js
  const nums = [1,2,3,4];
  const sumNums = nums.reduce((acc, value) => acc + value, 0);
  console.log(sumNums)
  ```
- ### Remplazar valores de un array
- `splice()`: Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
  
  ```js
  const frutasSplice = ["manzana", "banana", "naranja", "uva"];
  // Eliminar 2 elementos desde el índice 1
  frutasSplice.splice(1, 2);
  console.log(frutasSplice); // Consola---> ["manzana", "uva"]
  
  // Agregar "pera" y "melocotón" desde el índice 1, sin eliminar
  const cochesSplice = ["Ford", "BMW", "Audi"];
  cochesSplice.splice(1, 0, "Mercedes", "Volkswagen");
  console.log(cochesSplice); // Consola---> ["Ford", "Mercedes", "Volkswagen", "BMW", "Audi"]
  ```
- ### Unir dos o más arrays
- `concat()`: Se utiliza para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.
  
  ```js
  const array1 = [1, 2];
  const array2 = [3, 4];
  const array3 = array1.concat(array2);
  console.log(array3);  // Consola---> [1, 2, 3, 4]
  ```
- [[variables]] [[arrays-operations]]
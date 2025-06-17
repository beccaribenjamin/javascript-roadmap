// Caso Práctico: Gestión de Tags únicos para publicaciones en redes sociales

/*
Desarrollando una aplicación simil twitter donde en los posteos puede tener tags. 
Puede pasar que las personas pongan tags duplicados sin darse cuenta y la app tiene que limpiarle los tags duplicados.
*/

// Crear array con valores repetidos(Simulando los tags del usuario)

const tags1 = ["javascript","webdev","frontend","react","javascript","css","html","react","diseño","webdev"]

// console.log("Tags originales de la publicación: ",tags1);

// 1️⃣ro : Utilizar Set para eliminar duplicados
// Los Sets no almacenan valores duplicados, la forma más fácil de hacerlo es con SET.
// 2️⃣do: Tranformar el Set en un Array nuevamente
// Haciendo uso del spread(...) o Array.form()

// Crear una función que lo haga

const tagsUnicos = (tagList) => {
    // Limpiamos los valores duplicados del array transformandolo en un SET
    const sinDuplicadosSet = new Set(tagList);
    console.log(sinDuplicadosSet)

    // Hacemos que el Set sea un array nuevamente pero ahora sin valores duplicados
    const sinDuplicadosArr = [...sinDuplicadosSet]
    console.log(sinDuplicadosArr)
}

// tagsUnicos(tags1)


//-------------------Caso Práctico: Gestión de Productos Vistos Recientemente en un E-commerce-------------------

/*
Imagina que estás desarrollando una funcionalidad para una tienda online donde quieres mostrar a los usuarios los últimos productos que han visto. No quieres que los productos duplicados aparezcan varias veces, y es probable que solo quieras mostrar un número limitado de los más recientes. Aquí, Set es ideal para gestionar la unicidad de los productos, y combinado con un Array para mantener el orden, podemos lograrlo.

El Problema: Un usuario navega por la tienda, haciendo clic en varios productos. Queremos una lista "Vistos Recientemente" que:

Contenga solo productos únicos.
Muestre los productos en el orden en que fueron vistos (el más reciente al principio).
Tenga un límite de, por ejemplo, los últimos 5 productos.
*/

class ProductosVistosRecientemente {
  constructor(limite = 5) {
    this.limite = limite;
    this.productosUnicos = new Set(); // Para rápido chequeo de unicidad
    this.ordenProductos = []; // Para mantener el orden y aplicar el límite
  }

  // Metodo para añadir un producto visto
  verProducto(productoId) {
    // 1. Eliminar si ya existe: Esto asegura que, si un producto se ve de nuevo, se mueva al principio de la lista.
    if (this.productosUnicos.has(productoId)) {
      this.productosUnicos.delete(productoId); // Elimina del Set
      // Elimina también del array. Filter crea un nuevo array, lo cual es seguro.
      this.ordenProductos = this.ordenProductos.filter(id => id !== productoId);
    }

    // 2. Añadir el producto al Set y al principio del Array
    this.productosUnicos.add(productoId); // Añade al Set
    this.ordenProductos.unshift(productoId); // Añade al principio del Array

    // 3. Aplicar el límite: Si superamos el límite, eliminamos el más antiguo (al final del array)
    if (this.ordenProductos.length > this.limite) {
      const productoMasAntiguo = this.ordenProductos.pop(); // Elimina del final del Array
      this.productosUnicos.delete(productoMasAntiguo); // Elimina del Set
    }

    console.log(`Producto "${productoId}" visto.`);
    this.mostrarProductos();
  }

  // Metodo para obtener la lista de productos vistos
  obtenerProductosVistos() {
    return [...this.ordenProductos]; // Devuelve una copia para no modificar el original
  }

  // Metodo auxiliar para mostrar el estado actual
  mostrarProductos() {
    console.log("Productos Vistos (ordenados):", this.obtenerProductosVistos());
    console.log("Número de productos únicos (Set):", this.productosUnicos.size);
    console.log("-----------------------------------");
  }

  // Metodo para verificar si un producto específico ha sido visto
  haSidoVisto(productoId) {
    return this.productosUnicos.has(productoId);
  }

  // Metodo para limpiar la lista (usando clear de Set y Array)
  limpiarHistorial() {
    this.productosUnicos.clear(); // Vacía el Set
    this.ordenProductos = [];    // Vacía el Array
    console.log("Historial de productos vistos limpiado.");
    this.mostrarProductos();
  }
}

// --- SIMULACIÓN DE USO ---

const historial = new ProductosVistosRecientemente(3); // Queremos solo los 3 últimos productos

historial.verProducto("P001");
historial.verProducto("P002");
historial.verProducto("P003");

// Vemos P001 de nuevo, debería moverse al principio
historial.verProducto("P001");

// Vemos un nuevo producto, P002 (el más antiguo) debería salir
historial.verProducto("P004");

// Verificamos si un producto ha sido visto
console.log(`¿P002 ha sido visto recientemente? ${historial.haSidoVisto("P002")}`);
console.log(`¿P003 ha sido visto recientemente? ${historial.haSidoVisto("P003")}`); // P003 debería haber sido expulsado
console.log(`¿P004 ha sido visto recientemente? ${historial.haSidoVisto("P004")}`);

// Limpiar el historial
historial.limpiarHistorial();

// Intentar añadir después de limpiar
historial.verProducto("P005");
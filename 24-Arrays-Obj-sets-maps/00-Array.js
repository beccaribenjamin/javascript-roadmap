// Uso de Array y aplicación de losmétodos

//Caso Practico: Gestionar Productos de un Ecommerce

// Tenemos un array de objetos con diferentes productos de la tienda, como si fuese un inventario.

let listaProductos = [
    { id: 1, nombre: "Laptop gamer", precio: 1200, stock: 5 },
    { id: 2, nombre: "Teclado mecánico", precio: 80, stock: 15 },
    { id: 3, nombre: "Mouse inalámbrico", precio: 30, stock: 25 },
    { id: 4, nombre: "Monitor 27 pulgadas", precio: 300, stock: 8 },
    { id: 5, nombre: "Webcam HD", precio: 50, stock: 12 }
];

// Inventario inicial
console.log("-------------------------Inventario Inicial de Productos-------------------------")
console.log(listaProductos)
console.log("---------------------------Total de productos en stock---------------------------")
console.log(listaProductos.length)


// Mostrar la lista de productos.
const productList = () => {
    console.log("n\ ----------------------Listado de Todos los Productos----------------------");
    if (listaProductos.length === 0) {
        console.log("No hay productos disponibles.");
        return;
    }
    listaProductos.forEach(producto => {
        console.log(`ID: ${producto.id} | Nombre: ${producto.nombre} | Precio: $${producto.precio} | Stock: ${producto.stock}`);
    });
}

// Añadir un producto nuevo a la lista de productos
const addProduct = (nombre, precio, stock) => {
    //Creamos un id
    const nuevoId = listaProductos.length > 0 ? Math.max(...listaProductos.map(p => p.id)) + 1 : 1;
    const nuevoProducto = {
        id: nuevoId,
        nombre: nombre,
        precio: precio,
        stock: stock
    };
    listaProductos.push(nuevoProducto);
    console.log(`\nProducto '${nombre}' agregado.`);
    console.log("Nuevo inventario:", listaProductos);
}

// Buscar productos por nombre (parcial o completo)
// POdemos hacer uso del filter() y del map()
function searchProduct(busqueda) {
    console.log(`\n--- Buscando productos que contengan '${busqueda}' ---`);
    const resultados = listaProductos.filter(producto =>
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    if (resultados.length === 0) {
        console.log("No se encontraron productos con ese nombre.");
        return;
    }

    console.log("Resultados de la búsqueda:");
    resultados.forEach(producto => {
        console.log(`ID: ${producto.id} | Nombre: ${producto.nombre} | Precio: $${producto.precio} | Stock: ${producto.stock}`);
    });
}

// --- 5. Función para actualizar el stock de un producto por ID ---
// Usaremos find() para localizar el producto y luego actualizaremos su propiedad.
function actualizarStock(idProducto, nuevoStock) {
    console.log(`\n--- Actualizando stock del producto ID: ${idProducto} ---`);
    const productoEncontrado = listaProductos.find(producto => producto.id === idProducto);

    if (productoEncontrado) {
        const stockAnterior = productoEncontrado.stock;
        productoEncontrado.stock = nuevoStock;
        console.log(`Stock de '${productoEncontrado.nombre}' actualizado de ${stockAnterior} a ${nuevoStock}.`);
    } else {
        console.log(`Producto con ID ${idProducto} no encontrado.`);
    }
    console.log("Inventario después de la actualización:");
    productList(); // Volvemos a listar para ver el cambio
}

// --- 6. Función para eliminar un producto por ID ---
// Usaremos filter() para crear un nuevo array sin el producto a eliminar.
function eliminarProducto(idProducto) {
    console.log(`\n--- Eliminando producto ID: ${idProducto} ---`);
    const longitudAntes = listaProductos.length;
    listaProductos = listaProductos.filter(producto => producto.id !== idProducto);

    if (listaProductos.length < longitudAntes) {
        console.log(`Producto con ID ${idProducto} eliminado correctamente.`);
    } else {
        console.log(`No se encontró un producto con ID ${idProducto} para eliminar.`);
    }
    console.log("Inventario después de la eliminación:");
    productList(); // Volvemos a listar para ver el cambio
}

// Obtener el valor de todo el inventario
// Se puede usar el reduce(), para sumar el valor todos los productos en stock
function calcularValorTotalInventario() {
    console.log("\n--- Calculando Valor Total del Inventario ---");
    // Multiplicamos el precio por el stock de cada producto para obtener su valor individual
    const valorTotal = listaProductos.reduce((acumulador, producto) => {
        return acumulador + (producto.precio * producto.stock);
    }, 0); // El 0 es el valor inicial del acumulador

    console.log(`El valor total del inventario es: $${valorTotal.toFixed(2)}`);
}

// --- DEMOSTRACIÓN DE USO DE LAS FUNCIONES ---

// Muetra el inventario inicial
productList();

addProduct("Auriculares Bluetooth", 95, 20);
addProduct("Silla ergonómica", 250, 3);

searchProduct("mo");      // Buscamos 'Monitor' y 'Mouse'
searchProduct("altavoz"); // Buscamos algo que no existe

actualizarStock(4, 10);   // Actualizamos el stock del Monitor (ID 4)
actualizarStock(99, 5);   // Intentamos actualizar un ID que no existe

eliminarProducto(2);      // Eliminamos el Teclado mecánico (ID 2)
eliminarProducto(100);    // Intentamos eliminar un ID que no existe

productList();            // Listamos para ver los cambios finales

calcularValorTotalInventario(); // Calculamos el valor final del inventario
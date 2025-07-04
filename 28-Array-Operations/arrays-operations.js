// Caso práctico de operaciones con arrays
// Utilizando map, filter y reduce 

// Análisis de Ventas de Productos Electrónicos
/*
Dado un array de objetos que representar productos electrónicos vendidos. Tenemos que realizar las siguientes operaciones:
1. Calcular el precio total de cada venta( cantidad * precio unitario)
2. Filtrar solo las ventas que superen cierto valor como podría ser $100
3. Calcular el total de ingresos de las ventas filtradas.
*/

// Listado de ventas
const ventas = [
  { id: 1, producto: 'Televisor LED 4K', categoria: 'TVs', precioUnitario: 500, cantidad: 1 },
  { id: 2, producto: 'Smartphone Android', categoria: 'Móviles', precioUnitario: 300, cantidad: 2 },
  { id: 3, producto: 'Auriculares Bluetooth', categoria: 'Audio', precioUnitario: 50, cantidad: 3 },
  { id: 4, producto: 'Laptop Ultrabook', categoria: 'Computadoras', precioUnitario: 1200, cantidad: 1 },
  { id: 5, producto: 'Smartwatch Deportivo', categoria: 'Wearables', precioUnitario: 150, cantidad: 1 },
  { id: 6, producto: 'Tablet Android', categoria: 'Tablets', precioUnitario: 200, cantidad: 2 }
];

// 1. Calcular el precio total de cada venta con map().

const ventasConTotal = ventas.map( venta => ({...venta, totalVenta: venta.precioUnitario * venta.cantidad}) )


console.log("1️⃣ - Ventas con el total de cada venta:")
console.log(ventasConTotal)

// 2. Filtras las ventas que superen $200 con filter()

const ventasFiltradas = ventasConTotal.filter( venta => venta.totalVenta > 200 )

console.log("2️⃣. Ventas filtradas que el total superen los 200")
console.log(ventasFiltradas)

// 3. Calcular el total de ingresos de las ventas filtrada con reduce()

const totalIngresosFiltradas = ventasFiltradas.reduce( (acc, cur) => acc + cur.totalVenta, 0 )

console.log("3️⃣. Total de ingresos de las ventas filtradas:");
console.log(`$ ${totalIngresosFiltradas}`)
# Linked List en JavaScript

## ¿Qué es una Linked List?

Una **lista enlazada** es una estructura de datos lineal en la que los elementos (nodos) están conectados entre sí mediante referencias o punteros.

Cada nodo tiene al menos dos partes:
1. Valor (dato)
2. Puntero al siguiente nodo (`next`)

Quedaría algo así:

[1] → [2] → [3] → null

## ✅ Ventajas de las listas enlazadas

- Los nodos pueden ser fácilmente agregados o eliminados sin necesidad de reorganizar toda la estructura de datos.
- Buen rendimiento para operaciones frecuentes de inserción y eliminación al inicio o en medio de la lista.


## ❌ Desventajas de las listas enlazadas

- Las operaciones de búsqueda son lentas. A diferencia de los arreglos, el acceso aleatorio no está permitido; se accede secuencialmente desde el primer nodo.
- Mayor uso de memoria debido al almacenamiento adicional de punteros.


## 🧩 Tipos de listas enlazadas

1. **Listas simplemente enlazadas**: Cada nodo apunta solo al siguiente.
2. **Listas doblemente enlazadas**: Cada nodo apunta tanto al siguiente como al anterior.
3. **Listas enlazadas circulares**: El último nodo apunta al primero, formando un bucle.


## 🧱 Implementación de un nodo en JavaScript

Como ya sabemos, un nodo contiene dos elementos: el dato y el puntero al siguiente nodo. Aquí está su implementación en JavaScript:

```js
class NodoLista {
    constructor(dato) {
        this.dato = dato;
        this.siguiente = null;                
    }
}
```
## 🛠 Implementación de la lista enlazada
Este código crea una clase ListaEnlazada con un constructor que puede aceptar una cabecera inicial o empezar vacía.

```js
class ListaEnlazada {
    constructor(cabecera = null) {
        this.cabecera = cabecera;
    }
}
```
## 🧪 Poniendo todo junto (Ejemplo práctico)
Creamos dos nodos y los conectamos, luego usamos el primero como cabecera de la lista:

```js
let nodo1 = new NodoLista(2);
let nodo2 = new NodoLista(5);
nodo1.siguiente = nodo2;

let lista = new ListaEnlazada(nodo1);

console.log(lista.cabecera.siguiente.dato); // devuelve 5

```

## Métodos comunes en las Linked List

**Métodos para agregar nodos:**
insertAtHead(value): Agrega un nuevo nodo al principio de la lista.
insertAtTail(value): Agrega un nuevo nodo al final de la lista.
insertAfter(value, newValue): Agrega un nuevo nodo después de un nodo con un valor específico. 

**Métodos para eliminar nodos:**
deleteAtHead(): Elimina el primer nodo de la lista.
deleteAtTail(): Elimina el último nodo de la lista.
delete(value): Elimina el primer nodo que contiene un valor específico.
deleteAt(index): Elimina el nodo en una posición específica. 

**Métodos para buscar nodos:**
find(value): Busca un nodo con un valor específico y devuelve el nodo si se encuentra, o null si no.
findAt(index): Busca el nodo en una posición específica y lo devuelve.
indexOf(value): Devuelve el índice del primer nodo que contiene un valor específico, o -1 si no se encuentra. 

**Otros métodos útiles:**
size(): Devuelve el número de nodos en la lista.
isEmpty(): Comprueba si la lista está vacía.
print(): Imprime los valores de los nodos en la lista (útil para depuración).
reverse(): Invierte el orden de los nodos en la lista (requiere implementar la lógica de inversión). 
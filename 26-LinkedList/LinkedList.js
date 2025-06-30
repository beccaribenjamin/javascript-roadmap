/*
🧩 Objetivo del caso práctico
Vamos a simular un sistema simple donde se mantiene una lista de tareas pendientes usando una LinkedList. Cada tarea será un nodo, y usaremos los métodos típicos como:

insertAtTail: agregar tarea al final

delete: eliminar una tarea por nombre

find: buscar una tarea

print: mostrar todas las tareas
*/

// Nodo individual
class NodoLista{
    constructor(dato){
        this.dato = dato;
        this.siguiente = null;
    }
}

// Lista enlazada
class ListaEnlazada{
    constructor(){
        this.cabecera = null;
    }

    insertAtTail(valor){
        const nuevoNodo = new NodoLista(valor);
        if(!this.cabecera){
            this.cabecera = nuevoNodo;
            return;
        }

        let actual = this.cabecera;
        while(actual.siguiente){
            actual = actual.siguiente;
        }
        actual.siguiente = nuevoNodo;
    }

    delete(valor){
        if(!this.cabecera) return;

        if(this.cabecera.dato === valor){
            this.cabecera = this.cabecera.siguiente;
            return;
        }

        let actual = this.cabecera;
        while(actual.siguiente && actual.siguiente.dato !== valor){
            actual = actual.siguiente;
        }

        if(actual.siguiente){
            actual.siguiente = actual.siguiente.siguiente;
        }
    }

    find(valor){
        let actual = this.cabecera;
        while(actual){
            if(actual.dato === valor) return actual;
            actual = actual.siguiente;
        }
        return null;
    }

    isEmpty(){
        return this.cabecera === null;
    }

    print(){
        let actual = this.cabecera;
        let resultado = "";
        while(actual){
            resultado += `[${actual.dato}] ->`;
            actual = actual.siguiente;
        }

        resultado += 'null';
        console.log(resultado);
    }
}

// Simulador de tareas pendientes
const tareas = new ListaEnlazada();

console.log("✅ Lista vacía:", tareas.isEmpty()); // true

// Agregar tareas
tareas.insertAtTail("Aprender JavaScript");
tareas.insertAtTail("Practicar estructuras de datos");
tareas.insertAtTail("Leer sobre listas enlazadas");

console.log("📝 Tareas actuales:");
tareas.print(); // [Aprender JavaScript] → [Practicar estructuras de datos] → [Leer sobre listas enlazadas] → null

// Buscar tarea
const buscada = tareas.find("Practicar estructuras de datos");
console.log("🔍 ¿Tarea encontrada?", buscada ? "Sí" : "No"); // Sí

// Eliminar tarea
tareas.delete("Aprender JavaScript");
console.log("❌ Después de eliminar 'Aprender JavaScript':");
tareas.print(); // [Practicar estructuras de datos] → [Leer sobre listas enlazadas] → null

// Lista vacía?
console.log("¿Lista vacía?", tareas.isEmpty()); // false

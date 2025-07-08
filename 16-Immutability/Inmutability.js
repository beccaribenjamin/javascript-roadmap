/*
Imaginemos que tenemos una aplicación de lista de tareas donde los usuarios pueden:

Agregar una nueva tarea.
Marcar una tarea como completada/incompleta.
Eliminar una tarea.
Demostraremos cómo cada una de estas operaciones se maneja de forma inmutable.

Escenario: Gestión de To-Dos
Comenzaremos con un estado inicial que representa nuestras tareas:

*/

const initialState = [
  { id: 1, text: 'Aprender inmutabilidad', completed: false },
  { id: 2, text: 'Construir un To-Do List inmutable', completed: false },
  { id: 3, text: 'Entender el spread operator', completed: true },
];

console.log("Estado Inicial:", JSON.parse(JSON.stringify(initialState)));

/*
Caso Práctico 1: Agregar una Nueva Tarea
Objetivo: Añadir una nueva tarea sin modificar el array initialState original.

Enfoque Mutable (¡A EVITAR!):

*/

// Esto MUTARÍA el array original - ¡NO HACER!
function addTodoMutable(todos, newTodoText) {
  const newTodo = {
    id: todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1,
    text: newTodoText,
    completed: false
  };
  todos.push(newTodo); // MUTACIÓN
  return todos;
}

// const currentTodosMutable = JSON.parse(JSON.stringify(initialState)); // Para testear la mutación sin afectar initialState
// addTodoMutable(currentTodosMutable, 'Practicar JavaScript');
// console.log("Estado MUTADO (agregar):", currentTodosMutable);
// console.log("Estado ORIGINAL (afectado):", initialState); // initialState ¡también sería afectado si no se hace la copia profunda!

/*
Enfoque Inmutable: MANERA CORRECTA

Haciendo uso del spread operator, para crear un nuevo array.
*/

function addTodoImmutable(todos, newTodoText) {
  const newTodo = {
    // Generar un ID único (ejemplo simple, en un proyecto real se usaría una lib como uuid)
    id: todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1,
    text: newTodoText,
    completed: false
  };
  return [...todos, newTodo]; // Crea un NUEVO array con los elementos existentes y el nuevo.
}

let currentState = initialState;

// Agregamos una tarea
currentState = addTodoImmutable(currentState, 'Publicar artículo sobre inmutabilidad');

console.log("\n--- Caso 1: Agregar Tarea ---");
console.log("Estado Original (sin cambios):", JSON.parse(JSON.stringify(initialState)));
console.log("Nuevo Estado (después de agregar):", currentState);

// Verificamos que las referencias sean diferentes (importante para React/Redux)
console.log("¿Son las mismas referencias (Original vs Nuevo)?", initialState === currentState); // Debería ser false

/*
Caso Práctico 2: Marcar una Tarea como Completada/Incompleta
Objetivo: Cambiar el estado completed de una tarea específica sin modificar el array o los objetos de tarea originales.

Enfoque Mutable (¡A EVITAR!): */

// Esto MUTARÍA el array y el objeto de tarea original - ¡NO HACER!
function toggleTodoMutable(todos, idToToggle) {
  const todo = todos.find(todo => todo.id === idToToggle);
  if (todo) {
    todo.completed = !todo.completed; // MUTACIÓN del objeto
  }
  return todos;
}

// const currentTodosMutable = JSON.parse(JSON.stringify(initialState));
// toggleTodoMutable(currentTodosMutable, 1);
// console.log("Estado MUTADO (toggle):", currentTodosMutable);

/*
Enfoque Inmutable (¡LA MANERA CORRECTA!):

Usaremos map() para iterar y devolver un nuevo array, y el spread operator (...) para crear un nuevo objeto de tarea modificado.
*/

function toggleTodoImmutable(todos, idToToggle) {
  return todos.map(todo => {
    if (todo.id === idToToggle) {
      // Si es la tarea que queremos cambiar, creamos un NUEVO objeto con el estado 'completed' actualizado.
      return { ...todo, completed: !todo.completed };
    }
    // Si no es la tarea, devolvemos el objeto original (inmutable)
    return todo;
  });
}

// Marcamos la tarea con ID 1 como completada
currentState = toggleTodoImmutable(currentState, 1);

console.log("\n--- Caso 2: Marcar Tarea ---");
console.log("Estado Original (sin cambios):", JSON.parse(JSON.stringify(initialState)));
console.log("Nuevo Estado (después de marcar tarea 1):", currentState);

// Verificamos que las referencias sean diferentes (si la tarea 1 existía en el estado inicial)
// La referencia del ARRAY será diferente.
// La referencia del objeto de la TAREA 1 será diferente.
// Las referencias de las OTRAS TAREAS serán las mismas.
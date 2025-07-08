# Stacks y Queues: Estructuras de Datos

**Estructuras de Datos**: Son formas de organizar y alamcenar datos para luego acceder a ellos y modificarlos de forma eficiente.

## Stacks o Pilas

Un Stack es una estructura de datos que sigue el principio **LIFO(Last In, First Out)**, o último en entrar, primero en salir. Supongamos un pila de platos: el último plato que pongas encima es el primero que quitas.

![LIFO IMG](https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/2020/2020-11/lifo.png)


### Características de Stacks:
- **LIFO**: El último elemento añadido es el primero en ser retirado.
- **Operaciones Principales**: 
    - `push()`: Añade un elemento en la parte superior de la pila.
    - `pop()`:  Elimina y devuelve el elemento superior de la pila.
    - `peek()` o `top()`: Permite ver el elemento superior de la pila sin eliminarlo
    - `isEmpety()`: Verifica si la pila esta vacía.
    - `size()`: Retorna el número de elementos en la pila.

### ¿Cuándo usar Stack?

Los Stacks son útiles en escenarios donde el orden inverso de procesamiento es importante, como:

- Gestión del historial de navegación web: Cuando usas el botón "atrás" en un navegador, estás utilizando un stack.
- Deshacer/Rehacer operaciones en aplicaciones: Cada acción se guarda en un stack para poder deshacerla.
- Evaluación de expresiones aritméticas.
- Llamadas a funciones (Call Stack): El motor de JavaScript utiliza un stack para manejar el orden de ejecución de las funciones.

## Queue o Colas:

Una QUEUE es una estrcutura de datos que sigue el principio **FIFO(First In, Firt Out)**, o Primero en Entrar, Primero en Salir.
Podemos verlo como una fila de personas en un negocio, la primer persona en entrar es la primera en ser atendida.

![FIFO IMG](https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/2020/2020-11/fifo.png)

### Características Clave:
- FIFO (First In, First Out): El primer elemento añadido es el primero en ser retirado.
- **Operaciones Principales**:
    - `enqueue()`: Añade un elemento al final de la cola.
    - `dequeue()`: Elimina y devuelve el elemento del frente de la cola.
    - `peek() (o front())`: Permite ver el elemento del frente de la cola sin eliminarlo.
    - `isEmpty()`: Verifica si la cola está vacía.
    - `size()`: Retorna el número de elementos en la cola.

### ¿Cuándo usar una Queue?
Las Queues son ideales para escenarios donde el orden de procesamiento es secuencial y el primer elemento en llegar debe ser el primero en ser procesado, como:

- Impresoras: Los documentos se ponen en cola y se imprimen en el orden en que fueron enviados.
- Sistemas de atención al cliente: Las llamadas se atienden en el orden en que se reciben.
- Tareas asíncronas en JavaScript (Event Loop): El Event Loop de JavaScript utiliza una cola para procesar las tareas asíncronas.
- BFS (Breadth-First Search - Búsqueda en Amplitud) en algoritmos de grafos.
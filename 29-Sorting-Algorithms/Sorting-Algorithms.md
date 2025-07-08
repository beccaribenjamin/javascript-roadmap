# Sorting Algorithms

Los algoritmos de ordenación son un conjunto de instrucciones que toman un arreglo o lista como entrada y organizan los elementos en un orden particular.
- ## Compensaciones de los algoritmos de ordenación
  
  Al elegir un algoritmo de ordenación, se deben hacer algunas preguntas: ¿Cuán grande es la colección que se ordena? ¿Cuánta memoria hay disponible? ¿La colección necesita crecer?
  
  Todas estas preguntas son importantes para determinar qué algoritmo funcionará mejor para cada situación.
- ## Algunos algoritmos de ordenación comunes
- Selection Sort(Selección):
  
  Método de ordenamiento simple y en su mayoría ineficiente para grandes listas, pero fácil de entender e implementar. Funciona encontrado repetidamente el elemento mínimo o máximo de la parte no ordenada de la lista y lo coloca al principio o al final de la parte ordenada
  
  ![SelectionSort](https://www.w3resource.com/w3r_images/selection-short.png)
- Bubble sort (burbuja):
  
  Supongmaos que tenemos una fila de burbujas y lo que queremos es que las más grande queden arriba y las más chicas abajo. Bubble sort hace esto comparando elementos adyacentes y subiendolos a los más grandes hacía el final de la lista en cada pasada.
  
  ![bubble sort](https://deen3evddmddt.cloudfront.net/uploads/content-images/bubble-sort-example.webp)
- Insertion sort (inserción):
  
  Pensa en que tenes una mano de cartas desordenada y queres ordenarla. Tomas una carta a la vez de la pila desordenada y la insertas en la posición correcta dentro de tu mano ya ordenada.
  
  ![Insertion sort (inserción)](https://static.platzi.com/media/user_upload/InsertionSort-4c42140c-3190-4a77-b5d2-1a550a0653da.jpg)
- Merge sort (combinación):
  
  Ahora supongamos que tenemos 2 pilas de cartas perfectamente ordenadas, pero queremos combinarlas y hacer una sola pila, por supuesto ordenada.
  Primero tomamos la carta más pequeña de la parte superior de cualquiera de las dos pilas, la colocas en la pila nueva y repetis hasta que una pila se vacie, luego añadis las restantes de la otra. Eso es combinación.
  
  <div style="background-color: #"><img alt="Merge Sort combinación" src="https://www.programiz.com/sites/tutorial2program/files/merge-sort-example_0.png"></div>
  <!-- ![Merge sort (combinación)](https://www.programiz.com/sites/tutorial2program/files/merge-sort-example_0.png) -->
- Quick sort (rápida):
  
  Supongamos que tenemos una pila de documentos desordenados y queremos ordenarlos alfabéticamente. Quick Sort hace esto eligiendo el documento "pivote" y luego dividiendo el resto de los documentos en dos pilas: una con documentos que van antes del pivote y otra con documentos que van después del pivote. Luego, repite este proceso para las dos nuevas pilas hasta que todas las pilas sean lo suficientemente pequeñas o de un solo documento, momento en el que la lista estará ordenada.
  
  <div style="background-color: #fdfdfd"><img alt="Ordenar elementos a la izquierda del pivot con recursion" src="https://www.programiz.com/sites/tutorial2program/files/quick-sort-working.png"></div>

  <div style="background-color: #fdfdfd"><img alt="Ordenar elementos a la derecha del pivot con recursion" src="https://www.programiz.com/sites/tutorial2program/files/quick-sort-1.png"></div>
  
  
- Heap sort (montón):
  
  Heap Sort utiliza una estructura de datos especializada llamada Heap Binario (o Montón Binario). Un heap binario es un árbol binario completo que satisface la propiedad de heap:
- Max-Heap (Montón Máximo): Para cada nodo, el valor del nodo es mayor o igual que los valores de sus hijos. El elemento más grande está siempre en la raíz.
- Min-Heap (Montón Mínimo): Para cada nodo, el valor del nodo es menor o igual que los valores de sus hijos. El elemento más pequeño está siempre en la raíz.
  
  Heap Sort, por lo general, se implementa utilizando un Max-Heap. El algoritmo se divide en dos fases:
  
  1. Fase de Construcción del Heap (Heapify): Convierte el array de entrada en un Max-Heap. Esto se hace comenzando desde el último nodo no hoja y trabajando hacia arriba hasta la raíz, "hundiendo" los elementos más grandes a su posición correcta en el heap.
  
  2. Fase de Extracción (Extract): Una vez que el array es un Max-Heap, el elemento más grande (la raíz) se encuentra en la primera posición.
  
  -Intercambias el elemento raíz (el más grande) con el último elemento del heap.
  
  -Reduces el tamaño del heap en uno (el último elemento intercambiado ya está en su posición final ordenada).
  
  -"Hundes" la nueva raíz (el elemento que antes era el último) para que el resto del array siga siendo un Max-Heap.
  
  -Repites estos pasos hasta que el tamaño del heap sea 1.
  
  ![Intercambiar, eliminar y acumular](https://www.programiz.com/sites/tutorial2program/files/heap_sort.png)
- Counting sort (conteo):
  
  La ordenación por conteo es un algoritmo de clasificación que ordena los elementos de una matriz contando el número de ocurrencias de cada elemento único en la matriz. El recuento se almacena en una matriz auxiliar y la clasificación se realiza mapeando el recuento como un índice de la matriz auxiliar.
- Funcionamiento de la ordenación por conteo
  
  1. Descubre el elemento máximo (déjalo ser max) de la matriz dada.
  ![Matriz dada](https://www.programiz.com/sites/tutorial2program/files/Counting-sort-0_0.png)
  
  2. Inicializar una matriz de longitud max+1 con todos los elementos 0. Esta matriz se utiliza para almacenar el recuento de los elementos de la matriz.
  
  ![Contar matriz](https://www.programiz.com/sites/tutorial2program/files/Counting-sort-1.png)
  
  3. Almacene el recuento de cada elemento en su índice respectivo en count array.
  
  Por ejemplo: si el recuento del elemento 3 es 2, entonces 2 se almacena en la tercera posición de contararray. Si el elemento "5" no está presente en la matriz, entonces 0 se almacena en la quinta posición.
  
  ![](https://www.programiz.com/sites/tutorial2program/files/Counting-sort-2.png)
  
  4. Almacene la suma acumulada de los elementos de la matriz de conteo. Ayuda a colocar los elementos en el índice correcto de la matriz ordenada.
  
  ![](https://www.programiz.com/sites/tutorial2program/files/Counting-sort-3.png)
  
  5. Encuentre el índice de cada elemento de la matriz original en la matriz de conteo. Esto da el recuento acumulado. Coloque el elemento en el índice calculado como se muestra en la siguiente figura.
  
  ![](https://www.programiz.com/sites/tutorial2program/files/Counting-sort-4_1.png)
- Radix sort (raíz):
  
  La ordenación por raíz en un algoritmo de clasificación que ordena los elementos agrupando primero los dígitos individuales de los mismos valores posionales. Luego, ordena los elementos según su orden creciente/decreciente.
  
  Supongamos que tenemos una matriz de 8 elementos. Primero, ordenaremos los elementos según el valor de la unidad. Luego, ordenaremos los elementos según el valor del décimo lugar. Este proceso continúa hasta el último lugar significativo.
- Funcionamiento de Radix Sort:
  
  1. Encuentra el elemento más grande de la matriz, es decir max. Deja X sea el número de dígitos en max. X se calcula porque tenemos que recorrer todos los lugares significativos de todos los elementos.
  
  En esta matriz [121, 432, 564, 23, 1, 45, 788], tenemos el número más grande 788. Tiene 3 dígitos. Por lo tanto, el bucle debe subir hasta cientos de lugares (3 veces).
  
  2. Ahora, recorre cada lugar significativo uno por uno.
  
  Utiliza cualquier técnica de clasificación estable para ordenar los dígitos en cada lugar significativo. Para ello usa el ordenamiento por conteo.
  
  Ordene los elementos según los dígitos de la unidad (X=0).
  <div style= "background-color:#dfdfdf;"><img src="https://www.programiz.com/sites/tutorial2program/files/Radix-sort-one.png"></div>
  
  3. Ahora, ordena los elementos según los dígitos en el lugar de las decenas.
  
  <div style= "background-color:#dfdfdf;"><img src="https://www.programiz.com/sites/tutorial2program/files/Radix-sort-ten.png"></div>
  
  4. Finalmente, ordena los elementos según los dígitos en cientos.
  
  <div style= "background-color:#dfdfdf;"><img src="https://www.programiz.com/sites/tutorial2program/files/Radix-sort-hundred.png"></div>
- ## Clasificación de los algoritmos de ordenación
  
  1. Cantidad de intercambios o inversiones requeridas: cantidad de veces que el algoritmo intercambia elementos para ordenar la entrada.
  2. El número de comparaciones: Este es el número de veces que el algoritmo compara elementos para ordenar la entrada. Usando la notación Big-O, los algoritmos nombrados anteriormente requiren al menos 0(nlog) comparaciones en el mejor de los casos y 0(n^2) comparaciones en el peor de los casos para la mayoría de los resultados.
  3. Que uso o no recursividad: Algunos algoritmos de ordenación, como la ordenación rápida, usan técnicas recursivas para ordenar la entrada.
  4. Que sean estables o inestables: Los algoritmos de ordenación estables mantienen el orden relativo de los elementos con valores iguales o claves.
  5. La cantidad de espacio adicional requerido: Algunos algoritmos de ordenación pueden ordenar una lista sin crea una lista completamente nueva. Estos se conocen como algoritmos de ordenación en el lugar y requiren un 0(1) espacio adicional contante para la ordenación. Mientras tanto, los algoritmos de ordenación fuera de lugar crean una nueva lista durante la ordenación.


<div style="background-color: #fff;">
  <img src="https://www.programiz.com/sites/tutorial2program/files/Radix-sort-hundred.png">
</div>
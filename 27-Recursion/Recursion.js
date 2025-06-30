// Caso Práctico: JSON anidado  - Sistema de archivo + recursividad

//📁 Estructura del sistema de archivos (JSON simulado)

const sistemaArchivos = {
  nombre: "raíz",
  tipo: "carpeta",
  hijos: [
    {
      nombre: "documento.txt",
      tipo: "archivo"
    },
    {
      nombre: "imagenes",
      tipo: "carpeta",
      hijos: [
        { nombre: "foto1.png", tipo: "archivo" },
        { nombre: "foto2.png", tipo: "archivo" }
      ]
    },
    {
      nombre: "proyectos",
      tipo: "carpeta",
      hijos: [
        {
          nombre: "recursividad",
          tipo: "carpeta",
          hijos: [
            { nombre: "fibonacci.js", tipo: "archivo" }
          ]
        }
      ]
    }
  ]
};


// Función para imprimir el arbol de archivos de forma recursiva:

function imprimirSistema(entrada, indent = ''){
    console.log(`${indent} - ${entrada.nombre} (${entrada.tipo})`);
    if(entrada.tipo === 'carpeta' && entrada.hijos){
        for (const hijo of entrada.hijos){
            imprimirSistema(hijo, indent + ' ');
        }
    }
}

imprimirSistema(sistemaArchivos);


// Función para buscar un archivo o carpeta por nombre de forma recursiva:

function buscarElemento(nombre, nodo){
    if(nodo.nombre === nombre ) return nodo;

    if( nodo.tipo === 'carpeta' && nodo.hijos){
        for(const hijo of nodo.hijos){
            const encontrado = buscarElemento(nombre, hijo);
            if(encontrado) return encontrado;
        }
    }

    return null; // Si no encuentra nada
}

// Ejemplo de busqueda:

const encontrado = buscarElemento('foto2.png', sistemaArchivos);
console.log(encontrado ? `Elemento encontrado: ${encontrado.nombre}` : 'Elemento no encontrado');
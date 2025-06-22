// Caso Práctico: Stacks en JS
/*
Guardar la ropa en el placard.
Supongamos que tenemos que guardar ropa en un placard, apilandola en un estante.. Por lo general la última prenda que se coloque, es la primera que
agarramos cuando vayamos a buscar algo.
Esto sería un Stack en acción.

Por fines prácticos, me decanto por utilizar instancias de clases para representar el estante
*/

class EstanteRopa {
    constructor(){
        this.pilaDeRopa = [];
    }

    //Métodos que necesitas, Guardar, Sacar, Ver, Limpiar y Ver cuantas prendas hay.

    //Guardar una prenda
    guardarPrenda(prenda) {
        this.pilaDeRopa.push(prenda); // Añadimos la prenda al final (parte superior de la pila)
        console.log(`Guardaste: ${prenda}. Pila actual: [${this.pilaDeRopa.join(', ')}]`);
    }
    
    // Sacar una prenda gurdada
    sacarPrenda() {
        if (this.pilaDeRopa.length > 0) {
            const prendaSacada = this.pilaDeRopa.pop(); // Sacamos la última prenda (la de arriba)
            console.log(`Sacaste: ${prendaSacada}. Pila actual: [${this.pilaDeRopa.join(', ')}]`);
            return prendaSacada;
        } else {
            console.log("El estante está vacío, no hay ropa para sacar.");
            return null;
        }
    }

    // Ver ultima prenda guardada, sin sacarla
    verPrendaSuperior() {
        if (this.pilaDeRopa.length > 0) {
            const ultimaPrenda = this.pilaDeRopa[this.pilaDeRopa.length - 1];
            console.log(`Arriba de la pila está: ${ultimaPrenda}`);
            return ultimaPrenda;
        } else {
            console.log("El estante está vacío.");
            return null;
        }
    }

    // Ver cuántas prendas hay en el estante
    cuantasPrendasHay() {
        return this.pilaDeRopa.length;
    }
}

const miEstante = new EstanteRopa();

console.log("--- Guardando ropa ---");
miEstante.guardarPrenda("Camisa Azul");
miEstante.guardarPrenda("Pantalón Jean");
miEstante.guardarPrenda("Buzo Gris");
miEstante.guardarPrenda("Bufanda Roja"); // Esta es la última que guardo

console.log("\n--- Sacando ropa (última en entrar, primera en salir) ---");
miEstante.sacarPrenda(); // Saca la "Bufanda Roja"
miEstante.verPrendaSuperior(); // Ve que el "Buzo Gris" está arriba
miEstante.sacarPrenda(); // Saca el "Buzo Gris"
miEstante.guardarPrenda("Campera Negra"); // Guardo otra prenda
miEstante.sacarPrenda(); // Saca la "Campera Negra"
miEstante.sacarPrenda(); // Saca el "Pantalón Jean"
miEstante.sacarPrenda(); // Saca la "Camisa Azul"
miEstante.sacarPrenda(); // Intenta sacar de un estante vacío

//Caso Práctico: Queue (Cola) - Control de Acceso a un Local
//Imagina que eres el encargado de un local con aforo limitado (por ejemplo, por regulaciones de capacidad o un evento especial) y las personas deben esperar en una fila para poder entrar. Las primeras personas que llegan a la fila son las primeras en tener permitido el acceso. ¡Esto es el principio FIFO (First In, First Out) de una Queue en acción!

class ControlAccesoLocal {
    constructor(capacidadMaxima) {
        this.colaDeEspera = []; // Nuestra Queue: la fila de personas esperando
        this.personasAdentro = 0; // Contador de personas dentro del local
        this.capacidadMaxima = capacidadMaxima; // Límite de personas permitidas
        console.log(`Control de acceso iniciado. Capacidad máxima: ${this.capacidadMaxima} personas.`);
    }

    // Método para que una persona se una a la cola
    llegaPersona(nombrePersona) {
        this.colaDeEspera.push(nombrePersona); // La persona se une al final de la cola
        console.log(`¡${nombrePersona} ha llegado y se ha unido a la fila! ` +
                    `Fila actual: [${this.colaDeEspera.join(', ')}]`);
        // Intentar dar acceso inmediatamente si hay espacio y la persona es la primera
        if (this.personasAdentro < this.capacidadMaxima && this.colaDeEspera[0] === nombrePersona) {
            this.darAcceso();
        }
    }

    // Método para permitir el acceso a la siguiente persona en la fila
    darAcceso() {
        if (this.colaDeEspera.length > 0 && this.personasAdentro < this.capacidadMaxima) {
            const personaAcceso = this.colaDeEspera.shift(); // La primera persona en la fila obtiene acceso
            this.personasAdentro++;
            console.log(`--> ¡${personaAcceso} ha ENTRADO al local! Personas adentro: ${this.personasAdentro}`);
            this.verEstadoFila();
            // Si hay espacio y más personas, intentar dar acceso a la siguiente
            if (this.personasAdentro < this.capacidadMaxima && this.colaDeEspera.length > 0) {
                // Pequeño retardo para simular el tiempo de entrada
                setTimeout(() => this.darAcceso(), 500); 
            }
        } else if (this.personasAdentro >= this.capacidadMaxima) {
            console.log(`El local está lleno (${this.personasAdentro}/${this.capacidadMaxima}). ${this.colaDeEspera.length} personas esperando.`);
        } else {
            console.log("No hay nadie esperando en la fila.");
        }
    }

    // Método para simular que una persona sale del local
    salePersona(nombrePersona = "Alguien") {
        if (this.personasAdentro > 0) {
            this.personasAdentro--;
            console.log(`${nombrePersona} ha SALIDO del local. Personas adentro: ${this.personasAdentro}`);
            // Si había gente esperando y ahora hay espacio, dar acceso a la siguiente
            if (this.colaDeEspera.length > 0 && this.personasAdentro < this.capacidadMaxima) {
                this.darAcceso();
            }
        } else {
            console.log("El local ya está vacío.");
        }
    }

    // Método para ver la fila actual
    verEstadoFila() {
        if (this.colaDeEspera.length > 0) {
            console.log(`Fila de espera: [${this.colaDeEspera.join(', ')}] (${this.colaDeEspera.length} personas)`);
            console.log(`Próxima persona en entrar: ${this.colaDeEspera[0]}`);
        } else {
            console.log("No hay fila de espera. ¡Adelante!");
        }
    }
}

// --- Demostración ---
const controlEntrada = new ControlAccesoLocal(3); // El local tiene capacidad para 3 personas

console.log("\n--- Llegan personas a la fila ---");
controlEntrada.llegaPersona("Ana"); // Ana es la primera, debería entrar
controlEntrada.llegaPersona("Juan"); // Juan espera
controlEntrada.llegaPersona("Marta"); // Marta espera
controlEntrada.llegaPersona("Pedro"); // Pedro espera (el local se llenó con Ana, Juan y Marta)

setTimeout(() => {
    console.log("\n--- Estado actual ---");
    controlEntrada.verEstadoFila();
    console.log(`Personas actualmente adentro: ${controlEntrada.personasAdentro}`);
}, 1000); // Esperar un poco para que se procesen las entradas iniciales

setTimeout(() => {
    console.log("\n--- Ana y Juan salen del local ---");
    controlEntrada.salePersona("Ana"); // Ana sale, se libera un espacio
    controlEntrada.salePersona("Juan"); // Juan sale, se libera otro espacio
}, 3000); // Dar tiempo para que todos entren y luego salgan

setTimeout(() => {
    console.log("\n--- Llega una nueva persona ---");
    controlEntrada.llegaPersona("Luisa"); // Luisa llega y se une a la fila
}, 5000); 

setTimeout(() => {
    console.log("\n--- Finalizando ---");
    controlEntrada.salePersona("Marta");
    controlEntrada.salePersona("Pedro");
    controlEntrada.salePersona("Luisa");
    controlEntrada.salePersona(); // Simula que alguien más sale
}, 7000);
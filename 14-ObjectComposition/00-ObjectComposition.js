// Object Composition
/*
Imaginemos que estamos modelando un sistema para vehículos. 
En lugar de usar clases como Auto, Moto, etc., vamos a crear comportamientos modulares como:
puedeEncender()

puedeTransportarPersonas()

puedeCargarCarga()

puedeTenerPuertas()

Y luego componemos objetos como auto, moto o camión según necesiten esas habilidades.
*/

// Comportamientos individuales

const puedeEncender = () => ({
    encender: () => console.log("El vehículo está encendido.")
});

const puedeTransportarPersonas = (cantidad) => ({
    transportar: () => console.log(`Transportando a ${cantidad} personas.`)
});

const puedeCargarCarga = (kg) => ({
    cargar: () => console.log(`Cargando ${kg} kg de mercancía.`)
});

const puedeTenerPuertas = (puertas) => ({
    mostrarPuertas: () => console.log(`Este vehículo tiene ${puertas} puertas.`)
});

// Crear Vehículos por composicion

function crearAuto(marca, modelo, puertas) {
    const nombre = `${marca} ${modelo}`;
    return {
        nombre,
        ...puedeEncender(),
        ...puedeTransportarPersonas(5),
        ...puedeTenerPuertas(puertas),
    };
}

function crearMoto(marca, modelo) {
    const nombre = `${marca} ${modelo}`;
    return {
        nombre,
        ...puedeEncender(),
        ...puedeTransportarPersonas(2),
    };
}

function crearCamion(marca, modelo, capacidadCarga) {
    const nombre = `${marca} ${modelo}`;
    return {
        nombre,
        ...puedeEncender(),
        ...puedeCargarCarga(capacidadCarga),
        ...puedeTransportarPersonas(3),
    };
}

const miAuto = crearAuto("Toyota", "Corolla", 4);
const miMoto = crearMoto("Yamaha", "FZ");
const miCamion = crearCamion("Volvo", "FH", 18000);

miAuto.encender();              // El vehículo está encendido.
miAuto.transportar();           // Transportando a 5 personas.
miAuto.mostrarPuertas();        // Este vehículo tiene 4 puertas.

miMoto.encender();              // El vehículo está encendido.
miMoto.transportar();           // Transportando a 2 personas.

miCamion.encender();            // El vehículo está encendido.
miCamion.cargar();              // Cargando 18000 kg de mercancía.
miCamion.transportar();         // Transportando a 3 personas.

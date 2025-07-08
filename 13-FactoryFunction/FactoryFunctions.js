function crearVehiculo(marca, modelo, año) {
    return {
        marca,
        modelo,
        año,
        getInfo() {
            return `${marca} ${modelo} (${año})`;
        }
    };
}

function crearAuto(marca, modelo, año, puertas) {
    const auto = crearVehiculo(marca, modelo, año);
    return {
        ...auto,
        puertas,
        getInfo() {
            return `${auto.getInfo()} - Auto de ${puertas} puertas`;
        }
    };
}

function crearMoto(marca, modelo, año, tipo) {
    const moto = crearVehiculo(marca, modelo, año);
    return {
        ...moto,
        tipo,
        getInfo() {
            return `${moto.getInfo()} - Moto tipo ${tipo}`;
        }
    };
}

// Uso
const vehiculos = [
    crearAuto("Honda", "Civic", 2022, 4),
    crearMoto("Kawasaki", "Ninja", 2023, "Deportiva")
];

vehiculos.forEach(v => console.log(v.getInfo()));

/*
Salida:
Honda Civic (2022) - Auto de 4 puertas
Kawasaki Ninja (2023) - Moto tipo Deportiva
*/

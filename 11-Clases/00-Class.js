// Clases en JavaScript

class Producto {
    constructor(nombre, precio, unidades){
        this.nombre = nombre;
        this.precio = precio;
        this.unidades = unidades;
    }

    getTotal(){
        const total = this.unidades * this.precio;
        return total.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });
    }

    info(){
        console.log(`Producto: ${this.nombre}`)
        console.log(`Precio Unitario: ${this.precio}`)
        console.log(`Unidades en Stock: ${this.unidades}`)
        console.log(`Valor total en Stock de ${this.nombre}: ${this.getTotal()}`)
    }
}

const producto1 = new Producto("Laptop", 1000, 5);
producto1.info();



// Subclase: Teclado

class Teclado extends Producto {
    constructor(nombre, precio, unidades, tipo){
        super(nombre, precio, unidades);
        this.tipo = tipo;
    }

    info(){
        super.info();
        console.log(`Tipo de Teclado: ${this.tipo}`)
    }
}

const teclado = new Teclado("Teclado Gamer xk", 200, 10, "Gamer 65%");
teclado.info();
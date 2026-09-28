class Producto {
    constructor(nombre, precio, disponible) {
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = disponible;
    }

    mostrarInfo() {
        console.log(
            "Nombre: " + this.nombre +
            ", Precio: $" + this.precio +
            ", Disponible: " + this.disponible
        );
    }

    cambiarDisponibilidad() {
        this.disponible = !this.disponible;
    }
}

const producto1 = new Producto("Labial", 150, true);
const producto2 = new Producto("Rímel", 180, true);
const producto3 = new Producto("Base", 250, false);
const producto4 = new Producto("Rubor", 120, true);

producto1.mostrarInfo();
producto2.mostrarInfo();
producto3.mostrarInfo();
producto4.mostrarInfo();

producto3.cambiarDisponibilidad();

console.log("Después de cambiar disponibilidad:");
producto3.mostrarInfo();

class Maquillaje extends Producto {
    constructor(nombre, precio, disponible, tono) {
        super(nombre, precio, disponible);
        this.tono = tono;
    }

    mostrarInfo() {
        console.log(
            "Nombre: " + this.nombre +
            ", Precio: $" + this.precio +
            ", Disponible: " + this.disponible +
            ", Tono: " + this.tono
        );
    }
}

const maquillaje1 = new Maquillaje("Labial", 170, true, "Rojo");

maquillaje1.mostrarInfo();

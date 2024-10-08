// Definición de la clase Carro
class Carro {
    // Método constructor
    constructor(modelo, marca, color, motor, precio) {
        this.modelo = modelo; // Atributos de instancia
        this.marca = marca;
        this.color = color;
        this.motor = motor;
        this.precio = precio;
    }
    
    // Método para mostrar los detalles del objeto
    mostrarDetalles() {
        document.write("<h3 class='text-warning'>Detalles del Carro</h3>");
        document.write("Modelo: " + this.modelo + "<br>");
        document.write("Marca: " + this.marca + "<br>");
        document.write("Color: " + this.color + "<br>");
        document.write("Motor: " + this.motor + "<br>");
        document.write("Precio: " + this.precio + "<br>");
        document.write("<hr>");
    }
    
    // Método para encender el carro
    encender() {
        // Atributo privado solo para el método encender
        let combustible = parseInt(prompt("Digite la cantidad de combustible (en litros): "));
        // Evaluamos si hay suficiente combustible
        if (combustible > 0) {
            document.write("El carro " + this.modelo + " puede encenderse <br>");
            document.write("Nivel de combustible: " + combustible + " litros <br>");
            document.write("<hr>");
        } else {
            document.write("El carro " + this.modelo + " no puede encenderse <br>");
            document.write("Nivel de combustible: " + combustible + " litros <br>");
            document.write("<hr>");
        }
    }
}

// Mostrar las acciones del objeto
let carro1 = new Carro("Toyota Corolla", "Toyota", "Rojo", "V4", 20000);
let carro2 = new Carro("Honda Civic", "Honda", "Negro", "V4", 22000);

carro1.mostrarDetalles();
carro1.encender();
carro2.mostrarDetalles();
carro2.encender();

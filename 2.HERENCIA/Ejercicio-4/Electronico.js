// Clase Electrónico
class Electronico {
    // Constructor
    constructor(marca, modelo, procesador, ram) {
        this.marca = marca;
        this.modelo = modelo;
        this.procesador = procesador;
        this.ram = parseInt(prompt("Cantidad de memoria RAM (GB):")); // Prompt para pedir la RAM
    }

    // Método para mostrar los detalles del dispositivo
    mostrarDetalles() {
        document.write("<hr>");
        document.write("<div class='alert alert-primary' role='alert'>DISPOSITIVO ELECTRÓNICO REGISTRADO</div>");
        document.write("<hr>");
        document.write("Marca: ", this.marca, "<br>");
        document.write("Modelo: ", this.modelo, "<br>");
        document.write("Procesador: ", this.procesador, "<br>");
        document.write("Memoria RAM: ", this.ram, " GB", "<br>");
    }
}

// Subclase Laptop
class Laptop extends Electronico {
    // Constructor
    constructor(marca, modelo, procesador, ram, discoDuro, duracionBateria) {
        super(marca, modelo, procesador, ram); // Hereda de Electrónico
        this.discoDuro = discoDuro;
        this.duracionBateria = parseInt(prompt("Duración de la batería (horas):")); // Prompt para pedir duración de la batería
    }

    // Método para simular el encendido de la laptop
    encender() {
        document.write("<hr>");
        document.write("<div class='alert alert-success' role='alert'>La laptop está encendida!</div>");
        document.write("Disco Duro: ", this.discoDuro, "<br>");
        document.write("Duración de Batería: ", this.duracionBateria, " horas", "<br>");
    }
}

// Instanciando la subclase Laptop
let miLaptop = new Laptop("Apple", "MacBook Pro", "Intel Core i9", 16, "SSD 1TB", 10); // Creando una laptop específica
miLaptop.mostrarDetalles(); // Mostrando los detalles de la laptop
miLaptop.encender(); // Simulando el encendido de la laptop

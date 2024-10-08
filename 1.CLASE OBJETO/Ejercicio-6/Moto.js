// Definición de la clase Moto
class Moto {
    // Método constructor
    constructor(modelo, marca, color, cilindrada, precio) {
        this.modelo = modelo; // Atributos de instancia
        this.marca = marca;
        this.color = color;
        this.cilindrada = cilindrada;
        this.precio = precio;
    }
    
    // Método para mostrar los detalles de la moto
    mostrarDetalles() {
        document.write("<h3 class='text-warning'>Detalles de la Moto</h3>");
        document.write("Modelo: " + this.modelo + "<br>");
        document.write("Marca: " + this.marca + "<br>");
        document.write("Color: " + this.color + "<br>");
        document.write("Cilindrada: " + this.cilindrada + " cc<br>");
        document.write("Precio: $" + this.precio.toFixed(2) + "<br>");
        document.write("<hr>");
    }
    
    // Método para encender la moto
    encender() {
        // Atributo privado solo para el método encender
        let combustible = parseInt(prompt("Digite la cantidad de combustible (en litros): "));
        // Evaluamos si hay suficiente combustible
        if (combustible > 0) {
            document.write("La moto " + this.modelo + " puede encenderse. <br>");
            document.write("Nivel de combustible: " + combustible + " litros <br>");
            document.write("<hr>");
        } else {
            document.write("La moto " + this.modelo + " no puede encenderse. <br>");
            document.write("Nivel de combustible: " + combustible + " litros <br>");
            document.write("<hr>");
        }
    }
}

// Crear instancias de la moto y mostrar sus detalles
let moto1 = new Moto("Yamaha MT-07", "Yamaha", "Negra", 689, 8500);
let moto2 = new Moto("Honda CBR500R", "Honda", "Roja", 471, 7000);

moto1.mostrarDetalles();
moto1.encender();
moto2.mostrarDetalles();
moto2.encender();

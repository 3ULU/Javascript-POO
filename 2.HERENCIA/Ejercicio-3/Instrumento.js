// Clase Instrumento
class Instrumento {
    // Constructor
    constructor(tipo, marca, material, precio) {
        this.tipo = tipo;
        this.marca = marca;
        this.material = material;
        this.precio = parseFloat(prompt("Precio del instrumento:")); // Prompt para ingresar el precio
    }

    // Método para mostrar detalles del instrumento
    mostrarDetalles() {
        document.write("<hr>");
        document.write("<div class='alert alert-primary' role='alert'>INSTRUMENTO REGISTRADO</div>");
        document.write("<hr>");
        document.write("Tipo: ", this.tipo, "<br>");
        document.write("Marca: ", this.marca, "<br>");
        document.write("Material: ", this.material, "<br>");
        document.write("Precio: $", this.precio.toFixed(2), "<br>");
    }
}

// Subclase Guitarra
class Guitarra extends Instrumento {
    // Constructor
    constructor(marca, material, precio, numeroCuerdas) {
        super("Guitarra", marca, material, precio); // Hereda de Instrumento
        this.numeroCuerdas = numeroCuerdas;
        this.acordes = prompt("Acordes que conoces (separados por comas):").split(","); // Prompt para ingresar acordes
    }

    // Método para simular tocar la guitarra
    tocar() {
        document.write("<hr>");
        document.write("<div class='alert alert-success' role='alert'>Tocando la guitarra...</div>");
        document.write("<p>Acordes tocados: " + this.acordes.join(", ") + "</p>");
        document.write("Número de cuerdas: ", this.numeroCuerdas, "<br>");
    }
}

// Instanciando la subclase Guitarra
let miGuitarra = new Guitarra("Fender", "Madera", 1200, 6); // Creando un objeto de la clase Guitarra
miGuitarra.mostrarDetalles(); // Mostrando los detalles de la guitarra
miGuitarra.tocar(); // Simulando tocar la guitarra

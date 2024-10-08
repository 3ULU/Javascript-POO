class Vehiculo {
    constructor(marca, color, modelo) {
        this.marca = marca;
        this.color = color;
        this.modelo = modelo;
        this.numeroLlantas = parseInt(prompt("No. de llantas:")); // Se usa prompt para pedir input
    }

    registrar() {
        document.write("<hr>");
        document.write('<div class="alert alert-primary" role="alert">CARRO REGISTRADO</div>');
        document.write("<hr>");
        document.write("Marca: " + this.marca + "<br>");
        document.write("Color: " + this.color + "<br>");
        document.write("Modelo: " + this.modelo + "<hr>");
        document.write("No. de llantas: " + this.numeroLlantas + "<br>");
    }
}

class Carro extends Vehiculo {
    constructor(marca, color, modelo, placa) {
        super(marca, color, modelo); // Hereda de Vehiculo
        this.placa = placa;
        this.gasolina = parseInt(prompt("No. de Galones de Gasolina:")); // Prompt para pedir input
    }

    encender() {
        document.write("Placa: " + this.placa + "<br>"); // Imprime la placa

        if (this.gasolina > 0) {
            document.write('<div class="alert alert-success" role="alert">El carro ' + this.marca + ', con placa ' + this.placa + ' de color ' + this.color + ' enciende !! </div>');
        } else {
            document.write('<div class="alert alert-danger" role="alert">El carro ' + this.marca + ', con placa ' + this.placa + ' de color ' + this.color + ' no enciende !! </div>');
        }
    }
}

// Instanciando la subclase Carro
let objetoCarro = new Carro("SUZUKI", "Rojo", 2022, "PPC 54C"); // Objeto carro
objetoCarro.registrar(); // Registrando el carro
objetoCarro.encender(); // Encendiendo el carro
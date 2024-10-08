// Super clase
class Dispositivo {
    // Constructor
    constructor(marca, modelo, año, capacidadBateria) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.capacidadBateria = parseInt(prompt("Capacidad de la Batería (mAh):")); // prompt para pedir la capacidad de la batería
    }

    // Método público para registrar los detalles
    registrar() {
        document.write("<hr>");
        document.write("<div class='alert alert-primary' role='alert'>DISPOSITIVO REGISTRADO</div>");
        document.write("<hr>");
        document.write("Marca: ", this.marca, "<br>");
        document.write("Modelo: ", this.modelo, "<br>");
        document.write("Año: ", this.año, "<br>");
        document.write("Capacidad de Batería: ", this.capacidadBateria, " mAh", "<br>");
    }
}

// Subclase Smartphone
class Smartphone extends Dispositivo {
    // Constructor
    constructor(marca, modelo, año, capacidadBateria, sistemaOperativo) {
        super(marca, modelo, año, capacidadBateria); // Hereda de Dispositivo
        this.sistemaOperativo = sistemaOperativo;
        this.conectividad = prompt("Tipo de Conectividad (4G o 5G):"); // prompt para pedir la conectividad
    }

    // Método para encender el smartphone
    encender() {
        document.write("<hr>");
        document.write("Sistema Operativo: ", this.sistemaOperativo, "<br>");
        document.write("Conectividad: ", this.conectividad, "<br>");
        document.write("<div class='alert alert-success' role='alert'>El Smartphone con sistema operativo " + this.sistemaOperativo + " está encendido!</div>");
    }
}

// Instanciando la subclase Smartphone
let miSmartphone = new Smartphone("Apple", "iPhone 13", 2021, 3095, "iOS"); // ejemplo de objeto de Smartphone
miSmartphone.registrar(); // Registrando el smartphone
miSmartphone.encender(); // Encendiendo el smartphone

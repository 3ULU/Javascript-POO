class Reloj {
    constructor(marca, tipo, material) {
    this.marca = marca;
    this.tipo = tipo;
    this.material = material;
      this.precio = parseFloat(prompt("Ingrese el precio del reloj:")); // Utilizamos parseFloat para permitir decimales
    }

    get marca() {
    return this.marca;
    }

    // ... otros getters

    mostrarDetalles() {
    console.log(`
        Marca: ${this.marca}
        Tipo: ${this.tipo}
        Material: ${this.material}
        Precio: $${this.precio}
    `);
    }
}

class RelojInteligente extends Reloj {
    constructor(marca, tipo, material, pantalla, sistemaOperativo) {
    super(marca, tipo, material);
    this.pantalla = pantalla;
    this.sistemaOperativo = sistemaOperativo;
    }

    // ... getters

    encender() {
    console.log("Reloj inteligente encendido.");
    console.log(`
        Pantalla: ${this.pantalla}
        Sistema Operativo: ${this.sistemaOperativo}
    `);
    }
}

  // Crear un reloj inteligente
const miReloj = new RelojInteligente("Apple Watch", "Deportivo", "Aluminio", "OLED", "watchOS");
miReloj.mostrarDetalles();
miReloj.encender();
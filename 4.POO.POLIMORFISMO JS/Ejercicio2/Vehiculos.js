// Selecciona el elemento donde se mostrará la salida
const output = document.getElementById('output');

// Clase base Vehiculo
class Vehiculo {
constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
}

descripcion() {
    output.innerHTML += "Este es un vehículo.<br>";
}
}

// Clase Carro
class Carro extends Vehiculo {
constructor(marca, modelo, numeroPuertas) {
    super(marca, modelo);
    this.numeroPuertas = numeroPuertas;
}

descripcion() {
    output.innerHTML += `Este es un carro ${this.marca} ${this.modelo} con ${this.numeroPuertas} puertas.<br><hr>`;
}
}

// Clase Moto
class Moto extends Vehiculo {
constructor(marca, modelo, cilindrada) {
    super(marca, modelo);
    this.cilindrada = cilindrada;
}

descripcion() {
    output.innerHTML += `Esta es una moto ${this.marca} ${this.modelo} de ${this.cilindrada} cc.<br><hr>`;
}
}

// Clase Bicicleta
class Bicicleta extends Vehiculo {
constructor(marca, modelo, tipo) {
    super(marca, modelo);
    this.tipo = tipo;
}

descripcion() {
    output.innerHTML += `Esta es una bicicleta ${this.marca} ${this.modelo} de tipo ${this.tipo}.<br>`;
}
}

// Crear objetos de cada clase
const miCarro = new Carro("Toyota", "Corolla", 4);
const miMoto = new Moto("Honda", "CBR600RR", 600);
const miBicicleta = new Bicicleta("Trek", "Madone SLR", "carretera");

// Mostrar la descripción de cada vehículo
miCarro.descripcion();
miMoto.descripcion();
miBicicleta.descripcion();
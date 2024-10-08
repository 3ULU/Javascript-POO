// Selecciona el elemento donde se mostrará la salida
const output = document.getElementById('output');

// Clase base Instrumento
class Instrumento {
constructor(nombre) {
    this.nombre = nombre;
}

tocar() {
    output.innerHTML += "Este instrumento produce un sonido.<br><hr>";
}
}

// Clase Guitarra
class Guitarra extends Instrumento {
constructor(nombre, cuerdas) {
    super(nombre);
    this.cuerdas = cuerdas;
}

tocar() {
    output.innerHTML += `La ${this.nombre} se toca con las yemas de los dedos sobre las cuerdas.<br><hr>`;
}
}

// Clase Piano
class Piano extends Instrumento {
constructor(nombre, teclas) {
    super(nombre);
    this.teclas = teclas;
}

tocar() {
    output.innerHTML += `El ${this.nombre} se toca presionando las teclas.<br><hr>`;
}
}

// Clase Trompeta
class Trompeta extends Instrumento {
constructor(nombre, boquilla) {
    super(nombre);
    this.boquilla = boquilla;
}

tocar() {
    output.innerHTML += `La ${this.nombre} se toca soplando en la boquilla.<br>`;
}
}

// Crear objetos de cada clase
const miGuitarra = new Guitarra("Fender Stratocaster", 6);
const miPiano = new Piano("Yamaha Grand", 88);
const miTrompeta = new Trompeta("Bach Stradivarius", "C");

// Mostrar la forma de tocar de cada instrumento
miGuitarra.tocar();
miPiano.tocar();
miTrompeta.tocar();
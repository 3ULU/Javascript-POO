// Selecciona el elemento donde se mostrará la salida
const output = document.getElementById('output');

// Clase base Animal
class Animal {
constructor(nombre) {
    this.nombre = nombre;
}

sonido() {
    output.innerHTML += "Este animal hace un sonido.<br><hr>";
}
}

// Clase Perro
class Perro extends Animal {
constructor(nombre, raza) {
    super(nombre);
    this.raza = raza;
}

sonido() {
    output.innerHTML += `${this.nombre} el perro ladra: ¡Guau!<br><hr>`;
}
}

// Clase Gato
class Gato extends Animal {
constructor(nombre, color) {
    super(nombre);
    this.color = color;
}

sonido() {
    output.innerHTML += `${this.nombre} el gato maúlla: Miau!<br><hr>`;
}
}

// Clase Pájaro
class Pájaro extends Animal {
constructor(nombre, color) {
    super(nombre);
    this.color = color;
}

sonido() {
    output.innerHTML += `${this.nombre} el pájaro canta: ¡Pio, pio!<br>`;
}
}

// Crear objetos de cada clase
const miPerro = new Perro("Zeus", "Doberman");
const miGato = new Gato("Chimuelo", "Negro");
const miPajaro = new Pájaro("Piolin", "Amarillo");

// Mostrar el sonido de cada animal
miPerro.sonido();
miGato.sonido();
miPajaro.sonido();
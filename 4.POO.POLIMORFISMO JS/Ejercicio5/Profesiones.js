// Selecciona el elemento donde se mostrará la salida
const output = document.getElementById('output');

// Clase base Profesional
class Profesional {
constructor(nombre) {
    this.nombre = nombre;
}

trabajar() {
    output.innerHTML += `Este profesional realiza una tarea.<br>`;
}
}

// Clase Médico
class Medico extends Profesional {
constructor(nombre, especialidad) {
    super(nombre);
    this.especialidad = especialidad;
}

trabajar() {
    output.innerHTML += `${this.nombre} ejerce como ${this.especialidad}  diagnostica y trata enfermedades(AÚN FALTAN MUCHAS POR SER TRATADAS PERO AHÍ VAMOS ._.).<br><hr>`;
}
}
{}
// Clase Ingeniero
class Ingeniero extends Profesional {
constructor(nombre, rama) {
    super(nombre);
    this.rama = rama;
}

trabajar() {
    output.innerHTML += `${this.nombre} es un ingeniero en ${this.rama}  diseña y construye soluciones tecnológicas para colombia.<br><hr>`;
}
}

// Clase Docente
class Docente extends Profesional {
constructor(nombre, materia) {
    super(nombre);
    this.materia = materia;
}

trabajar() {
    output.innerHTML += `${this.nombre} enseña ${this.materia}  transmite conocimientos a sus estudiantes para que no terminen en la calle.<br>`;
}
}

// Crear objetos de cada clase
const miMedico = new Medico("Ana García", "Cardiología");
const miIngeniero = new Ingeniero("Carlos Pérez", "Software");
const miDocente = new Docente("María López", "Matemáticas");

// Mostrar la forma de trabajar de cada profesional
miMedico.trabajar();
miIngeniero.trabajar();
miDocente.trabajar();
const output = document.getElementById("output");

class TareaEmpleado {
    // Método abstracto
    realizarTarea() {
        throw new Error("Este método debe ser implementado en una clase hija");
    }
}

class Ingeniero extends TareaEmpleado {
    constructor(nombre) {
        super();
        this.nombre = nombre;
    }

    realizarTarea() {
        return `${this.nombre} está diseñando un sistema de software.`;
    }
}

class Doctor extends TareaEmpleado {
    constructor(nombre) {
        super();
        this.nombre = nombre;
    }

    realizarTarea() {
        return `${this.nombre} está atendiendo a un paciente.`;
    }
}

// Uso de las clases
const ingeniero = new Ingeniero("Wilson");
output.innerHTML += `${ingeniero.realizarTarea()} <br><hr>`;

const doctor = new Doctor("Margarita");
output.innerHTML += `${doctor.realizarTarea()} <br>`;

// Definición de la clase Empleado
class Empleado {
    // Método constructor
    constructor(nombre, puesto, departamento, salario, antigüedad) {
        this.nombre = nombre; // Atributos de instancia
        this.puesto = puesto;
        this.departamento = departamento;
        this.salario = salario;
        this.antigüedad = antigüedad;
    }
    
    // Método para mostrar los detalles del empleado
    mostrarDetalles() {
        document.write("<h3 class='text-warning'>Detalles del Empleado</h3>");
        document.write("Nombre: " + this.nombre + "<br>");
        document.write("Puesto: " + this.puesto + "<br>");
        document.write("Departamento: " + this.departamento + "<br>");
        document.write("Salario: $" + this.salario.toFixed(2) + "<br>");
        document.write("Antigüedad: " + this.antigüedad + " años<br>");
        document.write("<hr>");
    }
    
    // Método para evaluar la satisfacción del empleado
    evaluarSatisfaccion() {
        // Atributo privado solo para el método evaluarSatisfaccion
        let satisfaccion = parseInt(prompt("¿Cómo calificaría su satisfacción en una escala del 1 al 10? "));
        // Evaluamos el nivel de satisfacción
        if (satisfaccion >= 7) {
            document.write("El empleado " + this.nombre + " está satisfecho con su trabajo. <br>");
            document.write("Nivel de satisfacción: " + satisfaccion + "/10 <br>");
            document.write("<hr>");
        } else {
            document.write("El empleado " + this.nombre + " no está completamente satisfecho con su trabajo. <br>");
            document.write("Nivel de satisfacción: " + satisfaccion + "/10 <br>");
            document.write("<hr>");
        }
    }
}

// Mostrar las acciones del objeto
let empleado1 = new Empleado("Ana Pérez", "Desarrolladora", "IT", 60000, 3);
let empleado2 = new Empleado("Carlos Gómez", "Analista", "Marketing", 50000, 5);

empleado1.mostrarDetalles();
empleado1.evaluarSatisfaccion();
empleado2.mostrarDetalles();
empleado2.evaluarSatisfaccion();

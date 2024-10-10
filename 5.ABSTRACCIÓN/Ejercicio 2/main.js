const output = document.getElementById("output");

class Empleado {
    // Método abstracto
    calcularSalario() {
        throw new Error("Este método debe ser implementado en una clase hija");
    }
}

class EmpleadoTiempoCompleto extends Empleado {
    constructor(salarioMensual) {
        super();
        this.salarioMensual = salarioMensual;
    }

    calcularSalario() {
        return this.salarioMensual;
    }
}

class EmpleadoPorHoras extends Empleado {
    constructor(horasTrabajadas, tarifaPorHora) {
        super();
        this.horasTrabajadas = horasTrabajadas;
        this.tarifaPorHora = tarifaPorHora;
    }

    calcularSalario() {
        return this.horasTrabajadas * this.tarifaPorHora;
    }
}

// Uso de las clases
const empleadoTC = new EmpleadoTiempoCompleto(3000);  // Salario mensual de $3000
output.innerHTML += `Salario de empleado a tiempo completo: ${empleadoTC.calcularSalario()} <br><hr>`;

const empleadoPH = new EmpleadoPorHoras(120, 15);  // 120 horas trabajadas a $15 por hora
output.innerHTML += `Salario de empleado por horas: ${empleadoPH.calcularSalario()} <br>`;

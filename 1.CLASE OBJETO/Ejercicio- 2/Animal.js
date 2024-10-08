// Definición de la clase Animal
class Animal {
    // Método constructor
    constructor(nombre, especie, color, edad, peso) {
        this.nombre = nombre; // Atributos de instancia
        this.especie = especie;
        this.color = color;
        this.edad = edad;
        this.peso = peso;
    }
    
    // Método para mostrar los detalles del objeto
    mostrarDetalles() {
        document.write("<h3 class='text-warning'>Detalles del Animal</h3>");
        document.write("Nombre: " + this.nombre + "<br>");
        document.write("Especie: " + this.especie + "<br>");
        document.write("Color: " + this.color + "<br>");
        document.write("Edad: " + this.edad + " años<br>");
        document.write("Peso: " + this.peso + " kg<br>");
        document.write("<hr>");
    }
    
    // Método para alimentar al animal
    alimentar() {
        // Atributo privado solo para el método alimentar
        let hambre = parseInt(prompt("¿Cuánto tiene de hambre el animal (en una escala del 1 al 10)? "));
        // Evaluamos si el animal tiene hambre
        if (hambre < 5) {
            document.write("El animal " + this.nombre + " está bien alimentado. <br>");
            document.write("Nivel de hambre: " + hambre + "/10 <br>");
            document.write("Así es como tiene que ser, siempre tenga a su animal bien alimentado")
            document.write("<hr>");
        } else {
            document.write("El animal " + this.nombre + " necesita más comida. <br>");
            document.write("Nivel de hambre: " + hambre + "/10 <br>");
            document.write("Joa llave procura y dale más comida al perro, si no te denuncio con maltrato animal ")
            document.write("<hr>");
        }
    }
}

// Mostrar las acciones del objeto
let animal1 = new Animal("Saimon", "Perro", "Golden", 5, 20);
let animal2 = new Animal("Luna", "Gato", "Negro", 3, 4);

animal1.mostrarDetalles();
animal1.alimentar();
animal2.mostrarDetalles();
animal2.alimentar();

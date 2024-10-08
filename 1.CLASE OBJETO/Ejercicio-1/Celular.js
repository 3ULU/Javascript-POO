//DEfino la clase
class Celular {
    //metodo contructor
    constructor(modelo, marca, color, camara, precio) {
        this.modelo = modelo //Atributos de instancia
        this.marca = marca
        this.color = color
        this.camara = camara
        this.precio = precio
    }
    //Metodo para mostrar los detalles del objeto
    mostrarDetalles() {
        document.write("<h3 class='text-warning'>Dispositivo Móvil</h3>");
        document.write("Modelo: " + this.modelo + "<br>");
        document.write("Marca: " + this.marca + "<br>");
        document.write("Color: " + this.color + "<br>");
        document.write("Camara: " + this.camara + "<br>");
        document.write("Precio: " + this.precio + "<br>");
        document.write("<hr>");
    }
    //Metodo para encender el celular
    encender() {
        //Atributo privado solo para el metodo encender
        let energia = parseInt(prompt("Digite el valor de la carga: "));
        //Evaluamos si tiene carga el celular
        if (energia > 0) {
            document.write("El celular " + this.modelo + " se puede encender <br>");
            document.write("|||||||||| " + energia + "% de carga <br>");
            document.write("<hr>");
        } else {
            document.write("El celular " + this.modelo + " no se puede encender <br>");
            document.write("|||||||||| " + energia + "% de carga <br>");
            document.write("<hr>");
        }
    }
}
//Mostrar las acciones del objeto
let celular1 = new Celular("Xiaomi Mi 13+", "Xiaomi", "Blanco", "108MPX", 2650000);
let celular2 = new Celular("Samsung Galaxy A54", "Samsung", "Azul", "64MPX", 1860500);

celular1.mostrarDetalles();
celular1.encender();
celular2.mostrarDetalles();
celular2.encender();
//1. Clase Persona con las propiedades nombre y edad//
class Persona {
    constructor(nombre, edad) {
        this.nom = nombre;
        this.ed = edad;
        
    }
    getDetalles() {
        console.log("su nombre es " + this.nom + " y su edad es: " + this.ed);

    }

}

var objDetalles = new Persona("Leidy", "29");
console.log(objDetalles.getDetalles());

//2. Clase Estudiante, hereda de Persona, e incluye las propiedad de calificación//
class Estudiante extends Persona {
    constructor(nombre,edad,calificacion){
        super(nombre,edad);
        this.calif = calificacion;
    }
getDetalles(){
    super.getDetalles()
    console.log("y su calificación es: "+ this.calif);
}
}
var objDetalles = new Estudiante("Leidy", "29", "10");
console.log(objDetalles.getDetalles());

//3. Clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel//
class Profesor extends Persona {
    constructor(nombre,edad,calificacion,asignatura,nivel){
        super(nombre,edad,calificacion);
        this.asig = asignatura;
        this.niv = nivel;
    }
getDetalles(){
    super.getDetalles()
    console.log(", su asignatura es: " + this.asig + "y su nivel es: " + this.niv);
}
}
var objDetalles = new Profesor("Leidy", "29", "10", "Matematicas", "Medio");
console.log(objDetalles.getDetalles());

//4. Clase grupo que contendrá las propiedades profesor promedio y estudiantes.//
class grupo extends Profesor {
    constructor(nombre,edad,calificacion,asignatura,nivel,promedio,grupo){
        super(nombre,edad,calificacion,asignatura,nivel);
        this.prom = [];
        this.gru = grupo;
              }
        
getDetalles(){
    super.getDetalles()
    console.log(", promedio es: " + this.prom + "y grupo es: " + this.gru);
}
}
var objDetalles = new grupo("Leidy", "29", "10", "Matematicas", "Medio", "3.5", "6A");
console.log(objDetalles.getDetalles());

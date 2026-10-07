function Estudiante(nombre, nombreCurso, calificacion) {
    this.nombre = nombre;
    this.nombreCurso = nombreCurso;
    this.calificacion = calificacion;
    
    // Determinamos si aprobó directamente en la asignación
    this.aprobado = this.calificacion >= 3.0;

    this.mostrarResultado = function() {
        if (this.aprobado) {
            return `El estudiante ${this.nombre} aprobó el curso ${this.nombreCurso} con nota de: ${this.calificacion}`;
        } else {
            return `El estudiante ${this.nombre} reprobó el curso ${this.nombreCurso} con nota de: ${this.calificacion}`;
        }
    };
}

// ... (Tu constructor se mantiene igual)

const Estu1 = new Estudiante("Soranny", "Matematicas", 4.5);
const Estu2 = new Estudiante("Brayan", "Matematicas", 2.6);
const Estu3 = new Estudiante("Sary", "Matematicas", 3.4);
// Añadimos el cuarto estudiante requerido
const Estu4 = new Estudiante("Carlos", "Matematicas", 1.5); 

console.log(Estu1.mostrarResultado());
console.log(Estu2.mostrarResultado());
console.log(Estu3.mostrarResultado());
console.log(Estu4.mostrarResultado());

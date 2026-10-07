function Libro(titulo, autor, paginas) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.prestado = false; 

    // Método para prestar el libro
    this.prestar = function() {
        if (!this.prestado) {
            this.prestado = true;
            return `✅ El libro "${this.titulo}" ha sido prestado con éxito.`;
        } else {
            return `❌ ¡ALERTA! El libro "${this.titulo}" ya se encuentra prestado actualmente.`;
        }
    };

    //  Método para devolver el libro
    this.devolver = function() {
        if (this.prestado) {
            this.prestado = false;
            return `🔄 El libro "${this.titulo}" ha sido devuelto correctamente.`;
        } else {
            return `⚠️ INCONSISTENCIA: El libro "${this.titulo}" no se puede devolver porque no estaba prestado.`;
        }
    };

}

console.log("--- BIBLIOTECA ---");

// instancia del libro
const miLibro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 496);
const miLibro2 = new Libro("Don Quijote de la Mancha", "Miguel de Cervantes Saavedra", 235);
const miLibro3 = new Libro("1984", "George Orwell", 871);

console.log(miLibro1.prestar());
console.log(miLibro2.devolver());
console.log(miLibro3.prestar());


function Computador (marca, procesador, ramEnGB, precio) {
    this.marca = marca;
    this.procesador = procesador;
    this.ramEnGB = ramEnGB; // Corregido el nombre a camelCase como buena práctica
    this.precio = precio; 
}

// Se deben enviar todos los parámetros requeridos por el constructor
const lenovo = new Computador("Lenovo", "Intel i7", 16, 3500000);
const hp = new Computador("HP", "AMD Ryzen 5", 8, 2400000);
const macbook = new Computador("Macbook", "M2", 8, 5500000);

// La guía pide imprimir cada uno de los objetos creados (completos)
console.log(lenovo);
console.log(hp);
console.log(macbook);

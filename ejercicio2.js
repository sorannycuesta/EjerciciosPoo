function Mascota (nombre, especie, edad, peso) {
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.peso = peso;

    this.presentarse = function() {
    return `Nombre: ${this.nombre} | Especie: ${this.especie} | Edad: ${this.edad} | Peso: ${this.peso}`;
  };

}

const mast1 = new Mascota("Perro", "Canis lupus familiaris", 7, 10);
const mast2 = new Mascota("Gato", "Feliz Catus", 3, 5);
const mast3 = new Mascota("Jaguar","Panthera Onca", 15, 100);

console.log(mast1.presentarse());
console.log(mast2.presentarse());
console.log(mast3.presentarse());



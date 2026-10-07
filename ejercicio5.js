const prompt = require('prompt-sync')();

function Vehiculo(marca, modelo, año, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.color = color;
    this.encendido = false; 
    this.velocidad = 0; // 1. Mínimo 5 propiedades

    // 2. Mínimo 3 métodos
    this.encender = function() {
        this.encendido = true;
        return `🚗 El ${this.marca} ha sido encendido con éxito.`;
    };

    this.acelerar = function() {
        this.velocidad = this.velocidad + 20; // Modifica una propiedad
        return `⚡ Acelerando... Velocidad actual: ${this.velocidad} km/h.`;
    };

    this.mostrarInfo = function() {
        return `Datos: ${this.marca} ${this.modelo}, Año: ${this.año}, Color: ${this.color}`;
    };
}

console.log("--- INICIANDO CAPTURA DE DATOS INTERACTIVA ---");

// Usamos el ciclo para pedir la información de 3 vehículos uno por uno
for (let i = 1; i <= 3; i++) {
    console.log(`\n--- VEHÍCULO ${i} ---`);
    
    // Captura de datos usando tus variables con prompt
    const marcaCapturada = prompt("Ingresa la MARCA: ");
    const modeloCapturado = prompt("Ingresa el MODELO: ");
    const añoCapturado = prompt("Ingresa el AÑO: ");
    const colorCapturado = prompt("Ingresa el COLOR: ");

    // Creamos la instancia con tus variables
    const miVehiculo = new Vehiculo(marcaCapturada, modeloCapturado, añoCapturado, colorCapturado);

    // Ejecutamos los métodos como en tu archivo
    console.log(miVehiculo.mostrarInfo());
    console.log(miVehiculo.encender());
    console.log(miVehiculo.acelerar()); 
}

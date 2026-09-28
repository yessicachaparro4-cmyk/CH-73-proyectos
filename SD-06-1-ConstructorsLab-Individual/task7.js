// Type your code below this line!

const prompt = require("prompt-sync")()

function Car(marca, modelo, anio, color, puertas, kilometraje, motor) {
    this.marca = marca
    this.modelo = modelo
    this.anio = anio
    this.color = color
    this.puertas = puertas
    this.kilometraje = kilometraje
    this.motor = motor
}

const marca = prompt("Marca: ")
const modelo = prompt("Modelo: ")
const anio = Number(prompt("Año: "))
const color = prompt("Color: ")
const puertas = Number(prompt("Número de puertas: "))
const kilometraje = Number(prompt("Kilometraje: "))
const motor = prompt("¿Combustión o eléctrico?: ")

const coche = new Car(
    marca,
    modelo,
    anio,
    color,
    puertas,
    kilometraje,
    motor
)

console.log(coche)

// Type your code above this line!


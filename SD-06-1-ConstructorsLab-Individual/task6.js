// Type your code below this line!

const prompt = require("prompt-sync")()

function ShoppingList(items) {
    this.items = items
}

const cantidad = Number(prompt("¿Cuántos productos quieres agregar? "))
const productos = []

for (let i = 0; i < cantidad; i++) {
    const nombre = prompt("Nombre del producto: ")
    const cantidadProducto = Number(prompt("Cantidad: "))

    productos.push({
        nombre: nombre,
        cantidad: cantidadProducto
    })
}

const lista = new ShoppingList(productos)

console.log(lista)

// Type your code above this line!


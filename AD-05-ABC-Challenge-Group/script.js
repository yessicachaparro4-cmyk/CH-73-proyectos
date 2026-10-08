function cambiarColor() {
    const colores = ["green", "blue", "red"];

    const colorAleatorio = colores[
        Math.floor(Math.random() * colores.length)
    ];

    document.querySelectorAll("h5").forEach(function(elemento) {
        elemento.style.color = colorAleatorio;
    });
}

document.querySelectorAll("h5").forEach(function(elemento) {
    elemento.addEventListener("click", cambiarColor);
});
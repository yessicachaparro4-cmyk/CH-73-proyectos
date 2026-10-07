const primerTitulo = document.querySelector("h1");
primerTitulo.textContent = "GoodBye";

const titulos = document.querySelectorAll("h1");
titulos[4].style.color = "orange";

const nuevoTitulo = document.createElement("h1");
nuevoTitulo.textContent = "Haz clic aquí";

nuevoTitulo.addEventListener("click", function () {
  nuevoTitulo.style.color = "brown";
});

document.body.appendChild(nuevoTitulo);
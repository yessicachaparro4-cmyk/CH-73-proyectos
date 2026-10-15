const container = document.querySelector("#container");

const elementosSecond = document.querySelectorAll(".second");

const thirdEnOl = document.querySelector("ol .third");

const saludo = document.createElement("p");
saludo.textContent = "Hello!";
container.prepend(saludo);

const footer = document.querySelector(".footer");

footer.classList.add("main");
footer.classList.remove("main");

const nuevoLi = document.createElement("li");
nuevoLi.textContent = "four";

const listaUl = document.querySelector("ul");
listaUl.append(nuevoLi);

console.log(elementosSecond);
console.log(thirdEnOl);
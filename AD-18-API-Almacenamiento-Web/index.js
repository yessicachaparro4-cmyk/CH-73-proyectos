
const itemsContainer = document.querySelector("#list-items");

// Tarea 2: Mostrar cada color en la página
function addItem(item) {
  const colourCard = document.createElement("section");
  colourCard.className = "card w-75 mb-3";
  itemsContainer.append(colourCard);

  const colourCardBody = document.createElement("article");
  colourCardBody.className = "card-body";
  colourCard.append(colourCardBody);

  const colourCardTitle = document.createElement("h5");
  colourCardTitle.className = "card-title";
  colourCardTitle.innerText = item.name;
  colourCardBody.append(colourCardTitle);

  const colourCardText = document.createElement("p");
  colourCardText.className = "card-text";
  colourCardText.innerText = item.pantone_value;
  colourCardBody.append(colourCardText);

  const colourCardColour = document.createElement("figure");
  colourCardColour.style.backgroundColor = item.color;
  colourCardColour.style.padding = "20px";
  colourCardColour.innerText = item.color;
  colourCardBody.append(colourCardColour);
}

// Mostrar la lista completa
function showColors(colors) {
  itemsContainer.innerHTML = "";

  colors.forEach(color => {
    addItem(color);
  });
}

// Tareas 1, 2 y 3: Obtener, mostrar y guardar colores
async function fetchColorsList() {
  try {
    const response = await fetch(
      "https://reqres.in/api/unknown"
    );

    if (!response.ok) {
      throw new Error("Error HTTP: " + response.status);
    }

    const data = await response.json();
    const colors = data.data;

    // Guardar en localStorage
    localStorage.setItem(
      "colors",
      JSON.stringify(colors)
    );

    // Mostrar colores
    showColors(colors);

  } catch (error) {
    console.error("Error al obtener colores:", error);

    // Intentar mostrar los colores guardados
    if (!loadColorsFromStorage()) {
      itemsContainer.textContent =
        "No se pudieron cargar los colores.";
    }
  }
}

// Tarea 4: Recuperar colores de localStorage
function loadColorsFromStorage() {
  const storedColors = localStorage.getItem("colors");

  if (storedColors) {
    try {
      const colors = JSON.parse(storedColors);
      showColors(colors);
      return true;
    } catch (error) {
      console.error("Error al recuperar colores:", error);
    }
  }

  return false;
}

// Tarea 5: Borrar colores
function clearColors() {
  localStorage.removeItem("colors");
  itemsContainer.innerHTML = "";
}

// Crear botones
const buttonsContainer = document.createElement("div");
buttonsContainer.className = "mb-4";

const loadButton = document.createElement("button");
loadButton.className = "btn btn-primary mr-2";
loadButton.innerText = "Cargar colores";
loadButton.addEventListener("click", fetchColorsList);

const clearButton = document.createElement("button");
clearButton.className = "btn btn-danger";
clearButton.innerText = "Borrar colores";
clearButton.addEventListener("click", clearColors);

itemsContainer.parentNode.insertBefore(
  buttonsContainer,
  itemsContainer
);

buttonsContainer.append(loadButton);
buttonsContainer.append(clearButton);

// Iniciar aplicación
if (!loadColorsFromStorage()) {
  fetchColorsList();
}

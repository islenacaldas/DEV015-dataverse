import { renderItems } from "./view.js";
import {
  filterDataByLocation,
  filterByYear,
  sortData,
  computeStats,
  clearAllFilters,
} from "./dataFunctions.js";
import data from "./data/dataset.js";

const container = document.getElementById("grid-container");
const clearButton = document.querySelector("#button-clear");
const countryFilter = document.querySelector("#countryFilter");
const sortOrderYear = document.querySelector("#sortOrderYear");
const sortOrderLocation = document.querySelector("#sortOrderLocation");
const statsButton = document.getElementById("statsButton");
const statsDisplay = document.getElementById("statsDisplay");
const yearFilter = document.querySelector("#yearFilter");

// Función para actualizar la visualización
function updateDisplay(dataToDisplay) {
  container.innerHTML = "";
  statsDisplay.innerHTML = "";
  container.appendChild(renderItems(dataToDisplay));
}

// Inicialización
updateDisplay(data);

function applyFiltersAndSort() {
  let filteredData = [...data];

  if (countryFilter.value) {
    filteredData = filterDataByLocation(filteredData, countryFilter.value);
  }

  if (yearFilter.value) {
    filteredData = filterByYear(filteredData, yearFilter.value);
  }

  if (sortOrderYear.value) {
    filteredData = sortData(filteredData, "year", sortOrderYear.value);
  } else if (sortOrderLocation.value) {
    filteredData = sortData(filteredData, "location", sortOrderLocation.value);
  }

  updateDisplay(filteredData);

  // Guardar las estadísticas para uso posterior
  applyFiltersAndSort.lastStats = computeStats(filteredData);
}

yearFilter.addEventListener("change", applyFiltersAndSort);
countryFilter.addEventListener("change", applyFiltersAndSort);
sortOrderYear.addEventListener("change", () => {
  sortOrderLocation.value = ""; // Limpiar el otro ordenamiento
  applyFiltersAndSort();
});
sortOrderLocation.addEventListener("change", () => {
  sortOrderYear.value = ""; // Limpiar el otro ordenamiento
  applyFiltersAndSort();
});
statsButton.addEventListener('click', () => {
  const stats = applyFiltersAndSort.lastStats || computeStats(data);
  let statsHTML = '<h2>Porcentaje de inventos por país:</h2>';
  for (const country in stats) {
    statsHTML += `<p>${country}: ${stats[country]}%</p>`;
  }
  container.innerHTML = ""; // Limpiar las cards
  statsDisplay.innerHTML = statsHTML; // Mostrar solo las estadísticas
});


clearButton.addEventListener('click', () => {
  yearFilter.value = '';
  countryFilter.value = '';
  sortOrderYear.value = '';
  sortOrderLocation.value = '';
  statsDisplay.innerHTML = '';
  clearAllFilters();
  updateDisplay(data); // Mostrar todos los datos originales
});
// Mostrar todos los inventos al cargar la página
updateDisplay(data);

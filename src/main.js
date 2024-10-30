// main.js
import { renderItems } from "./view.js";
import {
  computeStats,
  clearAllFilters,
  getCurrentFilteredData
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
  const filters = {
    countryFilter: countryFilter.value,
    yearFilter: yearFilter.value,
    sortOrderYear: sortOrderYear.value,
    sortOrderLocation: sortOrderLocation.value
  };

  const filteredData = getCurrentFilteredData(data, filters);
  updateDisplay(filteredData);
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
  const filters = {
    countryFilter: countryFilter.value,
    yearFilter: yearFilter.value,
    sortOrderYear: sortOrderYear.value,
    sortOrderLocation: sortOrderLocation.value
  };
  
  const currentFilteredData = getCurrentFilteredData(data, filters);
  const stats = computeStats(currentFilteredData);
  
  let statsHTML = 'Porcentaje de inventos por país:\n\n';
  for (const country in stats) {
    statsHTML += `${country}: ${stats[country]}%\n`;
  }
  container.innerHTML = "";
  statsDisplay.innerHTML = statsHTML;
});

clearButton.addEventListener('click', () => {
  yearFilter.value = '';
  countryFilter.value = '';
  sortOrderYear.value = '';
  sortOrderLocation.value = '';
  statsDisplay.innerHTML = '';
  clearAllFilters();
  updateDisplay(data);
});

// Mostrar todos los inventos al cargar la página
updateDisplay(data);

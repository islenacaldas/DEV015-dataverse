import { renderItems } from './view.js';
import { filterDataByLocation, filterByYear, sortData, computeStats } from './dataFunctions.js';
import data from './data/dataset.js';

const container = document.getElementById("grid-container");
const clearButton = document.querySelector('#button-clear');
const countrySelect = document.querySelector('#countryFilter');
const sortOrderYear = document.querySelector('#sortOrderYear');
const sortOrderLocation = document.querySelector('#sortOrderLocation');
const yearSelect = document.querySelector('#yearFilter');
const statsButton = document.getElementById('statsButton');
const statsDisplay = document.getElementById('statsDisplay');

// Función para actualizar la visualización
function updateDisplay(dataToDisplay) {
  container.innerHTML = "";
  statsDisplay.innerHTML="";
  container.appendChild(renderItems(dataToDisplay));
}

// Inicialización
updateDisplay(data);

// Filtro por país
countrySelect.addEventListener("change", (event) => {
  const filteredData = filterDataByLocation(data, event.target.value);
  updateDisplay(filteredData);
});

// Filtro por año
yearSelect.addEventListener("change", () => {
  const filteredData = filterByYear(data, yearSelect.value);
  updateDisplay(filteredData);
});

// Ordenar por año
sortOrderYear.addEventListener("change", () => {
  const sortedData = sortData(data, 'year', sortOrderYear.value);
  updateDisplay(sortedData);
});

// Ordenar por ubicación
sortOrderLocation.addEventListener("change", () => {
  const sortedData = sortData(data, 'location', sortOrderLocation.value);
  updateDisplay(sortedData);
});

// Limpiar filtros
clearButton.addEventListener('click', () => {
  countrySelect.value = "";
  yearSelect.value = "";
  sortOrderYear.value = "";
  sortOrderLocation.value = "";
  updateDisplay(data);
});

// Mostrar estadísticas
statsButton.addEventListener('click', () => {
  container.innerHTML="";
  const stats = computeStats(data);
  displayStats(stats);
});

// Función para mostrar estadísticas
function displayStats(stats) {
  let statsHTML = '<h2>Estadísticas de inventos por país:</h2>';
  for (const [country, percentage] of Object.entries(stats)) {
    statsHTML += `<p> El ${percentage}% de inventos fueron creados por ${country}</p>`;
  }
  statsDisplay.innerHTML = statsHTML;
}

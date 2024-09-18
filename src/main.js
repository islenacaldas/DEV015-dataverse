import { renderItems } from './view.js';
import { filterDataByLocation, filterByYear,sortData} from './dataFunctions.js';

import data from './data/dataset.js';

const container = document.getElementById("grid-container");
const clearBotton = document.getElementById('limpiar');
const countrySelect= document.getElementById('countryFilter');
const sortOrderYear = document.getElementById('sortOrderYear');
const sortOrderLocation = document.getElementById('sortOrderLocation');
const yearSelect= document.getElementById('yearFilter');

container.appendChild(renderItems(data));


/*console.log(renderItems);*/

countrySelect.addEventListener("change", ()=>{
  container.innerHTML="";
  const filteredData = filterDataByLocation(data, countrySelect.value);
  container.appendChild(renderItems(filteredData))
 
});

yearSelect.addEventListener("change" ,() => {
  container.innerHTML="";
  const filterYear= filterByYear(data, yearSelect.value);
  container.appendChild(renderItems(filterYear));
})

function updateDisplay(sortedData) {
  container.innerHTML = "";
  container.appendChild(renderItems(sortedData));
}

sortOrderYear.addEventListener("change", () => {
  const sortedData = sortData(data, 'year', sortOrderYear.value);
  updateDisplay(sortedData);
});

sortOrderLocation.addEventListener("change", () => {
  const sortedData = sortData(data, 'location', sortOrderLocation.value);
  updateDisplay(sortedData);
});

// Mostrar datos iniciales
updateDisplay(data);

clearBotton.addEventListener('click', () =>{
  countrySelect.value="";
  yearSelect.value="";
  sortData.value="";
  container.innerHTML="";
  container.appendChild(renderItems(data))
})

import { renderItems } from './view.js';
import { filterDataByLocation, filterByYear,sortData} from './dataFunctions.js';

import data from './data/dataset.js';

const container = document.getElementById("grid-container");
const clearBotton = document.querySelector('#limpiar');
const countrySelect= document.querySelector('#countryFilter');
const sortOrderYear = document.querySelector('#sortOrderYear');
const sortOrderLocation = document.querySelector('#sortOrderLocation');
const yearSelect= document.querySelector('#yearFilter');

container.appendChild(renderItems(data));


/*console.log(renderItems);*/

countrySelect.addEventListener("change", (event)=>{
  container.innerHTML="";
  const filteredData = filterDataByLocation(data, event.target.value);
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

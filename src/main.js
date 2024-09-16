import { renderItems } from './view.js';
import { filterDataByLocation, filterByYear,sortData} from './dataFunctions.js';

import data from './data/dataset.js';

const container = document.getElementById("grid-container");
const clearBotton = document.getElementById('limpiar');
const countrySelect= document.getElementById('countryFilter');
const yearSelect= document.getElementById('yearFilter');
const sortedData= document.getElementById('sortOrder')

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

//filtro de ordenamiento asendente o descendente//
sortedData.addEventListener("change", () =>{
  container.innerHTML="";
  const sortedResults = sortData(data, sortData.value);
  container.appendChild(renderItems(sortedResults))
})

clearBotton.addEventListener('click', () =>{
  countrySelect.value="";
  yearSelect.value="";
  sortData.value="";
  container.innerHTML="";
  container.appendChild(renderItems(data))
})

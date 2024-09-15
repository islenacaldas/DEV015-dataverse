import { renderItems } from './view.js';
import { filterDataByLocation, filterByYear,} from './dataFunctions.js';

import data from './data/dataset.js';

const container = document.getElementById("grid-container");
const clearBotton = document.getElementById('limpiar');
const countrySelect= document.getElementById('countryFilter');
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

clearBotton.addEventListener('click', () =>{
 countrySelect.value="";
 yearSelect.value="";
})

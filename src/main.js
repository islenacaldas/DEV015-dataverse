import { renderItems } from './view.js';
import { filterData } from './dataFunctions.js';

import data from './data/dataset.js';

const container = document.getElementById("grid-container");
const countrySelect= document.getElementById('countryFilter');
const yearSelect= document.getElementById('yearFilter');


container.appendChild(renderItems(data));


console.log(renderItems);

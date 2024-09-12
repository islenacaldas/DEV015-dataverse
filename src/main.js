import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

const yearSelect= document.getElementById('yearFilter');
const countrySelect= document.getElementById('countryFilter');
const container = document.getElementById("grid-container");
container.appendChild(renderItems(data));


console.log(example);

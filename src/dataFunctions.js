// Mantenemos tus funciones originales sin cambios
export const filterDataByLocation = (data, value) => {
  return data.filter(item => item.facts.location.includes(value));
};

export const filterByYear = (data, value) => {
  return data.filter(item => item.facts.yearOfEvent == value);
};

export const sortData = (data, sortBy, sortOrder) => {
  return [...data].sort((a, b) => {
    let compareA, compareB;

    switch (sortBy) {
    case 'year':
      compareA = a.facts.yearOfEvent;
      compareB = b.facts.yearOfEvent;
      break;
    case 'location':
      compareA = a.facts.location.toLowerCase();
      compareB = b.facts.location.toLowerCase();
      break;
    default:
      return 0;
    }

    let compare = 0;
    if (compareA > compareB) {
      compare = 1;
    } else if (compareA < compareB) {
      compare = -1;
    }

    return sortOrder === 'desc' ? compare * -1 : compare;
  });
};

export function computeStats(data) {
  const countryCount = {};
  const totalInventions = data.length;

  data.forEach(item => {
    const country = item.facts.location;
    countryCount[country] = (countryCount[country] || 0) + 1;
  });

  const stats = {};
  for (const [country, count] of Object.entries(countryCount)) {
    stats[country] = Math.round((count / totalInventions) * 100);
  }

  return stats;
}

// Objeto para mantener el estado de los filtros y ordenamiento
const state = {
  location: '',
  year: '',
  sortBy: '',
  sortOrder: ''
};

// Función combinada actualizada
export function processData(data, options = {}) {
  // Actualizar el estado con las nuevas opciones
  if (options.location !== undefined) state.location = options.location;
  if (options.year !== undefined) state.year = options.year;
  if (options.sortBy !== undefined) state.sortBy = options.sortBy;
  if (options.sortOrder !== undefined) state.sortOrder = options.sortOrder;

  let processedData = [...data];

  if (state.location) {
    processedData = filterDataByLocation(processedData, state.location);
  }

  if (state.year) {
    processedData = filterByYear(processedData, state.year);
  }

  if (state.sortBy) {
    processedData = sortData(processedData, state.sortBy, state.sortOrder);
  }

  const stats = computeStats(processedData);

  return { processedData, stats };
}

// Función para limpiar todos los filtros
export function clearAllFilters() {
  state.location = '';
  state.year = '';
  state.sortBy = '';
  state.sortOrder = '';
}

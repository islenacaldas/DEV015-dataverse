// dataFunctions.js
export const filterDataByLocation =(data, location)=> {
  return data.filter(item => item.facts.location.toLowerCase().includes(location.toLowerCase()));
}

export function filterByYear(data, year) {
  return data.filter(item => item.facts.yearOfEvent.toString() === year);
}

export function sortData(data, property, order) {
  const sortedData = [...data];
  
  sortedData.sort((a, b) => {
    let valueA = property === 'year' ? a.facts.yearOfEvent : a.facts.location;
    let valueB = property === 'year' ? b.facts.yearOfEvent : b.facts.location;
    
    if (typeof valueA === 'string') valueA = valueA.toLowerCase();
    if (typeof valueB === 'string') valueB = valueB.toLowerCase();
    
    if (order === 'asc') {
      return valueA > valueB ? 1 : -1;
    } else {
      return valueA < valueB ? 1 : -1;
    }
  });
  
  return sortedData;
}

export function computeStats(data) {
  const total = data.length;
  const locationCount = {};
  
  data.forEach(item => {
    const location = item.facts.location;
    locationCount[location] = (locationCount[location] || 0) + 1;
  });
  
  const stats = {};
  for (const location in locationCount) {
    stats[location] = ((locationCount[location] / total) * 100).toFixed(1);
  }
  
  return stats;
}

export function clearAllFilters() {
  // Implementa la lógica de limpieza si es necesaria
}

export function getCurrentFilteredData(data, filters) {
  let filteredData = [...data];

  if (filters.countryFilter) {
    filteredData = filterDataByLocation(filteredData, filters.countryFilter);
  }

  if (filters.yearFilter) {
    filteredData = filterByYear(filteredData, filters.yearFilter);
  }

  if (filters.sortOrderYear) {
    filteredData = sortData(filteredData, "year", filters.sortOrderYear);
  } else if (filters.sortOrderLocation) {
    filteredData = sortData(filteredData, "location", filters.sortOrderLocation);
  }

  return filteredData;
}

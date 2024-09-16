export const filterDataByLocation = (data, value) => {
  /*console.log(data, filterBy, value)*/
  return  data.filter(item=> item.facts.location.includes(value))
};

export const filterByYear = (data, value) => {
  return data.filter(item=> Number(item.facts.yearOfEvent)=== Number(value))
};

export const sortData = (data, sortBy, sortOrder) => {
  console.log(`Sorting by: ${sortBy}, Order: ${sortOrder}`);
  
  const sortedArray = [...data].sort((a, b) => {
    let comparison = 0;
    if (sortBy === 'year' && a.facts && b.facts) {
      comparison = parseInt(a.facts.yearOfEvent) - parseInt(b.facts.yearOfEvent);
    } else if (sortBy === 'location' && a.facts && b.facts) {
      comparison = (a.facts.location || '').localeCompare(b.facts.location || '');
    }
    
    return sortOrder === 'desc' ? -comparison : comparison;
  });

  console.log('Sorted data:', sortedArray);
  return sortedArray;
};

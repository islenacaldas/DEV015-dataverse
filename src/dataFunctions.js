export const filterDataByLocation = (data, value) => {
  /*console.log(data, filterBy, value)*/
  return  data.filter(item=> item.facts.location.includes(value))
};

export const filterByYear = (data, value) => {
  return data.filter(item=> Number(item.facts.yearOfEvent)=== Number(value))
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
      return 0; // Si no es ninguno de los casos anteriores, no se ordena
    }

    if (sortOrder === 'asc') {
      if (compareA > compareB) {
        return 1;
      } else if (compareA < compareB) {
        return -1;
      } else {
        return 0;
      }
    } else if (sortOrder === 'desc') {
      if (compareA > compareB) {
        return 1;
      } else if (compareA < compareB) {
        return -1;
      } else {
        return 0;
      }
    }
    return 0; // Si no se especifica orden, no se ordena
  });
};



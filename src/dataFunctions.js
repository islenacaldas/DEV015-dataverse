
export const filterDataByLocation = (data, value) => {
  return  data.filter(item=> item.facts.location.includes(value))
};

export const filterByYear = (data, value) => {
  return data.filter(item=> item.facts.yearOfEvent=== value)
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

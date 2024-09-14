export const filterDataByLocation = (data, value) => {
  /*console.log(data, filterBy, value)*/
  return  data.filter(item=> item.facts.location.includes(value))
};

export const filterByYear = (data, value) => {
  return data.filter(item=> Number(item.facts.yearOfEvent)=== Number(value))
};

export const filterData = (data, filterBy, value) => {
  /*console.log(data, filterBy, value)*/
  return  data.filter(item=>
    item.facts[filterBy].toLowerCase().includes(value.toLowerCase())
  )
};

export const anotherExample = () => {
  return [];
};

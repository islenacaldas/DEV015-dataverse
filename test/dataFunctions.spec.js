import { filterDataByLocation,
  filterByYear}  from '../src/dataFunctions.js';

import { data as fakeData } from './data.js';



describe("Function filterDataByLocation", () => {

  it('be a function', () => {
    expect((typeof filterDataByLocation)).toBe('function');
  });

  it("return 1 element when filter by 'Mainz, Germany'",()=>{
    expect(filterDataByLocation(fakeData, 'Mainz, Germany').length).toBe(1);
  } )
});

describe('function filterByYear', () => {

  it('be a function', () => {
    expect((typeof filterByYear)).toBe('function');
  });

  it('return 1 element when filter by 904',()=>{
    expect(filterByYear(fakeData, 904).length).toBe(1);
  } )
});

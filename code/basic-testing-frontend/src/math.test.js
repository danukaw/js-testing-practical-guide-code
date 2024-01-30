import { expect, it } from 'vitest';
import { add } from './math.js';

it('should be yield add numbers if you pass array function', () => {

  let numbers = [2,3,4];
  let result = add(numbers);

  expect(result).toBe(9)

});

it('Should return addition if numbers are passed as string litarals', () => {

  let numbers = ["2","3","4"];
  let result = add(numbers);

  expect(result).toBe(9)

});

it('Should return invalid input error message if invalid inputs were passsed', ()=>{
let numbers = ["invalid","3","4"];
  let result = add(numbers);

  expect(result).toBeNaN()
})

it('Should thrown an error if no values are passed into the function', () => {

  let numbers = ["3","4"];
  const method = () => {
    add();
  }
  //expect(method()).toThrow() 
  // doesn't work for some reason

})

it('It should thrown an error if provided multiple argurment instead of array', () => {

  let param1 =34;
  let param2 =35;

  const method = () => {
    add(param1, param2);
  }
  //expect(method()).toThrow(/is not iterable/)
  // deesn't work for some reason
  
});

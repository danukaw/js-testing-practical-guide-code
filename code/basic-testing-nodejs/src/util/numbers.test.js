
import { describe, expect, it } from 'vitest';
import { transformToNumber } from './numbers.js';


describe('Numbers transformation', () => {
  
  it('should be return number if string literal is passed in', () => {
  
    let result = transformToNumber("12")
    expect(result).toBe(12)
    
  });
  
  it('should be thrown an error if no parameters are passed in to function', () => {
  
    let resultFn = () => {transformToNumber()}
    expect(resultFn()).toBeUndefined();
  
  });
  
  it('should return number if we passed with number to the function', () => {
     let result = transformToNumber(23)
    expect(result).toBe(23)
  });
  
  it('should thrown an error if we passed with string to the function', () => {
    let resultFn = () => {transformToNumber("invalid")}
    expect(resultFn()).toBeUndefined()
  
  });
});

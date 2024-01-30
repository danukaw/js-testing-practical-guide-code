import { add } from './src/math.js';
import { extractNumbers } from './src/parser.js';
import { transformToNumber } from './src/util/numbers.js';
import {
  validateNumber,
  validateStringNotEmpty,
} from './src/util/validation.js';

const form = document.querySelector('form');
const output = document.getElementById('result');

function formSubmitHandler(event) {

  event.preventDefault();
  const formData = new FormData(form);
  const numberInputs = extractNumbers(formData);

  let result = '';
  
  try {
    result = numberManupilation(numberInputs, result);
  } catch (error) {
    result = error.message;
  }

  output.textContent = contructingResultText(result);
  
}

form.addEventListener('submit', formSubmitHandler);

function numberManupilation(numberInputs, result) {
  const numbers = [];
  for (const numberInput of numberInputs) {
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }
  result = add(numbers).toString();
  return result;
}

function contructingResultText(result) {
  
  let resultText = '';

  if (result === 'invalid') {
    resultText = 'Invalid input. You must enter valid numbers.';
  } else if (result !== 'no-calc') {
    resultText = 'Result: ' + result;
  }
  return resultText;
}


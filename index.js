'use strict';

function fizzbuzz(inputVal) {
  // write your code here
  if(inputVal % 15 === 0)
    return 'fizzbuzz';
  if(inputVal % 3 === 0)
    return 'fizz'; 
  if(inputVal % 5 === 0)
    return 'buzz';
     
  return inputVal;
}

module.exports = fizzbuzz;
/*
  challenge 06
     Write a function to find the max number in an array of numbers
*/

const findMax = (arr) => {
  return Math.max(...arr);
};

console.log(findMax([2, 2, 5, -11, -99, 6, 4, 1]));
console.log(findMax([2, 2, 5, -11, 99, -6, 4, 1]));

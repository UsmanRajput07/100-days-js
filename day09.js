/*
  challenge 09
     Write a function to find the  average of an array of numbers and return the average

  constraint:
     the function should take an array of numbers as input
     the function should return a number

*/
//
// const calculateAverage = (arr) => {
//  let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }

// or
const calculateAverage = (arr) => {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
};

console.log(calculateAverage([2, 2, 5, 6, 4, 1]));
console.log(calculateAverage([2, 2, 5, -11, 99, -6, 4, 1]));

/*
  challenge 10
     Write a function to comapre the two given arrays length and values if they are equal return true otherwise return false

  constraint:
     the function should take an array of numbers as input

*/
// const checkEquality = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

const checkEquality = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((item, index) => item === arr2[index]);
};

console.log(checkEquality([2, 2, 5, 6, 4, 1], [2, 2, 5, 6, 4, 1]));
console.log(
  checkEquality([2, 2, 5, -11, 99, -6, 4, 1], [2, 2, 5, -11, 99, -6, 4, 1]),
);
console.log(checkEquality([2, 2, 5, 6, 4, 1], [2, 2, 5, 6, 4, 2]));

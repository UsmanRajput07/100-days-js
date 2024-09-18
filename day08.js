/*
  challenge 06
     Write a function to find the factorial of a number

  constraint:
     the function should take a number as input
     the function take non-negative number as input
     the factorial of non-negative integier denot's n!
     the factorial of 0 is 1 
*/
const findFactorial = (num) => {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
  }
  return factorial;
};

console.log(findFactorial(3));
console.log(findFactorial(10));
console.log(findFactorial(8));

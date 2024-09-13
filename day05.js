/*

    challenge 05
    create a function to sort the given array to ascending order

    constraint: 
    -the function should take an array of number as input
    -It should return a new array with the numbers sorted in ascending order
    -the original array should remain unchanged
    
*/
const ascendingSort = (item) => {
  return item.sort((a, b) => {
    return a - b;
  });
};

console.log(ascendingSort([2, 2, 5, 11, 99, 6, 4, 1]));

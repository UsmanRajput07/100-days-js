/*

    challenge 04
    create a function call checktriangle that takes 3 parameters 

    constraint:
    if the three parameters are same then return equilateral
    if any two parameters are same then return isosceles
    if all three parameters are different then return scalene
*/
const checkTriangle = (a, b, c) => {
  if (a === b && b === c) return "equilateral";
  else if (a === b || b === c || a === c) return "isosceles";
  return "scalene";
};
console.log(checkTriangle(2, 2, 3));
console.log(checkTriangle(2, 9, 3));
console.log(checkTriangle(2, 6, 6));

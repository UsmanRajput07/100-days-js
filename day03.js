/*

    challenge 03
   create a fuction that takes a two parameter the fist one is string the second is character , we are find the total character count in a given string

    constraint:
     - input must be a string
     -Second parameter must be a character and capitale 
*/

const countChar = (str, char) => {
  if (typeof str !== "string" || typeof char !== "string") return false;
  str = str.toLowerCase();
  char = char.toLowerCase();
  return str.split(char).length - 1;
};

// another method

// const countChar = (str, char) => {
//   if (typeof str !== "string" || typeof char !== "string") return false;
//   str = str.toLowerCase();
//   char = char.toLowerCase();
//   count = str.split("").reduce((acc, curChar) => {
//     if (curChar === char) {
//       return acc+=1;
//     }
//     return acc
//   }, 0);
//   return count;
// };
console.log(countChar("Thequickbrownfoxjumpedoverthelazydog", "E"));

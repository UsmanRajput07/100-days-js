/*

    challenge 02
     write a function that genterate a hash tag in start from a given string and capital the first letter of each word in the string

    constraint:
     - input must be a string
     - if the input is an empty or conatins only whitespace return false
     -the string shuould be grater than 280 characters
*/
const genrateHash = (str) => {
  if (str.lenght < 280 || str.trim().length === 0) return false;
  const hash = str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join("");
  return `#${hash}`;
};
console.log(genrateHash("The quick brown fox jumped over the lazy dog"));

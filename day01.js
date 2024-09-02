/*
  challenge 01 
  - write a function that take a string as input & return the longest word in the string

   constraint:
    - input must be a string
    - the input string can be an empty string
    -the input may contain any alphanumeric characters , space and special characters
    - the input string can contain multiple words separated by spaces

    note:
    - if the input is an empty or conatins ony whitespace return false
    - the fuction sholud ignore leading and trailing whitespaces
*/
const findLongest = (str) => {
  if (str.trim().length === 0) return false;
  else
    return str
      .trim()
      .split(" ")
      .sort((a, b) => b.length - a.length)[0];
};

console.log(findLongest("The quickly brown fox jumped over the lazy dog"));

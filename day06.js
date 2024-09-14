/*

    challenge 06
     Write a function to determine the weather a given string is a palindrome or not,
     palindrome is word , phase , number or other sequence of characters that reads the same backward as forward.
     ignore spaces , punctuation and capitalization

    constraint: 
   -the string may contain letters, digits, spaces, penctuation and special characters
   -the function should be case-insansitive  "racecar" or "Racecar" should be equal
   -Ignore spaces, punctuation and special characters when determining if a string is palindrome
   -The function should return true if the given string is palindrome otherwise return false
    
*/
const getPalindrome = (str) => {
  str = str.toLowerCase().replace(/\W/g, '');
  const r_str = str.split('').reverse().join('');
  return r_str === str ? 'true' : 'false';
  //   return r_str;
};

console.log(getPalindrome('hello , this is & new function'));
console.log(getPalindrome('racecar'));
console.log(getPalindrome('dog'));

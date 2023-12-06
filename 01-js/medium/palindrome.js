/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const ESCAPE_CHARS = [" ", ",", ".", "?", "!"]

  const formattedStrArr = str.toLowerCase().split("").filter(i => !ESCAPE_CHARS.includes(i));
  const formattedStr = formattedStrArr.join("")
  const lenOfStr = formattedStr.length;

  const reversedStrArr = [];
  for(let i=lenOfStr-1; i>=0; i--){
    reversedStrArr.push(formattedStrArr[i])
  }

  const reversedStr = reversedStrArr.join("")
  
  return formattedStr === reversedStr;
}

console.log(isPalindrome('sas', 'sas'))

module.exports = isPalindrome;

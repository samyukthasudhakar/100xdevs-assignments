/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const VOWELS = ['a', 'e', 'i', 'o', 'u'];
    const formattedStrArr = str.toLowerCase().split("");
    let totalNumerOfVowels = 0;
    for(let i=0; i<formattedStrArr.length; i++){
      if(VOWELS.includes(formattedStrArr[i])) totalNumerOfVowels++
    }
    return totalNumerOfVowels;
}

console.log(countVowels('sam'))

module.exports = countVowels;
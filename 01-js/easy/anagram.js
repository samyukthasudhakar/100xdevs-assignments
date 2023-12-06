/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const hashmapOfStr1 = str1.toLowerCase().split("").reduce((acc, curr) => {
    acc[curr] = acc?.[curr] ? acc[curr] + 1 :  1;
    return acc
  }, {})
  const hashmapOfStr2 = str2.toLowerCase().split("").reduce((acc, curr) => {
    acc[curr] = acc?.[curr] ? acc[curr] + 1 : 1;
    return acc
  }, {})
  
  if(Object.keys(hashmapOfStr1).length !== Object.keys(hashmapOfStr2).length){
    return false
  }

  for(const i of Object.keys(hashmapOfStr1)){
    if(!(hashmapOfStr1[i] === hashmapOfStr2[i])){
      return false;
    }
  }

  return true

}

console.log(isAnagram('sam', 'sams'));

module.exports = isAnagram;

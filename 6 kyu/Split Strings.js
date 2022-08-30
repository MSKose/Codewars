/*
https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

// my solution
function solution(s) {
  let result = [];

  for (let i = 0; i < s.length; i++) {
    (i % 2) && result.push(s[i - 1] + s[i]);
    (i === s.length - 1) && !(i % 2) && result.push(s[i] + "_");
  }

  return result;
}

//! alternative-solution
function solution(s) {
  return (s + "_").match(/.{2}/g) || [];
}

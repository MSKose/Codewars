/*
https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1/

Given a string and an array of integers representing indices, capitalize all letters at the given indices.

For example:

capitalize("abcdef",[1,2,5]) = "aBCdeF"
capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
The input will be a lowercase string with no spaces and an array of digits.
*/

// my solution
function capitalize(s, arr) {
  let sArr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < s.length; k++) {
      if (arr[i] == k) {
        sArr.splice(k, 1, sArr[k].toUpperCase());
      }
    }
  }
  return sArr.join("");
}

//! alternative-solution
function capitalize(s, arr) {
  return [...s].map((x, i) => (arr.includes(i) ? x.toUpperCase() : x)).join("");
}

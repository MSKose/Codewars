/*
https://www.codewars.com/kata/5b180e9fedaa564a7000009a

In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
More examples in test cases. Good luck!
*/

// my solution
function solve(s) {
  const lowerCount = [...s].filter((x) => x.toLowerCase() === x).length;
  const upperCount = s.length - lowerCount;
  return upperCount > lowerCount ? s.toUpperCase() : s.toLowerCase();
}

//! alternative-solution
const solve = s => s.replace(/[A-Z]/g,'').length < s.length/2 ? s.toUpperCase() : s.toLowerCase()
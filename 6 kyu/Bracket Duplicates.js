/*
https://www.codewars.com/kata/5411c4205f3a7fd3f90009ea

Create a program that will take in a string as input and, if there are duplicates of more than two alphabetical characters in the string, returns the string with all the extra characters in a bracket.

For example, the input "aaaabbcdefffffffg" should return "aa[aa]bbcdeff[fffff]g"

Please also ensure that the input is a string, and return "Please enter a valid string" if it is not.
*/

// my solution
const stringParse = (s) =>
  typeof s === "string"
    ? s.replace(/(\w)\1{2,}/g, x => x.slice(0, 2) + '[' + x.slice(2) + ']')
    : "Please enter a valid string";
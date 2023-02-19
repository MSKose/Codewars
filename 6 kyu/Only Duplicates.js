/*
https://www.codewars.com/kata/5a1dc4baffe75f270200006b

Given a string, remove any characters that are unique from the string.

Example:

input: "abccdefee"

output: "cceee"
*/

// my solution
const onlyDuplicates = (str) =>
  [...str].filter(
    (el, _, arr) => arr.reduce((x, y) => x + (y === el ? 1 : 0), 0) > 1
  ).join``;
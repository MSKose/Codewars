/*
https://www.codewars.com/kata/56b409febccd5aafbd000021

Character counts
The object is to count the number of occurances of a specified character (or set of characters) in a string.

Instructions
Complete the placeholder function characterCount.

it should return the number of times a single character appears in the string, or
if multiple characters are specified (either by providing an array or string of length 2 or more), it should return an array of character counts
see the unit tests provided for a more comprehensive definition
NOTE: The tests assume that if no arguments are provided to the function (i.e. ''.characterCount()), then the result is undefined.
*/

// my solution
String.prototype.characterCount = function (charsToCount) {
  if (!charsToCount) {
    return undefined;
  }

  const count = (a, ch) => [...a].reduce((x, y) => x + (y === ch ? 1 : 0), 0);

  if (charsToCount.length === 1) {
    return count(this, charsToCount);
  }

  let arr = [];

  for (let i of charsToCount) {
    arr.push(count(this, i));
  }

  return arr;
};
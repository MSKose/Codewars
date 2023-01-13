/*
https://www.codewars.com/kata/58daa7617332e59593000006

Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

// my solution
function findLongest(array) {
  const sortedArr = [...array].sort((a, b) => b - a);
  const longestLenArr = array.filter((x) => String(x).length === String(sortedArr[0]).length);
  return longestLenArr[0];
}

//! alternative-solution
const findLongest = l => l
  .reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);
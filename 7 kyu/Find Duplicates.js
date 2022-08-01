/*
https://www.codewars.com/kata/5558cc216a7a231ac9000022/

Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.

Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).

Examples
[1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
[0, 1, 2, 3, 4, 5]                ==>  []
*/

// my solution
function duplicates(arr) {
  let a = arr.filter((x) => arr.indexOf(x) !== arr.lastIndexOf(x));
  return [...new Set(a.filter((x, y, z) => y !== z.indexOf(x)))];
}
/*
in first line I created an array which has the elements that repeat more than once
and in second line I created a unique array based upon the fact that the indexOf the
current element is not first element, thus sorting them in the order when they first 
appeared as duplicates
*/

//! alternative-solution
const duplicates = arr => [...new Set(arr.filter((el, i) => i !== arr.indexOf(el)))];
// damn, this is my solution only if I had ommited the first line. 

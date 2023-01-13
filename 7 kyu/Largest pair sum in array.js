/*
https://www.codewars.com/kata/556196a6091a7e7f58000018

Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer.
*/

// my solution
function largestPairSum(numbers) {
  const sorted = numbers.sort((a, b) => a - b);
  return sorted.at(-1) + sorted.at(-2);
}

//! alternative-solution
function largestPairSum(numbers) {
  var [a, b] = numbers.sort((a, b) => b - a);
  return a + b;
}
// nice use of destructuring
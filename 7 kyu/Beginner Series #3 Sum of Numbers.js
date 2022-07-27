/*
https://www.codewars.com/kata/beginner-series-number-3-sum-of-numbers/

Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
*/

// my solution
const getSum = (a, b) => {
  if (a === b) {
    return a;
  } else if (a > b) {
    return b + getSum(a, b + 1);
  } else {
    return a + getSum(a + 1, b);
  }
};
// I got hints from the internet but boy this is an answer

//! alternative-solution-1 (with Gauss summation)
const GetSum = (a, b) => {
  let min = Math.min(a, b),
    max = Math.max(a, b);
  return ((max - min + 1) * (min + max)) / 2;
};
/*
Gauss summation formula is as follows:
(numbers of pairs)(sum of each pair)/2
*/

//! alternative-solution-2
function Ab(a, b) {
  let empty = [a, b].sort((a, b) => a - b);
  let sum = 0;
  for (let i = empty[0]; i <= empty[1]; i++) {
    sum += i;
  }
  return sum;
}

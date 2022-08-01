/*
https://www.codewars.com/kata/5f8341f6d030dc002a69d7e4

Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

Notes
Multiple correct answers may be possible. In this case, return any one of them.
The given index will be inside the given array.
The given array will, therefore, never be empty.

Example
leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
leastLarger( [4, 1, 3, 5, 6], 4 )  => -1
*/

// my solution
function leastLarger(a, i) {
  let x = a[i];
  let c = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > x) {
      c.push(a[i]);
    }
  }
  let largerMin = Math.min(...c);
  return c.length == 0 ? -1 : a.indexOf(largerMin);
}

//! alternative-solution-1
const leastLarger = (a, i) => a.indexOf(Math.min(...a.filter((n) => n > a[i])));

//! alternative-solution-2
function leastLarger(a, i) {
  const targetVal = a[i];
  const largerVals = a.filter((num) => num > targetVal);
  const leastLargeVal = Math.min(...largerVals);

  return a.findIndex((num) => num === leastLargeVal);
}

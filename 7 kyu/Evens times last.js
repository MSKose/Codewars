/*
https://www.codewars.com/kata/5a1a9e5032b8b98477000004

Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0.
*/

// my first solution
function evenLast(numbers) {
  return numbers[0]
    ? numbers.reduce((x, y, z) => x + (z % 2 ? 0 : y), 0) * numbers[numbers.length - 1]
    : 0;
}

// my second solution
function evenLast(numbers) {
  if (!numbers[0]) return 0;
  let count = 0;
  for (let i = 0; i < numbers.length; i += 2) {
    count += numbers[i];
  }
  return count * numbers[numbers.length - 1];
}

//! alternative-solution
const evenLast = (n) =>
  n.reduce((p, c, i) => (i % 2 ? p : p + c), 0) * n[n.length - 1] || 0;
// should have thought about the || 0 trick instead of using numbers[0]. That's prefered more

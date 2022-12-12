/*
https://www.codewars.com/kata/58249d08b81f70a2fc0001a4

Given a number return the closest number to it that is divisible by 10.

Example input:

22
25
37
Expected output:

20
30
40
*/

// my solution
const closestMultiple10 = num => {
  const modulNum = num % 10;
  return modulNum < 5 ? num - modulNum : num + (10 - modulNum);
};

//! alternative-solution
const closestMultiple10 = num => Math.round(num / 10) * 10;
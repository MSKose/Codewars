/*
https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/

// my solution
function persistence(num) {
  let count = 0;
  while (num > 9) {
    num = [...num.toString()].reduce((x, y) => x * y, 1);
    count++;
  }
  return count;
}

//! alternative-solution
persistence=f=(n, i=0)=> n > 9 ? f( [...n.toString()].reduce((p,c)=> p*Number(c), 1), i + 1) : i 
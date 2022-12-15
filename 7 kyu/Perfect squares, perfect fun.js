/*
https://www.codewars.com/kata/5705ca6a41e5be67720012c0

Given an integer, if the length of it's digits is a perfect square, return a square block of sqroot(length) * sqroot(length). If not, simply return "Not a perfect square!".

Examples:

1212 returns:

12
12 

Note: 4 digits so 2 squared (2x2 perfect square). 2 digits on each line.

123123123 returns:

123
123
123

Note: 9 digits so 3 squared (3x3 perfect square). 3 digits on each line.
*/

// my solution
const perfectSquare = (len) => len ** 0.5 % 1 === 0;

function squareIt(int) {
  const len = String(int).length;

  if (perfectSquare(len)) {
    const squareRoot = len ** 0.5;
    const re = new RegExp(".{1," + squareRoot + "}", "g");
    return String(int).match(re).join("\n");
  }

  return "Not a perfect square!";
}
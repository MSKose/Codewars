/*
https://www.codewars.com/kata/5bb3e299484fcd5dbb002912

Remember the triangle of balls in billiards? To build a classic triangle (5 levels) you need 15 balls. With 3 balls you can build a 2-level triangle, etc.

For more examples,

pyramid(1) == 1

pyramid(3) == 2

pyramid(6) == 3

pyramid(10) == 4

pyramid(15) == 5
Write a function that takes number of balls (≥ 1) and calculates how many levels you can build a triangle.
*/

// my solution
function pyramid(balls, n = 1) {
  while ((n * (n + 1)) / 2 <= balls) {
    n++;
  }
  return n - 1;
}

//! alternative-solution
function pyramid(balls) {
    return Math.floor((Math.sqrt(balls * 8 + 1) - 1) / 2);
}
// this solution makes use of quadratic equation such that;
// n * (n+1) / 2 = balls
// n * (n+1) = 2*balls
// n² + n = 2*balls
// 4*(n² + n) = 8*balls
// 4*n² + 4*n = 8*balls
// 4*n² + 4*n + 1 = 8*balls + 1
// (2*n + 1)² = 8*balls + 1
// 2*n + 1 = (8*balls + 1)**0.5
// 2*n = (8*balls + 1)**0.5 - 1
// n = ((8*balls + 1)**0.5 - 1) / 2
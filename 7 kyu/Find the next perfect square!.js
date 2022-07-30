/*
https://www.codewars.com/kata/56269eb78ad2e4ced1000013

You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
*/

// my solution
function findNextSquare(sq) {
  return Math.sqrt(sq).toString().includes(".") ? -1 : (Math.sqrt(sq) + 1) ** 2;
}

//! alternative-solution
function findNextSquare(sq) {
  return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}
// using Math.sqrt(sq)%1 if a number is integer or not is simply clever
// also didn't know Math.pow() method existed

/*
https://www.codewars.com/kata/55685cd7ad70877c23000102

In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
*/

// my solution
function makeNegative(num) {
  if (`${num}`.startsWith("-")) {
    return num;
  } else if (num === 0) {
    return 0;
  } else {
    return -num;
  }
}

//! alternative solution
function makeNegative(num) {
  return -Math.abs(num);
}
// this works in javascript because in javascript console.log(0 === -0) returns true;

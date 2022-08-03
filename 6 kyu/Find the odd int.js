/*
https://www.codewars.com/kata/54da5a58ea159efa38000836/

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

// my solution
function findOdd(A) {
  return A.sort((a, b) => a - b).filter((x, y, z) => (z.indexOf(x) - z.lastIndexOf(x)) % 2 == 0)[0];
}

//! alternative-solution-1
function findOdd(arr) {
    return arr.find((item, index) => arr.filter((el) => el == item).length % 2);
}

//! alternative-solution-2
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
// I couldn't fully grasp how this works but you can search for bitwise XOR
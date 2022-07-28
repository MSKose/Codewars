/*
https://www.codewars.com/kata/57d5fed61a6282bf6f002a5f/

A magic index in an array A[1...n-1] is defined to be an index such that A[i] = i. Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A.

findMagic([-20,-10,2,10,20]); // Returns 2
*/

// my solution
function findMagic(arr) {
  let x = arr.filter((A, i) => A === i);
  return x.length ? x[0] : -1;
}

//! alternative-solution
const findMagic = arr => arr.findIndex(i => arr[i] === i);
// forgot about findIndex method



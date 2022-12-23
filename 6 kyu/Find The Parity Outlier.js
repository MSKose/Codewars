/*
https://www.codewars.com/kata/5526fc09a1bbd946250002dc

You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/

// my solution
function findOutlier(integers) {
  let x = integers.filter((x) => x % 2);
  if (x.length === 1) {
    return x[0];
  } else {
    return integers.filter((x) => !(x % 2))[0];
  }
}

//! alternative-solution
function findOutlier(integers){
    return integers.slice(0,3).filter(even).length >=2 ? integers.find(odd) : integers.find(even);
  }
  function even(num){
    return (num % 2 == 0);
  }
  function odd(num){
    return !even(num)
}
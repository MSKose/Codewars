/*
https://www.codewars.com/kata/56a1c074f87bc2201200002e


Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

For example:

* Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
* Input [1, 2, 0] => Output [1, 1, 0]
*/

// my solution
function smaller(nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let count = nums.slice(i + 1).filter((x) => x < nums[i]).length;
    result.push(count);
  }

  return result;
}

//! alternative-solution
const smaller = nums => nums.map((x, i) => nums.slice(i).filter(y => x > y).length);
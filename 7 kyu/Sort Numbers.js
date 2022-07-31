/*
https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/

Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
*/

// my solution
function solution(nums) {
  return nums ? nums.sort((a, b) => a - b) : [];
}
// because null is a boolean false, I used a ternary to check if it a null or not

//! alternative-solution
let solution = (nums) => (nums || []).sort((a, b) => a - b);

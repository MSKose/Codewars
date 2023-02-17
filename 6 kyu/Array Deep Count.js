/*
https://www.codewars.com/kata/596f72bbe7cd7296d1000029

You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.

Examples
[]                   -->  0
[1, 2, 3]            -->  3
["x", "y", ["z"]]    -->  4
[1, 2, [3, 4, [5]]]  -->  7
The input will always be an array.
*/

// my solution
function deepCount(a){
  let sum = 0;
  
  for (let i of a) {
    if (Array.isArray(i)) {
      sum++;
      sum += deepCount(i);
    } else {
      sum++;
    }
  }
  
  return sum;
}
/*
https://www.codewars.com/kata/58ef87dc4db9b24c6c000092

In this kata you are given an array to sort but you're expected to start sorting from a specific position of the array (in ascending order) and optionally you're given the number of items to sort.

Examples:
sectSort([1, 2, 5, 7, 4, 6, 3, 9, 8], 2) //=> [1, 2, 3, 4, 5, 6, 7, 8, 9]
sectSort([9, 7, 4, 2, 5, 3, 1, 8, 6], 2, 5) //=> [9, 7, 1, 2, 3, 4, 5, 8, 6]
Documentation:
sectSort(array, start, length);
array - array to sort
start - position to begin sorting
length - number of items to sort (optional)
if the length argument is not passed or is zero, you sort all items to the right of the start position in the array
*/

// my solution
function sectSort(...x) {
  const [arr, start, ...stop] = x
  const slicedArr = stop[0] ? arr.slice(start, start + stop[0]) : arr.slice(start)
  const sortedArr =  slicedArr.sort((a, b) => a-b)
  const restArr = stop[0] ? arr.slice(start + stop[0]) : []
  return arr.slice(0, start).concat(sortedArr).concat(restArr)
}

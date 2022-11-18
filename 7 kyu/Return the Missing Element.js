/*
https://www.codewars.com/kata/5299413901337c637e000004

Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.

Examples:
[0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
[9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3
*/

// my solution
function getMissingElement(arr) {
  const gaussianSum = 45; // 9 * 10 / 2
  return 45 - arr.reduce((x, y) => x + y);
}

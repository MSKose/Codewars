/*
https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

// my solution
const findShort = (s) => Math.min(...s.split(" ").map((x) => x.length));

//! alternative-solution
function findShort(text) {
  return text
    .split(" ")
    .reduce((shortest, current) =>
      current.length < shortest.length ? current : shortest
    ).length;
}

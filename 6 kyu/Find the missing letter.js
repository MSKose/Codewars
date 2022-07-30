/*
https://www.codewars.com/kata/5839edaa6754d6fec10000a2

#Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"
(Use the English alphabet with 26 letters!)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!
*/

// my solution
function findMissingLetter(array) {
  let a = array.map((x) => x.charCodeAt()); // this is gonna convert our array to an array with the charcodes
  let x = ((a.length + 1) * (a[0] + a[a.length - 1])) / 2; // this is simply the arithmetic series formula
  let y = a.reduce((x, y) => x + y, 0); // the sum of all our chars
  return String.fromCharCode(x - y); // x-y gives the charcode we are after and String.fromCharCode() converts it to a string
}

console.log(findMissingLetter(["a", "b", "c", "d", "f"]));

//! alternative-solution-1
const findMissingLetter = (array) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const start = alphabet.indexOf(array[0]);
  return alphabet.slice(start, start + array.length).find(el => !array.includes(el));
};
// Just wow, this is crazy

/*
https://www.codewars.com/kata/5a0efbb7c374cb69970000cf

Reverse a message so that the words and letters passed into it are made lower case and reversed. In addition, capitalise the first letter of the newly reversed words. If a number or symbol(!#,>) is now in the first position of the word, no capitalisation needs to occur.

Example:

reverseMessage('This is an example of a Reversed Message!');
Returns: '!egassem Desrever A Fo Elpmaxe Na Si Siht'
*/

// my solution
function reverseMessage(str) {
  return str
    .toLowerCase()
    .split(" ")
    .reverse()
    .map((x, y, z) => x.split("").reverse().join(""))
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
    .join(" ");
}

//my second solution
function reverseMessage(str) {
  return str
    .toLowerCase()
    .split("")
    .reverse()
    .join("")
    .split(" ")
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
    .join(" ");
}

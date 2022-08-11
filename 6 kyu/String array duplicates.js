/*
https://www.codewars.com/kata/59f08f89a5e129c543000069/

In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.
*/

// my solution
function dup(s) {
  return s.map((x) => [...x].filter((a, b, c) => a !== c[b - 1]).join(""));
}
/*
what I did here is while I was iterating over the array s, I converted
every element to an array cuz they're initially strings. Secondly, I 
filtered the new arrays based on if they're not equal to their preceding
elements. And finally converted it back to string with join('')
*/

//! alternative-solution
function dup(s) {
  return s.map((x) => x.replace(/(.)\1+/g, "$1"));
}

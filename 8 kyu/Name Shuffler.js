/*
https://www.codewars.com/kata/559ac78160f0be07c200005a

Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"
*/

// my solution
function nameShuffler(str) {
  [firstName, lastName] = str.split(" ");
  return `${lastName} ${firstName}`;
}

//! alternative-solution
const nameShuffler = str =>
  str.replace(/([^\s]+) ([^\s]+)/, `$2 $1`);

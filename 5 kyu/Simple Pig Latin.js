/*
https://www.codewars.com/kata/520b9d2ad5c005041100000f/

Move the first letter of each word to the end of it, then add "ay" 
to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

// my solution
function pigIt(str) {
  return str
    .split(" ")
    .map((x) => (/[^a-zA-Z]/gi.test(x) ? x : x.substr(1) + x[0] + "ay"))
    .join(" ");
}

//! alternative solution-1
function pigIt(str) {
  return str.replace(/\w+/g, match => match.slice(1) + match.charAt(0) + "ay");
}

//! alternative solution-2
function pigIt(str) {
  return str.replace(/\w+/g, match => match.slice(1) + match.charAt(0) + "ay");
}

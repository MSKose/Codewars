/*
https://www.codewars.com/kata/566044325f8fddc1c000002c

Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

For example:

"abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
"a"             --> "invalid string"
*/

// my solution
function evenChars(string) {
  let result = [...string].filter((_, i) => i % 2 === 1);
  let len = string.length;
  return len < 2 || len > 100 ? "invalid string" : result;
}

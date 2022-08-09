/*
https://www.codewars.com/kata/570f6436b29c708a32000826

You need to write a function, that returns the first non-repeated character in the given string.

If all the characters are unique, return the first character of the string.
If there is no unique character, return null in JS or Java, and None in Python.

You can assume, that the input string has always non-zero length.

Example
firstNonRepeated("test") // returns "e"
firstNonRepeated("teeter") // returns "r"
firstNonRepeated("trend") // returns "t" (all the characters are unique)
firstNonRepeated("aabbcc") // returns null (all the characters are repeated)
*/

// my solution
function firstNonRepeated(s) {
  let len = s.length;
  let uniLen = new Set(s).size;
  if (uniLen === len) return s[0];
  if (uniLen === 0) return null;

  let result = [...s].find((x) => s.indexOf(x) === s.lastIndexOf(x));
  return result === undefined ? null : result;
}

//! alternative-solution
const firstNonRepeated = (s) =>
  [...s].find((i) => s.indexOf(i) == s.lastIndexOf(i)) || null;
// should have used that  || null trick for my solution too

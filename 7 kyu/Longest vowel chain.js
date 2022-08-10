/*
https://www.codewars.com/kata/59c5f4e9d751df43cf000035/

The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.
*/

// my solution
function solve(s) {
  let str = "aeiou";
  let count = 0;
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (str.includes(s[i])) {
      count++;
    } else {
      arr.push(count);
      count = 0;
    }
  }
  return Math.max(...arr);
}

//! alternative-solution-1
function solve(s) {
  return Math.max(...s.split(/[^aeiou]+/).map((x) => x.length));
}

//! alternative-solution-2
function solve(s) {
  let cur = 0;
  let max = 0;
  for (let i = 0; i < s.length; ++i) {
    if ("aeiou".includes(s[i])) {
      cur++;
      if (cur > max) {
        max = cur;
      }
    } else {
      cur = 0;
    }
  }
  return max;
}
// similar to mine but smarter I think!

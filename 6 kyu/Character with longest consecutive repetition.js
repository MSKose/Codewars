/*
https://www.codewars.com/kata/586d6cefbcc21eed7a001155

For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]
In JavaScript: If you use Array.sort in your solution, you might experience issues with the random tests as Array.sort is not stable in the Node.js version used by CodeWars. This is not a kata issue.

Happy coding! :)
*/

// my solution
function longestRepetition(s) {
    if (!s) {return ['', 0]}
    
    let count = 0;
    let longest = ['', 0];
    
    for (let i = 0; i < s.length; i++) {
      if (s[i] === s[i + 1]) {
        count++;
      } else {
        if (longest[1] < ++count) {
          longest = [s[i], count];
        }
        count = 0;
      }
    }
    
    return longest;
}

//! alternative-solutions
const longestRepetition = s =>
  s.match(/(.)\1*|$/g).reduce(([c, l], val) => val.length > l ? [val[0], val.length] : [c, l], [``, 0]);
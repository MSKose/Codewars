/*
https://www.codewars.com/kata/59c633e7dcc4053512000073/

Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
solve("zodiacs") = 26

For the word "strength", solve("strength") = 57
-- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
*/

// my solution
function solve(s) {
    return Math.max(...(s.split(/[aeiou]/g).map(x => [...x].reduce((k,l) => k + (l.charCodeAt(0) - 96), 0))))
};
/* 
first I split the string s with regex of vowels so as to get consonants
then I mapped into the array and with every element of the array I first
converted them to an array with [...x] and then used reduce function to 
calculate their individual codes with with use of (charCodeAt - 96) since 
character a has a value 97 in ASCII. And finally I took Math.max since 
I am expected to give the highest one
*/


//! alternative-solution
function solve(s) {
    let vowels = ['a','e','i','o','u']
    let max = 0
    let temp = 0
    for (let i of s) {
      if (!vowels.includes(i)) {
        temp += i.charCodeAt() - 96
      }
      if (temp > max) {
        max = temp
      }
      if (vowels.includes(i)) {
        temp = 0
      }
    }
    return max
};
// I love this, it is pure for's and if's


/*
https://www.codewars.com/kata/53697be005f803751e0015aa

Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
*/

// my solution
const VOWELS_ENC = {'a': '1', 'e': '2', 'i': '3', 'o': '4', 'u': '5'};
const encode = (string) => string.replace(/[aeiou]/g, match => VOWELS_ENC[match]);

const VOWELS_DEC = {'1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u'};
const decode = (string) => string.replace(/[12345]/g, match => VOWELS_DEC[match]);

//! alternative-solution
const obj = {a: 1, e: 2, i: 3, o: 4, u: 5};

const encode = string =>
  string.replace(/[aeiou]/g, val => obj[val]);

const decode = string =>
  string.replace(/[1-5]/g, val => Object.keys(obj)[--val]);
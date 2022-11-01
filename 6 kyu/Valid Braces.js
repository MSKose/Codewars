/*
https://www.codewars.com/kata/5277c8a221e209d3f6000b56

Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
*/

// my solution
function validBraces(braces) {
  const startingBraces = ["(", "[", "{"];
  const closingBraces = [")", "]", "}"];
  const bracesObj = { "(": ")", "[": "]", "{": "}" };
  let arr = [];

  for (let i = 0; i < braces.length; i++) {
    if (braces[i] in bracesObj) {
      arr.push(braces[i]);
    } else {
      if (arr.length === 0 && closingBraces.includes(braces[i])) {
        return false;
      } else if (closingBraces.includes(braces[i]) && !arr.includes(startingBraces[closingBraces.indexOf(braces[i])])) {
        return false;
      } else if (bracesObj[arr[arr.length - 1]] === braces[i]) {
        arr.pop();
      }
    }
  }

  return arr.length === 0;
}

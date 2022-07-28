/*
https://www.codewars.com/kata/5208f99aee097e6552000148/

Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

// my solution:
function solution(string) {
  return string.replace(/[A-Z]/g, (x) => ` ${x}`);
}

console.log(solution("jkwbfewjbEkjbsd"));

/* 
had to look back to replace method from w3 for further details.
Learnt that you can use a function for the second part (replaced part)
*/

//! alternative-solution
function solution(string) {
  string = string.split("").map(function (el) {
    if (el === el.toUpperCase()) {
      el = " " + el;
    }
    return el;
  });
  return string.join("");
}

/*
https://www.codewars.com/kata/55f2f64faa2ffb24f6000005


Exponential/scientific notation is used to write very large or small numbers in JavaScript. It uses positive and negative exponents to write multiples and submultiples of 10 and simplifies numbers by getting rid of zeros. If a number greater than 21 digits, in JavaScript, it is displayed in exponential notation and if you try to get the length of it by converting to the string you would get wrong number of length because of the specific way of its display.

Write a function which returns the number of digits in any number with more than 21 digits. If the function is passed a string or a number with 21 or fewer digits it should return "wrong input".

For example: If input number is 9000000000000000000000, then it should return number of digits, in this case 22. If numbers are 222222222 or "5263" which number of digits are less than 21 or "asdf///" which is not a number then it should return string 'wrong input'.
*/

// my solution
const isNumeric = (num) => (typeof(num) === 'number' || typeof(num) === "string" && num.trim() !== '') && !isNaN(num);

function getNumberLength(n) {
  if (!isNumeric(n)) return "wrong input";
  return /[e+]/.test(String(n)) ? +String(n).slice(-2) + 1 : "wrong input";
}
/*
https://www.codewars.com/kata/5467e4d82edf8bbf40000155

Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

// my solution
function descendingOrder(n) {
  return +n.toString().split('').sort((a,b)=> b-a).join('');
}

console.log(descendingOrder(45628929197));
/*
Note: for some reason ~~ (double tilde) did not work as
as expected. I remember reading we should not use double
tilde to convert strings to numbers as it might have weird
outcomes, which was true for my case by the way. So I used +
sign instead to convert string to number. Among other ways like
parseInt() and Number(), one method to this conversion is simply
multiplying your string value with * 1. This works cuz in JS
if you have a number that is typeof string, JS will convert it
to a number that is typeof number
*/
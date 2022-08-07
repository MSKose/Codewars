/*
https://www.codewars.com/kata/54a91a4883a7de5d7800009c/

Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/

// my solution
function incrementString(strng) {
  let x = strng.replace(/[^0-9]/g, ""); //returns the number part only for our string
  let y = strng.replace(/[^a-zA-Z]/gi, ""); //returns the string part only for our string
  let inc = +x + 1;
  return x.length
    ? x[0] == 0
      ? `${y}${("0".repeat(x.length) + inc).slice(-x.length)}`
      : `${y}${inc}`
    : `${strng}1`;
}
// to deal with the leading zeros, if any, I used this method: https://stackoverflow.com/a/29532948

/*
Complete the function that accepts a valid string and returns an integer.

Wait, that would be too easy! Every character of the string should be converted to the hex value of its ascii code, then the result should be the sum of the numbers in the hex strings (ignore letters).

Examples
"Yo" ==> "59 6f" ==> 5 + 9 + 6 = 20
"Hello, World!"  ==> 91
"Forty4Three"    ==> 113
*/

// my solution
function hexHash(code) {
  let str = "";

  for (let i = 0; i < code.length; i++) {
    str += code[i].charCodeAt().toString(16);
  }

  return [...str].reduce((x, y) => x + (Number(y) ? Number(y) : 0), 0);
}
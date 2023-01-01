/*
https://www.codewars.com/kata/52654ea8e218b83553000666

Given a positive (or 0) number, return a string of 1's and 0's representing it's binary value: 
    toBinaryString(6)
should return "110" (no leading 0).

Use of the native method

number.toString(2);

is disallowed.
*/

// my solution
function toBinaryString(number){
    if (!number) {return '0'}
    let result = '';
    
    while (number > 0) {
      result = (number % 2) + result;
      number = ~~(number / 2);
    }
    
    return result;
}
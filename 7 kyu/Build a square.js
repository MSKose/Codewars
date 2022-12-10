/*
https://www.codewars.com/kata/59a96d71dbe3b06c0200009c

I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++
*/

// my solution
function generateShape(integer){
    const plus = '+'.repeat(integer);
    return Array.from({length: integer}, (_, i) => plus).join('\n');
}

//! alternative-solution
function generateShape(n){
    return ("+".repeat(n)+"\n").repeat(n).trim()
}
// this works because "trim()" also removes breaks and tabs and not only whitespaces.
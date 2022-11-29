/*
https://www.codewars.com/kata/57fb142297e0860073000064

Count the number of exclamation marks and question marks, return the product.

Examples
Product("") == 0
product("!") == 0
Product("!ab? ?") == 2
Product("!!") == 0
Product("!??") == 2
Product("!???") == 3
Product("!!!??") == 6
Product("!!!???") == 9
Product("!???!!") == 9
Product("!????!!!?") == 20
*/

// my solution
function product (string) {
    if (!string) return 0;
    const exclamationCount = [...string].reduce((x, y) => x + (y === '!' ? 1 : 0), 0);
    const questionMarkCount = [...string].reduce((x, y) => x + (y === '?' ? 1 : 0), 0);
    return exclamationCount * questionMarkCount;
}

//! alternative-solution
const product = s => (s.match(/!/g)||[]).length * (s.match(/\?/g)||[]).length ;
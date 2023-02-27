/*
https://www.codewars.com/kata/52ac7cad98d1981a840004fc

Your task is to program a function which converts any input to an integer.

Do not perform rounding, the fractional part should simply be discarded.

If converting the input to an integer does not make sense (with an object, for instance), the function should return 0 (zero).

Also, Math.floor(), parseInt() and parseFloat() are disabled for your unconvenience.

Onegaishimasu!
*/

// my solution
const toInteger = n => ~~n;
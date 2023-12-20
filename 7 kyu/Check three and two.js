/*
https://www.codewars.com/kata/5a9e86705ee396d6be000091

Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"
*/

// my solution
function checkThreeAndTwo(array) {
    let obj = {};
    
    for (key of array) {
        obj[key] = obj[key] ? ++obj[key] : 1;
    }
    
    let arr = Object.keys(obj);
    if (arr.length === 2) {
        for (key of arr) {
            if (obj[key] === 3) {
                return true;
            }
        }
    }
    
    return false;
}
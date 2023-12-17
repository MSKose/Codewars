/*
https://www.codewars.com/kata/5ce6728c939bf80029988b57

In this Kata, we will check if a string contains consecutive letters as they appear in the English alphabet and if each letter occurs only once.

Rules are: (1) the letters are adjacent in the English alphabet, and (2) each letter occurs only once.

For example: 
solve("abc") = True, because it contains a,b,c
solve("abd") = False, because a, b, d are not consecutive/adjacent in the alphabet, and c is missing.
solve("dabc") = True, because it contains a, b, c, d
solve("abbc") = False, because b does not occur once.
solve("v") = True
All inputs will be lowercase letters.

More examples in test cases. Good luck!
*/

// my solution
const totalConsecutiveNumSum = (firstNum, lastNum) => 
        (firstNum + lastNum) * (lastNum - firstNum + 1) / 2;

function solve(s) {
    let min = Infinity;
    let max = -Infinity;
    let sum = 0;

    for (let i = 0; i < s.length; i++) {
        let point = s.codePointAt(i);
        min = Math.min(min, point);
        max = Math.max(max, point);
        sum += point;
    }

    return totalConsecutiveNumSum(min, max) === sum;
}
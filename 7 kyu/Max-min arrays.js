/*
https://www.codewars.com/kata/5a090c4e697598d0b9000004

In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

For example:

solve([15,11,10,7,12]) = [15,7,12,10,11]
The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

More examples in the test cases.

Good luck!
*/

// my solution
function solve(arr){
    const newArr = arr.sort((x, y) => x - y);
    let minIndexCounter = 1;
    let maxIndexCounter = newArr.length - 1;
    let res = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (i % 2) {
            res.push(newArr[i - minIndexCounter++]);
        } else {
            res.push(newArr[maxIndexCounter--])  ;
        }
    }
        
    return res;
};
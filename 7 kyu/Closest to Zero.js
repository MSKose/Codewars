/*
https://www.codewars.com/kata/59887207635904314100007b

Simply find the closest value to zero from the list. Notice that there are negatives in the list.

List is always not empty and contains only integers. Return None if it is not possible to define only one of such values. And of course, we are expecting 0 as closest value to zero.

Examples:

[2, 4, -1, -3]  => -1
[5, 2, -2]      => None
[5, 2, 2]       => 2
[13, 0, -6]     => 0
*/

// my solution
function closest(arr){
    const res = [...new Set(arr)];
    let min = Number.MAX_SAFE_INTEGER;
    let repeated = false;
    let closestValue = null;
    
    for (let i = 0; i < res.length; i++) {
        if (Math.abs(res[i]) < min) {
            min = Math.abs(res[i]);
            closestValue = res[i];
            repeated = false;
        } else if (Math.abs(res[i]) == min) {
            repeated = true;
        }
    }
    
    return repeated ? null : closestValue;
}
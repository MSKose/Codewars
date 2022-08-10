/*
https://www.codewars.com/kata/563cf89eb4747c5fb100001b/

The museum of incredible dull things
The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output= [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]
*/

// my solution
function removeSmallest(numbers) {
    if (numbers.length === 0 || numbers.length === 1) return []   // return empty string if length is 0 or 1
    let arr = Math.min(...numbers)                                // find the minimum number
    let x = [...numbers]                                          // have a copy of numbers so as not to mutate the original one
    x.splice(numbers.indexOf(arr), 1)                             // because splice returns the removed element we dont want to return this line
    return x                                                      // finally, return x which is now spliced
}


//! alternative-solution
function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}



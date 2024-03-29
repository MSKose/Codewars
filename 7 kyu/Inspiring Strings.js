/*
https://www.codewars.com/kata/5939ab6eed348a945f0007b2

When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.

Example:

'red white blue' //returns string value of white

'red blue gold' //returns gold
*/

// my solution
function longestWord(stringOfWords){
    const arr = stringOfWords.split(" ");
    let res = "";
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= res.length) {
            res = arr[i];
        }
    }

    return res;
}
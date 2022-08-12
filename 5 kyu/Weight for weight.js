/*
https://www.codewars.com/kata/55c6126177c9441a570000cc/

My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

Example:
"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 

"100 180 90 56 65 74 68 86 99"
When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

180 is before 90 since, having the same "weight" (9), it comes before as a string.

All numbers in the list are positive numbers and the list can be empty.

Notes
it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
For C: The result is freed.
*/

// my solution
function orderWeight(strng) {
    return strng
      .split(' ')
      .sort((a,b) => ([...a].reduce((x,y) => x + ~~y, 0)) === ([...b].reduce((x,y) => x + ~~y, 0)) 
            ? a.localeCompare(b)
            : ([...a].reduce((x,y) => x + ~~y, 0)) < ([...b].reduce((x,y) => x + ~~y ,0)) ? -1 : 1).join(' ')
}
/*
on the part after ? I first wrote a-b thinking sort would just sort by strings that way
but apparrently that's not how it works. So I've found localeCompare() on the internet
which basically compares strings and returns a negative number if reference string occurs 
before compare string; positive if the reference string occurs after compare string; 
0 if they are equivalent.
*/

const orderWeight = (string) => {
    return string
      .split(' ')
      .sort((a,b) => weight(a) - weight(b) || a.localeCompare(b))
      .join(' ')
}
const weight = (string) => string.split('').reduce((acc, el) => acc + +el, 0)
/*
this is basically my solution but with a more cleaner code.
*/
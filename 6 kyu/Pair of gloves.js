/*
https://www.codewars.com/kata/58235a167a8cb37e1a0000db/

Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)
*/

// my solution
function numberOfPairs(gloves){
    let count = 0;
    for (let i = 0; i <new Set(gloves).size; i++){
    count += Math.floor(gloves.filter(x => x == Array.from(new Set(gloves))[i]).length / 2)
    }
    return count
}
/*
so an explanation here, if future me does not understand past this;)
I created a set with Array.from(new Set(gloves)) and in a loop while
I was getting into every single index of the set I filtered the array 
and got its length which has the matching value
*/


//! alternative-solution-1
function numberOfPairs(gloves){
  var arr = Array.from(new Set(gloves));
  return arr.reduce((a,b) => a + Math.floor(gloves.join('').match(new RegExp(b, 'g')).length / 2), 0);
}
/*
this was actually how I wanted to solve it but couldn't figure how to use regex
looks like you have to use nex RegExp(). It is nevertheless clever since it's the 
first time I'm seeing reduce method being used in such a way
*/
/*
https://www.codewars.com/kata/52efefcbcdf57161d4000091/

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

// my solution
function count (string) {  
    let sorted = string.split('').sort();
    let obj = new Object();
    [...new Set(string.split(''))].map(x => obj[x]= +`${(sorted.lastIndexOf(x) - sorted.indexOf(x) +1)}`);
    return obj
}


//! alternative-solution-1
function count (string) {  
    var count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
}
//explanation: if the key s is in the object it will increase the value (++), else if will add it and put the value 1 (count[s] = 1)

//! alternative-solution-2
function count (string) {
    return string.split('').reduce(function(counts,char){
      counts[char] = (counts[char]||0) + 1;
      return counts;
    },{});
}
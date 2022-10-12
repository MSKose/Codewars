/*
https://www.codewars.com/kata/576757b1df89ecf5bd00073b

Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]

And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

// my solution
function towerBuilder(n) {
    let result = []
    
    for(let i = 1; i <= n; i++){
      let ast = '*'.repeat(2*i - 1)
      let just = ' '.repeat(n - i)
      result.push(`${just}${ast}${just}`)
    }

    return result
}

//! alternative-solution-1
function towerBuilder(n) {
    return [...Array(n)].map((_,i)=>" ".repeat(n-1-i)+"*".repeat(i*2+1)+" ".repeat(n-1-i))
}
  

//! alternative-solution-2
function towerBuilder(n) {
    return Array.from({length: n}, function(v, k) {
      const spaces = ' '.repeat(n - k - 1);
      return spaces + '*'.repeat(k + k + 1) + spaces;
    });
}
// see here for explanation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#sequence_generator_range


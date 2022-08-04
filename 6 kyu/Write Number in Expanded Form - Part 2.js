/*
https://www.codewars.com/kata/58cda88814e65627c5000045

Write Number in Expanded Form - Part 2
This is version 2 of my 'Write Number in Exanded Form' Kata.

You will be given a number and you will need to return it as a string in expanded form :

expanded form illustration

For example:

expanded_from(807.304); // Should return "800 + 7 + 3/10 + 4/1000"
expanded_from(1.24); // should return "1 + 2/10 + 4/100"
expanded_from(7.304); // should return "7 + 3/10 + 4/1000"
expanded_from(0.04); // should return "4/100"
*/

// my solution
function expandedForm(num) {
    let x = num.toString().split('.')[0].split('').map((x,y,z) => x*10**(z.length-1-y)).filter(x => x).join(' + ')
    let y = num.toString().split('.')[1].split('').map((x,y,z) => `${x}` + '/' + `${10**(y+1)}`).filter(x => +x[0]).join(' + ')
    return x ? `${x} + ${y}` : y
}

//! alternative-solution 
function expandedForm(num) {
    var [int, dec] = (''+num).split('.')
  
    return int.split('').map((x, y, a) => x + '0'.repeat(a.length - y - 1))
      .concat(dec.split('').map((x, y, a) => `${x}/1${'0'.repeat(y + 1)}`))
      .filter(x => !x.startsWith('0'))
      .join(' + ')
}
// I salute this solution

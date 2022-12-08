/*
https://www.codewars.com/kata/57f75cc397d62fc93d000059

Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
              ^
total2 = 656661
              ^
Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6
*/

// my solution
const sum = (sequence) => [...sequence].reduce((x, y) => x + +y, 0);

function calc(x) {
  let codeTotal = "";

  for (let alpha of x) {
    codeTotal += String(alpha.charCodeAt());
  }

  const se7enToOnes = codeTotal.replace(/7/g, "1");

  return sum(codeTotal) - sum(se7enToOnes);
}

//! alternative-solution
const calc=x=>(x.replace(/./g,x=>x.charCodeAt()).match(/7/g)||[]).length*6
// awesome
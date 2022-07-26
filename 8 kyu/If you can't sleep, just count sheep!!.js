/*
https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/

// my solution
const countSheep = function (num) {
  let text = "";
  if (num === 0) {
    return text;
  } else {
    for (let i = 1; i <= num; i++) {
      text += `${i} sheep...`;
    }
    return text;
  }
};

console.log(countSheep(7));

//! alternative-solution
const countSheep = (num) => {
  let val = "";
  for (let i = 1; i <= num; i++) {
    val += `${i} sheep...`;
  }
  return val;
};

/*
This one is clever cuz it just returns the string without
getting into if-else. In fact, I just realized I too didn't
need any if-else. Could have just gone with the for loop.
*/

/*
https://www.codewars.com/kata/57ed30dde7728215300005fa

Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead
*/

// my solution
function bump(x) {
  if (x.split("").every((x) => x == "_")) {
    // every() method executes a function for each array elements and returns true if the function returns true for all elements.
    return "Woohoo!";
  } else {
    return x.match(/n/g).length <= 15 ? "Woohoo!" : "Car Dead";
  }
}

// my second solution (played with methods)
function bump(x) {
  let y = x.split("").sort();
  return y.join("").substring(y.lastIndexOf("_") + 1).length <= 15
    ? "Woohoo!"
    : "Car Dead"; 
}

//! alternative solution
const bump = (x) => (x.split("n").length > 16 ? "Car Dead" : "Woohoo!");
